import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Chain, DefinitionBody, JsonPath, StateMachine, TaskInput } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { LateBoundStepFunctionsStartExecution } from '../../src/aws-stepfunctions-tasks';
import { StepFunctionTask, StepFunctionTaskStep } from '../../src/orchestration';

/**
 * Shim step function that adds an S3 URI to be used as a return value.
 */
export class StepFunctionShimStateMachine extends StateMachine {
  constructor(scope: Construct, id: string = 'StepFunctionOutputFileShim') {
    super(scope, id, {
      stateMachineName: 'StepFunctionOutputFileShim',
      definitionBody: DefinitionBody.fromChainable(Chain.start(new LateBoundStepFunctionsStartExecution(scope, 'InvokeWorkflow', {
        stateMachineArnPath: '$.stateMachineArn',
        name: JsonPath.stringAt('$.executionName'),
        input: TaskInput.fromJsonPathAt('$.stateMachineInput'),
        resultPath: '$.stateMachineOutput',
      }))),
    });
    this.addToRolePolicy(new PolicyStatement({
      actions: ['states:StartExecution'],
      effect: Effect.ALLOW,
      resources: ['*'],
    }));
  }
}

describe('StepFunctionTask tests', () => {
  test('StepFunctionTask happy path works.', async () => {
    let app = new App();

    let stack: Stack = new Stack(app, 'MyId', {
      env: {
        region: 'us-west-2',
        account: '000000000000',
      },
    });

    let stateMachine = new StepFunctionShimStateMachine(stack);

    // Just ensure it can render.
    let task = new StepFunctionTask(stack, 'RunIt', {
      stateMachine: stateMachine,
      inputEvent: {
        value: 'value',
      },
      prefix: 'test',
      defaults: { test: 'test defaults' },
    });
    task.ref;
    Template.fromStack(stack);
  });
  // TODO:  Tests that validate the number of steps created.

  test('StepFunctionTaskStep no stateMachine no execution.', async () => {
    let app = new App();

    let stack: Stack = new Stack(app, 'MyId', {
      env: {
        region: 'us-west-2',
        account: '000000000000',
      },
    });

    expect(() => new StepFunctionTaskStep(stack, 'Step', {})).toThrow();
  });
});