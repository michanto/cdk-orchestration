import { Construct } from 'constructs';
import { ImportOrders } from './import_orders';
import { TransformBase, TransformBaseProps } from './transform';

export interface StringTransformProps extends TransformBaseProps {
}

/**
 * L2 transform that manipulates templates in string form.
 * Ensures input and output are both string typed.
 */
export abstract class StringTransform extends TransformBase {
  protected constructor(scope: Construct, id: string, props?: StringTransformProps) {
    super(scope, id, { order: props?.order ?? ImportOrders.STRING_TRANSFORMS });
  }

  abstract apply(template: string): string

  /**
   * @internal
   */
  protected _apply(template: any): any {
    return this.apply(template);
  }
}

