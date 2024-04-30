import { Construct } from 'constructs';
import { ILogger, Logger, LogLevel, IStringProvider } from './logger';

/**
 * Scoped logging.
 * Allows users to turn logging on and off for individual constructs or whole sub-trees
 * of the construct tree.  LoggingAspect will set the LogLevel of
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
