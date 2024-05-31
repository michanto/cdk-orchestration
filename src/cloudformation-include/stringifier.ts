import { Construct } from 'constructs';
import { ImportOrders, TransformBase } from '../transforms';

/**
 * Stringifies the template so it can be written to a file.
 */

export class Stringifier extends TransformBase {
  constructor(scope: Construct, id: string) {
    super(scope, id, { order: ImportOrders.WRITER });
  }

  /** @internal */
  protected _apply(template: any): any {
    return this.apply(template);
  }

  apply(template: any): string {
    return JSON.stringify(template);
  }
}
