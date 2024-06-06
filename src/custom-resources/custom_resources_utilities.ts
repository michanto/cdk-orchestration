import { CfnElement, CfnResource } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ConstructTreeSearch } from '../core';

/**
 * Utilities for creating custom resources
 */
export class CustomResourceUtilities {
  static isCustomResource(elt: Construct): boolean {
    return CfnResource.isCfnResource(elt)
      && CfnElement.isCfnElement(elt) // isCfnResource isn't good enough by itself.
      && (elt.cfnResourceType.startsWith('Custom::') ||
    elt.cfnResourceType == 'AWS::CloudFormation::CustomResource');
  }
  protected treeSearch = ConstructTreeSearch.for(CustomResourceUtilities.isCustomResource);

  /**
   * Returns the CfnResource that produces the custom resource.  This function throws
   * if there are none (or more than one).
   * @param target
   * @returns
   */
  findCustomResource(target: Construct) {
    let elements = this.treeSearch.searchDown(target);
    if (elements.length != 1) {
      throw new Error(`Construct ${
        target.node.path
      } is not a known custom resource type.  Found ${elements.length} CustomResources, expected one.`);
    }

    return elements.pop() as CfnResource;
  }
}

