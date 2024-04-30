import { IConstruct } from 'constructs';

/**
 * Generalized little-l lambda for a construct.
 */
export interface IConstructPredicate {
  (scope: IConstruct): IConstruct | undefined;
}

/**
 * Defines where to stop when navigating the construct tree.
 * If not provided, we stop either at the top or bottom of the tree (depending
 * on search direction).
 */
export interface IStopCondition {
  (scope: IConstruct): boolean;
}

/**
 * A construct predicate type assertion.
 *
 * Enables using CDK XXX.isXXX methods with ConstructTreeSearch and
 * IConstructPredicate.
 * Such as CfnElement.isCfnElement or Stack.isStack.
 *
 * Usage:
 */
export interface IConstuctTest {
  (x: IConstruct): boolean;
}

/**
 * Searches the construct tree based on predicate and stopConditions.
 *
 * Three searches are supported: {@link searchSelf}, {@link searchDown}
 * and {@link searchUp}.
 *
 * QueryResult should either be, or contain (as a property), the construct itself,
 * so you know which construct to associate with the query result.
 */
export class ConstructTreeSearch {
  /**
   * Helper for finding constructs using ConstructTreeSearch with XXX.isXXX functions
   * (such as Stack.isStack and CfnElement.isCfnElement).  Returns a construct predicate
   * that itself returns only the construct, as opposed to ConstructService which returns
   * both the construct and the service.
   *
   * @param test Test to use when finding constructs.
   * @returns Construct predicate for the test.
   */
  static for(test: IConstuctTest) {
    return new ConstructTreeSearch((scope: IConstruct) => test(scope) ? scope: undefined);
  }

  constructor(readonly predicate: IConstructPredicate) { }

  /**
   * Returns T or undefined for the scope, based on predicate.
   * @param scope
   */
  public searchSelf(scope: IConstruct) {
    return this.predicate(scope);
  }

  /**
   * Returns array of results based on predicate, searching the sub-tree
   * starting at scope.
   *
   * @param scope Start for search.
   * @param stopCondition End for search (such as sub stack)
   * @param into Array of results.  Same as return value.
   */
  public searchDown(scope: IConstruct, stopCondition?: IStopCondition, into: IConstruct[] = []): IConstruct[] {
    let foundOne = this.searchSelf(scope);
    if (foundOne) {
      into.push(foundOne);
    }

    for (const child of scope.node.children) {
      if (stopCondition && stopCondition(child)) { continue; }

      // Include all descendents
      this.searchDown(child, stopCondition, into);
    }

    return into;
  }

  /**
   * Check the hierarchy to see if there is an ascendent object of scope
   * that defines the serviceProperty.
   *
   * Uses stopCondition to decide where to stop the searchUp, defaults to root.
   */
  public searchUp(scope: IConstruct, stopCondition?: IStopCondition): IConstruct | undefined {
    let cache = this.searchSelf(scope);
    if (cache) {
      return cache;
    }

    if (stopCondition && stopCondition(scope)) {
      // We've reached the stop point and did not find it.  The stop point itself may have the service.
      return undefined;
    }

    const newScope: IConstruct | undefined = scope.node.scope;

    // Stop once we get to the top of the hierarchy.
    return newScope ? this.searchUp(newScope, stopCondition) : undefined;
  }
}
