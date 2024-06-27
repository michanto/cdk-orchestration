import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ConstructTreeSearch } from './construct_tree_search';

/**
 * Typed predicate for use with StackUtilities
 */
export interface StackPredicate {
  (x: Stack): boolean;
}

/** Find stacks in the construct tree. */
export class StackUtilities {
  /**
   * Stack.of, but does not throw.
   * @param scope Scope for the search.
   * @param predicate Optional predicate.
   */
  stackHost(scope: Construct, predicate?: StackPredicate) {
    return ConstructTreeSearch.for(
      x => Stack.isStack(x) &&
      (predicate == undefined || predicate(x)),
    ).searchUp(scope) as Stack | undefined;
  }

  /**
   * Returns a list of all Stack construct descendents of the scope.
   * @param scope Scope for the search.
   * @param predicate Optional predicate.
   */
  stacks(scope: Construct, predicate?: StackPredicate) {
    return ConstructTreeSearch.for(
      x => Stack.isStack(x) &&
      (predicate == undefined || predicate(x)),
    ).searchDown(scope) as Stack[];
  }
}
