import { ExpectedResult, IntegTest, Match } from '@aws-cdk/integ-tests-alpha';
import { App, CfnOutput, Stack } from 'aws-cdk-lib';
import { Effect } from 'aws-cdk-lib/aws-iam';
import { GreetingLambdaTask } from './greeting_lambda_task';


const app = new App();
const stack = new Stack(app, 'LambdaTaskInteg4', {});

let greetingTask = new GreetingLambdaTask(stack, 'Greeting', true)
let greeting = greetingTask.task.getAtt('Greeting').toString();
/*
new EqualsAssertion(stack, "GreetingIsReversed", {
  actual: ActualResult.fromCustomResource(greetingTask.task.resource.resource, "Greeting"),
  expected: ExpectedResult.exact(".dlrow ,olleH")
}) */

new CfnOutput(stack, 'AnOutput', {
  exportName: 'LambdaTaskGreetingExport',
  value: greeting,
});

let integ = new IntegTest(app, 'LambdaTaskIntegTest', {
  testCases: [
    stack,
  ],
  cdkCommandOptions: {
    destroy: {
      args: {
        force: true,
      },
    },
  },
  regions: ['us-east-1'],
});

integ.assertions.awsApiCall('CloudFormation', 'listExports', {
}).expect(ExpectedResult.objectLike({
  Exports: Match.arrayWith([Match.objectLike({}), {
    ExportingStackId: Match.stringLikeRegexp('.*'),
    Name: 'LambdaTaskGreetingExport',
    Value: '.dlrow ,olleH',
  }]),
},
)).provider.addToRolePolicy({
  Effect: Effect.ALLOW,
  Action: ['cloudFormation:List*'],
  Resource: ['*'],
});
