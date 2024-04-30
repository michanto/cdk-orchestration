import { Construct, IConstruct } from 'constructs';
import { ICfnTransform } from './icfn_transform';
import { CFN_TRANSFORM_RTTI } from './private/transform_rtti';
import { TransformHost } from './transform_host';

/**
 * This is the base class for CDK Transform constructs.
 *
 * A CfnTransform class will have no affect on the template unless it is hosted.
 * The hosting construct must support Transform processing.  CfnTransformHostHook
 * ensures the construct is hosted by either the antecedent CfnElement, Stack, or by
 * another construct in the heirarchy (such as a TemplateImporter)
 */
export abstract class CfnTransform extends Construct implements ICfnTransform {
  /**
   * Returns `true` if a construct is a CfnTransform.
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
    // Calls TransformHost.hook on the host Stack and/or CfnElement to ensure there is a host for the Transform.
    TransformHost.ensureHosted(this);
    CFN_TRANSFORM_RTTI.addRtti(this);
    this.host = TransformHost.of(this);
  }

  /**
   * Modifies the template
   * @param template The template to transform.
   * @returns The template.  If not, an exception is thrown when the transform is applied.
   */
  abstract apply(template: any): any
}
