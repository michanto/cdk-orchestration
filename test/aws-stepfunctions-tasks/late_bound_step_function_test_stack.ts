import { Stack, StackProps } from 'aws-cdk-lib';
import { StateMachine, DefinitionBody, Chain, Wait, WaitTime, Fail } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { StepFunctionRaceExecution } from './step_function_race';

export class WaitingStateMachine extends StateMachine {
  constructor(scope: Construct, id: string = 'WaitingStateMachine') {
    super(scope, id, {
      stateMachineName: 'WaitingStateMachine',
      definitionBody: DefinitionBody.fromChainable(Chain.start(new Wait(scope, 'Wait', {
        comment: 'Waits for the provided waitSeconds.',
        time: WaitTime.secondsPath('$.waitSeconds'),
      }))),
    });
  }
}

export class FailStateMachine extends StateMachine {
  constructor(scope: Construct, id: string = 'FailStateMachine') {
    super(scope, id, {
      stateMachineName: 'FailStateMachine',
      definitionBody: DefinitionBody.fromChainable(Chain.start(new Fail(scope, 'Fail', {
        comment: 'Fails.',
        error: 'BadDoings',
      }))),
    });
  }
}

/** NOTE:  USED IN INTEGRATION TEST!  CHANGE CAREFULLY. */
export class LbSfseIntegrationTest extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    let waiter = new WaitingStateMachine(this, 'Waiter');
    // let fail = new FailStateMachine(this, 'Failure');
    let inputs = [
      { stateMachine: waiter, inputEvent: { waitSeconds: 50 } },
      { stateMachine: waiter, inputEvent: { waitSeconds: 100 } },
      { stateMachine: waiter, inputEvent: { waitSeconds: 150 } },
      { stateMachine: waiter, inputEvent: { waitSeconds: 200 } },
      // { stateMachine: fail },
    ];

    new StepFunctionRaceExecution(this, 'Execute', {
      contestants: inputs,
    });
  }
}
