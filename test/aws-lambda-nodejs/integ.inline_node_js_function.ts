import { ExpectedResult, IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { Effect } from 'aws-cdk-lib/aws-iam';
import { InlineNodejsFunction } from '../../src/aws-lambda-nodejs';

const app = new App();
const stack = new Stack(app, 'IntegrationTestExampleStack', {});
const LAMBDA_PATH = `${__dirname}/../../lib/aws-lambda-nodejs/private/test_lambdas/`;
let fun = new InlineNodejsFunction(stack, 'Reverse', {
  entry: `${LAMBDA_PATH}reverse_greeting.js`,
  handler: 'reverseGreeting',
});

let integ = new IntegTest(app, 'IntegTestExample', {
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

integ.assertions.awsApiCall('Lambda', 'invoke', {
  FunctionName: fun.functionArn,
  Payload: JSON.stringify({ Greeting: 'Hello, inline nodejs function!' }),
}).expect(ExpectedResult.objectLike({
  Payload: JSON.stringify({ Greeting: '!noitcnuf sjedon enilni ,olleH' }),
})).provider.addToRolePolicy({
  Effect: Effect.ALLOW,
  Action: ['lambda:Invoke*'],
  Resource: [fun.functionArn],
});
