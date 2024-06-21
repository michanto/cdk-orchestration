import { CfnElement, CfnResource, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ConstructTreeSearch } from '../core';

/**
 * Utilities for creating custom resources
 */
export class CustomResourceUtilities {
  /**
   * Checks if `elt` if a L1 CustomResource construct (CfnResource).
   *
   * @param elt Construct to test.
   */
  static isCustomResource(elt: Construct): boolean {
    return CfnResource.isCfnResource(elt)
      && CfnElement.isCfnElement(elt) // isCfnResource isn't good enough by itself.
      && (elt.cfnResourceType.startsWith('Custom::') ||
    elt.cfnResourceType == 'AWS::CloudFormation::CustomResource');
  }

  protected treeSearch = ConstructTreeSearch.for(CustomResourceUtilities.isCustomResource);

  /**
   * Returns a list of all L1 custom resources under the scope.
   * @param scope Scope for the search.
   */
  customResources(scope: Construct) {
    return this.treeSearch.searchDown(scope, Stack.isStack) as CfnResource[];
  }

  /**
   * Returns the CfnResource that produces the custom resource.  This function throws
   * if there are none (or more than one).
   * @param target
   */
  findCustomResource(target: Construct) {
    let elements = this.treeSearch.searchDown(target);
    if (elements.length != 1) {
      throw new Error(`Construct ${
        target.node.path
      } is not a known custom resource type.  Found ${elements.length} CustomResources, expected one (1).`);
    }

    return elements.pop()! as CfnResource;
  }
}

