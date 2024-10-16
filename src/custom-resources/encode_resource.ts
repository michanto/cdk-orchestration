import { Fn, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CustomResourceUtilities } from './custom_resources_utilities';
import { CfTemplateType, ImportOrders, Transform } from '../transforms';

/**
 * This transform base64-encodes any L1, L2 or L3 CustomResource it is applied to
 * by moving all properties (other than those listed in SERVICE_PROPERTIES) to EncodedProperties
 * and applying {@link Fn.base64}. This resource will encode it's properties
 * as a post-resolve step, It is meant to be used on CfnCustomResource (or
 * any CfnResource with a ServiceToken), as it does not
 * encode the ServiceToken.  If there is no ServiceToken, the resource is not encoded.
 *
 * Why encode custom resources?  Because CloudFormation will turn numbers and booleans
 * into strings when it calls a custom resource Lambda, and that is not always desirable.
 * Encoding the properties prevents that conversion.  This is a CDK best-practice, and
 * is the recommended work-around for transmitting unaltered properties to a custom resource lambda.
 *
 * Note that the lambda MUST base64 decode the EncodedProperties for use.  Example:
 * ```
 *   // If the properties were encoded, decode them now.
 *  if ('EncodedProperties' in event.ResourceProperties) {
 *    event.ResourceProperties = JSON.parse(Buffer
 *      .from(event.ResourceProperties.EncodedProperties, 'base64')
 *      .toString('utf8'));
 *  }
 * ```
 */
export class EncodeResource extends Transform {
  /**
   * Service properties are used by CloudFormation and thus should not be encoded.  For now,
   * that list means ServiceToken and ServiceTimeout.
   *
   * This future-proofs this transform against another service property being added in the future.
   * Example:
   * ```
   * EncodeResource.SERVICE_PROPERTIES.push('ServiceProperty')
   * ```
   */
  static readonly SERVICE_PROPERTIES = ['ServiceToken', 'ServiceTimeout'];

  constructor(scope: Construct, id: string = 'EncodeResource') {
    super(scope, id);
  }

  /**
   * Run this transform last so previous transforms have access to the
   * custom resource properties.
   * Works fine on custom resources without orders, but it's a nice feature
   * for LambdaCustomResource.
   */
  get order(): string {
    return ImportOrders.WRITER;
  }

  /**
   * Encodes an L1, L2 or L3 custom resource by finding the child custom
   * resource of the scope of this transform.  Throws if there are
   * multiple custom resources under the scope.
   */
  get shimParent(): Construct {
    // Note:  We know this.node.scope exists because of the constructor.
    return new CustomResourceUtilities().findCustomResource(this.node.scope!);
  }

  apply(template: CfTemplateType): CfTemplateType {
    for (let resId in template.Resources) {
      let res = template.Resources[resId];
      if (res.Properties?.EncodedProperties) {
        // Already encoded
        continue;
      }
      if (!res.Properties?.ServiceToken) {
        // Does not need to be encoded.
        continue;
      }
      let serviceProperties: any = {};
      for (let serviceProp of EncodeResource.SERVICE_PROPERTIES) {
        if (res.Properties[serviceProp]) {
          serviceProperties[serviceProp] = res.Properties[serviceProp];
          delete res.Properties[serviceProp];
        }
      }
      let encodedProperties: any = {
        ...serviceProperties,
        // You can create tokens in transforms, but they will get resolved after all transforms are applied.
        EncodedProperties: Fn.base64(Stack.of(this).toJsonString(res.Properties)),
      };
      res.Properties = encodedProperties;
    }
    return template;
  }
}
