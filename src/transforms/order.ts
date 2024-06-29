import { Construct, IConstruct } from 'constructs';
import { ORDER_RTTI } from './private/transform_rtti';
import { TransformHost } from './transform_host';

/**
 * Order class.  Defines the order in which Transforms are applied.
 * This is important in cases where the type of the template passed between
 * Transforms changes, such as when a FileReader turns a filename into
 * a string with the contents of the file, or a Parser turns a JSON string
 * into a Javascript object.
 *
 * See BaseImporter for usage.
 */
export class Order extends Construct {
  /** Returns true if the construct is an Order. */
  static isOrder(x: IConstruct): x is Order {
    return ORDER_RTTI.hasRtti(x);
  }

  /**
   * Returns an Order named {@link order} under the scope, or
   * the scope if the Order cannot be found.
   */
  static findOrder(scope: Construct, order: string) {
    if (Order.isOrder(scope) && scope.node.id == order) {
      return scope;
    }

    if (TransformHost.isTransformHost(scope)) {
      let found = scope.node.tryFindChild(order) as Construct;
      if (Order.isOrder(found)) {
        return found;
      }
    }
    return scope;
  }

  constructor(scope: Construct, readonly id: string) {
    super(scope, id);

    ORDER_RTTI.addRtti(this);
  }
}
