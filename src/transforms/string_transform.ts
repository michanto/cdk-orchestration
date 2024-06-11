import { Construct } from 'constructs';
import { ImportOrders } from './import_orders';
import { TransformBase } from './transform';

/**
 * L2 transform that manipulates templates in string form.
 * Ensures input and output are both string typed.
 *
 * See StringReplacer for an example.
 */
export abstract class StringTransform extends TransformBase {
  protected constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  get order(): string {
    return ImportOrders.STRING_TRANSFORMS;
  }

  abstract apply(template: string): string

  /**
   * @internal
   */
  protected _apply(template: any): any {
    return this.apply(template);
  }
}

