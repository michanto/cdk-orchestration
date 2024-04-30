import { IAspect, Resource } from 'aws-cdk-lib';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { IConstruct } from 'constructs';
import { Logger } from './logger';

/**
 * Adds a LogLevel environment variable to each Function based on the construct log level.
 */
export class LoggingAspect implements IAspect {
  private static isFunction(x: IConstruct): x is Function {
    return Resource.isResource(x) && typeof (x as any).addEnvironment == 'function';
  }

  visit(node: IConstruct): void {
    // If logging is on for the scope, turn logging on for the inline Lambda.
    if (LoggingAspect.isFunction(node) && Logger.of(node)?.logLevel) {
      node.addEnvironment('LogLevel', Number(Logger.of(node).logLevel).toString());
    }
  }
}