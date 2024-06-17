import { CfnResource, CustomResource, Duration, Lazy } from 'aws-cdk-lib';
import { IVpc, SubnetSelection } from 'aws-cdk-lib/aws-ec2';
import { IRole, ManagedPolicy, Policy, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Code, IFunction, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { AwsCustomResourceProps, AwsCustomResource, AwsSdkCall, Provider } from 'aws-cdk-lib/custom-resources';
import { Construct, IConstruct } from 'constructs';
import { CustomResourceUtilities } from './custom_resources_utilities';
import { EncodeResource } from './encode_resource';
import { awsSdkToIamAction } from './handlers/private/from_cdk/aws-custom-resource-sdk-adapter/cdk-sdk-info';
import { InnerCustomResource } from './private/inner_custom_resource';
import { RunResourceAlways } from './run_resource_always';
import { Task } from './task';
import { Singleton } from '../core';

/**
 * Props for LambdaCustomResourceResources
 */
export interface LambdaCustomResourceResourcesProps {
  readonly purpose: string;
  readonly timeout?: Duration;
  readonly role?: IRole;
  readonly vpc?: IVpc;
  readonly vpcSubnets?: SubnetSelection;
  readonly functionName?: string;
  readonly logRetention?: RetentionDays;
}

/**
 * Support resources for LambdaCustomResource.
 */
export class LambdaCustomResourceResources extends Construct {
  readonly role: IRole;
  readonly onEvent: IFunction;
  readonly provider: Provider;

  constructor(scope: Construct, id: string, props: LambdaCustomResourceResourcesProps) {
    super(scope, id);
    let purpose = props.purpose;
    this.role = props.role ?? this.createRole(props);

    this.onEvent = this.createOnEventFunction(props);

    this.provider = new Provider(this, `${purpose}Provider`, {
      onEventHandler: this.onEvent,
    });
  }

  createRole(props: LambdaCustomResourceResourcesProps) {
    return new Role(this, `${props.purpose}Role`, {
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [ManagedPolicy.fromAwsManagedPolicyName(
        'service-role/AWSLambdaBasicExecutionRole'), ManagedPolicy.fromAwsManagedPolicyName(
        'service-role/AWSLambdaRole')],
    });
  }

  createOnEventFunction(props: LambdaCustomResourceResourcesProps) {
    return new Function(this, `${props.purpose}OnEvent`, {
      code: Code.fromAsset(`${__dirname}../../../lib/custom-resources/handlers`),
      handler: 'index.handler',
      role: this.role,
      runtime: Runtime.NODEJS_20_X,
      timeout: props.timeout ?? Duration.minutes(2),
      vpc: props.vpc,
      vpcSubnets: props.vpcSubnets,
      functionName: props.functionName,
      logRetention: props.logRetention,
    });
  }
}

/**
 * Properties for LambdaCustomResource.
 */
export interface LambdaCustomResourceProps extends AwsCustomResourceProps {
  /**
   * Specifies a field in the API response that should be deserlized, such as
   * Payload when calling lambda:Invoke, or Body when calling s3:GetObject.
   */
  readonly responseBufferField?: string;
  /**
   * Whether to run the task every time the stack is updated.
   * Default is true.
   */
  readonly runAlways?: boolean;
  /**
   * Default attribute values to use when the underlying task fails to return expected
   * values.
   */
  readonly defaults?: Record<string, string>;

  /**
   * If the AwsApiCall returns an NextToken,
   * this will attempt to auto-paginate and get subsequent
   * pages until there are none left.
   *
   * This is a dangerous flag to set if there are a lot of pages,
   * and may cause the lambda to time out and the resource to fail.
   * Be careful.
   *
   * Default is false.
   */
  readonly autoPaginate?: boolean;
}

/**
 * This is a drop-in replacement for AwsCustomResource.
 * Provides it's own runtime similar to that of AwsCustomResource, but deserializes
 * the Lambda return value when the responseBufferField property is set to Payload.
 * For S3 GetObject, responseBufferField should be set to Body).
 * - Supports flattening of lambda return values (see {@link AwsCustomResource.getResponseField}).
 * - Supports filtering (see {@link AwsSdkCall.outputPaths).
 * - Support deserlializing via LambdaCustomResourceProps.responseBufferField.
 * - Supports default values for response fields as LambdaCustomResourceProps.defaults.
 * - Does not support installLatestAwsSdk parameter (future).
 */
export class LambdaCustomResource extends Task {
  readonly resources: LambdaCustomResourceResources;
  readonly customResource: CustomResource;
  readonly resource: CfnResource;

  constructor(scope: Construct, id: string, readonly props: LambdaCustomResourceProps) {
    super(scope, id);

    if (!props.onCreate && !props.onUpdate && !props.onDelete) {
      throw new Error('At least `onCreate`, `onUpdate` or `onDelete` must be specified.');
    }

    if (!props.role && !props.policy) {
      throw new Error('At least one of `policy` or `role` (or both) must be specified.');
    }

    if (props.onCreate && !props.onCreate.physicalResourceId) {
      throw new Error("'physicalResourceId' must be specified for 'onCreate' call.");
    }

    if (!props.onCreate && props.onUpdate && !props.onUpdate.physicalResourceId) {
      throw new Error("'physicalResourceId' must be specified for 'onUpdate' call when 'onCreate' is omitted.");
    }

    let purpose = props.resourceType?.replace('Custom::', '') ?? 'LambdaCustomResource';

    this.resources = this.createResources({
      purpose: 'CDKORCHCUSTOMRESOURCE',
      timeout: props.timeout,
      role: props.role,
      vpc: props.vpc,
      vpcSubnets: props.vpcSubnets,
      functionName: props.functionName,
      logRetention: props.logRetention,
    });

    const create = props.onCreate || props.onUpdate;
    let crProps: any = {
      Create: create,
      Update: props.onUpdate,
      Delete: props.onDelete,
    };

    if (props.responseBufferField) {
      crProps.ResponseBufferField = props.responseBufferField;
    }

    if (props.defaults) {
      crProps.Defaults = props.defaults;
    }
    crProps.RequestedOutputs = Lazy.list({
      produce: () => (this.customResource as InnerCustomResource).requestedOutputs,
    });

    if (props.autoPaginate) {
      crProps.AutoPaginate = true;
    }

    this.customResource = new InnerCustomResource(this, 'Resource', {
      serviceToken: this.resources.provider.serviceToken,
      resourceType: `Custom::${purpose}`,
      properties: crProps,
    });
    this.resource = new CustomResourceUtilities().findCustomResource(this);

    if (props.runAlways == undefined || props.runAlways) {
      new RunResourceAlways(this);
    }
    this.createPolicy(props);

    if (props.removalPolicy) {
      this.applyRemovalPolicy(props.removalPolicy);
    }

    new EncodeResource(this.customResource);
  }

  protected createResources(props: LambdaCustomResourceResourcesProps): LambdaCustomResourceResources {
    return Singleton.create(this, `${props.purpose}::Resources`,
      (scope: IConstruct, id: string) => {
        return new LambdaCustomResourceResources(scope, id, props);
      },
    ) as LambdaCustomResourceResources;
  }

  protected createPolicy(props: LambdaCustomResourceProps) {
    // Create the policy statements for the custom resource function role, or use the user-provided ones
    if (props.policy) {
      const statements = [];
      if (props.policy.statements.length !== 0) {
        // Use custom statements provided by the user
        for (const statement of props.policy.statements) {
          statements.push(statement);
        }
      } else {
        // Derive statements from AWS SDK calls
        for (const call of [props.onCreate, props.onUpdate, props.onDelete]) {
          if (call && call.assumedRoleArn == null) {
            const statement = new PolicyStatement({
              actions: [awsSdkToIamAction(call.service, call.action)],
              resources: props.policy.resources,
            });
            statements.push(statement);
          } else if (call && call.assumedRoleArn != null) {
            const statement = new PolicyStatement({
              actions: ['sts:AssumeRole'],
              resources: [call.assumedRoleArn],
            });
            statements.push(statement);
          }
        }
      }
      const policy = new Policy(this, 'CustomResourcePolicy', {
        statements: statements,
      });
      if (this.resources.role !== undefined) {
        policy.attachToRole(this.resources.role);
      }

      // If the policy was deleted first, then the function might lose permissions to delete the custom resource
      // This is here so that the policy doesn't get removed before onDelete is called
      this.customResource.node.addDependency(policy);
    }
  }

  /**
   * Returns a flattened JSON key from the resource response.
   * @param dataPath
   * @returns
   */
  getResponseField(dataPath: string) {
    return this.getAtt(dataPath).toString();
  }

  /** Returns response data for the AWS SDK call. */
  getResponseFieldReference(dataPath: string) {
    return this.getAtt(dataPath);
  }
}
