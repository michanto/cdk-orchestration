import { App, Stack, CfnOutput } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { GreetingLambdaTask } from './greeting_lambda_task';

describe('LambdaTask tests.', () => {
  it('LambdaTask works.', () => {

    const app = new App();
    const stack = new Stack(app, 'LambdaTaskStack', {});
    const bucket1 = new Bucket(stack, 'DummyBucket1');
    const bucket2 = new Bucket(stack, 'DummyBucket2');
    let greetingTask = new GreetingLambdaTask(stack, 'Greeting', {
      greeting: 'Hello, world.',
      removeSalt: false,
    });
    greetingTask.executeAfter(bucket1);
    greetingTask.executeBefore(bucket2);
    let greeting = greetingTask.getAttString('Greeting');
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
