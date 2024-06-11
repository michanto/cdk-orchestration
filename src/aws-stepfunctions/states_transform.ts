import { CfnStateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { JsonPropertyTransform } from '../transforms/property_transform';

/**
 * This transform allows you to edit the DefinitionString property
 * of a StateMachine.  This is great for editing the DefinitionString
 * of a StateMachine you don't have the code for.
 *
 * This Transform creates it's own scaffolding (TransformHost and Applier)
 * for the L1 Transform when you add it to an existing StateMachine.
 */
export abstract class StatesTransform extends JsonPropertyTransform {
  constructor(scope: Construct, id: string) {
    super(scope, id, {
      propertyName: 'DefinitionString',
      resourceType: CfnStateMachine.CFN_RESOURCE_TYPE_NAME,
    });
  }
}

