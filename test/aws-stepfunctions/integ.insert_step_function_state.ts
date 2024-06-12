import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App } from 'aws-cdk-lib';
import { HitlTestStack } from './hitl_test_stack';

const app = new App();

const stack = new HitlTestStack(app, 'HitlTestStack');

new IntegTest(app, 'InsertStepFunctionStateInteg', {
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
