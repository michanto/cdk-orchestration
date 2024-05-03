import { Construct } from 'constructs';
import { parse as yamlParse } from 'yaml';
import { ImportOrders, TransformBase, TransformBaseProps } from '../transforms';

export interface ParserProps extends TransformBaseProps {}

export abstract class Parser extends TransformBase {
  protected constructor(scope: Construct, id: string, props?: ParserProps) {
    super(scope, id, { order: props?.order ?? ImportOrders.PARSER });
  }

  validateInput(template: any): any {
    if (typeof template != 'string') {
      throw new Error(`Parser ${this.node.id} input must be a string.`);
    }
    return template;
  }
  validateOutput(template: any): any {
    if (typeof template != 'object') {
      throw new Error(`Parser ${this.node.id} output must be an object.`);
    }
    return template;
  }

  abstract apply(template: string): any;

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

  apply(template: string): any {
    return yamlParse(template);
  }
}

/**
 * Uses a yaml parser to parse a template.  Takes in a template as a string either Yaml or JSON,
 * and returns a parsed template.
 */
export class JsonParser extends Parser {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  apply(template: string): any {
    return JSON.parse(template);
  }
}
