import { IConstruct } from 'constructs';

/**
 * The base interface for CDK Transforms.  A CDK Transform is a construct that can take
 * input, such as CloudFormation, and transform it, most likely into slightly different
 * CloudFormation.
 *
 * CDK Transforms have many use-cases.  See the Transforms section of the README.md file.
 */
export interface ICfnTransform extends IConstruct {
  apply(template: any): any;
}
