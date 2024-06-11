import { Construct } from 'constructs';
import { CfnTransformHost } from './cfn_transform_host';
import { ImportOrders } from './import_orders';

/**
 * This class adds Orders to a CfnTransformHost.  Orders
 * allow L2 transforms to be applied in the correct order.
 *
 * Examples include TemplateImporter in the cloudformation-include
 * submodule and PropertyTransformHost (see StatesTransform in the
 * aws-stepfunctiosn submodule for usage).
 */
export class BaseImporter extends CfnTransformHost {
  public readonly preReaderOrder: Construct;
  public readonly readerOrder: Construct;
  public readonly stringTransformOrder: Construct;
  public readonly parserOrder: Construct;
  public readonly templateTransformOrder: Construct;
  public readonly writerOrder: Construct;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    /** Order for ImportOrders.PRE_READER */
    this.preReaderOrder = new Construct(this, ImportOrders.PRE_READER);
    /** Order for ImportOrders.READER */
    this.readerOrder = new Construct(this, ImportOrders.READER);
    /** Order for ImportOrders.STRING_TRANSFORMS */
    this.stringTransformOrder = new Construct(this, ImportOrders.STRING_TRANSFORMS);
    /** Order for ImportOrders.PARSER */
    this.parserOrder = new Construct(this, ImportOrders.PARSER);
    /** Order for ImportOrders.TRANSFORMS */
    this.templateTransformOrder = new Construct(this, ImportOrders.TRANSFORMS);
    /** Order for ImportOrders.WRITER */
    this.writerOrder = new Construct(this, ImportOrders.WRITER);
  }
}
