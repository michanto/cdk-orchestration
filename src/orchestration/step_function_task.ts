import { Duration } from 'aws-cdk-lib';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { IStateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { StepFunctionTaskStep, StepFunctionTaskStepConstants } from './step_function_task_step';

/**
 * Properties for StepFunctionTask.
 */
export interface StepFunctionTaskProps {
  /**
   * The state machine to execute.
   */
  readonly stateMachine: IStateMachine;
  /**
   * The event to start the state machine with.
   * Should only be provided with stateMachine, not with stateMachineExecutionArn.
   */
  readonly inputEvent?: any;
  /**
   * Prefix for the execution.
   */
  readonly prefix?: string;
  /**
   * Total timeout for the entire operation.
   *
   * The maximum timeout is unknown, but less than 500 hours (yes, it can
   * exceed the AWS Lambda 15 minutes)
   *
   * @default Duration.hours(2)
   */
  readonly totalTimeout?: Duration;

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

/**
 * This class creates multiple StepFunctionTaskStep resources to
 * monitor the execution of a long-running step function.
 *
 * The first StepFunctionTaskStep is created with the StateMachine
 * ARN and input so it can start the step function.  This resource
 * sets it's physical ID to the ExecutionArn.
 *
 * Subsequent StepFunctionTaskStep resources are created with
 * the ExecutionArn so they can continue monitoring the StepFunction.
 *
 * Once the StepFunction has finished running, subsequent
 * StepFunctionTaskStep resources (if any) will fast-succeed.
 * If the StepFunction fails, the subsequent StepFunctionTaskStep
 * resources will fast-fail.
 */
export class StepFunctionTask extends Construct {
  /**
   * Execution role.
   */
  readonly role: IRole;

  /**
   * Total number of StepFunctionTaskStep resources created.
   */
  readonly numberOfSteps: number;

  /** First step is where we get ref from. */
  private readonly startExecution: StepFunctionTaskStep;
  /** Last step is where we get attributes from. */
  private readonly lastStep: StepFunctionTaskStep;

  constructor(scope: Construct, id: string, props: StepFunctionTaskProps) {
    super(scope, id);

    // First we need to calculate the number of resources we need to create.
    // That will be props.totalTimeout / timeout.
    let totalTimeoutMs = props.totalTimeout?.toMilliseconds() ??
      Duration.hours(2).toMilliseconds();
    let timeoutMs = StepFunctionTaskStepConstants.SUCCEED_AFTER_MS.toMilliseconds();
    // At least 1 step.  At most?  The CloudFormation resource limit will
    // decide that.
    this.numberOfSteps = Math.max(1, Math.ceil(totalTimeoutMs / timeoutMs));

    this.startExecution = new StepFunctionTaskStep(this, 'RunIt', {
      succeedAfterMs: timeoutMs,
      stateMachine: props.stateMachine,
      inputEvent: props.inputEvent,
      prefix: props.prefix,
      role: props.role,
      defaults: props.defaults,
    });

    // Ensure we use the same role for all steps.
    this.role = this.startExecution.resources.role;

    let previousStep = this.startExecution;
    for (let index = 1; index < this.numberOfSteps; index++) {
      // Fail the last resource on timeout.
      // All other resources should succeed after a set number of MS if the
      // Step function is still executing.
      let failOnResourceTimeout = (index == this.numberOfSteps -1);
      let waitForIt = new StepFunctionTaskStep(this, `WaitForIt${index}`, {
        succeedAfterMs:
          failOnResourceTimeout ? undefined : timeoutMs*(index+1),
        suffix: `${index}`,
        executionArn: this.startExecution.ref,
        role: this.role,
      });
      // Dependencies will ensure monitoring is done one resource
      // at a time.
      waitForIt.node.addDependency(previousStep);
      previousStep = waitForIt;
    }
    this.lastStep = previousStep;
  }

  /** The physical name of this custom resource */
  get ref() {
    return this.startExecution.ref;
  }

  /** See {@link CustomResource.getAtt} */
  getAtt(attributeName: string) {
    return this.lastStep.getAtt(attributeName);
  }

  /** See {@link CustomResource.getAttString} */
  getAttString(attributeName: string) {
    return this.lastStep.getAttString(attributeName);
  }
}
