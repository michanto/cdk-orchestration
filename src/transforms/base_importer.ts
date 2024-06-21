import { Construct } from 'constructs';
import { CfnTransformHost } from './cfn_transform_host';
import { ImportOrder, ImportOrders } from './import_orders';

/**
 * This class adds Orders to a CfnTransformHost.  Orders
 * allow L2 transforms to be applied in the correct order.
 *
 * Examples include TemplateImporter in the cloudformation-include
 * submodule and PropertyTransformHost (see StatesTransform in the
 * aws-stepfunctiosn submodule for usage).
 */
export class BaseImporter extends CfnTransformHost {
  /** Order for ImportOrders.PRE_READER */
  public readonly preReaderOrder: ImportOrder;
  /** Order for ImportOrders.READER */
  public readonly readerOrder: ImportOrder;
  /** Order for ImportOrders.STRING_TRANSFORMS */
  public readonly stringTransformOrder: ImportOrder;
  /** Order for ImportOrders.PARSER */
  public readonly parserOrder: ImportOrder;
  /** Order for ImportOrders.TRANSFORMS */
  public readonly templateTransformOrder: ImportOrder;
  /** Order for ImportOrders.WRITER */
  public readonly writerOrder: ImportOrder;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.preReaderOrder = new ImportOrder(this, ImportOrders.PRE_READER);
    this.readerOrder = new ImportOrder(this, ImportOrders.READER);
    this.stringTransformOrder = new ImportOrder(this, ImportOrders.STRING_TRANSFORMS);
    this.parserOrder = new ImportOrder(this, ImportOrders.PARSER);
    this.templateTransformOrder = new ImportOrder(this, ImportOrders.TRANSFORMS);
    this.writerOrder = new ImportOrder(this, ImportOrders.WRITER);
  }
}
