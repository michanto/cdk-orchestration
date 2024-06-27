import { Construct } from 'constructs';
import { CfnTransformHost } from './cfn_transform_host';
import { ImportOrders } from './import_orders';
import { Order } from './order';

/**
 * This class adds Orders to a CfnTransformHost.  Orders
 * allow L2 transforms to be applied in the correct order.
 *
 * Examples include TemplateImporter in the cloudformation-include
 * submodule and PropertyTransformHost (see StatesTransform in the
 * aws-stepfunctiosn submodule for usage).
 */
export class BaseImporter extends CfnTransformHost {
  /** Add import orders to any CfnElement or Stack to order the transforms. */
  static createImportOrders(scope: Construct) {
    new Order(scope, ImportOrders.PRE_READER);
    new Order(scope, ImportOrders.READER);
    new Order(scope, ImportOrders.STRING_TRANSFORMS);
    new Order(scope, ImportOrders.PARSER);
    new Order(scope, ImportOrders.TRANSFORMS);
    new Order(scope, ImportOrders.WRITER);
  }
  /** Order for ImportOrders.PRE_READER */
  readonly preReaderOrder: Order = new Order(this, ImportOrders.PRE_READER);
  /** Order for ImportOrders.READER */
  readonly readerOrder: Order = new Order(this, ImportOrders.READER);
  /** Order for ImportOrders.STRING_TRANSFORMS */
  readonly stringTransformOrder: Order = new Order(this, ImportOrders.STRING_TRANSFORMS);
  /** Order for ImportOrders.PARSER */
  readonly parserOrder: Order = new Order(this, ImportOrders.PARSER);
  /** Order for ImportOrders.TRANSFORMS */
  readonly templateTransformOrder: Order = new Order(this, ImportOrders.TRANSFORMS);
  /** Order for ImportOrders.WRITER */
  readonly writerOrder: Order = new Order(this, ImportOrders.WRITER);
}
