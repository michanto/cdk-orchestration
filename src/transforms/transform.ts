import { CfnElement, IInspectable, Resource, TreeInspector } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnTransform } from './cfn_transform';
import { ICfnTransform } from './icfn_transform';
import { ImportOrders } from './import_orders';
import { TransformHost } from './transform_host';

/**
 * TransformBase is the base class for L2 transforms.
 *
 * L2 transforms exist to make it possible to apply Transforms directly to L2 and L3 constructs,
 * without having to navigate to the underlying L1 construct.
 *
 * TransformBase creates an L1 shim CfnTransform that calls the _apply function of the
 * L2 TransformBase that created it.
 *
 * TransformBase.shimParent determines where to put the L1 shim in the construct tree.
 * There are four possibilites:
 *
 * 1. The parent of the Transform is a Resource.  In this case, the shim is created as a child
 * of the Resources L1 construct (resource.node.defaultChild).
 * 2. The host is an ordered host, in which case Transform will attempt to parent the shim under
 * one of the hosts children, as determined by TransformBase.order.  If the order does not exist,
 * the shim transform is created normally (as a child of TransformBase).
 * 3. Neither of the above are true, in which case the shim transform is created as a child
 * of TransformBase.
 * 4. shimParent has been overridden to support a specific use-case.
 *
 * The TransformBase._apply method should call a concretely typed "apply" method on the subclass.
 * See {@link StringTransform} or {@link Transform} for examples.
 *
 * Ordering transforms is necessary when serializing and deserializing CloudFormation (CfnInclude scenarios),
 * which moves CloudFormation between different representations.  TemplateImporter handles
 * CloudFormation as a filename, then as a string, a POJO, back to a string, and
 * back to file name for use with CfnInclude.
 */
export abstract class TransformBase extends Construct implements IInspectable {
  /**
   * This function figures out which node in the tree should parent the shim (CfnTransform).
   *
   * Normally, the shim should be a child of this construct (TransformBase).  However,
   * if the parent of this construct is an L2 resource, then the shim should be a child
   * of the related L1 resource (this.node.scope.node.defaultChild).  That way adding a
   * TransformBase to an L2 resource acts the same as adding the equivalent
   * CfnTransform to an L1 resource, which is convinient.
   *
   * Otherwise, we want the shim to be under the child of the transform host specified by
   * TransformBase.order.  Thus, if TransformBase.order is '_Transforms', and a child named
   * '_Transforms' exists under the transform host, then the '_Transforms' construct will be
   * the shim parent.
   */
  protected static findShimParent(base: TransformBase): Construct {
    // If the parent of this is an L2 resource, return the L1 resource.
    if (base.node.scope
      && Resource.isResource(base.node.scope)
      && base.node.scope.node.defaultChild
      && CfnElement.isCfnElement(base.node.scope.node.defaultChild)) {

      let l1Construct = base.node.scope.node.defaultChild;
      // Allow the L1 construct to use orders.
      let orderSubTree = l1Construct.node.tryFindChild(base.order);
      return orderSubTree ? orderSubTree : l1Construct;
    }

    let host = TransformHost.of(base);
    if (host) {
      // See if the host has a child named `this.order`.
      let desiredPath = host.node.path + `/${base.order}`;
      if (base.node.path.startsWith(desiredPath)) {
        // We're already in the order.  Return this.
        return base;
      } else {
        // If the order exists, that is the parent.
        let orderSubTree = host.node.tryFindChild(base.order);
        if (orderSubTree) {
          return orderSubTree;
        }
      }
    }
    // Default parent is always this.
    return base;
  }

  /** The L1 Shim transform attached to an L2 TransformBase. */
  private static CfnTransformShim = class CfnTransformShim extends CfnTransform implements IInspectable {
    constructor(scope: Construct, id: string, readonly wrapper: TransformBase) {
      super(scope, id);
    }

    inspect(inspector: TreeInspector) {
      inspector.addAttribute('CfnTransformShim.transformPath', this.wrapper.node.path);
    }

    apply(template: any): any {
      template = this.wrapper._apply(template);
      return template;
    }
  };

  /** The L1 shim transform  for this L2 transform. */
  readonly cfnTransform: ICfnTransform;

  /** The order of this L2 transform. */
  get order(): string {
    return ImportOrders.TRANSFORMS;
  }

  protected constructor(scope: Construct, id: string) {
    super(scope, id);
    // This will make any antecedent CfnElement or Stack a TransformHost.
    TransformHost.ensureHosted(scope);
    let parent = this.shimParent;
    // Id for the transform shim
    let shimId = `${id}Shim${parent.node.children.length}`;
    this.cfnTransform = new TransformBase.CfnTransformShim(parent, shimId, this);
  }

  inspect(inspector: TreeInspector) {
    inspector.addAttribute('TransformBase.cfnTransformPath', this.cfnTransform.node.path);
  }

  /**
   * Returns the parent for the CfnTransformShim (L1 transform) that will
   * be created by this TransformBase (L2 transform).
   *
   * Override this method to parent the CfnTransform to a specific CfnResource
   * if that is desired.  The default behavior is to return the L1 construct (or
   * the order under the L1 construct) if the transform is added to an L2 construct.
   * Otherwise, return either an order under the transform host of this
   * (to support ordered hosts), or the TransformBase (this).
   *
   * - Note to implementors:
   *    Since shimParent is called from the TransformShim constructor, it
   *    will not have access to any properties of subclasses.  See
   *    PropertyTransform for a work-around.
   */
  get shimParent() {
    return TransformBase.findShimParent(this);
  }

  /**
   * @internal
   */
  protected abstract _apply(template: any): any;
}

/** This is what Template.fromStack().toJSON() returns */
export type CfTemplateType = {
  [key: string]: any;
}

/**
 * Base class for ordinary Transforms that act on CloudFormation and other forms of JSON.
 *
 * Most Transforms will use this as their base class.
 */
export abstract class Transform extends TransformBase {

  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  /**
   * Modifies the passed in template.
   * @param template Always return the template.
   */
  public abstract apply(template: CfTemplateType): CfTemplateType;

  /**
   * @internal
   */
  protected _apply(template: any) {
    return this.apply(template);
  }
}