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
    return this.treeSearch.searchDown(scope, Stack.isStack) as CfnElement[];
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
   * Finds a single CfnResource, with an optional type.  Throws if there are more (or fewer) than one.
   *
   * @param scope
   * @param resourceType Type of resource to find.
   */
  findCfnResource(scope: Construct, resourceType?: string) {
    let searchResults = new CfnElementUtilities().cfnResources(scope, resourceType);
    if (searchResults.length != 1) {
      throw new Error(`Expected to find one (1) CfnResource of type ${resourceType ?? '"any"'} found ${searchResults.length}.`);
    }
    return searchResults.pop()!;
  }

  /**
   * Returns the antecedent cnfElement in the tree  (if any).
   * Basially, CfnElement.of (like Stack.of).
   *
   * @param scope
   */
  cfnElementHost(scope: Construct) {
    return this.treeSearch.searchUp(scope, Stack.isStack);
  }
}