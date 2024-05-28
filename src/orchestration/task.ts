import { CustomResource, Reference, RemovalPolicy } from 'aws-cdk-lib';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { AwsCustomResourcePolicy } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { ConstructRunTimeTypeInfo } from '../core';
import { CustomResourceUtilities } from '../custom-resources';
import { NAMESPACE } from '../private/internals';

export interface TaskProperties {
  readonly resourceType?: string;
  /**
   * See {@link AwsCustomResourceProps.policy}
   */
  readonly policy?: AwsCustomResourcePolicy;
  /**
   * See {@link AwsCustomResourceProps.role}
   */
  readonly role?: IRole;
  /**
   * Default attribute values to use when the underlying task fails to return expected
   * values.
   */
  readonly defaults?: Record<string, string>;
}

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