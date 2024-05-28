import { IAspect, Resource } from 'aws-cdk-lib';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { IConstruct } from 'constructs';
import { Logger } from './logger';

/**
 * Adds a LogLevel environment variable to each Function based on the construct log level.
 *
 * logLevel parameter defaults to `Logger.of(node)?.logLevel`.
 */
export class LoggingAspect implements IAspect {
  private static isFunction(x: IConstruct): x is Function {
    return Resource.isResource(x) && typeof (x as any).addEnvironment == 'function';
  }

  /**
   * @param logLevel The log level.  Default is `Logger.of(node)?.logLevel`.
   */
  constructor(readonly logLevel?: number) {
  }

  visit(node: IConstruct): void {
    let logLevel = this.logLevel ?? Logger.of(node)?.logLevel;
    // If logging is on for the scope, turn logging on for the inline Lambda.
    if (LoggingAspect.isFunction(node) && logLevel) {
      node.addEnvironment('LogLevel', Number(logLevel).toString());
    }
  }
}