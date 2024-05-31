import { CfnResource, Stack } from 'aws-cdk-lib';
import { CfnStateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { BaseImporter, StringifyJoin, YamlParser, Stringifier } from '../cloudformation-include';
import { ConstructTreeSearch } from '../core';
import { Transform, Transforms, ImportOrders, TransformProps, CfTemplateType } from '../transforms';

/**
 * Applies StatesTranforms to a StateMachine definiton.
 *
 * This transform sits directly under the CfnStateMachine.
 * It's job is to apply the step function transforms
 * (hosted by the StepFunctionTransformHost) to the stepFunction.
 *
 * Create a StateMachine, then apply a StatesTransform to it.
 * That creates all the scaffolding for applying a StatesTransform to
 * a CfnStateMachine, including this class.
 *
 * That creates a StatesTransformApplier, which creates
 * a StatesTransformHost.  StepFunctionTransforms are hosted
 * by the StepFunctionTransformHost.  When the StateMachine is
 */
export class StatesTransformApplier extends Transform {
  static readonly APPLIER_ID = '@StatesTransformApplier';

  constructor(scope: Construct, id: string = StatesTransformApplier.APPLIER_ID) {
    super(scope, id);
  }

  /**
   * Find the StatesTransformHost and apply those to the state machine definition.
   */
  apply(template: CfTemplateType) {
    let host = this.node.findChild(StatesTransformHost.HOST_ID) as StatesTransformHost;
    if (!host) {
      throw new Error('Could not find a StatesTransformHost.  Bad StatesTransform setup.');
    }
    for (let resId in template.Resources) {
      let resource = template.Resources[resId];
      if (resource.Type == CfnStateMachine.CFN_RESOURCE_TYPE_NAME) {
        resource.Properties.DefinitionString =
          Transforms.of(host).apply(resource.Properties.DefinitionString);
      }
    }

    return template;
  }
}

/**
 * Hosts StatesTransforms.  Must be a child of a StatesTransformApplier.
 */
export class StatesTransformHost extends BaseImporter {
  static readonly HOST_ID = '@StatesTransformHost';

  static isCfnStateMachine(scope: Construct): scope is CfnStateMachine {
    return CfnResource.isCfnResource(scope) && scope.cfnResourceType == CfnStateMachine.CFN_RESOURCE_TYPE_NAME;
  }

  static getStatesTransformHost(scope: Construct): StatesTransformHost {
    let stateMachine = ConstructTreeSearch.for(StatesTransformHost.isCfnStateMachine)
      .searchDown(scope, Stack.isStack)?.pop();
    if (!stateMachine) {
      throw new Error('No state machine found');
    }
    let statesTransformApplier = stateMachine.node.tryFindChild(StatesTransformApplier.APPLIER_ID) as StatesTransformApplier;
    if (!statesTransformApplier) {
      statesTransformApplier = new StatesTransformApplier(stateMachine);
    }
    let statesTransformHost = statesTransformApplier.node.tryFindChild(StatesTransformHost.HOST_ID) as StatesTransformHost;
    if (!statesTransformHost) {
      statesTransformHost = new StatesTransformHost(statesTransformApplier);
    }
    return statesTransformHost;
  }

  protected constructor(scope: StatesTransformApplier, id: string = StatesTransformHost.HOST_ID) {
    super(scope, id);
    // If the StateMachine definition is represented as an Fn.join, this
    // turns the join into valid JSON that can be parsed by the Yaml parser.
    new StringifyJoin(this.preReaderOrder, 'Joiner');
    // FUTURE:  Figure out why these don't find the order automatically.
    new YamlParser(this.parserOrder, 'YamlParser');
    // NOTE: Between the YamlParser and the Stringifier, the StatesTransforms run.
    // Turns the parsed Yaml back into a string so it can be written back to the template.
    new Stringifier(this.writerOrder, 'Stringify');
  }
}

export interface StatesTransformProps extends TransformProps {}

export abstract class StatesTransform extends Transform {
  constructor(scope: Construct, id: string, props?: StatesTransformProps) {
    super(scope, id, props);
  }

  findShimParent(): Construct {
    let tHost = StatesTransformHost.getStatesTransformHost(this.node.scope!);
    let order = tHost.node.tryFindChild(this.order ?? ImportOrders.TRANSFORMS) as Construct;
    if (!order) {
      order = tHost;
    }
    return order;
  }
}

