import { State } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { StatesTransform } from './states_transform';
import { Log } from '../core';
import { CfJsonType } from '../transforms';

/**
 * Properties for InsertStepFunctionState.
 */
export interface InsertStepFunctionStateProps {
  /**
   * State to insert into the StateMachine.
   */
  readonly state: State;
  /**
   * Step after which to insert the new state.
   */
  readonly insertAfterStep: string;
}

/**
 * Inserts a StepFunctionState after an existing state in the StateMachine defintion.
 */
export class InsertStepFunctionState extends StatesTransform {
  constructor(scope: Construct, id: string, protected readonly props: InsertStepFunctionStateProps) {
    super(scope, id);
  }

  apply(template: CfJsonType) {
    let taskJson = this.props.state.toStateJson() as any;
    if (taskJson.End) {
      delete taskJson.End;
    }
    if (taskJson.Next) {
      delete taskJson.Next;
    }
    for (let stateName in template.States) {
      if (stateName == this.props.insertAfterStep) {
        let stateNext = template.States[stateName].Next;
        let stateEnd = template.States[stateName].End;
        template.States[stateName].Next = this.props.state.stateId;
        template.States[this.props.state.stateId] = taskJson;
        if (stateNext) {
          taskJson.Next = stateNext;
        }
        if (stateEnd) {
          taskJson.End = stateEnd;
        }
        break;
      }
    }
    Log.of(this).debug(`${JSON.stringify(template, undefined, 2)}`);
    return template;
  }
}
