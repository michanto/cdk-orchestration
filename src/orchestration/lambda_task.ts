import { IVpc, SubnetSelection } from 'aws-cdk-lib/aws-ec2';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { CustomResource, Duration } from 'aws-cdk-lib/core';
import { md5hash } from 'aws-cdk-lib/core/lib/helpers-internal';
import {
  AwsCustomResourcePolicy,
  AwsCustomResourceProps,
  AwsSdkCall,
  PhysicalResourceId,
} from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { Task, TaskProperties } from './task';
import { LambdaCustomResource, LambdaCustomResourceProps } from '../custom-resources/lambda_custom_resource';

/**
 * Properties for LambdaTask.
 *
 * Basically these are used to create AwsCustomResource input for the LambdaCustomResource.
 * They work very similar to how AwsCustomResource and AwsSdkCall work.
 */
export interface LambdaTaskProps extends TaskProperties {
  /**
   * The lambda function to invoke.
   */
  readonly lambdaFunction: IFunction;
  /**
   * The payload to send to the lambda.
   */
  readonly payload: string;
  /**
   * See {@link AwsCustomResourceProps.timeout}
   */
  readonly timeout?: Duration;
  /**
   * See {@link AwsCustomResourceProps.logRetention}
   */
  readonly logRetention?: RetentionDays;
  /**
   * See {@link AwsCustomResourceProps.vpc}
   */
  readonly vpc?: IVpc;
  /**
   * See {@link AwsCustomResourceProps.vpcSubnets}
   */
  readonly vpcSubnets?: SubnetSelection;
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
   * Whether to run the task every time the stack is updated.
   * Default is true.
   */
  readonly runAlways?: boolean;
}

/**
 * Easily turn any lambda into a custom resource, similar to how
 * AwsCustomResource works, but with a slighly altered runtime.
 *
 * See {@link LambdaTaskProps} for details.
 */
export class LambdaTask extends Task {
  readonly customResource: CustomResource;
  readonly lambdaFunction: IFunction;
  readonly lambdaCustomResource: LambdaCustomResource;

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

    this.lambdaCustomResource = new LambdaCustomResource(this, 'Resource', {
      ...(props as LambdaCustomResourceProps),
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
    this.customResource = this.lambdaCustomResource.customResource;
  }
}
