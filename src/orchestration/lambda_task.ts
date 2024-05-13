import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as cdk from 'aws-cdk-lib/core';
import { md5hash } from 'aws-cdk-lib/core/lib/helpers-internal';
import {
  AwsCustomResourcePolicy,
  AwsCustomResourceProps,
  AwsSdkCall,
  PhysicalResourceId,
} from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { RunResourceAlways } from '../custom-resources';
import { LambdaCustomResource } from '../custom-resources/lambda_custom_resource';
// import { CustomRe } from "../core";

/**
 * Properties for LambdaTask.
 *
 * Basically these are used to create AwsCustomResource input for the LambdaCustomResource.
 * They work very similar to how AwsCustomResource and AwsSdkCall work.
 */
export interface LambdaTaskProps {
  /**
   * The lambda function to invoke.
   */
  readonly lambdaFunction: IFunction;
  /**
   * The payload to send to the lambda.
   */
  readonly payload: string;
  /**
   * Whether to run the lambda every time the stack is updated.
   */
  readonly runAlways?: boolean;

  /**
   * See {@link AwsCustomResourceProps.resourceType}
   */
  readonly resourceType?: string;
  /**
   * See {@link AwsCustomResourceProps.policy}
   */
  readonly policy?: AwsCustomResourcePolicy;
  /**
   * See {@link AwsCustomResourceProps.role}
   */
  readonly role?: iam.IRole;
  /**
   * See {@link AwsCustomResourceProps.timeout}
   */
  readonly timeout?: cdk.Duration;
  /**
   * See {@link AwsCustomResourceProps.logRetention}
   */
  readonly logRetention?: logs.RetentionDays;
  /**
   * See {@link AwsCustomResourceProps.vpc}
   */
  readonly vpc?: ec2.IVpc;
  /**
   * See {@link AwsCustomResourceProps.vpcSubnets}
   */
  readonly vpcSubnets?: ec2.SubnetSelection;
  /**
   * See {@link AwsCustomResourceProps.functionName}
   */
  readonly functionName?: string;
  /**
   * See {@link AwsSdkCall.physicalResourceId}
   */
  readonly physicalResourceId?: PhysicalResourceId;
  /**
   * See {@link AwsSdkCall.outputPaths}
   */
  readonly outputPaths?: string[];
  /**
   * Default attributes values for the resource.
   * If the resource/Lambda does not provide these values,
   * the defaults will be used.
   */
  readonly defaults?: Record<string, string>;
}

/**
 * Easily turn any lambda into a custom resource, similar to how
 * AwsCustomResource works, but with a slighly altered runtime.
 *
 * See {@link LambdaTaskProps} for details.
 */
export class LambdaTask extends Construct {
  readonly lambdaFunction: IFunction;

  constructor(scope: Construct, id: string, props: LambdaTaskProps) {
    super(scope, id);
    let lambdaCall: AwsSdkCall = {
      service: 'Lambda',
      action: 'invoke',
      parameters: {
        FunctionName: props.lambdaFunction.functionName,
        Payload: props.payload,
      },
      physicalResourceId: props.physicalResourceId ?? PhysicalResourceId.of(`Invoke${props.lambdaFunction.functionName}-${md5hash(
        JSON.stringify(props.payload))}`),
      outputPaths: props.outputPaths,
    };
    this.lambdaFunction = props.lambdaFunction;

    let resource = new LambdaCustomResource(this, 'Resource', {
      ...(props as AwsCustomResourceProps),
      policy: props.policy ?? (props.role ? undefined : (AwsCustomResourcePolicy.fromSdkCalls({
        resources: AwsCustomResourcePolicy.ANY_RESOURCE,
      }))),
      installLatestAwsSdk: true,
      onCreate: lambdaCall,
      onUpdate: lambdaCall,
      resourceType: props.resourceType ?? 'Custom::LambdaTask',
      responseBufferField: 'Payload',
      defaults: props.defaults,
      timeout: props.timeout,
    });
    // Run every time.
    if (props.runAlways) {
      new RunResourceAlways(resource);
    }
  }

  getAtt(name: string) {
    let resource = this.node.tryFindChild('Resource') as LambdaCustomResource;
    return resource.getAtt(name);
  }

  getResponseField(name: string) {
    let resource = this.node.tryFindChild('Resource') as LambdaCustomResource;
    return resource.getResponseField(name);
  }
}
