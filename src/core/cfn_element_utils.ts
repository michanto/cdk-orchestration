import { CfnElement, Stack } from 'aws-cdk-lib';
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