import { Construct, IConstruct } from 'constructs';
import { ConstructTreeSearch, IStopCondition } from './construct_tree_search';
import { NAMESPACE } from '../private/internals';

/**
 * Factory for a construct service.
 */
export interface IConstructServiceFactory {
  (scope: IConstruct): any;
}

/**
 * Interface for creating a construct.
 */
export interface IConstructFactory {
  (scope: IConstruct, id: string): IConstruct;
}

/**
 * Properties for defining a construct service.
 *
 * A construct service is a symbol-keyed property on a construct.  The CDK uses
 * symbol-keyed properties extensively for RTTI, service caches, such as the myStack cache on
 * constructs created after calling Stack.of (see Stack.of in Stack.ts in the CDK), and hosting constructs (such as the Stack hosting
 * CfnElements.  See cfnElements function in Stack.ts in the CDK).
 *
 * The construct service classes take these CDK techniques and make them explicit.
 * Construct services are similar to construct context, but are settable after the construct has children.
 *
 * There is no type associated with these symbols unless a typed accessor function is defined,
 * such as {@link Stack.of} or {@link CfnElement.isCfnElement}, just to name two CDK examples.
 *
 * In regards to this technique the CDK says (wrt `CfnElement.isCfnElement`):
 *
 * > Uses duck-typing instead of `instanceof` to allow stack elements from different
 * > versions of this library to be included in the same stack.
 */
export interface ConstructServiceProps {
  /**
   * The symbol property for this construct service.  This needs to be
   * unique, so namespacing symobls is recommended:
   * ```
   * // Your package name
   * const NAMESPACE = "@open-constructs/aws-cdk"
   * // PackageName.ServiceName
   * Symbol.for(`${NAMESPACE}.CfnTransform`)
   * ```
   * To ensure uniqueness.
   */
  readonly servicePropertyName: string;
  /**
   * This function is used when calling {@link ConstructService.searchUpOrCreate} or
   * {@link ConstructService.searchSelfOrCreate} to optionally create a service when none
   * is found.
   *
   * Note:  You can also store factories in the tree itself using ConstructService.setFactory.
   * If a factory is found instead of a service, then that factory will be used instead of this
   * default factory.
   */
  readonly factory?: IConstructServiceFactory;
}

/**
 * The result of a service query.
 */
export interface ServiceQueryResult {
  /**
   * The service property of the scope.
   */
  readonly service: any;
  /**
   * A scope with that value for it's service property.
   */
  readonly scope: IConstruct;
  /**
   * The particular service that was queried.
   */
  readonly servicePropertyName: string;
}

/**
 * Defines a service (symbol-keyed property) that can be stored on a construct.
 *
 * Symbol-keyed properties are rarely used directly by end users.  Usage is normally
 * through construct methods, such as Stack.of and Stack.isStack in the CDK.
 *
 * This class and it's derivatives make it easier to use symbol-keyed properites in the CDK.
 */
export class ConstructService {
  /**
   * Returns the value of the property from a ServiceQueryResult.
   * @param found
   */
  static serviceOf(found: ServiceQueryResult | undefined): any {
    return found ? (found.service) : undefined;
  }

  /**
   * Returns the scope of the property from a ServiceQueryResult.
   * @param found
   */
  static scopeOf(found: ServiceQueryResult | undefined): IConstruct | undefined {
    return found ? found.scope : undefined;
  }

  /**
   * Returns the scopes from an array of ServiceQueryResults.
   * @param found
   */
  static scopesOf(found: ServiceQueryResult[]): IConstruct[] {
    return found.map(x => x.scope);
  }

  /**
   * Returns true if a service value is actualy a factory.
   */
  static isFactory(factory: any) {
    return factory && typeof(factory) == 'function' && (factory as any)[ConstructService.factoryProperty];
  }

  /**
   * The symbol for service factory.
   */
  private static readonly factoryProperty: symbol = Symbol.for(`${NAMESPACE}.@factory`);

  /**
   * The symbol for servicePropertyName.
   */
  private readonly serviceProperty: symbol;

  /**
   * The ConstructTreeSearch that finds constructs with the symbol property.
   */
  private readonly treeSearch: ConstructTreeSearch;

  constructor(readonly props: ConstructServiceProps) {
    this.serviceProperty = Symbol.for(props.servicePropertyName);
    this.treeSearch = new ConstructTreeSearch((scope) => this.has(scope));
  }

  /**
   * Creates a ServiceQueryResult for a scope that has the service.
   * @param scope
   * @returns ServiceQueryResult, or undefined if the sope does not have the service.
   */
  protected createSearchResult(scope: IConstruct | undefined) {
    if (!scope) return undefined;

    let service = this.get(scope);
    let result: ServiceQueryResult = {
      service: service,
      scope: scope,
      servicePropertyName: this.props.servicePropertyName,
    };
    return service ? result : undefined;
  }

  /**
   * Returns ServiceQueryResults for all constructs in scopes.
   * @param scopes Scopes validated to have the service.
   */
  protected createSearchResults(scopes: IConstruct[]): ServiceQueryResult[] {
    return scopes.map(s => this.createSearchResult(s)!);
  }

  /**
   * Note:  Switch to Construct.isConstruct once we upgrade constructs to 10.0.92
   */
  protected validateConstruct(scope: IConstruct): scope is Construct {
    if (!Construct.isConstruct(scope)) {
      throw new Error('Construct services must be attached to constructs.');
    }
    return true;
  }

  /**
   * Sets the given value on the scope as the serviceProperty property.
   * @param scope
   * @param service
   */
  set(scope: IConstruct, service: any): any {
    this.validateConstruct(scope);
    if (this.get(scope) === service) {
      return service;
    }
    (scope as any)[this.serviceProperty] = service;
    return service;
  }

  /**
   * Sets a construct service factory on a construct.
   * Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
   * factory.
   */
  setFactory(scope: IConstruct, factory: IConstructServiceFactory) {
    (factory as any)[ConstructService.factoryProperty] = true;
    return this.set(scope, factory);
  }

  /**
   * Gets the serviceSymbol property of the Construct.
   * Returns undefined if the service is not on the construct.
   */
  get(scope: IConstruct): any {
    if (!scope) return undefined;
    this.validateConstruct(scope);
    return (scope as any)[this.serviceProperty];
  }

  /**
   * Returns the construct if the construct has the service, otherwise undefined;
   */
  has(scope: IConstruct): IConstruct | undefined {
    return this.get(scope) ? scope : undefined;
  }

  /**
   * Factory-creates the service and caches it on the scope as the serviceProperty of the construct.
   * @param scope
   * @param factory
   * @protected
   */
  protected createCache(
    scope: IConstruct,
    factory: IConstructServiceFactory | undefined = this.props.factory): ServiceQueryResult | undefined {

    if (factory && this.validateConstruct(scope)) {
      // None in the hierarchy, so create one and cache it on the scope.
      return this.onCreateCache({
        service: this.set(scope, factory(scope)),
        scope: scope,
        servicePropertyName: this.props.servicePropertyName,
      });
    }
    return undefined;
  }

  /**
   * Can cache the created service elsewhere in the tree for re-use.
   * Used by App-scoped or Stack-scoped services.
   * @param cache
   * @returns
   */
  protected onCreateCache(cache: ServiceQueryResult): ServiceQueryResult {
    return cache;
  }

  /**
   * Returns a ServiceQueryResult if the scope has the service.
   * @param scope
   */
  public searchSelf(scope: IConstruct): ServiceQueryResult | undefined {
    return this.createSearchResult(this.treeSearch.searchSelf(scope));
  }

  /**
   * Returns a ServiceQueryResult if the scope has the service.
   * If the scope does not have the service, calls the factory to create the service
   * and caches it on the scope.
   *
   * @param scope
   */
  public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult | undefined {
    let cache = this.searchSelf(scope);
    if (!cache) {
      return this.createCache(scope);
    }
    return cache;
  }

  /**
   * Returns array of ServiceQueryResult for constructs in the sub-tree
   * that have the service (including the given scope).
   *
   * @param scope
   * @param stopCondition
   */
  public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[] {
    return this.createSearchResults(this.treeSearch.searchDown(scope, stopCondition));
  }

  /**
   * Check the hierarchy to see if there is an ascendent object of scope
   * that defines the serviceProperty (including scope).
   *
   * Uses stopCondition to decide where to stop the searchUp.
   */
  public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult | undefined {
    return this.createSearchResult(this.treeSearch.searchUp(scope, stopCondition));
  }
}
