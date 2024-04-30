import { ServiceQueryResult } from './construct_service';
import { ConstructTreeService } from './construct_tree_service';

/**
 * An App-scoped service that is found by looking up the tree.
 * Found services are cached on the querying scope to speed up subsequent lookups.
 */
export class AppConstructTreeService extends ConstructTreeService {
  /**
   * Set service on the root object so it can be shared
   * by all constructs in the tree.
   * @param cache
   * @returns
   */
  protected onCreateCache(cache: ServiceQueryResult): ServiceQueryResult {
    let service = cache.service;
    let scope = cache.scope;
    // If the scope is a app then we've already called set, so no need to call it again.
    if (scope != scope.node.root) {
      let app = scope.node.root;
      this.set(app, service);
    }
    return cache;
  }
}
