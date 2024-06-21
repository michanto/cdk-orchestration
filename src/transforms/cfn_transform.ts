import { Construct, IConstruct } from 'constructs';
import { ICfnTransform } from './icfn_transform';
import { CFN_TRANSFORM_RTTI } from './private/transform_rtti';
import { TransformHost } from './transform_host';

/**
 * CfnTransform the base class for L1 CDK Transform constructs.  TransformBase is the
 * L2 Transform base class.
 *
 * Transforms are applied to Stacks, CfnElements or CfnTransformHost constructs
 * (such as TemplateImporter).  They allow low-level access to CloudFormation
 * via the apply method.
 */
export abstract class CfnTransform extends Construct implements ICfnTransform {
  /**
   * Checks if `x` if a CfnTransform.
   *
   * Uses duck-typing instead of `instanceof` to allow CfnTransforms from different
   * versions of this library to be included in the same stack.
   *
   * @returns The construct as a CfnTransform or undefined if it is not a CfnTransform.
   */
  public static isCfnTransform(x: any): x is CfnTransform {
    return CFN_TRANSFORM_RTTI.hasRtti(x);
  }

  /**
   * Which construct will apply this transform.
   */
  readonly host: IConstruct;

  public constructor(scope: Construct, readonly id: string) {
    super(scope, id);
    CFN_TRANSFORM_RTTI.addRtti(this);
    this.host = TransformHost.of(this);
  }

  abstract apply(template: any): any
}
