import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { InlineNodejsFunction } from '../../src/aws-lambda-nodejs';

const app = new App();
const stack = new Stack(app, 'IntegrationTestExampleStack', {});
const LAMBDA_PATH = `${__dirname}/../lib/aws-lambda-nodejs/test_lambdas/`
new InlineNodejsFunction(stack, "Reverse", {
    entry: `${LAMBDA_PATH}/reverse_greeting.js`,
    handler: 'reverseGreeting'
})

new IntegTest(app, 'IntegTestExample', {
  testCases: [
    stack,
  ],
});
