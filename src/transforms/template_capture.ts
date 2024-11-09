import { Construct } from 'constructs';
import { ImportOrders } from './import_orders';
import { CfJsonType, Transform } from './transform';

/**
 * Capture the template right before it is written to a file.
 */
export class TemplateCapture extends Transform {
  template: any;

  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  get order(): string {
    return ImportOrders.WRITER;
  }

  apply(template: CfJsonType): CfJsonType {
    this.template = template;
    return template;
  }
}
