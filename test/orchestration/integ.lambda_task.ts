import { ActualResult, ExpectedResult, IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, Aspects, Stack } from 'aws-cdk-lib';
import { GreetingLambdaTask } from './greeting_lambda_task';
import { Logger, LoggingAspect } from '../../src/core';
import { EqualsComparisonAssertion } from '../util/assertions';


const app = new App();
const stack = new Stack(app, 'LambdaTaskIntegration', { stackName: 'LambdaTaskIntegration' });
const assertionStack = new Stack(app, 'LambdaTaskAssertions', {});

Logger.set(app, new Logger());
Aspects.of(app).add(new LoggingAspect());

let greetingTask = new GreetingLambdaTask(stack, 'Greeting', { removeSalt: true, greeting: 'Hello, world.' });

new EqualsComparisonAssertion(assertionStack, 'GreetingIsReversed', {
  actual: ActualResult.fromCustomResource(greetingTask.customResource, 'Greeting'),
  expected: ExpectedResult.exact('.dlrow ,olleH'),
});

new IntegTest(app, 'LambdaTaskIntegrationTest', {
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
