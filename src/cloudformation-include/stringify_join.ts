import { Lazy, Token } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ImportOrders, TransformBase, TransformBaseProps } from '../transforms';

/**
 * JSON resource properties can be stored in CloudFormation either as a string,
 * or as an Fn.join of strings and objects.
 *
 * In order for Transforms to act on embedded and joined JSON, the JSON first needs to
 * be stringified.  If the template passed to this class is an Fn.join, this class
 * tokenizes all objects in the join and concatenates them.  This forms valid JSON
 * that can be parsed and modified by Transforms.
 *
 * During synthesis, the CDK will turn the tokenized string back into an Fn.join before
 * writing it to the template.
 */
export class StringifyJoin extends TransformBase {
  constructor(scope: Construct, id: string, props?: TransformBaseProps) {
    super(scope, id, props ?? {
      order: ImportOrders.PRE_READER,
    });
  }

  /** @internal */
  protected _apply(template: any): string {
    if (typeof template == 'string') {
      return template;
    }
    if (template['Fn::Join']) {
      let delimiter = template['Fn::Join'][0];
      // Turn any non-strings into "any" tokens that resolve to the original object.
      let parts = template['Fn::Join'][1].map((part: any) =>
        typeof part == 'string' ? part : Token.asString(Lazy.any({
          produce: () => part,
        }, {
          displayHint: 'JoinPart',
        }), { displayHint: 'JoinPart' }));
      // Concatenate the strings and the tokenized objects.
      template = parts.join(delimiter);
    }
    return template;
  }
}
