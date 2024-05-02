import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Chain, DefinitionBody, StateMachine, TaskInput } from 'aws-cdk-lib/aws-stepfunctions';
import { LateBoundStepFunctionsStartExecution } from '../../src/aws-stepfunctions-tasks';

const account = '000000000000';
const region = 'us-west-2';
const env = {
  account: account,
  region: region,
};

describe('LateBoundStepFunctionsStartExecution tests', () => {
  test('LateBoundStepFunctionsStartExecution works.', () => {
    const app = new App();
    const stack = new Stack(app, 'MyStack', {
      env: env,
    });

    const stepFunctionsTask = new LateBoundStepFunctionsStartExecution(stack, 'InvokeStepFunction', {
      stateMachineArnPath: '$.stateMachineArn',
      input: TaskInput.fromJsonPathAt('$.input'),
      resultPath: '$.stateMachineOutput',
    });

    const chain = Chain.start(stepFunctionsTask);

    new StateMachine(stack, 'MyStateMachine', {
      definitionBody: DefinitionBody.fromChainable(chain),
    });

    let template = Template.fromStack(stack).toJSON();
    let stepFn = template.Resources.MyStateMachine6C968CA5;
    expect(JSON.stringify(stepFn.Properties)).toContain('$.stateMachineArn');
  });


  test('LateBoundStepFunctionsStartExecution associate with parent.', () => {
    const app = new App();
    const stack = new Stack(app, 'MyStack', {
      env: env,
    });

    const stepFunctionsTask = new LateBoundStepFunctionsStartExecution(stack, 'InvokeStepFunction', {
      stateMachineArnPath: '$.stateMachineArn',
      input: TaskInput.fromObject({
        value: 'AValue',
      }),
      resultPath: '$.stateMachineOutput',
      associateWithParent: true,
    });

    const chain = Chain.start(stepFunctionsTask);

    new StateMachine(stack, 'MyStateMachine', {
      definitionBody: DefinitionBody.fromChainable(chain),
    });

    let template = Template.fromStack(stack).toJSON();
    let stepFn = template.Resources.MyStateMachine6C968CA5;
    expect(JSON.stringify(stepFn.Properties)).toContain('$.stateMachineArn');
    expect(JSON.stringify(stepFn.Properties)).toContain('AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID');
  });
});