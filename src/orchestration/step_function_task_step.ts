import { CustomResource, Duration, Lazy, RemovalPolicy } from 'aws-cdk-lib';
import { Effect, IRole, ManagedPolicy, PolicyDocument, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { IStateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { InlineNodejsFunction } from '../aws-lambda-nodejs';
import { Singleton } from '../core';
import { EncodeResource, RunResourceAlways } from '../custom-resources';
import { InnerCustomResource } from '../custom-resources/private/inner_custom_resource';
import { Task } from '../custom-resources/task';

/**
 * This class should not be public and should only be used by StepFunctionTask.
 */
export interface StepFunctionTaskStepProps {
  /**
   * The state machine to execute.
   */
  readonly stateMachine?: IStateMachine;
  /**
   * If we are just waiting for an already-existing execution, what
   * is the ARN of that execution?
   */
  readonly executionArn?: string;
  /**
   * The event to start the state machine with.
   * Should only be provided with stateMachine, not with executionArn.
   */
  readonly inputEvent?: any;
  /**
   * Prefix for the execution name.  Name will be `${prefix}_${guid}`.
   * If undefined then StepFunctions defines the execution name as a guid.
   */
  readonly prefix?: string;
  /**
   * Succeeds the resource if the StepFunction has been running for at least
   * this may milliseconds.
   */
  readonly succeedAfterMs?: number;

  /**
   * Suffix for the physical resource ID.  Required when using exeuctionArn.
   */
  readonly suffix?: string;

  /**
   * Role for execution and monitoring.  Must have permission to execute and describe the state machine,
   * as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```.
   *
   * If not provided, a role will be created.
   */
  readonly role?: IRole;
  /**
   * Default attribute values to use when the StepFunction output does not contain a requested value.
   */
  readonly defaults?: {[name: string]: string};
}

const LAMBDA_PATH = `${__dirname}/../../lib/orchestration/handlers`;

export class StepFunctionTaskStepConstants {
  /**
   * Only used by StepFunctionTask.
   * The execution will run for at most one hour, and query every 30 seconds.
   */
  static readonly QUERY_INTERVAL = Duration.seconds(30);
  /**
   * Only used by StepFunctionTask.
   * Timeout for a single step is 1 hour.
   */
  static readonly TOTAL_TIMEOUT = Duration.hours(1);
  /**
   * Only used by StepFunctionTask.
   * This is how long the resource should monitor the step function.
   * So it ends up being 59 minutes, after which the resource will
   * succeed and presumably hand off to the next StepFunctionTaskStep, which
   * will continue monitoring the step function.
   */
  static readonly SUCCEED_AFTER_MS = Duration.millis(
    StepFunctionTaskStepConstants.TOTAL_TIMEOUT.toMilliseconds()
     - (2*StepFunctionTaskStepConstants.QUERY_INTERVAL.toMilliseconds()));

}

/**
 * Properties for StepFunctionTaskStepResources
 */
export interface StepFunctionTaskStepResourcesProps {
  /**
   * Role for execution and monitoring.  Must have permission to execute and describe the state machine,
   * as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```.
   *
   * If not provided, a role will be created.
   */
  readonly role?: IRole;
}

/**
 * Internal resources for StepFunctionTaskStep.  Created as a Singleton.
 */
export class StepFunctionTaskStepResources extends Construct {
  /** Resource type will be Custom::StepFunctionTaskStep. */
  static readonly PURPOSE = 'StepFunctionTaskStep';
  /** The shared role */
  readonly role: IRole;
  /** The custom resource onEvent provider method. */
  readonly onEvent: Function;
  /** The custom resource isComplete provider method. */
  readonly isComplete: Function;
  /** The custom resource provider. */
  readonly provider: Provider;

  constructor(scope: Construct, id: string, props: StepFunctionTaskStepResourcesProps) {
    super(scope, id);
    let purpose = StepFunctionTaskStepResources.PURPOSE;

    this.role = props.role ?? new Role(this, `${purpose}Role`, {
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
      inlinePolicies: {
        StepFunctionTaskPolicy: new PolicyDocument({
          statements: [new PolicyStatement({
            actions: ['states:*'],
            effect: Effect.ALLOW,
            resources: ['*'],
          })],
        }),
      },
      managedPolicies: [ManagedPolicy.fromAwsManagedPolicyName(
        'service-role/AWSLambdaBasicExecutionRole')],
    });

    this.onEvent = new InlineNodejsFunction(this, `${purpose}OnEvent`, {
      entry: `${LAMBDA_PATH}/step_function_execute.js`,
      handler: 'index.startStepFunction',
      runtime: Runtime.NODEJS_18_X,
      role: this.role,
      timeout: Duration.minutes(1),
    });
    this.isComplete = new InlineNodejsFunction(this, `${purpose}IsComplete`, {
      entry: `${LAMBDA_PATH}/step_function_execute.js`,
      handler: 'index.stepFunctionComplete',
      runtime: Runtime.NODEJS_18_X,
      role: this.role,
      timeout: Duration.minutes(1),
    });
    this.provider = new Provider(this, `${purpose}Provider`, {
      onEventHandler: this.onEvent,
      isCompleteHandler: this.isComplete,
      queryInterval: StepFunctionTaskStepConstants.QUERY_INTERVAL,
      totalTimeout: StepFunctionTaskStepConstants.TOTAL_TIMEOUT,
    });
  }
}

/**
 * Executes a StepFunction as part of a stack deployment.
 *
 * This construct executes and monitors a StepFunction for up to 2 hours.
 *
 * End users should use StepFunctionTask.
 */
export class StepFunctionTaskStep extends Task {
  readonly resources: StepFunctionTaskStepResources;
  readonly customResource: CustomResource;

  constructor(scope: Construct, id: string, props: StepFunctionTaskStepProps) {
    super(scope, id);

    let purpose = StepFunctionTaskStepResources.PURPOSE;

    this.resources = Singleton.create(this,
      `${purpose}Resources`,
      (s, i) => {
        return new StepFunctionTaskStepResources(s, i, {
          role: props.role,
        });
      },
    ) as StepFunctionTaskStepResources;

    let resourceType = `Custom::${purpose}`;

    let resourceProperties: any = {
    };

    // If they pass in both, assume they want to monitor an existing execution.
    if (props.executionArn) {
      resourceProperties.ExecutionArn = props.executionArn;
    } else if (props.stateMachine) {
      resourceProperties.StateMachineArn = props.stateMachine.stateMachineArn;
      if (props.inputEvent) {
        resourceProperties.StateMachineEvent = props.inputEvent;
      }
    } else {
      throw new Error(`One of stateMachine or executionArn must be specified for ${
        this.node.path
      }`);
    }

    // If this is not set the resource can fail due to timeout after an hour.
    if (props.succeedAfterMs) {
      resourceProperties.SucceedAfterMs = props.succeedAfterMs;
    }
    if (props.prefix) {
      resourceProperties.Prefix = props.prefix;
    }
    if (props.suffix) {
      resourceProperties.Suffix = props.suffix;
    }

    // Ensures that changes to the list are reflected in the template.
    resourceProperties.OutputPaths = Lazy.list({
      produce: () => [
        ...(this.customResource as InnerCustomResource).requestedOutputs,
      ],
    });

    if (props.defaults) {
      resourceProperties.Defaults = props.defaults;
    }
    this.customResource = new InnerCustomResource(this, 'Resource', {
      serviceToken: this.resources.provider.serviceToken,
      resourceType: resourceType,
      removalPolicy: RemovalPolicy.RETAIN,
      properties: resourceProperties,
    });

    new EncodeResource(this.customResource);
    new RunResourceAlways(this);

    if (props.stateMachine) {
      this.customResource.node.addDependency(props.stateMachine);
    }
  }
}
