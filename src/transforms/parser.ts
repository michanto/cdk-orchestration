import { Construct } from 'constructs';
import { parse as yamlParse } from 'yaml';
import { ImportOrders } from './import_orders';
import { CfJsonType, TransformBase } from './transform';

/**
 * Base class for JsonParser and YamlParser transforms.
 */
export abstract class Parser extends TransformBase {
  protected constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  get order(): string {
    return ImportOrders.PARSER;
  }

  abstract apply(template: string): CfJsonType;

  /**
   * @internal
   */
  protected _apply(template: any): any {
    return this.apply(template);
  }
}

/**
 * Uses a yaml parser to parse a template.  Takes in a template as a string either Yaml or JSON,
 * and returns a parsed template.
 */
export class YamlParser extends Parser {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  apply(template: string): CfJsonType {
    return yamlParse(template);
  }
}

/**
 * Uses a yaml parser to parse a template.  Takes in a template as a string JSON,
 * and returns a parsed template.
 */
export class JsonParser extends Parser {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  apply(template: string): CfJsonType {
    return JSON.parse(template);
  }
}
