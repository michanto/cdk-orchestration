import { ActualResult, ExpectedResult } from "@aws-cdk/integ-tests-alpha"
import { Construct } from "constructs"
import { InlineNodejsFunction } from "../../src/aws-lambda-nodejs";
import { IFunction } from "aws-cdk-lib/aws-lambda";
import { Singleton } from "../../src/core";
import { LambdaTask } from "../../src/orchestration";

export interface EqualsComparisonAssertionProps {
  readonly expected: ExpectedResult,
  readonly actual: ActualResult
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

export class EqualsComparisonAssertion extends Construct {
  readonly resources: EqualsComparisonResources;
  readonly task: LambdaTask;

  constructor(scope: Construct, id: string, props: EqualsComparisonAssertionProps) {
    super(scope, id);
    this.resources = Singleton.create(scope, "EqualsComparisonResources",
      (s, id) => new EqualsComparisonResources(s, id)) as EqualsComparisonResources;

    this.task = new LambdaTask(this, "Task", {
      resourceType: 'Custom::EqualsComparisonAssertion',
      lambdaFunction: this.resources.equalsFunction,
      payload: JSON.stringify({
        expected: props.expected,
        actual: props.actual
      })
    })
  }
}