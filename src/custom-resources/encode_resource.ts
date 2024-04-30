import { Fn, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CustomResourceUtilities } from './custom_resources_utilities';
import { CfnTransform } from '../transforms';

/**
 * This transform base64-encodes any CustomResource it is applied to
 * by moving all properties (other than ServiceToken) to EncodedProperties
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
export class EncodeResource extends CfnTransform {
  /**
   * Encode an L1, L2 or L3 resource by calling this method instead of having to
   * find the L1 yourself.  Throws if there are multiple custom resources under scope.
   *
   * @param scope Construct containing one L1 custom resource construct.
   * @param id Id for the EncodeResource transform.
   */
  static encodeCustomResource(scope: Construct, id?: string) {
    let cfnCustomResource = new CustomResourceUtilities().findCustomResource(scope);
    new EncodeResource(cfnCustomResource, id ?? 'EncodeResource');
  }

  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  apply(template: any): any {
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
      let serviceToken = res.Properties.ServiceToken;
      delete res.Properties.ServiceToken;
      let encodedProperties = {
        ServiceToken: serviceToken,
        EncodedProperties: Fn.base64(Stack.of(this).toJsonString(res.Properties)),
      };
      res.Properties = encodedProperties;
    }
    return template;
  }
}
