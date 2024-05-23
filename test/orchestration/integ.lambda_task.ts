import { ActualResult, ExpectedResult, IntegTest, Match } from '@aws-cdk/integ-tests-alpha';
import { App, Aspects, Stack } from 'aws-cdk-lib';
import { Effect } from 'aws-cdk-lib/aws-iam';
import { GreetingLambdaTask } from './greeting_lambda_task';
import { Logger, LoggingAspect } from '../../src/core';
import { EqualsComparisonAssertion } from '../util/assertions';


const app = new App();
const stack = new Stack(app, 'LambdaTaskIntegration', { stackName: 'LambdaTaskIntegration' });
const assertionStack = new Stack(app, 'LambdaTaskAssertions', {});

Logger.set(app, new Logger());
Aspects.of(app).add(new LoggingAspect());

let greetingTask = new GreetingLambdaTask(stack, 'Greeting', true);

new EqualsComparisonAssertion(assertionStack, 'GreetingIsReversed', {
  actual: ActualResult.fromCustomResource(greetingTask.task.resource.customResource, 'Greeting'),
  expected: ExpectedResult.exact('.dlrow ,olleH'),
});

let integ = new IntegTest(app, 'LambdaTaskIntegrationTest', {
  testCases: [
    stack,
  ],
  assertionStack: assertionStack,
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
  Exports: Match.arrayWith([Match.objectLike({})]),
},
)).provider.addToRolePolicy({
  Effect: Effect.ALLOW,
  Action: ['cloudFormation:List*'],
  Resource: ['*'],
});
