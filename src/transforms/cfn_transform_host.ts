import { Construct } from 'constructs';
import { TRANSFORM_HOST_RTTI } from './private/transform_rtti';
import { TransformHost } from './transform_host';
import { Transforms } from './transforms';

/**
 * CfnTransformHost allows transforms to be used anywhere JSON is accessible.
 *
 * Transforms hosted by a Stack or CfnElement are
 * applied during synthesis (calls to _toCloudFormation). Adding a
 * CfnTransform to a Stack or CfnElement will cause the _toCloudFormation
 * method to be proxied to apply Transforms.
 *
 * This class is used for import (see TemplateImporter in cloudformation-include submodule) and
 * for properties (see StatesTransform in aws-stepfunctions submodule), and other non-stack
 * non-element scenarios.
 */
export class CfnTransformHost extends Construct {
  /**
   * Tells you if an object is a CfnTransformHost.
   * Duck-typing.
   */
  static isCfnTransformHost(scope: Construct): boolean {
    return TransformHost.isTransformHost(scope) && 'apply' in scope;
  }

  constructor(scope: Construct, id: string) {
    super(scope, id);
    TRANSFORM_HOST_RTTI.addRtti(this);
  }

  /**
   * Applies the transforms from this host to the template.
   * Can be called at any time, multiple times if necessary.
   */
  protected apply(template: any) {
    return Transforms.of(this).apply(template);
  }
}
