import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App } from 'aws-cdk-lib';
import { PyStepFunctionsImportStack } from './py_step_functions_cleanup';

const app = new App();

const stack = new PyStepFunctionsImportStack(app, 'PyStepFunctionsImport');

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
