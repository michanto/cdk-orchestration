import { ActualResult, ExpectedResult } from '@aws-cdk/integ-tests-alpha';
import { CfnOutput, CustomResource } from 'aws-cdk-lib';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { md5hash as coreMd5 } from 'aws-cdk-lib/core/lib/helpers-internal';
import { Construct } from 'constructs';
import { InlineNodejsFunction } from '../../src/aws-lambda-nodejs';
import { Singleton } from '../../src/core';
import { Task } from '../../src/custom-resources';
import { LambdaTask } from '../../src/orchestration';

export function md5hash(obj: any): string {
  if (!obj || (typeof(obj) === 'object' && Object.keys(obj).length === 0)) {
    throw new Error('Cannot compute md5 hash for falsy object');
  }
  return coreMd5(JSON.stringify(obj));
}

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
    const result = this.task.getAttString('result');
    const message = this.task.getAttString('message');

    new CfnOutput(this, 'AssertionResults', {
      value: JSON.stringify({ status: result, message: message }),
    }).overrideLogicalId(`AssertionResults${id}${md5hash({
      actual: props.actual.result,
      expected: props.expected.result,
    })}`);
    this.customResource = this.task.customResource;
  }
}