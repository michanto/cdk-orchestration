import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LbSfseIntegrationTest } from './late_bound_step_function_test_stack';

const account = '000000000000';
const region = 'us-west-2';
const env = {
  account: account,
  region: region,
};

describe('LateBoundStepFunctionsStartExecution integration tests', () => {
  test('LateBoundStepFunctionsStartExecution integration test synthesizes.', () => {
    const app = new App();
    // TODO:  This will be part of the integration test for InlineNodejsFunction and LateBoundStepFunctionsStartExecution.
    // For now, just test synth.
    const stack = new LbSfseIntegrationTest(app, 'MyStack', {
      env: env,
    });

    expect(Template.fromStack(stack)).toBeTruthy();
  });
});