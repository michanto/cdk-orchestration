import { Aspects } from 'aws-cdk-lib';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { InlineNodejsFunction } from '../../src/aws-lambda-nodejs';
import { LoggingAspect } from '../../src/core';
import { LambdaTask } from '../../src/orchestration';
import { CustomResourceUtilities } from '../../src/custom-resources';

const LAMBDA_PATH = `${__dirname}/../../lib/aws-lambda-nodejs/private/test_lambdas/`

export class GreetingLambdaTask extends Construct {
  readonly handler: Function;
  readonly task: LambdaTask;
  constructor(scope: Construct, id: string, removeSalt: boolean) {
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

    if (removeSalt) {
      let resource = new CustomResourceUtilities().findCustomResource(this);
      resource.addPropertyDeletionOverride('salt');
    }

    Aspects.of(this).add(new LoggingAspect());
  }
}
