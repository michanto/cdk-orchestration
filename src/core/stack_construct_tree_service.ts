import { Stack } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
import { ServiceQueryResult } from './construct_service';
import { ConstructTreeService } from './construct_tree_service';

/**
 * A stack-scoped service that is found by looking up the tree.
 * Found services are cached on the querying scope to speed up subsequent lookups.
 */
export class StackConstructTreeService extends ConstructTreeService {
  /**
   * When a stack service is created, set it on the Stack object so it can be shared
   * by all constructs in the stack.
   *
   * @param cache
   * @returns
   */
  protected onCreateCache(cache: ServiceQueryResult): ServiceQueryResult {
    let service = cache.service;
    let scope = cache.scope;
    // If the scope is a stack then we've already called set, so no need to call it again.
    if (!Stack.isStack(scope)) {
      let stack = Stack.of(scope);
      this.set(stack, service);
    }
    return cache;
  }

  /**
   * Return the stack service for the construct.
   *
   * @param construct
   * @returns
   */
  of(construct: IConstruct) {
    // Will throw if the construct is not in a stack.
    Stack.of(construct);
    return super.of(construct);
  }
}

