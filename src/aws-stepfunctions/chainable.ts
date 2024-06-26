import { IChainable, State, INextable } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';

/**
 * Base class for StepFunction definitions.
 *
 * Helps users define StepFunction definitions as constructs thusly:
 * ```
 * class MyDefinition extends Chainable {
 *   constructor(scope: Construct, id: string) {
 *     super(scope, id);
 *     let start = new Pass(stack, 'Pass')
 *     this.wrapped = Chain.start(start);
 *   }
 * }
 * let definition = new MyDefinition(stack, 'PassDef');
 * let sm = new StateMachine(stack, 'Passer', {
 *    definitionBody: DefinitionBody.fromChainable(definition),
 * });
 * ```
 */
export abstract class Chainable extends Construct implements IChainable {
  readonly abstract wrapped: IChainable;

  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  get id(): string {
    return this.wrapped.id;
  }

  get startState(): State {
    return this.wrapped.startState;
  };

  get endStates(): INextable[] {
    return this.wrapped.endStates;
  };
}
