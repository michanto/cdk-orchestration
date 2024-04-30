import { Stack } from 'aws-cdk-lib';
import { Construct, IConstruct } from 'constructs';
import { ConstructRunTimeTypeInfo } from './construct_rtti';
import { IConstructFactory } from './construct_service';
import { NAMESPACE } from '../private/internals';

/**
 * Manages singletons in the stack.
 */
export class Singleton {
  /**
   * Creates or returns a singleton object.
   * Throws if the existing object was not created or marked by this class.
   */
  static create(scope: Construct, id: string, factory: IConstructFactory) {
    let stack = Stack.of(scope);
    const existing = stack.node.tryFindChild(id);
    if (existing) {
      if (Singleton.isSingleton(existing)) {
        return existing;
      }
      throw new Error(`Construct ${existing.node.path} is not a singleton.`);
    }
    this.mark(factory(stack, id));
    return stack.node.tryFindChild(id);
  }

  /**
   * True if the construct has been marked as Singleton by this class.
   */
  static isSingleton(x: IConstruct): boolean {
    return Singleton.SINGELTON_RTTI.hasRtti(x);
  }

  /**
   * Marks an existing construct as a singleton.
   * This allows Singletons created outside this class to be used
   * with this class.
   * Throws if the construct is not a direct child of a stack.
   */
  static mark(scope: IConstruct) {
    if (scope.node.scope && Stack.isStack(scope.node.scope)) {
      Singleton.SINGELTON_RTTI.addRtti(scope);
    } else {
      throw new Error(`Construct ${scope.node.path} is not a direct child of a stack.  Not a singleton.`);
    }
  }

  protected static readonly SINGELTON_RTTI = new ConstructRunTimeTypeInfo({
    servicePropertyName: `${NAMESPACE}.Singleton`,
  });

  private constructor() {}
}
