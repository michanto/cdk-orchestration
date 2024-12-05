import { Construct } from 'constructs';
import { ImportOrders } from './import_orders';
import { Joiner } from './joiner';
import { OrderedTransformHost } from './ordered_transform_host';
import { YamlParser } from './parser';
import { Stringifier } from './stringifier';
import { Transform, CfJsonType } from './transform';
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
  /** Construct ID for a PropertyTransformApplier. */
  static applierId(propertyName: string) {
    return `@${propertyName}Applier`;
  }

  constructor(scope: Construct, readonly propertyName: string, readonly resourceType: string) {
    super(scope, PropertyTransformApplier.applierId(propertyName));
  }

  /**
   * Find the StatesTransformHost and apply those to the state machine definition.
   */
  apply(template: CfJsonType) {
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
  get order(): string {
    return ImportOrders.PRE_READER;
  }
}

/**
 * Hosts PropertyTransforms.  Must be a child of a PropertyTransformApplier.
 */
export class PropertyTransformHost extends OrderedTransformHost {
  /** Construct ID for a PropertyTransformHost. */
  static hostId(propertyName: string) { return `@${propertyName}TransformHost`; };

  /**
   * Gets or create a PropertyTransformHost for a PropertyTransform.
   *
   * @param scope Scope for the PropertyTransform.
   * @param propertyName Name of the property to transform.
   * @param resourceType Resource type to transform.
   * @returns The host.
   */
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
    new PreReadJoiner(this, 'Joiner');
  }
}

/**
 * Properties for PropertyTransform.
 */
export interface PropertyTransformProps {
  /**
   * Name of the property to transform.
   */
  readonly propertyName: string;
  /**
   * Resource type to transform.
   */
  readonly resourceType: string;
}

/**
 * Transforms a property of a resource.
 */
export abstract class PropertyTransform extends Transform {
  private static propertyTransformPropsSymbol(id: string) {
    return Symbol.for(`@${id}_PropertyTransformProps`);
  }

  /**
   * Gets the properties from the scope of this construct.
   */
  protected get propertyTransformProps(): PropertyTransformProps {
    return (this.node.scope as any)[PropertyTransform.propertyTransformPropsSymbol(this.node.id)] ;
  }

  /**
   * Gets the host from the scope of this construct.
   */
  protected get propertyTransformHost() {
    return PropertyTransformHost.getPropertyTransformHost(this.node.scope!, this.propertyName, this.resourceType);
  }

  /**
   * Gets the propertyName from the scope of this construct.
   */
  get propertyName(): string {
    return this.propertyTransformProps.propertyName;
  }

  /**
   * Gets the resourceType from the scope of this construct.
   */
  get resourceType(): string {
    return this.propertyTransformProps.resourceType;
  }

  constructor(scope: Construct, id: string, propertyTransformProps: PropertyTransformProps) {
    // Store these on the scope so they are available to the target property.
    (scope as any)[PropertyTransform.propertyTransformPropsSymbol(id)] = propertyTransformProps;
    super(scope, id);
  }

  get target(): Construct {
    return this.propertyTransformHost;
  }
}

/** Properties for JsonPropertyTransform. */
export interface JsonPropertyTransformProps extends PropertyTransformProps {
}

/**
 * Transforms a JSON property on a CfnElement.
 * Canonical example is DefinitionString on a CfnStateMachine (StatesTransform).
 */
export abstract class JsonPropertyTransform extends PropertyTransform {
  constructor(scope: Construct, id: string, props: JsonPropertyTransformProps) {
    super(scope, id, props);
  }

  get target(): Construct {
    let tHost = this.propertyTransformHost;
    // If we haven't added the support transforms yet, add them now.
    if (tHost.node.tryFindChild('YamlParser') == undefined) {
      // Parses the joined JSON string.
      new YamlParser(tHost, 'YamlParser');
      // NOTE: Between the YamlParser and the Stringifier, the PropertyTransforms run.
      // Turns the parsed Yaml/JSON into a JSON string so it can be written back to the template.
      new Stringifier(tHost, 'Stringify');
    }
    return super.target;
  }
}

