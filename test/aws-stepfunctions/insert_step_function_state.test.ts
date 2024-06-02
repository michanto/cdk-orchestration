import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { DefinitionBody, Fail, Pass, StateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { CreateConsoleLink, HitlTestStack } from './hitl_test_stack';
import { InsertStepFunctionState, StatesTransformApplier } from '../../src/aws-stepfunctions';

describe('InsertStepFunctionState integration tests', () => {
  test('InsertStepFunctionState integration test stack synthesizes.', () => {
    const app = new App();
    const stack = new HitlTestStack(app, 'HitlTestStack', {
      env: { account: '000000000000', region: 'us-west-2' },
    });

    // Ensure we got a Join in the end.
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        MockHitlStateMachine1D7D3E53: {
          Properties: {
            DefinitionString: {
              'Fn::Join': expect.any(Array),
            },
          },
        },
      },
    });
  });
  test('Simple StateMachine (no tokens) insertion test.', () => {
    const app = new App();
    const stack = new Stack(app, 'TestStack', {
      env: { account: '000000000000', region: 'us-west-2' },
    });

    let definition = new Pass(stack, 'Pass');
    let sm = new StateMachine(stack, 'StateMachine', {
      definitionBody: DefinitionBody.fromChainable(definition),
    });
    let link = new CreateConsoleLink(stack, 'DeepLink');
    link.consoleLinkStep.next(new Fail(stack, 'TestNextRemoved'));
    new InsertStepFunctionState(sm, 'InsertDeepLink', {
      insertAfterStep: 'Pass',
      state: link.consoleLinkStep,
    });
    // Ensure we got a Join in the end.
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        StateMachine2E01A3A5: {
          Properties: {
            DefinitionString: {
              'Fn::Join': expect.any(Array),
            },
          },
        },
      },
    });
  });

  test('StatesTransform without stateMachine throws.', () => {
    const app = new App();
    const stack = new Stack(app, 'TestStack', {
      env: { account: '000000000000', region: 'us-west-2' },
    });

    expect( () => new InsertStepFunctionState(stack, 'WillFail', {
      insertAfterStep: 'NoStep',
      state: new Pass(stack, 'Pass'),
    })).toThrow();
  });

  test('StatesTransformApplier without host fails.', () => {
    const app = new App();
    const stack = new Stack(app, 'TestStack', {
      env: { account: '000000000000', region: 'us-west-2' },
    });
    new StatesTransformApplier(stack, 'WillFail');
    expect(() => Template.fromStack(stack)).toThrow();
  });
});