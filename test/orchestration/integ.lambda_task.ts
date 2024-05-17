import { ExpectedResult, IntegTest, Match } from '@aws-cdk/integ-tests-alpha';
import { App, Aspects, CfnOutput, Stack } from 'aws-cdk-lib';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { InlineNodejsFunction } from '../../src/aws-lambda-nodejs';
import { LoggingAspect } from '../../src/core';
import { LambdaTask } from '../../src/orchestration';
import { Effect } from 'aws-cdk-lib/aws-iam';
const LAMBDA_PATH = `${__dirname}/../../lib/aws-lambda-nodejs/private/test_lambdas/`;

export class GreetingLambdaTask extends Construct {
  readonly handler: Function;
  readonly task: LambdaTask;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.handler = new InlineNodejsFunction(this, 'Reverse', {
      entry: `${LAMBDA_PATH}reverse_greeting.js`,
      handler: 'reverseGreeting',
    });

    this.task = new LambdaTask(this, 'LambdaTask', {
      lambdaFunction: this.handler,
      payload: JSON.stringify({
        Greeting: 'Hello, world.',
      }),
    });

    Aspects.of(this).add(new LoggingAspect());
  }
}

const app = new App();
const stack = new Stack(app, 'LambdaTaskInteg', {});

let greeting = new GreetingLambdaTask(stack, 'Greeting').task.getAtt('Greeting').toString();
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
