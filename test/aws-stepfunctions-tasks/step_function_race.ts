import { Duration } from 'aws-cdk-lib';
import { Effect, ManagedPolicy, Policy, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import {
  Chain, INextable, IChainable, Map, State, TaskInput, Succeed,
  IStateMachine, Fail, StateMachine, JsonPath, Wait, WaitTime, DefinitionBody,
} from 'aws-cdk-lib/aws-stepfunctions';
import { LambdaInvoke } from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { Construct } from 'constructs';
import { Singleton } from '../../src';
import { InlineNodejsFunction } from '../../src/aws-lambda-nodejs';
import { LateBoundStepFunctionsStartExecution } from '../../src/aws-stepfunctions-tasks';
import { StepFunctionTask, StepFunctionTaskProps } from '../../src/orchestration';

const LAMBDA_PATH = `${__dirname}`;

export interface StepFunctionRaceProps {
  readonly initialPolicy?: PolicyStatement[];
}

/**
 * State Machine definition for a {@link StepFunctionRace}.
 * Starts a number of step functions in parallel.
 *
 * The germ of this idea is from the following article by Madhav Vishnubhatta:
 * [Implementing patterns that exit early out of a parallel state in AWS Step
 * Functions](https://aws.amazon.com/blogs/compute/implementing-patterns-that-exit-early-out-of-a-parallel-state-in-aws-step-functions/)
 */
export class StepFunctionRaceDefinition extends Construct implements IChainable {
  private readonly chainable: IChainable;
  readonly initialPolicy: PolicyStatement[];


  constructor(scope: Construct, id: string, props?: StepFunctionRaceProps) {
    super(scope, id);
    this.initialPolicy = props?.initialPolicy ?? [];

    let start = this.createContestantNamesStep();
    let parallel = this.createProcessParallel(this.createProcessInputChain());
    let success = this.createSuccessStep();
    let toCatch: string[] = [];
    for (let i = 0; i < 20; i++) {
      toCatch.push(`Completed.${i+1}`);
    }
    parallel.addCatch(success, {
      errors: toCatch,
    });
    parallel.next(success);
    start.next(parallel);


    this.chainable = Chain.start(start);
  }

  /**
   * We need a lambda to create contestant names from the executionName.  The executionName
   * will be <prefix>_<uuid>, and the contestant names will be <prefix>_<uuid>_<index>.
   * The referee name will be <prefix>_<uuid>_Timeout.
   * @returns
   */
  createContestantNamesStep() {
    let role = new Role(this, 'ContestantNamesRole', {
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [ManagedPolicy.fromAwsManagedPolicyName(
        'service-role/AWSLambdaBasicExecutionRole')],
    });
    let contestantNamesLambda = new InlineNodejsFunction(this, 'ContestantNamesLambda', {
      entry: `${LAMBDA_PATH}/create_contestant_names.js`,
      role: role,
    });
    return new LambdaInvoke(this, 'ContestantNamesTask', {
      lambdaFunction: contestantNamesLambda,
      payload: TaskInput.fromObject({
        ExecutionName: JsonPath.executionName,
        StateMachineExecutions: TaskInput.fromJsonPathAt('$.stateMachineExecutions').value,
      }),
      payloadResponseOnly: true,
      resultPath: '$.stateMachineExecutions',
    });
  }

  /**
   * Chain to run one of the inputs.
   */
  createProcessInputChain(): IChainable {
    let execute = new LateBoundStepFunctionsStartExecution(this, 'InvokeWorkflow', {
      stateMachineArnPath: '$.stateMachineArn',
      input: TaskInput.fromJsonPathAt('$.inputEvent'),
      resultPath: '$.stateMachineOutput',
      name: JsonPath.stringAt('$.name'),
    });
    execute.addCatch(new Wait(this, 'DroppedOut', {
      time: WaitTime.secondsPath('$.inputEvent.totalTimeout'),
    }), { resultPath: '$.errorData' });
    execute.next(new Fail(this, 'ExitEarly', {
      errorPath: JsonPath.stringAt('$.completeFlag'),
    }));
    return Chain.start(execute);
  }

  createProcessParallel(iterator: IChainable): Map {
    return new Map(this, 'ProcessParallel', {
      comment: 'Process parallel',
      itemsPath: '$.stateMachineExecutions',
      resultPath: '$.outputs',
    }).itemProcessor(iterator);
  }

  createSuccessStep(): IChainable {
    return new Succeed(this, 'Succeeded');
  }

  /*************************
     * Chainable definition
     *************************/
  public get endStates(): INextable[] {
    return this.chainable.endStates;
  }

  public get id(): string {
    return this.chainable.id;
  }

  public get startState(): State {
    return this.chainable.startState;
  }
}

/**
 * A StepFunctionRace races StepFunctions against each other, with user-
 * provided inputs for each run.  The winner is the one that finishes first,
 * at which point the winner throws, that throw is caught by the StepFunctionRace
 * state machine, and the race is over.
 *
 * There is also a referee, that calls "Timeout" if the contestants run too long.
 */
export class StepFunctionRace extends StateMachine {
  constructor(scope: Construct, id: string, props?: StepFunctionRaceProps) {
    super(scope, id, {
      definitionBody: DefinitionBody.fromChainable(new StepFunctionRaceDefinition(scope, 'RacerDefinition', {
        initialPolicy: props?.initialPolicy ?? [new PolicyStatement({
          actions: ['states:StartExecution'],
          effect: Effect.ALLOW,
          resources: ['*'],
        })],
      })),
    });
    this.role.attachInlinePolicy(new Policy(this, 'ExecutePolicy', {
      statements: [new PolicyStatement({
        actions: ['states:StartExecution'],
        effect: Effect.ALLOW,
        resources: ['*'],
      })],
    }));
  }
}

/**
 * Simple Wait step that referees the race.
 */
export class RaceReferee extends StateMachine {
  constructor(scope: Construct, id: string = 'RaceReferee') {
    super(scope, id, {
      definitionBody: DefinitionBody.fromChainable(Chain.start(new Wait(scope, 'RaceRefereeWait', {
        comment: 'Waits for the provided waitSeconds.',
        time: WaitTime.secondsPath('$.waitSeconds'),
      }))),
    });
  }
}


/**
 * Properties for the contestants.
 */
export interface StepFunctionRaceExecutionInputs {
  readonly stateMachine: IStateMachine;
  readonly inputEvent?: any;
}

/**
 * Properties for the race execution.
 */
export interface StepFunctionRaceExecutionProps extends
  Omit<StepFunctionTaskProps, 'stateMachine'> {
  readonly contestants: StepFunctionRaceExecutionInputs[];
}

/**
 * Creates a Racer state machine and executes the race.
 *
 * User is responsible for setting dependencies between contestants and StepFunctionRaceExecution.
 */
export class StepFunctionRaceExecution extends Construct {
  constructor(scope: Construct, id: string, props: StepFunctionRaceExecutionProps) {
    super(scope, id);

    // Create singletons for the two state machines - the racer and the referee.
    let racer = this.createStateMachine(props);
    let referee = this.createReferee(props);

    let totalTimeout = (props.totalTimeout ?? Duration.hours(2)).toSeconds();
    // Add the contestants to the race.
    let i = 1;
    let inputs: any = props.contestants.map(c => {
      return {
        stateMachineArn: c.stateMachine.stateMachineArn,
        inputEvent: {
          ...(c.inputEvent ?? {}),
          // Failed contestants (drop-outs) will wait for the referee to call timeout.
          totalTimeout: totalTimeout,
        },
        completeFlag: `Completed.${i++}`,
      };
    });

    // Add the referee to the race, to call timeout.
    inputs.push({
      stateMachineArn: referee.stateMachineArn,
      inputEvent: {
        Comment: 'Referee',
        waitSeconds: totalTimeout,
      },
      completeFlag: 'Timeout',
    });

    // Execute the race.
    /** */
    let execution = new StepFunctionTask(this, 'RaceLrsfe', {
      stateMachine: racer,
      inputEvent: {
        stateMachineExecutions: inputs,
      },
      totalTimeout: props.totalTimeout,
      prefix: props.prefix,
    });
    // NOTE:  SFE will add this in a future version and we will be able to remove it here.
    execution.node.addDependency(racer);
    /** */
  }

  createReferee(_props: StepFunctionRaceExecutionProps) {
    return Singleton.create(this, 'StepFunctionRaceReferee',
      (s, id) => new RaceReferee(s, id)) as RaceReferee;
  }

  createStateMachine(_props: StepFunctionRaceExecutionProps) {
    return Singleton.create(this, 'StepFunctionRace',
      (s, id) => new StepFunctionRace(s, id)) as StepFunctionRace;
  }
}