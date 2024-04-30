import { IConstruct } from 'constructs';

/**
 * The base interface for CDK Transforms.  A CDK Transform is a construct that can take
 * input, such as CloudFormation, and transform it, most likely into slightly different
 * CloudFormation.
 *
 * CDK Transforms have two use-cases:  Preprocessing CloudFormation before it is imported to the CDK,
 * and post-processing CloudFormation produced by the CDK before it is written to a file in cdk.out.
 */
export interface ICfnTransform extends IConstruct {
  apply(template: any): any;
}
