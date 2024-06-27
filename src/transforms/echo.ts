import { Construct } from 'constructs';
import { CfTemplateType, Transform } from './transform';
import { Log, Logger } from '../core';

/**
 * Logs the given template.
 *
 * Turn off this logging by setting a NoOpLogger on this construct:
 * `Logger.set(echo, new NoOpLogger())`;
 */
export class Echo extends Transform {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    Logger.set(this, new Logger());
  }

  public apply(template: CfTemplateType): CfTemplateType {
    Log.of(this).info(() => JSON.stringify(template, undefined, 2));
    return template;
  }
}

