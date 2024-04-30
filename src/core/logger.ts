import { Construct } from 'constructs';
import { ConstructTreeService } from './construct_tree_service';
import { AnsiColors } from '../private/ansi_colors';
import { NAMESPACE } from '../private/internals';

/**
 * The Node logging levels (from the console object).
 *
 * # Note:
 *
 * The logging interfaces take numbers for logLevel instead of this enum.
 * This allows the user to define custom log levels (e.g.
 * FATAL = 0.5).  Subclass Log and Logger to support custom log levels.
 */
export enum LogLevel {
  OFF = 0,
  ERROR,
  WARNING,
  INFO,
  DEBUG,
  ALL = 0xFFFFFFFFFFFFFFFF
}

/**
 */
export interface LoggerProps {
  /**
   * # Note:
   * This is a number to support custom log levels (e.g. FATAL = 0.5).
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
 * Node console logger.
 * Provides scoped logging to a construct.
 */
export class Logger implements ILogger {
  static of(scope: Construct): ILogger {
    return Logger.LOGGER_SERVICE.of(scope) as ILogger;
  }
  static set(scope: Construct, logger: ILogger) {
    Logger.LOGGER_SERVICE.set(scope, logger);
  }

  private static LOGGER_SERVICE = new ConstructTreeService({
    servicePropertyName: `${NAMESPACE}.Logger`,
    factory: (_c) => new NoOpLogger(),
  });

  readonly logLevel: number;

  constructor(readonly props: LoggerProps = {
    logLevel: LogLevel.ALL,
  }) {
    this.logLevel = props.logLevel;
  }

  /**
   *
   * @param logLevel - a number to support custom levels (e.g. FATAL = 0.5)
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
   *
   * @param logLevel - a number to support custom levels (e.g. FATAL = 0.5)
   */
  levelName(logLevel: number): string {
    switch (logLevel) {
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
   *
   * @param scope
   * @param logLevel - a number to support custom levels (e.g. FATAL = 0.5)
   * @param message
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
 *
 */
export class NoOpLogger extends Logger {
  constructor() {
    super({
      logLevel: LogLevel.OFF,
    });
  }
}
