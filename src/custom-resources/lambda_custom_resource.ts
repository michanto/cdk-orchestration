import { CfnResource, CustomResource, Duration, Fn, Lazy, Reference } from 'aws-cdk-lib';
import { Effect, IRole, ManagedPolicy, PolicyDocument, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Code, IFunction, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { AwsCustomResourceProps, AwsCustomResource, AwsSdkCall, Provider } from 'aws-cdk-lib/custom-resources';
import { Construct, IConstruct } from 'constructs';
import { EncodeResource, RunResourceAlways } from '.';
import { Singleton } from '../core';

/**
 * Props for LambdaCustomResourceResources
 */
export interface LambdaCustomResourceResourcesProps {
  readonly purpose: string;
  readonly timeout?: Duration;
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
    this.role = this.createRole(props);

    this.onEvent = this.createOnEventFunction(props);

    this.provider = new Provider(this, `${purpose}Provider`, {
      onEventHandler: this.onEvent,
    });
  }

  createRole(props: LambdaCustomResourceResourcesProps) {
    return new Role(this, `${props.purpose}Role`, {
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
      inlinePolicies: {
        CFRPolicy: new PolicyDocument({
          statements: [new PolicyStatement({
            actions: ['lambda:Invoke*'],
            effect: Effect.ALLOW,
            resources: ['*'],
          })],
        }),
      },
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
      timeout: props.timeout ?? Duration.minutes(1),
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
   * Default attribute values to use when the underlying API fails to return expected
   * values.
   */
  readonly defaults?: Record<string, string>;
  /**
   * Whether to run the lambda every time the stack is updated.
   */
  readonly runAlways?: boolean;
}

/**
 * This is a drop-in replacement for AwsCustomResource (not yet fully featured).
 * Provides it's own runtime similar to that of AwsCustomResource, but deserializes
 * the Lambda return value when the responseBufferField property is set to Payload.
 * For S3 GetObject, responseBufferField should be set to Body).
 * - Supports flattening of lambda return values (see {@link AwsCustomResource.getResponseField}).
 * - Supports filtering (see {@link AwsSdkCall.outputPaths).
 * - Support deserlializing via LambdaCustomResourceProps.responseBufferField.
 * - Supports default values for response fields as LambdaCustomResourceProps.defaults.
 */
export class LambdaCustomResource extends Construct {
  readonly resources: LambdaCustomResourceResources;
  readonly resource: CustomResource;
  readonly requestedOutputs: string[] = [];


  constructor(scope: Construct, id: string, props: LambdaCustomResourceProps) {
    super(scope, id);
    let purpose = props.resourceType?.replace('Custom::', '') ?? 'LambdaCustomResource';

    this.resources = this.createResources({
      purpose: purpose,
      timeout: props.timeout,
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
    crProps.RequestedOutputs = Lazy.list({ produce: () => this.requestedOutputs });
    let theThis = this

    this.resource = new class InnerCustomResource extends CustomResource{
      getAtt(attributeName: string): Reference {
        theThis.requestedOutputs.push(attributeName);
        return super.getAtt(attributeName);
      }
      getAttString(attributeName: string): string {
        theThis.requestedOutputs.push(attributeName);
        return super.getAttString(attributeName);        
      }
    }(this, 'Resource', {
      serviceToken: this.resources.provider.serviceToken,
      resourceType: `Custom::${purpose}`,
      properties: crProps,
    });

    if (props.runAlways == undefined || props.runAlways) {
      new RunResourceAlways(this);
    }

    new EncodeResource(this.resource);
  }

  protected get cfnResource() {
    return this.resource.node.tryFindChild('Default') as CfnResource;
  }

  protected createResources(props: LambdaCustomResourceResourcesProps): LambdaCustomResourceResources {
    return Singleton.create(this, `${props.purpose}::Resources`,
      (scope: IConstruct, id: string) => {
        return new LambdaCustomResourceResources(scope, id, props);
      },
    ) as LambdaCustomResourceResources;
  }

  /**
   * Returns a flattened JSON key from the resource response.
   * @param attributeName
   * @returns An IResolvable for the resource attribute.
   */
  getAtt(attributeName: string) {
    this.requestedOutputs.push(attributeName);
    return Fn.getAtt(this.cfnResource.logicalId, attributeName);
  }

  getAttString(attributeName: string) {
    return this.getResponseField(attributeName);
  }

  /**
   * Returns a flattened JSON key from the resource response.
   * @param dataPath
   * @returns
   */
  getResponseField(dataPath: string): string {
    return this.getAtt(dataPath).toString();
  }
}
