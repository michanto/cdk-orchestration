import { App } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { IStringProvider, Log, Logger, LogLevel } from '../../src';

describe('Logging tests', () => {
  class Capture extends Logger {
    readonly captured: string[] = [];

    log(scope: Construct, logLevel: number, message: string | IStringProvider): void {
      if (logLevel <= this.props.logLevel) {
        super.log(scope, logLevel, message);
        if (typeof (message) == 'function') {
          // Produce the log line (again) so we can capture it.
          message = message();
        }
        this.captured.push(message as string);
      }
    }
  }
  it.each([
    [LogLevel.DEBUG, 5],
    [LogLevel.ERROR, 1],
    [LogLevel.WARNING, 2],
    [LogLevel.INFO, 3],
  ])('Logging tests', (logLevel, expected) => {
    const app = new App();
    let capture = new Capture({
      logLevel: logLevel,
    });
    Logger.set(app, capture);
    Log.of(app).debug('debug line');
    Log.of(app).debug(() => 'produced debug line');
    Log.of(app).info('info line');
    Log.of(app).warn('warn line');
    Log.of(app).error('error line');
    expect(capture.captured.length).toEqual(expected);
  });
});