import { CfnStateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { JsonPropertyTransform } from '../cloudformation-include/property_transform';
import { TransformProps } from '../transforms';

export interface StatesTransformProps extends TransformProps {}

export abstract class StatesTransform extends JsonPropertyTransform {
  constructor(scope: Construct, id: string, props?: StatesTransformProps) {
    super(scope, id, {
      ...(props ? props : {}),
      propertyName: 'DefinitionString',
      cfnResourceType: CfnStateMachine.CFN_RESOURCE_TYPE_NAME,
    });
  }
}

