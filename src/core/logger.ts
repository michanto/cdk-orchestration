import { Construct } from 'constructs';
import { ConstructTreeService } from './construct_tree_service';
import { AnsiColors } from '../private/ansi_colors';
import { NAMESPACE } from '../private/internals';

/**
 * The Node logging levels (from the console object).
 */
export enum LogLevel {
  /** No logging. */
  OFF = 0,
  /** Log Errors */
  ERROR,
  /** Log Warnings and Errors */
  WARNING,
  /** Log Info, Warnings and Errors */
  INFO,
  /** Debug logging - verbose. */
  DEBUG,
  /** Log everything - most verbose. */
  ALL = 0xFFFFFFFFFFFFFFFF
}

/**
 * Properties for creating a Logger
 */
export interface LoggerProps {
  /**
   * The log level.
   */
  readonly logLevel: number;
}

/**
 * Delayed log-line construction.
 */
export interface IStringProvider {
  (): string;
}

/**
 * Interface for scoped logging backend. See {@link Logger}.
 */
export interface ILogger {
  /**
   * Returns the current log level.
   */
  readonly logLevel: number;

  /**
   *
   * @param scope Scope for the log line.
   * @param logLevel - a number to support custom levels (e.g. FATAL = 0.5)
   * @param message - The message
   */
  log(scope: Construct, logLevel: number, message: string | IStringProvider): void;
}

/**
 * Scoped node console logger.
 *
 * Provides scoped logging to a construct.  This means the Logger applies to the construct
 * it was added to, and all descendent constructs in the tree.  Can be overridden by adding
 * a Logger to a descendent construct, or replacing the Logger on a construct.
 */
export class Logger implements ILogger {
  /**
   * Return the Logger associated with the scope.  Searches up the tree if there is none.
   * Default is NoopLogger (no logging).
   */
  static of(scope: Construct): ILogger {
    return Logger.LOGGER_SERVICE.of(scope) as ILogger;
  }
  /** Sets a Logger on a construct. */
  static set(scope: Construct, logger: ILogger) {
    Logger.LOGGER_SERVICE.set(scope, logger);
  }

  private static LOGGER_SERVICE = new ConstructTreeService({
    servicePropertyName: `${NAMESPACE}.Logger`,
    factory: (_c) => new NoOpLogger(),
  });

  /** logLevel for this logger. */
  readonly logLevel: number;

  constructor(readonly props: LoggerProps = {
    logLevel: LogLevel.ALL,
  }) {
    this.logLevel = props.logLevel;
  }

  /**
   * Returns the AnsiColor associated with a logLevel.
   * @param logLevel - The log level.
   */
  levelColor(logLevel: number): string {
    switch (logLevel) {
      case LogLevel.ERROR:
        return AnsiColors.ANSI_RED;
      case LogLevel.WARNING:
        return AnsiColors.ANSI_YELLOW;
      default:
        return AnsiColors.ANSI_WHITE;
    }
  }

  /**
   * Returns the name of the logLevel (if known)/
   * @param logLevel - The log level.
   */
  levelName(logLevel: number): string {
    switch (logLevel) {
      case LogLevel.OFF:
        return '';
      case LogLevel.ERROR:
        return 'Error';
      case LogLevel.WARNING:
        return 'Warning';
      case LogLevel.INFO:
        return 'Info';
      case LogLevel.DEBUG:
        return 'Debug';
    }
    return 'Erratum';
  }

  /**
   * Logs a line associated with a scope to the console.
   *
   * @param scope Scope associated with the log line.
   * @param logLevel - The log level.
   * @param message - Message or string provider to log.
   */
  log(scope: Construct, logLevel: number, message: string | IStringProvider) {
    let decision = logLevel <= this.props.logLevel;
    if (decision) {
      if (typeof(message) == 'function') {
        // Produce the log line.
        message = message();
      }
      let logLine = `${
        this.levelColor(logLevel)}${
        this.levelName(logLevel)} ${
        scope.node.path} - ${
        message}${
        AnsiColors.ANSI_RESET}`;

      switch (logLevel) {
        case LogLevel.ERROR:
          console.error(logLine);
          break;
        case LogLevel.WARNING:
          console.warn(logLine);
          break;
        case LogLevel.INFO:
          console.info(logLine);
          break;
        case LogLevel.DEBUG:
          console.debug(logLine);
          break;
        default:
          console.log(logLine);
      }
    }
  }
}

/**
 * Logger that does not log.
 */
export class NoOpLogger extends Logger {
  constructor() {
    super({
      logLevel: LogLevel.OFF,
    });
  }
}
