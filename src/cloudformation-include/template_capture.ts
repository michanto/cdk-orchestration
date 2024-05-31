import { Construct } from 'constructs';
import { ImportOrders, Transform, CfTemplateType } from '../transforms';

/**
 * Capture the template right before it is written to a file.
 */

export class TemplateCapture extends Transform {
  template: any;

  constructor(scope: Construct, id: string) {
    super(scope, id, {
      order: ImportOrders.WRITER,
    });
  }

  apply(template: CfTemplateType): CfTemplateType {
    this.template = template;
    return template;
  }
}
