import { CfnElement, CfnResource, Stack } from 'aws-cdk-lib';
import { Construct, IConstruct } from 'constructs';
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
   * Better version of CfnResource.isCfnResource, because it first checks to see if
   * the construct is a CfnElement, which is missing in the CfnResource.isCfnResource
   * implementation.
   *
   * See https://github.com/aws/aws-cdk/issues/30473 for details.
   *
   * @param x Construct to test.
   * @returns
   */
  static isCfnResource(x: IConstruct): x is CfnResource {
    return CfnElement.isCfnElement(x) && CfnResource.isCfnResource(x);
  }

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
      x => CfnElementUtilities.isCfnResource(x) &&
        (resourceType == undefined || resourceType == x.cfnResourceType) &&
        (predicate == undefined || predicate(x)),
    );
    return treeSearch.searchDown(scope, Stack.isStack) as CfnResource[];
  }

  /**
   * Finds a single CfnResource, with an optional type and predicate.
   * - If the defaultChild is a matching CfnResource, that is returned.
   * - Otherwise checks for a single matching CfnResource under the scope and throws if:
   *   - There aren't any.
   *   - There is more than one.
   *
   * @param scope Scope for the search.
   * @param resourceType Type of resource to return.
   * @param predicate Optional predicate.
   */
  findCfnResource(scope: Construct, resourceType?: string, predicate?: ICfnResourcePredicate) {
    // Generally prefer to return the defaultChild.
    let defaultChild = scope.node.defaultChild;
    if (defaultChild
        && CfnElementUtilities.isCfnResource(defaultChild)
        && (resourceType == undefined || resourceType == defaultChild.cfnResourceType)
        && (predicate == undefined || predicate(defaultChild))
    ) {
      return defaultChild;
    }

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
