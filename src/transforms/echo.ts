import { TemplateCapture } from './template_capture';
import { CfTemplateType } from './transform';
import { Log } from '../core';

/**
 * Logs the given template.  Turn scoped logging on for the
 * construct (`Logger.set(scope, logger)`) to see the log lines.
 */
export class Echo extends TemplateCapture {
  public apply(template: CfTemplateType): CfTemplateType {
    Log.of(this).info(() => JSON.stringify(template, undefined, 2));
    return super.apply(template);
  }
}
