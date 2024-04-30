import { CfnResource } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BUILD_TIME, ConstructTreeSearch } from '../core';

/**
 * Utilities for creating custom resources
 */
export class CustomResourceUtilities {
  static isCustomResource(elt: Construct): elt is CfnResource {
    return CfnResource.isCfnResource(elt) && (elt as any)._cfnProperties.ServiceToken;
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

  /**
   * Always run a custom resource.  Throws if it cannot find one custom resource under target.
   * @param target - CustomResource, AwsCustomResource or similar.
   */
  runResourceAlways(target: Construct) {
    let resource = this.findCustomResource(target);

    resource.addPropertyOverride('Version', BUILD_TIME);
  }
}