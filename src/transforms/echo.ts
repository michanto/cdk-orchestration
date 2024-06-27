import { Construct } from 'constructs';
import { TemplateCapture } from './template_capture';
import { CfTemplateType } from './transform';
import { Log, Logger } from '../core';

/**
 * Logs the given template.
 *
 * Turn off this logging by setting a NoOpLogger on this construct:
 * `Logger.set(echo, new NoOpLogger())`;
 */
export class Echo extends TemplateCapture {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    Logger.set(this, new Logger());
  }

  public apply(template: CfTemplateType): CfTemplateType {
    Log.of(this).info(() => JSON.stringify(template, undefined, 2));
    return super.apply(template);
  }
}

