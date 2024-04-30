import {
  IStableAnyProducer,
  IStableListProducer,
  IStableNumberProducer,
  IStableStringProducer,
  Lazy,
  LazyAnyValueOptions,
  LazyListValueOptions,
  LazyStringValueOptions,
} from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
import { AppConstructTreeService } from './app_construct_tree_service';
import { IConstructServiceFactory } from './construct_service';
import { ConstructTreeService } from './construct_tree_service';
import { StackConstructTreeService } from './stack_construct_tree_service';
import { NAMESPACE } from '../private/internals';

/**
 * Service for tokens scoped to a construct.
 * Allows the user to cleanly separate token usage and resolution.
 * Users should use AppTokens or StackTokens instead of directly using this class.
 */
export class TokenService {
  static readonly TOKEN_SERVICE_FACTORY: IConstructServiceFactory = (_c: IConstruct) => {
    return {};
  };

  constructor(readonly service: ConstructTreeService) {
  }

  /**
   * Creates a named token.
   */
  string(scope: IConstruct, name: string, options?: LazyStringValueOptions) {
    return Lazy.string({
      produce: () => this.service.of(scope)[name]?.produce() ?? '',
    }, options);
  }

  /**
   * Registers a resolver for the named token.
   */
  resolveString(scope: IConstruct, name: string, producer: IStableStringProducer) {
    this.service.of(scope)[name] = producer;
  }

  /**
   * Creates a named token.
   */
  any(scope: IConstruct, name: string, options?: LazyAnyValueOptions) {
    return Lazy.any({
      produce: () => {
        return this.service.of(scope)[name]?.produce() ?? {};
      },
    }, options);
  }

  /**
   * Registers a resolver for the named token.
   */
  resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer) {
    this.service.of(scope)[name] = producer;
  }

  /**
   * Creates a named token.
   */
  list(scope: IConstruct, name: string, options?: LazyListValueOptions) {
    return Lazy.list({
      produce: () => this.service.of(scope)[name]?.produce() ?? [],
    }, options);
  }

  /**
   * Registers a resolver for the named token.
   */
  resolveList(scope: IConstruct, name: string, producer: IStableListProducer) {
    this.service.of(scope)[name] = producer;
  }

  /**
   * Creates a named token.
   */
  number(scope: IConstruct, name: string) {
    return Lazy.number({
      produce: () => this.service.of(scope)[name]?.produce() ?? 0,
    });
  }

  /**
   * Registers a resolver for the named token.
   */
  resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer) {
    this.service.of(scope)[name] = producer;
  }
}

/**
 * Provides a way to map named tokens to their producers.
 * Names should be unique within the app.
 */
export class AppToken {
  /**
   * Creates a named token.
   */
  static string(scope: IConstruct, name: string, options?: LazyStringValueOptions) {
    return AppToken.APP_TOKENS.string(scope, name, options);
  }

  /**
   * Registers a resolver for the named token.
   */
  static resolveString(scope: IConstruct, name: string, producer: IStableStringProducer) {
    AppToken.APP_TOKENS.resolveString(scope, name, producer);
  }

  /**
   * Creates a named token.
   */
  static any(scope: IConstruct, name: string, options?: LazyAnyValueOptions) {
    return AppToken.APP_TOKENS.any(scope, name, options);
  }

  /**
   * Registers a resolver for the named token.
   */
  static resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer) {
    AppToken.APP_TOKENS.resolveAny(scope, name, producer);
  }

  /**
   * Creates a named token.
   */
  static list(scope: IConstruct, name: string, options?: LazyListValueOptions) {
    return AppToken.APP_TOKENS.list(scope, name, options);
  }

  /**
   * Registers a resolver for the named token.
   */
  static resolveList(scope: IConstruct, name: string, producer: IStableListProducer) {
    AppToken.APP_TOKENS.resolveList(scope, name, producer);
  }

  /**
   * Creates a named token.
   */
  static number(scope: IConstruct, name: string) {
    return AppToken.APP_TOKENS.number(scope, name);
  }

  /**
   * Registers a resolver for the named token.
   */
  static resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer) {
    AppToken.APP_TOKENS.resolveNumber(scope, name, producer);
  }

  protected static readonly APP_TOKENS = new TokenService(new AppConstructTreeService({
    servicePropertyName: `${NAMESPACE}.AppTokens`,
    factory: TokenService.TOKEN_SERVICE_FACTORY,
  }));
}

/**
 * Provides a way to map named tokens to their producers.
 * Names should be unique within a stack.
 */
export class StackToken {
  /**
     * Creates a named token.
     */
  static string(scope: IConstruct, name: string, options?: LazyStringValueOptions) {
    return StackToken.STACK_TOKENS.string(scope, name, options);
  }

  /**
     * Registers a resolver for the named token.
     */
  static resolveString(scope: IConstruct, name: string, producer: IStableStringProducer) {
    StackToken.STACK_TOKENS.resolveString(scope, name, producer);
  }

  /**
     * Creates a named token.
     */
  static any(scope: IConstruct, name: string, options?: LazyAnyValueOptions) {
    return StackToken.STACK_TOKENS.any(scope, name, options);
  }

  /**
     * Registers a resolver for the named token.
     */
  static resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer) {
    StackToken.STACK_TOKENS.resolveAny(scope, name, producer);
  }

  /**
     * Creates a named token.
     */
  static list(scope: IConstruct, name: string, options?: LazyListValueOptions) {
    return StackToken.STACK_TOKENS.list(scope, name, options);
  }

  /**
     * Registers a resolver for the named token.
     */
  static resolveList(scope: IConstruct, name: string, producer: IStableListProducer) {
    StackToken.STACK_TOKENS.resolveList(scope, name, producer);
  }

  /**
     * Creates a named token.
     */
  static number(scope: IConstruct, name: string) {
    return StackToken.STACK_TOKENS.number(scope, name);
  }

  /**
     * Registers a resolver for the named token.
     */
  static resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer) {
    StackToken.STACK_TOKENS.resolveNumber(scope, name, producer);
  }

  protected static readonly STACK_TOKENS = new TokenService(new StackConstructTreeService({
    servicePropertyName: `${NAMESPACE}.StackTokens`,
    factory: TokenService.TOKEN_SERVICE_FACTORY,
  }));
}
