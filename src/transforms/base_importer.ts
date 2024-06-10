import { Construct } from 'constructs';
import { CfnTransformHost } from './cfn_transform_host';
import { ImportOrders } from './import_orders';

/**
 * Base class for JSON processors.  Has orders that
 * allow L2 transforms to be applied in the correct order.
 */

export class BaseImporter extends CfnTransformHost {
  imports: number = 0;
  public readonly preReaderOrder: Construct;
  public readonly readerOrder: Construct;
  public readonly stringTransformOrder: Construct;
  public readonly parserOrder: Construct;
  public readonly templateTransformOrder: Construct;
  public readonly writerOrder: Construct;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.preReaderOrder = new Construct(this, ImportOrders.PRE_READER);
    this.readerOrder = new Construct(this, ImportOrders.READER);
    this.stringTransformOrder = new Construct(this, ImportOrders.STRING_TRANSFORMS);
    this.parserOrder = new Construct(this, ImportOrders.PARSER);
    this.templateTransformOrder = new Construct(this, ImportOrders.TRANSFORMS);
    this.writerOrder = new Construct(this, ImportOrders.WRITER);
  }
}
