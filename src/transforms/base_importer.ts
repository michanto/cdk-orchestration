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
  public readonly preReaderOrder: ImportOrder;
  public readonly readerOrder: ImportOrder;
  public readonly stringTransformOrder: ImportOrder;
  public readonly parserOrder: ImportOrder;
  public readonly templateTransformOrder: ImportOrder;
  public readonly writerOrder: ImportOrder;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    /** Order for ImportOrders.PRE_READER */
    this.preReaderOrder = new ImportOrder(this, ImportOrders.PRE_READER);
    /** Order for ImportOrders.READER */
    this.readerOrder = new ImportOrder(this, ImportOrders.READER);
    /** Order for ImportOrders.STRING_TRANSFORMS */
    this.stringTransformOrder = new ImportOrder(this, ImportOrders.STRING_TRANSFORMS);
    /** Order for ImportOrders.PARSER */
    this.parserOrder = new ImportOrder(this, ImportOrders.PARSER);
    /** Order for ImportOrders.TRANSFORMS */
    this.templateTransformOrder = new ImportOrder(this, ImportOrders.TRANSFORMS);
    /** Order for ImportOrders.WRITER */
    this.writerOrder = new ImportOrder(this, ImportOrders.WRITER);
  }
}
