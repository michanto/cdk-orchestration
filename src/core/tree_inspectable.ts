import { IInspectable, TreeInspector } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
import { ConstructService } from './construct_service';
import { NAMESPACE } from '../private/internals';

/**
 * Makes any construct IInspectable so it can add metadata to the
 * tree.json file without creating new constructs.
 */
export class TreeInspectable extends TreeInspector implements IInspectable {
  static readonly TREE_INSPECTABLE_SERVICE = new ConstructService({
    servicePropertyName: `${NAMESPACE}.TreeInspectable`,
    factory: (s) => new TreeInspectable(s),
  });

  /** True if a construct supports IInspectable interface. */
  static isInspectable(inspectable: any): inspectable is IInspectable {
    return inspectable.inspect !== undefined && typeof inspectable.inspect == 'function';
  }

  /**
   * Returns or creates a TreeInspectable for the given construct.
   */
  static of(scope: IConstruct) {
    return TreeInspectable.TREE_INSPECTABLE_SERVICE
      .searchSelfOrCreate(scope)?.service as TreeInspectable;
  }

  private constructor(readonly scope: IConstruct) {
    super();
    this.hook(scope);
  }

  /**
   * Proxies or creates the inspect method on a construct.
   */
  private hook(scope: IConstruct) {
    if (TreeInspectable.TREE_INSPECTABLE_SERVICE.has(scope)) {
      throw new Error(`Should not be able to get here.  ${scope.node.path} is already inspectable.`);
    }
    let protoInspect = (scope as any).inspect;
    if (protoInspect == undefined) {
      (scope as any).inspect = (x: TreeInspector) => this.inspect(x);
    } else {
      (scope as any).inspect = (x: TreeInspector) => {
        protoInspect(x);
        this.inspect(x);
      };
    }
    TreeInspectable.TREE_INSPECTABLE_SERVICE.set(scope, this);
  }

  /**
   * Called by the CDK to write attribute to tree.json file.
   */
  inspect(inspector: TreeInspector): void {
    for (let k in this.attributes) {
      inspector.addAttribute(k, this.attributes[k]);
    }
  }
}