import { CustomResource, Reference, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CustomResourceUtilities } from './custom_resources_utilities';
import { ConstructRunTimeTypeInfo } from '../core';
import { NAMESPACE } from '../private/internals';

/**
 * An L3 custom resource based on the CustomResource class.
 *
 * Makes it easier to access CustomResource methods without
 * having to navigate the construct tree.
 */
export abstract class Task extends Construct {
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
    let resource = new CustomResourceUtilities().findCustomResource(this);
    resource.applyRemovalPolicy(policy);
  }

  /** The physical name of this custom resource */
  get ref(): string {
    return this.customResource.ref;
  }

  /**
   * Returns the value of an attribute of the custom resource of an arbitrary
   * type. Attributes are returned from the custom resource provider through the
   * `Data` map where the key is the attribute name.
   *
   * @param attributeName the name of the attribute
   * @returns a token for `Fn::GetAtt`. Use `Token.asXxx` to encode the returned `Reference` as a specific type or
   * use the convenience `getAttString` for string attributes.
   */
  getAtt(attributeName: string): Reference {
    return this.customResource.getAtt(attributeName);
  }

  /**
   * Returns the value of an attribute of the custom resource of type string.
   * Attributes are returned from the custom resource provider through the
   * `Data` map where the key is the attribute name.
   *
   * @param attributeName the name of the attribute
   * @returns a token for `Fn::GetAtt` encoded as a string.
   */
  getAttString(attributeName: string): string {
    return this.customResource.getAttString(attributeName);
  }
}