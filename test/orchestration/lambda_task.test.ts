import { App, Stack, CfnOutput } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { GreetingLambdaTask } from './greeting_lambda_task';

describe('LambdaTask tests.', () => {
  it('LambdaTask works.', () => {

    const app = new App();
    const stack = new Stack(app, 'LambdaTaskStack', {});
    let greeting = new GreetingLambdaTask(stack, 'Greeting', false).task.getResponseField('Greeting');
    new CfnOutput(stack, 'AnOutput', {
      exportName: 'LambdaTaskGreetingExport',
      value: greeting,
    });
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        GreetingLambdaTask1569D06A: {
          Type: 'Custom::LambdaTask',
        },
      },
      Outputs: { AnOutput: {} },
    });
  });
});
