import { Construct } from 'constructs';
import { BaseImporter } from './base_importer';
import { ImportOrders } from './import_orders';
import { Joiner } from './joiner';
import { YamlParser } from './parser';
import { Stringifier } from './stringifier';
import { Transform, CfTemplateType } from './transform';
import { Transforms } from './transforms';
import { CfnElementUtilities } from '../core';

/**
 * Applies Transforms to a Resource property.
 *
 * This transform sits directly under the L1 construct.
 * It's job is to apply property transforms to an L1 construct
 * property.  This is useful when you need to apply a Transform to
 * a JSON property (for example).
 *
 * Create a Resoure, then apply a PropertyTransform to it.
 * That creates all the scaffolding for applying a PropertyTransform to
 * the property, including this class.
 *
 * That creates a StatesTransformApplier, which creates
 * a StatesTransformHost.  StepFunctionTransforms are hosted
 * by the StepFunctionTransformHost.  When the StateMachine is
 */
export class PropertyTransformApplier extends Transform {
  static applierId(propertyName: string) {
    return `@${propertyName}Applier`;
  }

  /**
   *
   * @param scope
   * @param propertyName
   * @param resourceType
   */
  constructor(scope: Construct, readonly propertyName: string, readonly resourceType: string) {
    super(scope, PropertyTransformApplier.applierId(propertyName));
  }

  /**
   * Find the StatesTransformHost and apply those to the state machine definition.
   */
  apply(template: CfTemplateType) {
    let host = this.node.findChild(PropertyTransformHost.hostId(this.propertyName)) as PropertyTransformHost;

    for (let resId in template.Resources) {
      let resource = template.Resources[resId];
      if (resource.Type == this.resourceType && resource.Properties[this.propertyName]) {
        resource.Properties[this.propertyName] =
          Transforms.of(host).apply(resource.Properties[this.propertyName]);
      }
    }

    return template;
  }
}

class PreReadJoiner extends Joiner {
  get order() {
    return ImportOrders.PRE_READER;
  }
}

/**
 * Hosts PropertyTransforms.  Must be a child of a PropertyTransformApplier.
 */
export class PropertyTransformHost extends BaseImporter {
  static hostId(propertyName: string) { return `@${propertyName}TransformHost`; };

  static getPropertyTransformHost(scope: Construct, propertyName: string, resourceType: string): PropertyTransformHost {
    let cfnResource = new CfnElementUtilities().findCfnResource(scope, resourceType);

    let propertyTransformApplier = cfnResource.node.tryFindChild(PropertyTransformApplier.applierId(propertyName)) as PropertyTransformApplier;
    if (!propertyTransformApplier) {
      propertyTransformApplier = new PropertyTransformApplier(cfnResource, propertyName, resourceType);
    }
    let propertyTransformHost = propertyTransformApplier.node.tryFindChild(PropertyTransformHost.hostId(propertyName)) as PropertyTransformHost;
    if (!propertyTransformHost) {
      propertyTransformHost = new PropertyTransformHost(propertyTransformApplier, propertyName, resourceType);
    }
    return propertyTransformHost;
  }

  protected constructor(scope: PropertyTransformApplier, readonly propertyName: string, readonly resourceType: string) {
    super(scope, PropertyTransformHost.hostId(propertyName));
    // If the property is represented as an Fn.join, this
    // turns the join into valid JSON that can be parsed by the Yaml parser.
    new PreReadJoiner(this.preReaderOrder, 'Joiner');
  }
}

export interface PropertyTransformProps {
  readonly propertyName: string;
  readonly resourceType: string;
}

/**
 * Transforms a property of a resource.
 */
export abstract class PropertyTransform extends Transform {
  private static propertyTransformPropsSymbol(id: string) {
    return Symbol.for(`@${id}_PropertyTransformProps`);
  }

  protected get propertyTransformProps(): PropertyTransformProps {
    return (this.node.scope as any)[PropertyTransform.propertyTransformPropsSymbol(this.node.id)] ;
  }

  protected get propertyTransformHost() {
    return PropertyTransformHost.getPropertyTransformHost(this.node.scope!, this.propertyName, this.resourceType);
  }

  get propertyName(): string {
    return this.propertyTransformProps.propertyName;
  }
  get resourceType(): string {
    return this.propertyTransformProps.resourceType;
  }

  constructor(scope: Construct, id: string, propertyTransformProps: PropertyTransformProps) {
    // Store these on the scope so they are available to the shimParent property.
    (scope as any)[PropertyTransform.propertyTransformPropsSymbol(id)] = propertyTransformProps;
    super(scope, id);
  }

  get shimParent(): Construct {
    return this.propertyTransformHost;
  }
}

export interface JsonPropertyTransformProps extends PropertyTransformProps {
}

/**
 * Transforms a JSON
 */
export abstract class JsonPropertyTransform extends PropertyTransform {
  constructor(scope: Construct, id: string, props: JsonPropertyTransformProps) {
    super(scope, id, props);
  }

  get shimParent(): Construct {
    let tHost = this.propertyTransformHost;
    // If we haven't added the JSON transforms yet, add them now.
    if (tHost.parserOrder.node.tryFindChild('YamlParser') == undefined) {
      new YamlParser(tHost.parserOrder, 'YamlParser');
      // NOTE: Between the YamlParser and the Stringifier, the PropertyTransforms run.
      // Turns the parsed Yaml/JSON into a JSON string so it can be written back to the template.
      new Stringifier(tHost.writerOrder, 'Stringify');
    }
    return super.shimParent;
  }
}

