import * as fs from 'fs';
import { Construct } from 'constructs';
import { ImportOrders } from './import_orders';
import { StringTransform } from './string_transform';

/**
 * Reads a file (presumably one containing a template) and returns it as a string.
 */
export class FileReader extends StringTransform {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  get order(): string {
    return ImportOrders.READER;
  }

  apply(template: string): string {
    try {
      return fs.readFileSync(template).toString();
    } catch (e) {
      throw new Error(`Template input ${template} must be file name.  Read file threw ${(e as any).toString()}`);
    }
  }
}
