import { ActualResult, ExpectedResult } from '@aws-cdk/integ-tests-alpha';
import { CustomResource } from 'aws-cdk-lib';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { InlineNodejsFunction } from '../../src/aws-lambda-nodejs';
import { Singleton } from '../../src/core';
import { Task } from '../../src/custom-resources';
import { LambdaTask } from '../../src/orchestration';

export interface EqualsComparisonAssertionProps {
  readonly expected: ExpectedResult;
  readonly actual: ActualResult;
}

const LAMBDA_PATH = `${__dirname}/../../lib/aws-lambda-nodejs/private/test_lambdas/`;

export class EqualsComparisonResources extends Construct {
  readonly equalsFunction: IFunction;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.equalsFunction = new InlineNodejsFunction(scope, 'EqualsFunction', {
      entry: `${LAMBDA_PATH}equals_comparison.js`,
      handler: 'equalsComparison',
    });
  }
}

export class EqualsComparisonAssertion extends Task {
  readonly resources: EqualsComparisonResources;
  readonly customResource: CustomResource;
  readonly task: LambdaTask;

  constructor(scope: Construct, id: string, props: EqualsComparisonAssertionProps) {
    super(scope, id);
    this.resources = Singleton.create(scope, 'EqualsComparisonResources',
      (s, sid) => new EqualsComparisonResources(s, sid)) as EqualsComparisonResources;

    this.task = new LambdaTask(this, 'Task', {
      resourceType: 'Custom::EqualsComparisonAssertion',
      lambdaFunction: this.resources.equalsFunction,
      payload: JSON.stringify({
        expected: props.expected,
        actual: props.actual,
      }),
    });
    this.customResource = this.task.customResource;
  }
}