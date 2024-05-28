import { CfnResource, CustomResource, Reference, RemovalPolicy } from 'aws-cdk-lib';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { AwsCustomResourcePolicy } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { CustomResourceUtilities } from '../custom-resources';

export interface TaskProperties {
  readonly resourceType?: string;
  /**
   * Whether to run the task every time the stack is updated.
   * Default is true.
   */
  readonly runAlways?: boolean;
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
  readonly abstract customResource: CustomResource;
  readonly abstract resource: CfnResource;

  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  applyRemovalPolicy(policy: RemovalPolicy): void {
    let resource = new CustomResourceUtilities().findCustomResource(this);
    resource.applyRemovalPolicy(policy);
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
}