import { Construct, IConstruct } from 'constructs';
import { IMPORT_ORDER_RTTI } from './private/transform_rtti';
import { TransformHost } from './transform_host';

/**
 * Defines where Transforms of a given order are added to a Transform host.
 * ImportOrders are the names of the constructs under the TransformHost.  See BaseImporter.
 */
export enum ImportOrders {
  /** Transforms that run before the Reader. */
  PRE_READER = '_PreReader',
  /** Transform that reads a file into a string. */
  READER = '_Reader',
  /** Transforms that run against the sting representation. */
  STRING_TRANSFORMS = '_StringTransforms',
  /** Parses the string representation into (for example) JSON. */
  PARSER = '_Parser',
  /** Transform structured data, such as JSON, YAML, TOML. */
  TRANSFORMS = '_Transforms',
  /** Writes structured data to a file.  Necessary for CfnInclude scenarios. */
  WRITER = '_Writer'
}

/**
 * ImportOrder class.  See BaseImporter for usage.
 */
export class ImportOrder extends Construct {
  /** Returns true if the construct is an ImportOrder. */
  static isImportOrder(x: IConstruct): x is ImportOrder {
    return IMPORT_ORDER_RTTI.hasRtti(x);
  }

  /**
   * Returns an ImportOrder named {@link order} under the scope, or
   * the scope if the ImportOrder cannot be found.
   */
  static findImportOrder(scope: Construct, order: string) {
    if (ImportOrder.isImportOrder(scope) && scope.node.id == order) {
      return scope;
    }

    if (TransformHost.isTransformHost(scope)) {
      let found = scope.node.tryFindChild(order) as Construct;
      if (ImportOrder.isImportOrder(found)) {
        return found;
      }
    }
    return scope;
  }

  constructor(scope: Construct, readonly order: string) {
    super(scope, order);

    IMPORT_ORDER_RTTI.addRtti(this);
  }
}
