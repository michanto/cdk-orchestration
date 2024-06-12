import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App } from 'aws-cdk-lib';
import { LbSfseIntegrationTest } from './late_bound_step_function_test_stack';

const app = new App();

const stack = new LbSfseIntegrationTest(app, 'LbSfseIntegrationTest');

new IntegTest(app, 'LateBoundStepFunctionInteg', {
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
