import { CfnElement, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BaseImporter } from './base_importer';
import { ImportOrders } from './import_orders';
import { JsonParser } from './parser';
import { Stringifier } from './stringifier';
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

  protected findOrder(target: Construct): Construct {
    // Auto-boootstrap for CfnElement and Stack
    if (!target.node.tryFindChild(this.order) &&
      this.order == ImportOrders.STRING_TRANSFORMS &&
      (Stack.isStack(target) || CfnElement.isCfnElement(target))) {
      BaseImporter.createImportOrders(target);
      new class PreStringifier extends Stringifier {
        get order(): string {
          return ImportOrders.PRE_READER;
        }
      }(target, 'Stringifier');
      new JsonParser(target, 'Parser');
    }
    return super.findOrder(target);
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

