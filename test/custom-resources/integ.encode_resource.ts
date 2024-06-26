import { ActualResult, ExpectedResult, IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, CustomResource, Stack } from 'aws-cdk-lib';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { Singleton } from '../../src';
import { InlineNodejsFunction } from '../../src/aws-lambda-nodejs';
import { EncodeResource } from '../../src/custom-resources';
import { EqualsComparisonAssertion } from '../util/assertions';
const LAMBDA_PATH = `${__dirname}/../../lib/aws-lambda-nodejs/private/test_lambdas/`;

export class GreetingCustomResources extends Construct {
  readonly handler: Function;
  readonly provider: Provider;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.handler = new InlineNodejsFunction(this, 'Reverse', {
      entry: `${LAMBDA_PATH}reverse_greeting.js`,
      handler: 'reverseGreeting',
    });

    this.provider = new Provider(this, 'Provider', {
      onEventHandler: this.handler,
    });
  }
}

export class GreetingCustomResource extends Construct {
  readonly resources: GreetingCustomResources;
  readonly resource: CustomResource;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    let purpose = 'Greeting';
    this.resources = Singleton.create(this, 'Resources', (s, idd) => {
      return new GreetingCustomResources(s, idd);
    }) as GreetingCustomResources;

    this.resource = new CustomResource(this, 'Resource', {
      serviceToken: this.resources.provider.serviceToken,
      resourceType: `Custom::${purpose}`,
      properties: {
        Greeting: 'Hello, there',
        PhysicalResourceId: 'GreetingResource',
      },
    });
    new EncodeResource(this);
  }
}

const app = new App();
const stack = new Stack(app, 'EncodeResourcesInteg', {});
let greetingResource = new GreetingCustomResource(stack, 'Greeting').resource;

const assertionStack = new Stack(app, 'EncodeResourceAssertions', {});
new EqualsComparisonAssertion(assertionStack, 'GreetingIsReversed', {
  actual: ActualResult.fromCustomResource(greetingResource, 'Greeting'),
  expected: ExpectedResult.exact('ereht ,olleH'),
});

new IntegTest(app, 'EncodeResourcesIntegTest', {
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
