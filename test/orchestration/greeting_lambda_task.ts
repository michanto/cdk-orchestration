import { Aspects, CustomResource } from 'aws-cdk-lib';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { InlineNodejsFunction } from '../../src/aws-lambda-nodejs';
import { LoggingAspect } from '../../src/core';
import { Task } from '../../src/custom-resources';
import { LambdaTask } from '../../src/orchestration';
import { RemoveSalt } from '../util';

const LAMBDA_PATH = `${__dirname}/../../lib/aws-lambda-nodejs/private/test_lambdas/`;

export interface GreetingLambdaTaskProps {
  readonly removeSalt: boolean;
  readonly greeting: string;
}

export class GreetingLambdaTask extends Task {
  readonly handler: Function;
  readonly task: LambdaTask;
  readonly customResource: CustomResource;

  constructor(scope: Construct, id: string, props: GreetingLambdaTaskProps) {
    super(scope, id);
    this.handler = new InlineNodejsFunction(this, 'Reverse', {
      entry: `${LAMBDA_PATH}reverse_greeting.js`,
      handler: 'reverseGreeting',
    });

    this.task = new LambdaTask(this, 'LambdaTask', {
      lambdaFunction: this.handler,
      payload: JSON.stringify({
        Greeting: props.greeting,
      }),
    });
    this.customResource = this.task.customResource;

    if (props.removeSalt) {
      new RemoveSalt(this);
    }

    Aspects.of(this).add(new LoggingAspect());
  }
}
