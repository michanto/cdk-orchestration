import {Construct} from 'constructs';
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

/**
 * Properties for {@link StringReplacer}
 */
export interface StringReplacerProps extends StringTransformProps {
  readonly splitter: string;
  readonly joiner: string;
}

/**
 * String handler that replaces strings in a template.  Useful for renaming LogicalIDs, as long as they are reasonably
 * unique.
 */
export class StringReplacer extends StringTransform {
  constructor(scope: Construct, id: string, readonly props: StringReplacerProps) {
    super(scope, id, props);
  }

  apply(template: string): string {
    return template.split(this.props.splitter).join(this.props.joiner);
  }
}