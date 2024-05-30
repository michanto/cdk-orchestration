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
    [LogLevel.DEBUG, 8],
    [LogLevel.ERROR, 2],
    [LogLevel.WARNING, 4],
    [LogLevel.INFO, 6],
  ])('Logging tests', (logLevel, expected) => {
    const app = new App();
    let capture = new Capture({
      logLevel: logLevel,
    });
    Logger.set(app, capture);
    Log.of(app).debug('debug line');
    Log.of(app).debug(() => 'produced debug line');
    Log.of(app).info('info line');
    Log.of(app).info(() => 'produced info line');
    Log.of(app).warn('warn line');
    Log.of(app).warn(() => 'produced warn line');
    Log.of(app).error('error line');
    Log.of(app).error(() => 'produced error line');
    expect(capture.captured.length).toEqual(expected);
  });
  it.each([
    [0, ''],
    [1, 'Error'],
    [2, 'Warning'],
    [3, 'Info'],
    [4, 'Debug'],
    [5, 'Erratum'],
  ])('level name', (logLevel, expected) => {
    let app = new App();
    let capture = new Capture({
      logLevel: logLevel,
    });
    expect(capture.levelName(logLevel)).toEqual(expected);
    capture.log(app, logLevel, 'Test');
    expect(capture.captured.length).toEqual(1);
  });
});