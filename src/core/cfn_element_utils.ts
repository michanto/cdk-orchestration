import { CfnElement, CfnResource, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ConstructTreeSearch } from './construct_tree_search';

/**
 * Utilities for use with CfnElement.
 */
export class CfnElementUtilities {
  protected treeSearch = ConstructTreeSearch.for(CfnElement.isCfnElement);


  /**
   * Returns a list of all L1 construct descendents of the scope.
   * @param scope
   */
  cfnElements(scope: Construct) {
    return this.treeSearch.searchDown(scope, x => Stack.isStack(x)) as CfnElement[];
  }

  /**
   * Returns a list of all CfnResource construct descendents of the scope.
   *
   * @param scope
   * @param resourceType
   */
  cfnResources(scope: Construct, resourceType?: string) {
    let treeSearch = ConstructTreeSearch.for(
      x => CfnElement.isCfnElement(x) && CfnResource.isCfnResource(x) &&
        (resourceType == undefined || resourceType == x.cfnResourceType));
    return treeSearch.searchDown(scope, Stack.isStack) as CfnResource[];
  }

  /**
   * Returns the antecedent cnfElement in the tree  (if any).
   * Basially, CfnElement.of (like Stack.of).
   *
   * @param scope
   * @returns
   */
  cfnElementHost(scope: Construct) {
    return this.treeSearch.searchUp(scope);
  }
}