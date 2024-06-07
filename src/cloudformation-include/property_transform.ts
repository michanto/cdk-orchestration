import { Construct } from 'constructs';
import { BaseImporter, Joiner as Joiner, YamlParser, Stringifier } from '.';
import { CfnElementUtilities } from '../core';
import { Transform, Transforms, ImportOrders, TransformProps, CfTemplateType } from '../transforms';

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
   * @param propertyType
   */
  constructor(scope: Construct, readonly propertyName: string, readonly propertyType: string) {
    super(scope, PropertyTransformApplier.applierId(propertyName));
  }

  /**
   * Find the StatesTransformHost and apply those to the state machine definition.
   */
  apply(template: CfTemplateType) {
    let host = this.node.findChild(PropertyTransformHost.hostId(this.propertyName)) as PropertyTransformHost;
    if (!host) {
      throw new Error('Could not find a PropertyTransformHost.  Bad PropertyTransform setup.');
    }
    for (let resId in template.Resources) {
      let resource = template.Resources[resId];
      if (resource.Type == this.propertyType && resource.Properties[this.propertyName]) {
        resource.Properties[this.propertyName] =
          Transforms.of(host).apply(resource.Properties[this.propertyName]);
      }
    }

    return template;
  }
}

/**
 * Hosts PropertyTransforms.  Must be a child of a PropertyTransformApplier.
 */
export class PropertyTransformHost extends BaseImporter {
  static hostId(propertyName: string) { return `@${propertyName}TransformHost`; };

  static getPropertyTransformHost(scope: Construct, propertyName: string, resourceType: string): PropertyTransformHost {
    let searchResults = new CfnElementUtilities().cfnResources(scope, resourceType);
    if (searchResults.length != 1) {
      throw new Error(`Expected to find 1 resource of type ${resourceType} found ${searchResults.length}.`);
    }
    let cfnResource = searchResults.pop()!;
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
    new Joiner(this.preReaderOrder, 'Joiner');
  }
}

export interface PropertyTransformProps extends TransformProps {
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
    // Store these on the scope so they are available to findShimParent.
    (scope as any)[PropertyTransform.propertyTransformPropsSymbol(id)] = propertyTransformProps;
    super(scope, id, propertyTransformProps);
  }

  findShimParent(): Construct {
    let tHost = this.propertyTransformHost;
    let order = tHost.node.tryFindChild(this.order ?? ImportOrders.TRANSFORMS) as Construct;
    if (!order) {
      order = tHost;
    }
    return order;
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

  findShimParent(): Construct {
    let tHost = this.propertyTransformHost;
    // If we haven't added the JSON transforms yet, add them now.
    if (tHost.parserOrder.node.tryFindChild('YamlParser') == undefined) {
      new YamlParser(tHost.parserOrder, 'YamlParser');
      // NOTE: Between the YamlParser and the Stringifier, the PropertyTransforms run.
      // Turns the parsed Yaml/JSON into a JSON string so it can be written back to the template.
      new Stringifier(tHost.writerOrder, 'Stringify');
    }
    return super.findShimParent();
  }
}

