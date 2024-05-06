import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { InlineNodejsFunction } from '../../src/aws-lambda-nodejs';

const app = new App();
const stack = new Stack(app, 'IntegrationTestExampleStack', {});
const LAMBDA_PATH = `${__dirname}/../../lib/aws-lambda-nodejs/private/test_lambdas/`;
new InlineNodejsFunction(stack, 'Reverse', {
  entry: `${LAMBDA_PATH}reverse_greeting.js`,
  handler: 'reverseGreeting',
});

new IntegTest(app, 'IntegTestExample', {
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
