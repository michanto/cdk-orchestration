import * as fs from 'fs';
import { Construct } from 'constructs';
import { tmpNameSync } from 'tmp';
import { ImportOrders } from './import_orders';
import { StringTransform } from './string_transform';

/**
 * Writes a template to a temp file, so it can be used with CfnInclude.
 *
 * This should be the LAST transform run before handing off to the CfnInclude.
 */

export class TempFileWriter extends StringTransform {
  constructor(scope: Construct, id: string, readonly tmpDir?: string) {
    super(scope, id, { order: ImportOrders.WRITER });
  }

  writeTempFile(data: string, tmpDir?: string): string {
    if (tmpDir && !fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir);
    }

    const tmpFile = tmpNameSync({ tmpdir: tmpDir });
    fs.writeFileSync(tmpFile, data);
    return tmpFile;
  }

  apply(template: string): string {
    return this.writeTempFile(template, this.tmpDir);
  }
}
