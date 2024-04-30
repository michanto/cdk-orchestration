import { Construct } from 'constructs';
import { CFN_TRANSFORM_HOST_RTTI } from './private/transform_rtti';
import { TransformHost } from './transform_host';
import { Transforms } from './transforms';

/**
 * Normally, transforms are hosted by a Stack or CfnElement, and they are
 * applied during synthesis (calls to _toCloudFormation). Adding a
 * CfnTransform to a Stack or CfnElement will cause the _toCloudFormation
 * method to be proxied to apply Transforms.
 *
 * But if you want transforms hosted for some other reason, this is the class you should use.
 * This class hosts transforms, but does not know what to do with them.
 * So anything can be done with the transforms hosted here, but they will not affect the stack itself.
 *
 * This is used for import and other non-stack not-element scenarios.
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
    CFN_TRANSFORM_HOST_RTTI.addRtti(this);
  }

  /**
   * Applies the transforms from this host to the template.
   * Can be called at any time, multiple times if necessary.
   */
  protected apply(template: any) {
    return Transforms.of(this).apply(template);
  }
}
