import { CustomResource, Reference, RemovalPolicy } from 'aws-cdk-lib';
import { ITrigger } from 'aws-cdk-lib/triggers';
import { Construct } from 'constructs';
import { ConstructRunTimeTypeInfo } from '../core';
import { NAMESPACE } from '../private/internals';

/**
 * Task interface.  Allows easy access to both CustomResource and ITrigger
 * functionality.
 *
 * Tasks are like triggers, but they expose the return value as attributes that
 * can be used to create other resources.
 */
export interface ITask extends ITrigger {
  /**
   * Sets the deletion policy of the resource based on the removal policy specified.
   * @param policy
   */
  applyRemovalPolicy(policy: RemovalPolicy): void;

  /** The physical name of this custom resource */
  get ref(): string;

  /**
   * Returns the value of an attribute of the custom resource of an arbitrary
   * type. Attributes are returned from the custom resource provider through the
   * `Data` map where the key is the attribute name.
   *
   * @param attributeName the name of the attribute
   * @returns a token for `Fn::GetAtt`. Use `Token.asXxx` to encode the returned `Reference` as a specific type or
   * use the convenience `getAttString` for string attributes.
   */
  getAtt(attributeName: string): Reference;

  /**
   * Returns the value of an attribute of the custom resource of type string.
   * Attributes are returned from the custom resource provider through the
   * `Data` map where the key is the attribute name.
   *
   * @param attributeName the name of the attribute
   * @returns a token for `Fn::GetAtt` encoded as a string.
   */
  getAttString(attributeName: string): string;
}

/**
 * An L3 custom resource based on the CustomResource class.
 *
 * Makes it easier to access CustomResource methods without
 * having to navigate the construct tree.
 */
export abstract class Task extends Construct implements ITask {
  static isTask(x: Construct): x is Task {
    return Task.TASK_RTTI.hasRtti(x);
  }

  protected static readonly TASK_RTTI = new ConstructRunTimeTypeInfo({
    servicePropertyName: `${NAMESPACE}.Task`,
  });

  readonly abstract customResource: CustomResource;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    Task.TASK_RTTI.addRtti(this);
  }

  applyRemovalPolicy(policy: RemovalPolicy): void {
    this.customResource.applyRemovalPolicy(policy);
  }

  get ref(): string {
    return this.customResource.ref;
  }

  getAtt(attributeName: string): Reference {
    return this.customResource.getAtt(attributeName);
  }

  getAttString(attributeName: string): string {
    return this.customResource.getAttString(attributeName);
  }

  /**
   * Adds task dependencies. Execute this task only after these construct
   * scopes have been provisioned.
   *
   * @param scopes A list of construct scopes which this task will depend on.
   */
  public executeAfter(...scopes: Construct[]): void {
    this.node.addDependency(...scopes);
  }

  /**
   * Adds task trigger as a dependency on other constructs. This means that this
   * task will get executed *before* the given construct(s).
   *
   * @param scopes A list of construct scopes which will take a dependency on
   * this task.
   */
  public executeBefore(...scopes: Construct[]): void {
    for (const s of scopes) {
      s.node.addDependency(this);
    }
  }
}
