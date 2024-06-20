import { Construct } from 'constructs';
import { ILogger, Logger, LogLevel, IStringProvider } from './logger';

/**
 * Scoped logger.
 *
 * Logs according to the Logger set on the given scope.
 */
export class Log {
  static of(scope: Construct) {
    return new Log(scope);
  }

  readonly logger: ILogger;

  constructor(readonly scope: Construct) {
    this.logger = Logger.of(scope);
  }

  /**
   * {@link Logger} will log this via {@link console.info}
   * @param msg
   */
  info(msg: string | IStringProvider) {
    this.logger.log(this.scope, LogLevel.INFO, msg);
  }

  /**
   * {@link Logger} will log this via {@link console.warn}
   * @param msg
   */
  warn(msg: string | IStringProvider) {
    this.logger.log(this.scope, LogLevel.WARNING, msg);
  }
  /**
   * {@link Logger} will log this via {@link console.error}
   * @param msg
   */
  error(msg: string | IStringProvider) {
    this.logger.log(this.scope, LogLevel.ERROR, msg);
  }
  /**
   * {@link Logger} will log this via {@link console.debug}
   * @param msg
   */
  debug(msg: string | IStringProvider) {
    this.logger.log(this.scope, LogLevel.DEBUG, msg);
  }
};
