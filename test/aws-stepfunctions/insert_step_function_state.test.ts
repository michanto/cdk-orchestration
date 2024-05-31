import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { HitlTestStack } from './hitl_test_stack';

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
});