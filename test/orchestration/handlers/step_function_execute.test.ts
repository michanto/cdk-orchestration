import { startStepFunction, stepFunctionComplete } from '../../../lib/orchestration/handlers/step_function_execute';
const startDate = new Date(Date.now());
const mockStepFunctions = {
  startExecutionCalls: 0,
  describeExecutionCalls: 0,
  describeExecutionStatus: 'RUNNING' as string,
  startExecution: () => {
    mockStepFunctions.startExecutionCalls++;
    return Promise.resolve({
      executionArn: 'executionArn',
      startDate: startDate,
    });
  },
  describeExecution: () => {
    mockStepFunctions.describeExecutionCalls++;
    return Promise.resolve({
      executionArn: 'executionArn',
      status: mockStepFunctions.describeExecutionStatus,
      startDate: startDate,
      output: {
        simple: 'test_value',
        complex: {
          inner: 'other_value',
        },
      },
    });
  },
};

function pause(ms: number) {
  var start = Date.now(),
    now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

jest.mock('@aws-sdk/client-sfn', () => {
  return {
    SFN: jest.fn(() => mockStepFunctions),
    config: {
      logger: {},
    },
  };
});

describe('step_function_execute handler tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
    mockStepFunctions.describeExecutionCalls = 0;
    mockStepFunctions.startExecutionCalls = 0;
  });

  const context = {};

  test('Call startStepFunction handler works.', async () => {
    let value = await startStepFunction({
      RequestType: 'Create',
      ResourceProperties: {
        StateMachineArn: 'stateMachineArn',
        StateMachineEvent: {
          AKey: 'aValue',
        },
        Prefix: 'aPrefix',
      },
    }, context);

    expect(value).toMatchObject({
      PhysicalResourceId: 'executionArn',
      ExecutionArn: 'executionArn',
      IsComplete: false,
    });
    expect(mockStepFunctions.startExecutionCalls).toEqual(1);
  });

  test('Call stepFunctionComplete handler works.', async () => {
    let value = await stepFunctionComplete({
      ExecutionArn: 'executionArn',
      OutputPaths: ['complex.inner'],
    }, context);

    expect(value).toMatchObject({
      ExecutionArn: 'executionArn',
      IsComplete: false,
      Data: { 'complex.inner': 'other_value' },
    });
    expect(mockStepFunctions.describeExecutionCalls).toEqual(1);
  });
  test('Call startStepFunction handler Delete works.', async () => {
    let value = await startStepFunction({
      RequestType: 'Delete',
      ResourceProperties: {
        PhysicalResoruceId: 'something',
      },
    }, context);
    expect(value).toMatchObject({
      IsComplete: true,
    });
  });
  test('Call stepFunctionComplete handler Delete works.', async () => {
    let value = await stepFunctionComplete({
      RequestType: 'Delete',
      ResourceProperties: {
        PhysicalResourceId: 'something',
      },
    }, context);
    expect(value).toMatchObject({
      IsComplete: true,
    });
  });
  test('Call startStepFunction encoded properties handler works.', async () => {
    let value = await startStepFunction({
      RequestType: 'Create',
      ResourceProperties: {
        EncodedProperties: Buffer.from( JSON.stringify({
          StateMachineArn: 'stateMachineArn',
          StateMachineEvent: {
            AKey: 'aValue',
          },
        })).toString('base64'),
      },
    }, context);

    expect(value).toMatchObject({
      PhysicalResourceId: 'executionArn',
      ExecutionArn: 'executionArn',
      IsComplete: false,
    });
    expect(mockStepFunctions.startExecutionCalls).toEqual(1);
  });

  test('Call startStepFunction handler with executionArn works.', async () => {
    let value = await startStepFunction({
      RequestType: 'Create',
      ResourceProperties: {
        PhysicalResourceId: 'executionArn',
        Suffix: 'suffix',
        ExecutionArn: 'executionArn',
      },
    }, context);

    expect(value).toMatchObject({
      PhysicalResourceId: 'executionArn.suffix',
      ExecutionArn: 'executionArn',
      IsComplete: false,
    });
    expect(mockStepFunctions.startExecutionCalls).toEqual(0);
    expect(mockStepFunctions.describeExecutionCalls).toEqual(1);
  });

  test('Call startStepFunction handler with no ARN throws.', async () => {
    try {
      await startStepFunction({
        RequestType: 'Create',
        ResourceProperties: {
          PhysicalResourceId: 'PhysicalResourceId',
          Suffix: 'suffix',
        },
      }, context);
    } catch (error) {
      expect(error).toMatchObject({ Reason: 'One of StateMachineArn or ExecutionArn must be specified.' });
    }
  });
  test('Call stepFunctionComplete stepfunction failed.', async () => {
    mockStepFunctions.describeExecutionStatus = 'FAILED';
    try {
      await stepFunctionComplete({
        ExecutionArn: 'executionArn',
        OutputPaths: ['complex.inner'],
      }, context);
      fail('stepFunctionComplete should have thrown.');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
  test('Call stepFunctionComplete stepfunction unknown status.', async () => {
    mockStepFunctions.describeExecutionStatus = 'UNKNOWN';
    try {
      await stepFunctionComplete({
        ExecutionArn: 'executionArn',
        OutputPaths: ['complex.inner'],
      }, context);
      fail('stepFunctionComplete should have thrown.');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
  test('Call stepFunctionComplete SucceedAfterMs.', async () => {
    pause(2); // Ensure at least two ms have passed.
    mockStepFunctions.describeExecutionStatus = 'RUNNING';
    let value = await stepFunctionComplete({
      ExecutionArn: 'executionArn',
      OutputPaths: ['complex.inner'],
      SucceedAfterMs: 1,
    }, context);
    expect(value).toMatchObject({
      ExecutionArn: 'executionArn',
      IsComplete: true,
      Data: { 'complex.inner': 'other_value' },
    });
  });
  test('Call startStepFunction handler logging on.', async () => {
    process.env.LogLevel = '1';

    try {
      let value = await startStepFunction({
        RequestType: 'Delete',
        ResourceProperties: {
          PhysicalResoruceId: 'something',
        },
      }, context);
      expect(value).toMatchObject({
        IsComplete: true,
      });
    } catch {
      fail('Should not have thrown.');
    }
    process.env.LogLevel = undefined;
  });
});
