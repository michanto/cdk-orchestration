import { IConstruct } from 'constructs';
import {
  ConstructService,
  IConstructServiceFactory,
  ConstructServiceProps,
  ServiceQueryResult,
} from './construct_service';
import { IStopCondition } from './construct_tree_search';

/**
 * Properties for ConstructTreeService.
 */
export interface ConstructTreeServiceProps extends ConstructServiceProps {
  /**
   * The `stopCondition` function is used in two cases:
   *
   * 1. To determine when to stop searching up the tree when calling
   * {@link ConstructService.searchUpOrCreate}.  For example, this function can be used to stop
   * searching up the tree when we reach a Stack object.
   *
   * 2. To stop recursion down the tree when calling {@link ConstructService.searchDown}.
   * Recursion will continue with the next child, unless that child also meets the stopCondition.
   * For example, this function can be used to stop recursion into sub-stacks.
   *
   * If not defined, recursion will stop when we reach either the top or bottom of the tree,
   * depending on search direction.
   *
   * A typical condition would be something like:
   * ```
   * (c) => Stack.isStack(c)
   * ```
   * Which would cause the search to stop at a stack (or sub-stack depending on direction of the search).
   *
   * The stopCondition is not applied when calling  {@link ConstructService.searchSelf}
   * or {@link ConstructService.searchSelfOrCreate}.
   */
  readonly stopCondition?: IStopCondition;
}

/**
 * An IOC service stored in the construct tree with heirarchical lookup.
 *
 * If the service is not found on a consturct, it is looked for up the tree and then is cached on
 * the construct.
 */
export class ConstructTreeService extends ConstructService {
  constructor(readonly treeServiceProps: ConstructTreeServiceProps) {
    super(treeServiceProps);
  }

  /**
   * Searches towards the root for a value.  If the value is found,
   * cache the value on the scope (to speed up future gets) and
   * return the pair.  If not, call the factory to create a value and
   * cache it on the scope.
   *
   * @param scope
   */
  public searchUpOrCreate(scope: IConstruct): ServiceQueryResult | undefined {
    let cache = this.searchSelf(scope);

    if (cache) {
      return cache;
    } else {
      // Check the hierarchy for an object.
      cache = this.searchUp(scope, this.treeServiceProps.stopCondition);

      if (cache) {
        // Allow factories to be installed in the hierarchy.
        if (ConstructService.isFactory(cache.service)) {
          return this.createCache(scope, cache.service as IConstructServiceFactory);
        }
        // Cache it on this object for fast lookups.
        return {
          service: this.set(scope, cache.service),
          scope: scope,
          servicePropertyName: this.props.servicePropertyName,
        };
      } else {
        // Use the default factory to create it.
        return this.createCache(scope);
      }
    }
  }

  /**
   * Returns the cached service on an object, or creates one if none is available
   * up the hierarchy.
   *
   * @param scope
   */
  of(scope: IConstruct) {
    return ConstructService.serviceOf(
      this.searchUpOrCreate(scope))!;
  }
}
