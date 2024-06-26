import { CfnElement, CfnResource, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ConstructTreeSearch } from './construct_tree_search';

/**
 * Typed predicate for use with CfnElementUtilities
 */
export interface ICfnElementPredicate {
  (x: CfnElement): boolean;
}

/**
 * Typed predicate for use with CfnElementUtilities and CustomResourceUtilities.
 */
export interface ICfnResourcePredicate {
  (x: CfnResource): boolean;
}

/** Find L1 constructs (CfnElements and CfnResources) in the construct tree. */
export class CfnElementUtilities {
  /**
   * Returns a list of all L1 construct descendents of the scope.
   * @param scope Scope for the search.
   * @param predicate Optional predicate.
   */
  cfnElements(scope: Construct, predicate?: ICfnElementPredicate) {
    return ConstructTreeSearch.for(
      x => CfnElement.isCfnElement(x) &&
      (predicate == undefined || predicate(x)),
    ).searchDown(scope, Stack.isStack) as CfnElement[];
  }

  /**
   * Returns a list of all CfnResource construct descendents of the scope.
   *
   * @param scope Scope for the search.
   * @param resourceType Type of resource to return.
   * @param predicate Optional predicate.
   */
  cfnResources(scope: Construct, resourceType?: string, predicate?: ICfnResourcePredicate) {
    let treeSearch = ConstructTreeSearch.for(
      x => CfnElement.isCfnElement(x) && CfnResource.isCfnResource(x) &&
        (resourceType == undefined || resourceType == x.cfnResourceType) &&
        (predicate == undefined || predicate(x)),
    );
    return treeSearch.searchDown(scope, Stack.isStack) as CfnResource[];
  }

  /**
   * Finds a single CfnResource, with an optional type.  Throws if there are more (or fewer) than one.
   *
   * @param scope Scope for the search.
   * @param resourceType Type of resource to return.
   * @param predicate Optional predicate.
   */
  findCfnResource(scope: Construct, resourceType?: string, predicate?: ICfnResourcePredicate) {
    let searchResults = this.cfnResources(scope, resourceType, predicate);
    if (searchResults.length != 1) {
      throw new Error(`Expected to find one (1) CfnResource of type ${resourceType ?? '"any"'} found ${searchResults.length}.`);
    }
    return searchResults.pop()!;
  }

  /**
   * Returns the antecedent cnfElement in the tree  (if any).
   * Basially, CfnElement.of (like Stack.of).
   *
   * @param scope Scope for the search.
   * @param predicate Optional predicate.
   */
  cfnElementHost(scope: Construct, predicate?: ICfnElementPredicate) {
    return ConstructTreeSearch.for(
      x => CfnElement.isCfnElement(x) &&
      (predicate == undefined || predicate(x)),
    ).searchUp(scope, Stack.isStack) as CfnElement | undefined;
  }
}
