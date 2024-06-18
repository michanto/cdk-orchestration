import { CfnElement, IResolveContext, Resource, Stack } from 'aws-cdk-lib';
import { Construct, IConstruct } from 'constructs';
import { TRANSFORM_HOST_OF, TRANSFORM_HOST_RTTI } from './private/transform_rtti';
import { Transforms } from './transforms';
import { CfnElementUtilities, ConstructService, PostResolveToken } from '../core';

/**
 * Static helpers for Transform Hosts.
 *
 * TransformHosts will be either a Stack, a CfnElement, or a CfnTransformHost.
 */
export class TransformHost {
  /**
   * Returns true for any Stack or CfnElement that is a transform host,
   * as well as for all CfnTransformHost constructs.
   *
   * Note that a Stack or CfnElement may start of as not being a transform
   * host, but can become one later if a transform is applied to it.
   *
   * It does NOT tell you that the object is of type CfnTransformHost.
   */
  static isTransformHost(scope: Construct): boolean {
    return TRANSFORM_HOST_RTTI.hasRtti(scope);
  }

  /**
   * Note: This returns the transform host, which may be either a Stack,
   * a CfnElement, or a CfnTransformHost.
   */
  static of(scope: Construct): IConstruct {
    let found = TRANSFORM_HOST_OF.searchUpOrCreate(scope);
    return ConstructService.serviceOf(found);
  }

  /**
   * Ensures that a Transform is hosted by modifying the ancestor CfnElement or Stack
   * (if necessary) so they can host transforms.
   *
   * Ensures that Tranforms under a CfnElement apply to the CfnElement, and Transforms under
   * a Stack apply to the Stack.
   *
   * Not being able to do this may not be fatal, so we don't throw.
   */
  public static ensureHosted(scope: Construct) {
    // If the scope of the Transform is an L2, hook the L1.
    if (Resource.isResource(scope)
      && scope.node.defaultChild
      && CfnElement.isCfnElement(scope.node.defaultChild)) {
      TransformHost.hook(scope.node.defaultChild);
    }

    // If this was created under an L1, hook the L1.
    let hostElt = new CfnElementUtilities().cfnElementHost(scope);
    if (hostElt) {
      TransformHost.hook(hostElt);
    }
    // Always hook the stack.
    let hostStack = Stack.of(scope);
    if (hostStack) {
      TransformHost.hook(hostStack);
    }
    return TransformHost.of(scope);
  }

  /**
   * Marks a construct as a TransformHost, isolating the transforms under it from the Stack.
   * Host decides when to apply the descendent transforms.
   */
  public static mark(scope: Construct) {
    TRANSFORM_HOST_RTTI.addRtti(scope);
  }


  /**
 * Turns a Stack or CfnElement into a transform host.
 *
 * Called the ensureHosted, which itself is called from
 * the CfnTransform and TransformBase constructors to ensure that the CfnTransform
 * is hosted either by a CfnElement or a Stack.
 */
  static hook(construct: IConstruct) {
    const errorMsg = 'TransformHost.hook can only be used on Construct classes that implement _toCloudFormation.';

    if (!Construct.isConstruct(construct)) {
      throw new Error(errorMsg);
    }

    if (TRANSFORM_HOST_RTTI.hasRtti(construct)) {
      return;
    }

    let protoToCloudFormation = Object.getPrototypeOf(construct)._toCloudFormation;
    if (protoToCloudFormation == undefined) {
      throw new Error(errorMsg);
    }
    TransformHost.mark(construct);

    // PostResolve CfnElement (because CfnResource is always PostResolve)
    if (CfnElement.isCfnElement(construct)) {
      ;(construct as unknown as any)._toCloudFormation = function () {
        return new PostResolveToken(protoToCloudFormation.call(construct), {
          process: (t: any, context: IResolveContext) => {
            // Only apply during _toCloudFormation.
            if (context.preparing) {
              return t;
            }
            return Transforms.of(construct).apply(t);
          },
        });
      };
    } else if (Stack.isStack(construct)) {
      ;(construct as unknown as any)._toCloudFormation = function () {
        return construct.resolve(Transforms.of(construct).apply(protoToCloudFormation.call(construct)));
      };
    } else {
      throw new Error('Can only use hook on a CfnElement or Stack.  Use CfnTransformHost instead.');
    }
  }
}
