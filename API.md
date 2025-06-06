# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnyTransform <a name="AnyTransform" id="@michanto/cdk-orchestration.transforms.AnyTransform"></a>

Use this for Transforms that need to deal with 'any' data.

As opposed to Transform, which
deals with JSON only, or StringTransform, which only deals with Strings.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.AnyTransform.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.AnyTransform(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.AnyTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.AnyTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.AnyTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.AnyTransform.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.AnyTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.AnyTransform.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.AnyTransform.apply">apply</a></code> | Modifies the passed in template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.AnyTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.AnyTransform.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.AnyTransform.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.AnyTransform.apply"></a>

```typescript
public apply(template: any): any
```

Modifies the passed in template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.AnyTransform.apply.parameter.template"></a>

- *Type:* any

Always return the template.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.AnyTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.AnyTransform.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.AnyTransform.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.AnyTransform.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.AnyTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.AnyTransform.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.AnyTransform.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.AnyTransform.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.AnyTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.AnyTransform.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.AnyTransform.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.AnyTransform.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.AnyTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.AnyTransform.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.AnyTransform.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.AnyTransform.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---


### BaseImporter <a name="BaseImporter" id="@michanto/cdk-orchestration.transforms.BaseImporter"></a>

Base class for Template importers.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.BaseImporter.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.BaseImporter(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.BaseImporter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.BaseImporter.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.BaseImporter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.isCfnTransformHost">isCfnTransformHost</a></code> | Checks if `x` if a CfnTransformHost construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.createImportOrders">createImportOrders</a></code> | Add import orders to any CfnElement or Stack to order the transforms. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.BaseImporter.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.BaseImporter.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.BaseImporter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransformHost` <a name="isCfnTransformHost" id="@michanto/cdk-orchestration.transforms.BaseImporter.isCfnTransformHost"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.BaseImporter.isCfnTransformHost(x: Construct)
```

Checks if `x` if a CfnTransformHost construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.BaseImporter.isCfnTransformHost.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

##### `createImportOrders` <a name="createImportOrders" id="@michanto/cdk-orchestration.transforms.BaseImporter.createImportOrders"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.BaseImporter.createImportOrders(scope: Construct)
```

Add import orders to any CfnElement or Stack to order the transforms.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.BaseImporter.createImportOrders.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.property.parserOrder">parserOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.PARSER. |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.property.preReaderOrder">preReaderOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.PRE_READER. |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.property.readerOrder">readerOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.READER. |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.property.stringTransformOrder">stringTransformOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.STRING_TRANSFORMS. |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.property.templateTransformOrder">templateTransformOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.TRANSFORMS. |
| <code><a href="#@michanto/cdk-orchestration.transforms.BaseImporter.property.writerOrder">writerOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.WRITER. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.BaseImporter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `parserOrder`<sup>Required</sup> <a name="parserOrder" id="@michanto/cdk-orchestration.transforms.BaseImporter.property.parserOrder"></a>

```typescript
public readonly parserOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.PARSER.

---

##### `preReaderOrder`<sup>Required</sup> <a name="preReaderOrder" id="@michanto/cdk-orchestration.transforms.BaseImporter.property.preReaderOrder"></a>

```typescript
public readonly preReaderOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.PRE_READER.

---

##### `readerOrder`<sup>Required</sup> <a name="readerOrder" id="@michanto/cdk-orchestration.transforms.BaseImporter.property.readerOrder"></a>

```typescript
public readonly readerOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.READER.

---

##### `stringTransformOrder`<sup>Required</sup> <a name="stringTransformOrder" id="@michanto/cdk-orchestration.transforms.BaseImporter.property.stringTransformOrder"></a>

```typescript
public readonly stringTransformOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.STRING_TRANSFORMS.

---

##### `templateTransformOrder`<sup>Required</sup> <a name="templateTransformOrder" id="@michanto/cdk-orchestration.transforms.BaseImporter.property.templateTransformOrder"></a>

```typescript
public readonly templateTransformOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.TRANSFORMS.

---

##### `writerOrder`<sup>Required</sup> <a name="writerOrder" id="@michanto/cdk-orchestration.transforms.BaseImporter.property.writerOrder"></a>

```typescript
public readonly writerOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.WRITER.

---


### BaseTemplateImporter <a name="BaseTemplateImporter" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter"></a>

Base class for {@link TemplateImporter}.

This is a TemplateImporter minus the transforms.

Applies the import transforms on the given file and creates a new CfnInclude for the imported template.

Transforms you might want to add to a BaseTemplateImporter subclass:

- PreReader - PreReader transforms take an arbitrary string and return a CloudFormation file path.
  A PreReader transform could call a python script, run a GetTemplateLongPromise, or otherwise
  generate a CloudFormation file.
- StringReplacer - Easy string replacement before the template is parsed.
- Transform - Modify the parsed template before it is imported.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.Initializer"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

new cloudformation_include.BaseTemplateImporter(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.importTemplate">importTemplate</a></code> | Applies the import transforms on the given file and creates a new CfnInclude for the imported template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `importTemplate` <a name="importTemplate" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.importTemplate"></a>

```typescript
public importTemplate(templateFile: string, props?: ImportTemplateProps): CfnInclude
```

Applies the import transforms on the given file and creates a new CfnInclude for the imported template.

###### `templateFile`<sup>Required</sup> <a name="templateFile" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.importTemplate.parameter.templateFile"></a>

- *Type:* string

Normally this is the file you wish to import, and is passed to the Reader step.

However, if you have added any PreReader Transforms than this string is passed to those transforms,
and the output of the PreReader transforms is passed to the Reader step.

PreReader transforms are useful for calling scripts that write JSON files.

---

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.importTemplate.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.isCfnTransformHost">isCfnTransformHost</a></code> | Checks if `x` if a CfnTransformHost construct. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.createImportOrders">createImportOrders</a></code> | Add import orders to any CfnElement or Stack to order the transforms. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.isConstruct"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

cloudformation_include.BaseTemplateImporter.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransformHost` <a name="isCfnTransformHost" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.isCfnTransformHost"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

cloudformation_include.BaseTemplateImporter.isCfnTransformHost(x: Construct)
```

Checks if `x` if a CfnTransformHost construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.isCfnTransformHost.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

##### `createImportOrders` <a name="createImportOrders" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.createImportOrders"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

cloudformation_include.BaseTemplateImporter.createImportOrders(scope: Construct)
```

Add import orders to any CfnElement or Stack to order the transforms.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.createImportOrders.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.parserOrder">parserOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.PARSER. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.preReaderOrder">preReaderOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.PRE_READER. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.readerOrder">readerOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.READER. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.stringTransformOrder">stringTransformOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.STRING_TRANSFORMS. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.templateTransformOrder">templateTransformOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.TRANSFORMS. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.writerOrder">writerOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.WRITER. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.capture">capture</a></code> | <code>@michanto/cdk-orchestration.transforms.TemplateCapture</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `parserOrder`<sup>Required</sup> <a name="parserOrder" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.parserOrder"></a>

```typescript
public readonly parserOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.PARSER.

---

##### `preReaderOrder`<sup>Required</sup> <a name="preReaderOrder" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.preReaderOrder"></a>

```typescript
public readonly preReaderOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.PRE_READER.

---

##### `readerOrder`<sup>Required</sup> <a name="readerOrder" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.readerOrder"></a>

```typescript
public readonly readerOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.READER.

---

##### `stringTransformOrder`<sup>Required</sup> <a name="stringTransformOrder" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.stringTransformOrder"></a>

```typescript
public readonly stringTransformOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.STRING_TRANSFORMS.

---

##### `templateTransformOrder`<sup>Required</sup> <a name="templateTransformOrder" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.templateTransformOrder"></a>

```typescript
public readonly templateTransformOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.TRANSFORMS.

---

##### `writerOrder`<sup>Required</sup> <a name="writerOrder" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.writerOrder"></a>

```typescript
public readonly writerOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.WRITER.

---

##### `capture`<sup>Required</sup> <a name="capture" id="@michanto/cdk-orchestration.cloudformation_include.BaseTemplateImporter.property.capture"></a>

```typescript
public readonly capture: TemplateCapture;
```

- *Type:* @michanto/cdk-orchestration.transforms.TemplateCapture

---


### CfnTransform <a name="CfnTransform" id="@michanto/cdk-orchestration.transforms.CfnTransform"></a>

- *Implements:* @michanto/cdk-orchestration.transforms.ICfnTransform

CfnTransform the base class for L1 CDK Transform constructs.  TransformBase is the L2 Transform base class.

Transforms are applied to Stacks, CfnElements or CfnTransformHost constructs
(such as TemplateImporter).  They allow low-level access to CloudFormation
via the apply method.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.CfnTransform.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.CfnTransform(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.CfnTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.CfnTransform.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransform.apply">apply</a></code> | Modifies the template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.CfnTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.CfnTransform.apply"></a>

```typescript
public apply(template: any): any
```

Modifies the template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.CfnTransform.apply.parameter.template"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransform.isCfnTransform">isCfnTransform</a></code> | Checks if `x` if a CfnTransform. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.CfnTransform.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.CfnTransform.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.CfnTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransform` <a name="isCfnTransform" id="@michanto/cdk-orchestration.transforms.CfnTransform.isCfnTransform"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.CfnTransform.isCfnTransform(x: any)
```

Checks if `x` if a CfnTransform.

Uses duck-typing instead of `instanceof` to allow CfnTransforms from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.CfnTransform.isCfnTransform.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransform.property.host">host</a></code> | <code>constructs.IConstruct</code> | Which construct will apply this transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransform.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.CfnTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `host`<sup>Required</sup> <a name="host" id="@michanto/cdk-orchestration.transforms.CfnTransform.property.host"></a>

```typescript
public readonly host: IConstruct;
```

- *Type:* constructs.IConstruct

Which construct will apply this transform.

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.CfnTransform.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---


### CfnTransformHost <a name="CfnTransformHost" id="@michanto/cdk-orchestration.transforms.CfnTransformHost"></a>

CfnTransformHost allows transforms to be used anywhere JSON is accessible.

Transforms hosted by a Stack or CfnElement are
applied during synthesis (calls to _toCloudFormation). Adding a
CfnTransform to a Stack or CfnElement will cause the _toCloudFormation
method to be proxied to apply Transforms.

This class is used for import (see TemplateImporter in cloudformation-include submodule) and
for properties (see StatesTransform in aws-stepfunctions submodule), and other non-stack
non-element scenarios.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.CfnTransformHost.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.CfnTransformHost(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransformHost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransformHost.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.CfnTransformHost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.CfnTransformHost.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransformHost.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.CfnTransformHost.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransformHost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransformHost.isCfnTransformHost">isCfnTransformHost</a></code> | Checks if `x` if a CfnTransformHost construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.CfnTransformHost.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.CfnTransformHost.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.CfnTransformHost.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransformHost` <a name="isCfnTransformHost" id="@michanto/cdk-orchestration.transforms.CfnTransformHost.isCfnTransformHost"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.CfnTransformHost.isCfnTransformHost(x: Construct)
```

Checks if `x` if a CfnTransformHost construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.CfnTransformHost.isCfnTransformHost.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.CfnTransformHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.CfnTransformHost.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Chainable <a name="Chainable" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable"></a>

- *Implements:* aws-cdk-lib.aws_stepfunctions.IChainable

Base class for StepFunction definitions.

Helps users define StepFunction definitions as constructs thusly:
```
class MyDefinition extends Chainable {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    let start = new Pass(stack, 'Pass')
    this.wrapped = Chain.start(start);
  }
}
let definition = new MyDefinition(stack, 'PassDef');
let sm = new StateMachine(stack, 'Passer', {
   definitionBody: DefinitionBody.fromChainable(definition),
});
```

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable.Initializer"></a>

```typescript
import { aws_stepfunctions } from '@michanto/cdk-orchestration'

new aws_stepfunctions.Chainable(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.Chainable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.Chainable.Initializer.parameter.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable.Initializer.parameter.id"></a>

- *Type:* string

Descriptive identifier for this chainable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.Chainable.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.Chainable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable.isConstruct"></a>

```typescript
import { aws_stepfunctions } from '@michanto/cdk-orchestration'

aws_stepfunctions.Chainable.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.Chainable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.Chainable.property.endStates">endStates</a></code> | <code>aws-cdk-lib.aws_stepfunctions.INextable[]</code> | The chainable end state(s) of this chainable. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.Chainable.property.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.Chainable.property.startState">startState</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State</code> | The start state of this chainable. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.Chainable.property.wrapped">wrapped</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IChainable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endStates`<sup>Required</sup> <a name="endStates" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable.property.endStates"></a>

```typescript
public readonly endStates: INextable[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions.INextable[]

The chainable end state(s) of this chainable.

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Descriptive identifier for this chainable.

---

##### `startState`<sup>Required</sup> <a name="startState" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable.property.startState"></a>

```typescript
public readonly startState: State;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State

The start state of this chainable.

---

##### `wrapped`<sup>Required</sup> <a name="wrapped" id="@michanto/cdk-orchestration.aws_stepfunctions.Chainable.property.wrapped"></a>

```typescript
public readonly wrapped: IChainable;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---


### Echo <a name="Echo" id="@michanto/cdk-orchestration.transforms.Echo"></a>

Logs the given template.

Turn off this logging by setting a NoOpLogger on this construct:
`Logger.set(echo, new NoOpLogger())`;

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.Echo.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.Echo(scope: Construct, id?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Echo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.Echo.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Echo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Optional</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.Echo.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Echo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Echo.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Echo.apply">apply</a></code> | Modifies the passed in template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.Echo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.Echo.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.Echo.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.Echo.apply"></a>

```typescript
public apply(template: {[ key: string ]: any}): {[ key: string ]: any}
```

Modifies the passed in template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.Echo.apply.parameter.template"></a>

- *Type:* {[ key: string ]: any}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Echo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Echo.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.Echo.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Echo.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.Echo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.Echo.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Echo.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Echo.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Echo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Echo.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Echo.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Echo.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.Echo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.Echo.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.Echo.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.Echo.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---


### EncodeResource <a name="EncodeResource" id="@michanto/cdk-orchestration.custom_resources.EncodeResource"></a>

This transform base64-encodes any L1, L2 or L3 CustomResource it is applied to by moving all properties (other than those listed in SERVICE_PROPERTIES) to EncodedProperties and applying {@link Fn.base64}. This resource will encode it's properties as a post-resolve step, It is meant to be used on CfnCustomResource (or any CfnResource with a ServiceToken), as it does not encode the ServiceToken.  If there is no ServiceToken, the resource is not encoded.

Why encode custom resources?  Because CloudFormation will turn numbers and booleans
into strings when it calls a custom resource Lambda, and that is not always desirable.
Encoding the properties prevents that conversion.  This is a CDK best-practice, and
is the recommended work-around for transmitting unaltered properties to a custom resource lambda.

Note that the lambda MUST base64 decode the EncodedProperties for use.  Example:
```
  // If the properties were encoded, decode them now.
 if ('EncodedProperties' in event.ResourceProperties) {
   event.ResourceProperties = JSON.parse(Buffer
     .from(event.ResourceProperties.EncodedProperties, 'base64')
     .toString('utf8'));
 }
```

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.Initializer"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

new custom_resources.EncodeResource(scope: Construct, id?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Optional</sup> <a name="id" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.apply">apply</a></code> | Modifies the passed in template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.apply"></a>

```typescript
public apply(template: {[ key: string ]: any}): {[ key: string ]: any}
```

Modifies the passed in template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.apply.parameter.template"></a>

- *Type:* {[ key: string ]: any}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.isConstruct"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

custom_resources.EncodeResource.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.isTransformBase"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

custom_resources.EncodeResource.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.property.order">order</a></code> | <code>string</code> | Run this transform last so previous transforms have access to the custom resource properties. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.property.target">target</a></code> | <code>constructs.Construct</code> | Encodes an L1, L2 or L3 custom resource by finding the child custom resource of the scope of this transform. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Run this transform last so previous transforms have access to the custom resource properties.

Works fine on custom resources without orders, but it's a nice feature
for LambdaCustomResource.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Encodes an L1, L2 or L3 custom resource by finding the child custom resource of the scope of this transform.

Throws if there are
multiple custom resources under the scope.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.EncodeResource.property.SERVICE_PROPERTIES">SERVICE_PROPERTIES</a></code> | <code>string[]</code> | Service properties are used by CloudFormation and thus should not be encoded. |

---

##### `SERVICE_PROPERTIES`<sup>Required</sup> <a name="SERVICE_PROPERTIES" id="@michanto/cdk-orchestration.custom_resources.EncodeResource.property.SERVICE_PROPERTIES"></a>

```typescript
public readonly SERVICE_PROPERTIES: string[];
```

- *Type:* string[]

Service properties are used by CloudFormation and thus should not be encoded.

For now,
that list means ServiceToken and ServiceTimeout.

This future-proofs this transform against another service property being added in the future.
Example:
```
EncodeResource.SERVICE_PROPERTIES.push('ServiceProperty')
```

---

### FileReader <a name="FileReader" id="@michanto/cdk-orchestration.transforms.FileReader"></a>

Reads a file (presumably one containing a template) and returns it as a string.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.FileReader.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.FileReader(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.FileReader.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.FileReader.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.FileReader.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.FileReader.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.FileReader.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.FileReader.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.FileReader.apply">apply</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.FileReader.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.FileReader.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.FileReader.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.FileReader.apply"></a>

```typescript
public apply(template: string): string
```

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.FileReader.apply.parameter.template"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.FileReader.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.FileReader.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.FileReader.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.FileReader.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.FileReader.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.FileReader.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.FileReader.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.FileReader.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.FileReader.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.FileReader.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.FileReader.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.FileReader.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.FileReader.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.FileReader.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.FileReader.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.FileReader.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---


### InlineNodejsFunction <a name="InlineNodejsFunction" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction"></a>

- *Implements:* aws-cdk-lib.IInspectable

Inline code version of NodejsFunction.  Write Lambda code in the CDK package, in either JavaScript or TypeScript.

Creates a Lambda from a single JavaScript file included in your package.
Pass a file like to the js file from the dist/output directory as
{@link InlineNodejsFunctionProps.entry}.

Inline Lambda runs only with the code in the .js entry file provided and the
AWS Lambda NodeJS runtime.  Thus while the entry file can export functions and
types to the rest of your CDK package, it cannot import anything
not available in the Lambda runtime.  The Lambda runtime includes the base Node library
(such as https://nodejs.org/docs/latest-v18.x/api/), along with aws-sdk and/or

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

new aws_lambda_nodejs.InlineNodejsFunction(scope: Construct, id: string, props: InlineNodejsFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeCompositePrincipal">grantInvokeCompositePrincipal</a></code> | Grant multiple principals the ability to invoke this Lambda via CompositePrincipal. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeLatestVersion">grantInvokeLatestVersion</a></code> | Grant the given identity permissions to invoke the $LATEST version or unqualified version of this Lambda. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeVersion">grantInvokeVersion</a></code> | Grant the given identity permissions to invoke the given version of this Lambda. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.invalidateVersionBasedOn">invalidateVersionBasedOn</a></code> | Mix additional information into the hash of the Version object. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.inspect">inspect</a></code> | Examines construct. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the aws-cdk-lib/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeCompositePrincipal` <a name="grantInvokeCompositePrincipal" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeCompositePrincipal"></a>

```typescript
public grantInvokeCompositePrincipal(compositePrincipal: CompositePrincipal): Grant[]
```

Grant multiple principals the ability to invoke this Lambda via CompositePrincipal.

###### `compositePrincipal`<sup>Required</sup> <a name="compositePrincipal" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeCompositePrincipal.parameter.compositePrincipal"></a>

- *Type:* aws-cdk-lib.aws_iam.CompositePrincipal

---

##### `grantInvokeLatestVersion` <a name="grantInvokeLatestVersion" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeLatestVersion"></a>

```typescript
public grantInvokeLatestVersion(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke the $LATEST version or unqualified version of this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeLatestVersion.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeVersion` <a name="grantInvokeVersion" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeVersion"></a>

```typescript
public grantInvokeVersion(grantee: IGrantable, version: IVersion): Grant
```

Grant the given identity permissions to invoke the given version of this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeVersion.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `version`<sup>Required</sup> <a name="version" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeVersion.parameter.version"></a>

- *Type:* aws-cdk-lib.aws_lambda.IVersion

---

##### `metric` <a name="metric" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
  aliasName: 'Live',
  version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addLayers"></a>

```typescript
public addLayers(layers: ...ILayerVersion[]): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addLayers.parameter.layers"></a>

- *Type:* ...aws-cdk-lib.aws_lambda.ILayerVersion[]

the layers to be added.

---

##### `invalidateVersionBasedOn` <a name="invalidateVersionBasedOn" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.invalidateVersionBasedOn"></a>

```typescript
public invalidateVersionBasedOn(x: string): void
```

Mix additional information into the hash of the Version object.

The Lambda Function construct does its best to automatically create a new
Version when anything about the Function changes (its code, its layers,
any of the other properties).

However, you can sometimes source information from places that the CDK cannot
look into, like the deploy-time values of SSM parameters. In those cases,
the CDK would not force the creation of a new Version object when it actually
should.

This method can be used to invalidate the current Version object. Pass in
any string into this method, and make sure the string changes when you know
a new Version needs to be created.

This method may be called more than once.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.invalidateVersionBasedOn.parameter.x"></a>

- *Type:* string

---

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.minifyEngineFromProps">minifyEngineFromProps</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isConstruct"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isOwnedResource"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isResource"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.classifyVersionProperty"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

For `Function.addPermissions()` to work on this imported lambda, make sure that is
in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

For `Function.addPermissions()` to work on this imported lambda, set the sameEnvironment property to true
if this imported lambda is in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAll"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllConcurrentExecutions"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllDuration"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllErrors"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllInvocations"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllThrottles"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `minifyEngineFromProps` <a name="minifyEngineFromProps" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.minifyEngineFromProps"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.minifyEngineFromProps(props: InlineNodejsFunctionProps)
```

###### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.minifyEngineFromProps.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.tmpFile">tmpFile</a></code> | <code>string</code> | Path to the temporary file with the minified code (if any). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---

##### `tmpFile`<sup>Optional</sup> <a name="tmpFile" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.tmpFile"></a>

```typescript
public readonly tmpFile: string;
```

- *Type:* string

Path to the temporary file with the minified code (if any).

This path is also published via IInspectiable, and thus will appear in
the tree.json file as attribute "@michanto/cdk-orchestration.InlineNodejsFunction.tmpfile".

This makes it possible to get quick development turn around by
compiling your project and copying the minified code to the console.
Note the location will change to a new temporary directory each time the code
is compiled.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.TMP_FILE_ATTRIBUTE_NAME">TMP_FILE_ATTRIBUTE_NAME</a></code> | <code>string</code> | Link in tree.json to the file used for inline code. |

---

##### `TMP_FILE_ATTRIBUTE_NAME`<sup>Required</sup> <a name="TMP_FILE_ATTRIBUTE_NAME" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.TMP_FILE_ATTRIBUTE_NAME"></a>

```typescript
public readonly TMP_FILE_ATTRIBUTE_NAME: string;
```

- *Type:* string

Link in tree.json to the file used for inline code.

---

### InsertStepFunctionState <a name="InsertStepFunctionState" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState"></a>

Inserts a StepFunctionState after an existing state in the StateMachine defintion.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.Initializer"></a>

```typescript
import { aws_stepfunctions } from '@michanto/cdk-orchestration'

new aws_stepfunctions.InsertStepFunctionState(scope: Construct, id: string, props: InsertStepFunctionStateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionStateProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionStateProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.apply">apply</a></code> | Modifies the passed in template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.apply"></a>

```typescript
public apply(template: {[ key: string ]: any}): {[ key: string ]: any}
```

Modifies the passed in template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.apply.parameter.template"></a>

- *Type:* {[ key: string ]: any}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.isConstruct"></a>

```typescript
import { aws_stepfunctions } from '@michanto/cdk-orchestration'

aws_stepfunctions.InsertStepFunctionState.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.isTransformBase"></a>

```typescript
import { aws_stepfunctions } from '@michanto/cdk-orchestration'

aws_stepfunctions.InsertStepFunctionState.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.propertyName">propertyName</a></code> | <code>string</code> | Gets the propertyName from the scope of this construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.resourceType">resourceType</a></code> | <code>string</code> | Gets the resourceType from the scope of this construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

Gets the propertyName from the scope of this construct.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionState.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Gets the resourceType from the scope of this construct.

---


### Joiner <a name="Joiner" id="@michanto/cdk-orchestration.transforms.Joiner"></a>

JSON resource properties can be stored in CloudFormation either as a string, or as an Fn.join of strings and objects.

In order for Transforms to act on embedded and joined JSON, the JSON first needs to
be stringified.  If the template passed to this class is an Fn.join, this class
tokenizes all objects in the join and concatenates them.  This forms valid JSON
that can be parsed and modified by Transforms.  See {@link PropertyTransform }
for example usage.

During synthesis, the CDK will turn the tokenized string back into an Fn.join before
writing it to the template.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.Joiner.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.Joiner(scope: Construct, id?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Joiner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Optional</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.Joiner.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.apply">apply</a></code> | Modifies the passed in template. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.doJoin">doJoin</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.Joiner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.Joiner.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.Joiner.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.Joiner.apply"></a>

```typescript
public apply(template: any): any
```

Modifies the passed in template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.Joiner.apply.parameter.template"></a>

- *Type:* any

---

##### `doJoin` <a name="doJoin" id="@michanto/cdk-orchestration.transforms.Joiner.doJoin"></a>

```typescript
public doJoin(template: any): any
```

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.Joiner.doJoin.parameter.template"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.Joiner.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Joiner.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.Joiner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.Joiner.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Joiner.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Joiner.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Joiner.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.Joiner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.Joiner.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.Joiner.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.Joiner.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---


### JsonParser <a name="JsonParser" id="@michanto/cdk-orchestration.transforms.JsonParser"></a>

Uses a yaml parser to parse a template.

Takes in a template as a string JSON,
and returns a parsed template.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.JsonParser.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.JsonParser(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonParser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonParser.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.JsonParser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.JsonParser.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonParser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonParser.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonParser.apply">apply</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.JsonParser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.JsonParser.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.JsonParser.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.JsonParser.apply"></a>

```typescript
public apply(template: string): {[ key: string ]: any}
```

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.JsonParser.apply.parameter.template"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonParser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonParser.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.JsonParser.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.JsonParser.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.JsonParser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.JsonParser.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.JsonParser.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.JsonParser.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonParser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonParser.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonParser.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonParser.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.JsonParser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.JsonParser.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.JsonParser.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.JsonParser.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---


### JsonPropertyTransform <a name="JsonPropertyTransform" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform"></a>

Transforms a JSON property on a CfnElement.

Canonical example is DefinitionString on a CfnStateMachine (StatesTransform).

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.JsonPropertyTransform(scope: Construct, id: string, props: JsonPropertyTransformProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.transforms.JsonPropertyTransformProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.transforms.JsonPropertyTransformProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.apply">apply</a></code> | Modifies the passed in template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.apply"></a>

```typescript
public apply(template: {[ key: string ]: any}): {[ key: string ]: any}
```

Modifies the passed in template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.apply.parameter.template"></a>

- *Type:* {[ key: string ]: any}

Always return the template.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.JsonPropertyTransform.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.JsonPropertyTransform.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.propertyName">propertyName</a></code> | <code>string</code> | Gets the propertyName from the scope of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.resourceType">resourceType</a></code> | <code>string</code> | Gets the resourceType from the scope of this construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

Gets the propertyName from the scope of this construct.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransform.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Gets the resourceType from the scope of this construct.

---


### LambdaCustomResource <a name="LambdaCustomResource" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource"></a>

This is a drop-in replacement for AwsCustomResource.

Provides it's own runtime similar to that of AwsCustomResource, but deserializes
the Lambda return value when the responseBufferField property is set to Payload.
For S3 GetObject, responseBufferField should be set to Body).
- Supports flattening of lambda return values (see {@link AwsCustomResource.getResponseField}).
- Supports filtering (see {@link AwsSdkCall.outputPaths).} * - Support deserlializing via LambdaCustomResourceProps.responseBufferField.
- Supports default values for response fields as LambdaCustomResourceProps.defaults.
- Does not support installLatestAwsSdk parameter (future).

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.Initializer"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

new custom_resources.LambdaCustomResource(scope: Construct, id: string, props: LambdaCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.executeAfter">executeAfter</a></code> | Adds task dependencies. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.executeBefore">executeBefore</a></code> | Adds task as a dependency on other constructs. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getAtt">getAtt</a></code> | Returns the value of an attribute of the custom resource of an arbitrary type. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getAttString">getAttString</a></code> | Returns the value of an attribute of the custom resource of type string. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getResponseField">getResponseField</a></code> | Returns a flattened JSON key from the resource response. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getResponseFieldReference">getResponseFieldReference</a></code> | Returns response data for the AWS SDK call. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Sets the deletion policy of the resource based on the removal policy specified.

###### `policy`<sup>Required</sup> <a name="policy" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `executeAfter` <a name="executeAfter" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.executeAfter"></a>

```typescript
public executeAfter(scopes: ...Construct[]): void
```

Adds task dependencies.

Execute this task only after these construct
scopes have been provisioned.

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.executeAfter.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which this task will depend on.

---

##### `executeBefore` <a name="executeBefore" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.executeBefore"></a>

```typescript
public executeBefore(scopes: ...Construct[]): void
```

Adds task as a dependency on other constructs.

This means that this
task will get executed *before* the given construct(s).

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.executeBefore.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which will take a dependency on this task.

---

##### `getAtt` <a name="getAtt" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns the value of an attribute of the custom resource of an arbitrary type.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getAtt.parameter.attributeName"></a>

- *Type:* string

---

##### `getAttString` <a name="getAttString" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getAttString"></a>

```typescript
public getAttString(attributeName: string): string
```

Returns the value of an attribute of the custom resource of type string.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getAttString.parameter.attributeName"></a>

- *Type:* string

---

##### `getResponseField` <a name="getResponseField" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getResponseField"></a>

```typescript
public getResponseField(dataPath: string): string
```

Returns a flattened JSON key from the resource response.

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getResponseField.parameter.dataPath"></a>

- *Type:* string

Response field name.

---

##### `getResponseFieldReference` <a name="getResponseFieldReference" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getResponseFieldReference"></a>

```typescript
public getResponseFieldReference(dataPath: string): Reference
```

Returns response data for the AWS SDK call.

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.getResponseFieldReference.parameter.dataPath"></a>

- *Type:* string

Response field name.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.isTask">isTask</a></code> | Checks if `x` if a Task construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.isConstruct"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

custom_resources.LambdaCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTask` <a name="isTask" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.isTask"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

custom_resources.LambdaCustomResource.isTask(x: Construct)
```

Checks if `x` if a Task construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.isTask.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.customResource">customResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | The L2 custom resource. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.ref">ref</a></code> | <code>string</code> | The physical name of this custom resource. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.props">props</a></code> | <code>@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.resource">resource</a></code> | <code>aws-cdk-lib.CfnResource</code> | The L1 custom resource. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.resources">resources</a></code> | <code>@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources</code> | Support resources for LambdaCustomResource. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResource`<sup>Required</sup> <a name="customResource" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.customResource"></a>

```typescript
public readonly customResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

The L2 custom resource.

---

##### `ref`<sup>Required</sup> <a name="ref" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The physical name of this custom resource.

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.props"></a>

```typescript
public readonly props: LambdaCustomResourceProps;
```

- *Type:* @michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps

---

##### `resource`<sup>Required</sup> <a name="resource" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.resource"></a>

```typescript
public readonly resource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

The L1 custom resource.

---

##### `resources`<sup>Required</sup> <a name="resources" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResource.property.resources"></a>

```typescript
public readonly resources: LambdaCustomResourceResources;
```

- *Type:* @michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources

Support resources for LambdaCustomResource.

---


### LambdaCustomResourceResources <a name="LambdaCustomResourceResources" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources"></a>

Support resources for LambdaCustomResource.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.Initializer"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

new custom_resources.LambdaCustomResourceResources(scope: Construct, id: string, props: LambdaCustomResourceResourcesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.createOnEventFunction">createOnEventFunction</a></code> | Creates the custom resource onEvent provider method. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.createRole">createRole</a></code> | Creates the shared role. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createOnEventFunction` <a name="createOnEventFunction" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.createOnEventFunction"></a>

```typescript
public createOnEventFunction(props: LambdaCustomResourceResourcesProps): Function
```

Creates the custom resource onEvent provider method.

###### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.createOnEventFunction.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps

---

##### `createRole` <a name="createRole" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.createRole"></a>

```typescript
public createRole(props: LambdaCustomResourceResourcesProps): Role
```

Creates the shared role.

###### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.createRole.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.isConstruct"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

custom_resources.LambdaCustomResourceResources.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.property.onEvent">onEvent</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The custom resource onEvent provider method. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.property.provider">provider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | The custom resource provider. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The shared role. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `onEvent`<sup>Required</sup> <a name="onEvent" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.property.onEvent"></a>

```typescript
public readonly onEvent: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The custom resource onEvent provider method.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.property.provider"></a>

```typescript
public readonly provider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

The custom resource provider.

---

##### `role`<sup>Required</sup> <a name="role" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResources.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The shared role.

---


### LambdaTask <a name="LambdaTask" id="@michanto/cdk-orchestration.orchestration.LambdaTask"></a>

Easily turn any lambda into a custom resource, similar to how AwsCustomResource works, but with a slighly altered runtime.

See {@link LambdaTaskProps} for details.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.orchestration.LambdaTask.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

new orchestration.LambdaTask(scope: Construct, id: string, props: LambdaTaskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.orchestration.LambdaTaskProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.orchestration.LambdaTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.orchestration.LambdaTask.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.orchestration.LambdaTask.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.orchestration.LambdaTaskProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.executeAfter">executeAfter</a></code> | Adds task dependencies. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.executeBefore">executeBefore</a></code> | Adds task as a dependency on other constructs. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.getAtt">getAtt</a></code> | Returns the value of an attribute of the custom resource of an arbitrary type. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.getAttString">getAttString</a></code> | Returns the value of an attribute of the custom resource of type string. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.orchestration.LambdaTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@michanto/cdk-orchestration.orchestration.LambdaTask.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Sets the deletion policy of the resource based on the removal policy specified.

###### `policy`<sup>Required</sup> <a name="policy" id="@michanto/cdk-orchestration.orchestration.LambdaTask.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `executeAfter` <a name="executeAfter" id="@michanto/cdk-orchestration.orchestration.LambdaTask.executeAfter"></a>

```typescript
public executeAfter(scopes: ...Construct[]): void
```

Adds task dependencies.

Execute this task only after these construct
scopes have been provisioned.

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.LambdaTask.executeAfter.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which this task will depend on.

---

##### `executeBefore` <a name="executeBefore" id="@michanto/cdk-orchestration.orchestration.LambdaTask.executeBefore"></a>

```typescript
public executeBefore(scopes: ...Construct[]): void
```

Adds task as a dependency on other constructs.

This means that this
task will get executed *before* the given construct(s).

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.LambdaTask.executeBefore.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which will take a dependency on this task.

---

##### `getAtt` <a name="getAtt" id="@michanto/cdk-orchestration.orchestration.LambdaTask.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns the value of an attribute of the custom resource of an arbitrary type.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.LambdaTask.getAtt.parameter.attributeName"></a>

- *Type:* string

---

##### `getAttString` <a name="getAttString" id="@michanto/cdk-orchestration.orchestration.LambdaTask.getAttString"></a>

```typescript
public getAttString(attributeName: string): string
```

Returns the value of an attribute of the custom resource of type string.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.LambdaTask.getAttString.parameter.attributeName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.isTask">isTask</a></code> | Checks if `x` if a Task construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.orchestration.LambdaTask.isConstruct"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.LambdaTask.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.LambdaTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTask` <a name="isTask" id="@michanto/cdk-orchestration.orchestration.LambdaTask.isTask"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.LambdaTask.isTask(x: Construct)
```

Checks if `x` if a Task construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.LambdaTask.isTask.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.property.customResource">customResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | L2 custom resource for this Task. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.property.ref">ref</a></code> | <code>string</code> | The physical name of this custom resource. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.property.lambdaCustomResource">lambdaCustomResource</a></code> | <code>@michanto/cdk-orchestration.custom_resources.LambdaCustomResource</code> | LambdaCustomResource that implements this Task. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTask.property.lambdaFunction">lambdaFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | Lambda function called by this Task. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.orchestration.LambdaTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResource`<sup>Required</sup> <a name="customResource" id="@michanto/cdk-orchestration.orchestration.LambdaTask.property.customResource"></a>

```typescript
public readonly customResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

L2 custom resource for this Task.

---

##### `ref`<sup>Required</sup> <a name="ref" id="@michanto/cdk-orchestration.orchestration.LambdaTask.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The physical name of this custom resource.

---

##### `lambdaCustomResource`<sup>Required</sup> <a name="lambdaCustomResource" id="@michanto/cdk-orchestration.orchestration.LambdaTask.property.lambdaCustomResource"></a>

```typescript
public readonly lambdaCustomResource: LambdaCustomResource;
```

- *Type:* @michanto/cdk-orchestration.custom_resources.LambdaCustomResource

LambdaCustomResource that implements this Task.

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="@michanto/cdk-orchestration.orchestration.LambdaTask.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

Lambda function called by this Task.

---


### LateBoundStepFunctionsStartExecution <a name="LateBoundStepFunctionsStartExecution" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution"></a>

Calls a stepFunction who's ARN is not known until runtime.

This class can be used to create StepFunction wrappers.
Use it to add pre- or post-processing to any existing StepFunction.

Examples:
 - Wrapper that reads a file from S3, and passes that as input to the wrapped StepFunciton.
 - Wrapper that writes a portion of StepFunction output to S3.

Runs the state machine specified by {@link LateBoundStepFunctionsStartExecutionProps.stateMachineArnPath).}

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer"></a>

```typescript
import { aws_stepfunctions_tasks } from '@michanto/cdk-orchestration'

new aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution(scope: Construct, id: string, props: LateBoundStepFunctionsStartExecutionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.id"></a>

- *Type:* string

Descriptive identifier for this chainable.

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addPrefix">addPrefix</a></code> | Add a prefix to the stateId of this state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.bindToGraph">bindToGraph</a></code> | Register this state as part of the given graph. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.toStateJson">toStateJson</a></code> | Return the Amazon States Language object for this state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addCatch">addCatch</a></code> | Add a recovery handler for this state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addRetry">addRetry</a></code> | Add retry configuration for this state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metric">metric</a></code> | Return the given named metric for this Task. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricFailed">metricFailed</a></code> | Metric for the number of times this activity fails. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricHeartbeatTimedOut">metricHeartbeatTimedOut</a></code> | Metric for the number of times the heartbeat times out for this activity. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricRunTime">metricRunTime</a></code> | The interval, in milliseconds, between the time the Task starts and the time it closes. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduled">metricScheduled</a></code> | Metric for the number of times this activity is scheduled. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduleTime">metricScheduleTime</a></code> | The interval, in milliseconds, for which the activity stays in the schedule state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricStarted">metricStarted</a></code> | Metric for the number of times this activity is started. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricSucceeded">metricSucceeded</a></code> | Metric for the number of times this activity succeeds. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTime">metricTime</a></code> | The interval, in milliseconds, between the time the activity is scheduled and the time it closes. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTimedOut">metricTimedOut</a></code> | Metric for the number of times this activity times out. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.next">next</a></code> | Continue normal execution with the given state. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addPrefix` <a name="addPrefix" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addPrefix"></a>

```typescript
public addPrefix(x: string): void
```

Add a prefix to the stateId of this state.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addPrefix.parameter.x"></a>

- *Type:* string

---

##### `bindToGraph` <a name="bindToGraph" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.bindToGraph"></a>

```typescript
public bindToGraph(graph: StateGraph): void
```

Register this state as part of the given graph.

Don't call this. It will be called automatically when you work
with states normally.

###### `graph`<sup>Required</sup> <a name="graph" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.bindToGraph.parameter.graph"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.StateGraph

---

##### `toStateJson` <a name="toStateJson" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.toStateJson"></a>

```typescript
public toStateJson(): object
```

Return the Amazon States Language object for this state.

##### `addCatch` <a name="addCatch" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addCatch"></a>

```typescript
public addCatch(handler: IChainable, props?: CatchProps): TaskStateBase
```

Add a recovery handler for this state.

When a particular error occurs, execution will continue at the error
handler instead of failing the state machine execution.

###### `handler`<sup>Required</sup> <a name="handler" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addCatch.parameter.handler"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addCatch.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.CatchProps

---

##### `addRetry` <a name="addRetry" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addRetry"></a>

```typescript
public addRetry(props?: RetryProps): TaskStateBase
```

Add retry configuration for this state.

This controls if and how the execution will be retried if a particular
error occurs.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addRetry.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.RetryProps

---

##### `metric` <a name="metric" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Task.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricFailed` <a name="metricFailed" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricFailed"></a>

```typescript
public metricFailed(props?: MetricOptions): Metric
```

Metric for the number of times this activity fails.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricFailed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHeartbeatTimedOut` <a name="metricHeartbeatTimedOut" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricHeartbeatTimedOut"></a>

```typescript
public metricHeartbeatTimedOut(props?: MetricOptions): Metric
```

Metric for the number of times the heartbeat times out for this activity.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricHeartbeatTimedOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRunTime` <a name="metricRunTime" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricRunTime"></a>

```typescript
public metricRunTime(props?: MetricOptions): Metric
```

The interval, in milliseconds, between the time the Task starts and the time it closes.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricRunTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricScheduled` <a name="metricScheduled" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduled"></a>

```typescript
public metricScheduled(props?: MetricOptions): Metric
```

Metric for the number of times this activity is scheduled.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduled.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricScheduleTime` <a name="metricScheduleTime" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduleTime"></a>

```typescript
public metricScheduleTime(props?: MetricOptions): Metric
```

The interval, in milliseconds, for which the activity stays in the schedule state.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduleTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStarted` <a name="metricStarted" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricStarted"></a>

```typescript
public metricStarted(props?: MetricOptions): Metric
```

Metric for the number of times this activity is started.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricStarted.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSucceeded` <a name="metricSucceeded" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricSucceeded"></a>

```typescript
public metricSucceeded(props?: MetricOptions): Metric
```

Metric for the number of times this activity succeeds.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricSucceeded.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTime` <a name="metricTime" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTime"></a>

```typescript
public metricTime(props?: MetricOptions): Metric
```

The interval, in milliseconds, between the time the activity is scheduled and the time it closes.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTimedOut` <a name="metricTimedOut" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTimedOut"></a>

```typescript
public metricTimedOut(props?: MetricOptions): Metric
```

Metric for the number of times this activity times out.

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTimedOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `next` <a name="next" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.next"></a>

```typescript
public next(next: IChainable): Chain
```

Continue normal execution with the given state.

###### `next`<sup>Required</sup> <a name="next" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.next.parameter.next"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.filterNextables">filterNextables</a></code> | Return only the states that allow chaining from an array of states. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableEndStates">findReachableEndStates</a></code> | Find the set of end states states reachable through transitions from the given start state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableStates">findReachableStates</a></code> | Find the set of states reachable through transitions from the given start state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.prefixStates">prefixStates</a></code> | Add a prefix to the stateId of all States found in a construct tree. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.isConstruct"></a>

```typescript
import { aws_stepfunctions_tasks } from '@michanto/cdk-orchestration'

aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `filterNextables` <a name="filterNextables" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.filterNextables"></a>

```typescript
import { aws_stepfunctions_tasks } from '@michanto/cdk-orchestration'

aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.filterNextables(states: State[])
```

Return only the states that allow chaining from an array of states.

###### `states`<sup>Required</sup> <a name="states" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.filterNextables.parameter.states"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State[]

---

##### `findReachableEndStates` <a name="findReachableEndStates" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableEndStates"></a>

```typescript
import { aws_stepfunctions_tasks } from '@michanto/cdk-orchestration'

aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableEndStates(start: State, options?: FindStateOptions)
```

Find the set of end states states reachable through transitions from the given start state.

###### `start`<sup>Required</sup> <a name="start" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableEndStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableEndStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `findReachableStates` <a name="findReachableStates" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableStates"></a>

```typescript
import { aws_stepfunctions_tasks } from '@michanto/cdk-orchestration'

aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableStates(start: State, options?: FindStateOptions)
```

Find the set of states reachable through transitions from the given start state.

This does not retrieve states from within sub-graphs, such as states within a Parallel state's branch.

###### `start`<sup>Required</sup> <a name="start" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `prefixStates` <a name="prefixStates" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.prefixStates"></a>

```typescript
import { aws_stepfunctions_tasks } from '@michanto/cdk-orchestration'

aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.prefixStates(root: IConstruct, prefix: string)
```

Add a prefix to the stateId of all States found in a construct tree.

###### `root`<sup>Required</sup> <a name="root" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.prefixStates.parameter.root"></a>

- *Type:* constructs.IConstruct

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.prefixStates.parameter.prefix"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.endStates">endStates</a></code> | <code>aws-cdk-lib.aws_stepfunctions.INextable[]</code> | Continuable states of this Chainable. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.startState">startState</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State</code> | First state of this Chainable. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.stateId">stateId</a></code> | <code>string</code> | Tokenized string that evaluates to the state's ID. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endStates`<sup>Required</sup> <a name="endStates" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.endStates"></a>

```typescript
public readonly endStates: INextable[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions.INextable[]

Continuable states of this Chainable.

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Descriptive identifier for this chainable.

---

##### `startState`<sup>Required</sup> <a name="startState" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.startState"></a>

```typescript
public readonly startState: State;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State

First state of this Chainable.

---

##### `stateId`<sup>Required</sup> <a name="stateId" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.stateId"></a>

```typescript
public readonly stateId: string;
```

- *Type:* string

Tokenized string that evaluates to the state's ID.

---


### Order <a name="Order" id="@michanto/cdk-orchestration.transforms.Order"></a>

Order class.

Defines the order in which Transforms are applied.
This is important in cases where the type of the template passed between
Transforms changes, such as when a FileReader turns a filename into
a string with the contents of the file, or a Parser turns a JSON string
into a Javascript object.

See BaseImporter for usage.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.Order.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.Order(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Order.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.Order.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Order.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.Order.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Order.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.Order.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Order.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Order.findOrder">findOrder</a></code> | Returns an Order named {@link order} under the scope, or the scope if the Order cannot be found. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Order.isOrder">isOrder</a></code> | Returns true if the construct is an Order. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.Order.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Order.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.Order.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `findOrder` <a name="findOrder" id="@michanto/cdk-orchestration.transforms.Order.findOrder"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Order.findOrder(scope: Construct, order: string)
```

Returns an Order named {@link order} under the scope, or the scope if the Order cannot be found.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Order.findOrder.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.Order.findOrder.parameter.order"></a>

- *Type:* string

---

##### `isOrder` <a name="isOrder" id="@michanto/cdk-orchestration.transforms.Order.isOrder"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Order.isOrder(x: IConstruct)
```

Returns true if the construct is an Order.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.Order.isOrder.parameter.x"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Order.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Order.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.Order.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.Order.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---


### OrderedTransformHost <a name="OrderedTransformHost" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost"></a>

This class adds Orders to a CfnTransformHost.  Orders allow L2 transforms to be applied in the correct order.

Examples include TemplateImporter in the cloudformation-include
submodule and PropertyTransformHost (see StatesTransform in the
aws-stepfunctiosn submodule for usage).

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.OrderedTransformHost(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.isCfnTransformHost">isCfnTransformHost</a></code> | Checks if `x` if a CfnTransformHost construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.createImportOrders">createImportOrders</a></code> | Add import orders to any CfnElement or Stack to order the transforms. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.OrderedTransformHost.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransformHost` <a name="isCfnTransformHost" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.isCfnTransformHost"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.OrderedTransformHost.isCfnTransformHost(x: Construct)
```

Checks if `x` if a CfnTransformHost construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.isCfnTransformHost.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

##### `createImportOrders` <a name="createImportOrders" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.createImportOrders"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.OrderedTransformHost.createImportOrders(scope: Construct)
```

Add import orders to any CfnElement or Stack to order the transforms.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.createImportOrders.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.parserOrder">parserOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.PARSER. |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.preReaderOrder">preReaderOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.PRE_READER. |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.readerOrder">readerOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.READER. |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.stringTransformOrder">stringTransformOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.STRING_TRANSFORMS. |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.templateTransformOrder">templateTransformOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.TRANSFORMS. |
| <code><a href="#@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.writerOrder">writerOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.WRITER. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `parserOrder`<sup>Required</sup> <a name="parserOrder" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.parserOrder"></a>

```typescript
public readonly parserOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.PARSER.

---

##### `preReaderOrder`<sup>Required</sup> <a name="preReaderOrder" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.preReaderOrder"></a>

```typescript
public readonly preReaderOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.PRE_READER.

---

##### `readerOrder`<sup>Required</sup> <a name="readerOrder" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.readerOrder"></a>

```typescript
public readonly readerOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.READER.

---

##### `stringTransformOrder`<sup>Required</sup> <a name="stringTransformOrder" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.stringTransformOrder"></a>

```typescript
public readonly stringTransformOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.STRING_TRANSFORMS.

---

##### `templateTransformOrder`<sup>Required</sup> <a name="templateTransformOrder" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.templateTransformOrder"></a>

```typescript
public readonly templateTransformOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.TRANSFORMS.

---

##### `writerOrder`<sup>Required</sup> <a name="writerOrder" id="@michanto/cdk-orchestration.transforms.OrderedTransformHost.property.writerOrder"></a>

```typescript
public readonly writerOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.WRITER.

---


### Parser <a name="Parser" id="@michanto/cdk-orchestration.transforms.Parser"></a>

Base class for JsonParser and YamlParser transforms.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.Parser.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.Parser(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Parser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.Parser.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Parser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.Parser.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Parser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Parser.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Parser.apply">apply</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.Parser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.Parser.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.Parser.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.Parser.apply"></a>

```typescript
public apply(template: string): {[ key: string ]: any}
```

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.Parser.apply.parameter.template"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Parser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Parser.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.Parser.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Parser.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.Parser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.Parser.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Parser.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Parser.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Parser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Parser.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Parser.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Parser.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.Parser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.Parser.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.Parser.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.Parser.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---


### PropertyTransform <a name="PropertyTransform" id="@michanto/cdk-orchestration.transforms.PropertyTransform"></a>

Transforms a property of a resource.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.PropertyTransform.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.PropertyTransform(scope: Construct, id: string, propertyTransformProps: PropertyTransformProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.Initializer.parameter.propertyTransformProps">propertyTransformProps</a></code> | <code>@michanto/cdk-orchestration.transforms.PropertyTransformProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.PropertyTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.PropertyTransform.Initializer.parameter.id"></a>

- *Type:* string

---

##### `propertyTransformProps`<sup>Required</sup> <a name="propertyTransformProps" id="@michanto/cdk-orchestration.transforms.PropertyTransform.Initializer.parameter.propertyTransformProps"></a>

- *Type:* @michanto/cdk-orchestration.transforms.PropertyTransformProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.apply">apply</a></code> | Modifies the passed in template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.PropertyTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.PropertyTransform.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.PropertyTransform.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.PropertyTransform.apply"></a>

```typescript
public apply(template: {[ key: string ]: any}): {[ key: string ]: any}
```

Modifies the passed in template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.PropertyTransform.apply.parameter.template"></a>

- *Type:* {[ key: string ]: any}

Always return the template.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.PropertyTransform.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.PropertyTransform.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.PropertyTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.PropertyTransform.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.PropertyTransform.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.PropertyTransform.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.property.propertyName">propertyName</a></code> | <code>string</code> | Gets the propertyName from the scope of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransform.property.resourceType">resourceType</a></code> | <code>string</code> | Gets the resourceType from the scope of this construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.PropertyTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.PropertyTransform.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.PropertyTransform.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.PropertyTransform.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.transforms.PropertyTransform.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

Gets the propertyName from the scope of this construct.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@michanto/cdk-orchestration.transforms.PropertyTransform.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Gets the resourceType from the scope of this construct.

---


### PropertyTransformApplier <a name="PropertyTransformApplier" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier"></a>

Applies Transforms to a Resource property.

This transform sits directly under the L1 construct.
It's job is to apply property transforms to an L1 construct
property.  This is useful when you need to apply a Transform to
a JSON property (for example).

Create a Resoure, then apply a PropertyTransform to it.
That creates all the scaffolding for applying a PropertyTransform to
the property, including this class.

That creates a StatesTransformApplier, which creates
a StatesTransformHost.  StepFunctionTransforms are hosted
by the StepFunctionTransformHost.  When the StateMachine is

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.PropertyTransformApplier(scope: Construct, propertyName: string, resourceType: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.Initializer.parameter.propertyName">propertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.Initializer.parameter.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.Initializer.parameter.propertyName"></a>

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.Initializer.parameter.resourceType"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.apply">apply</a></code> | Find the StatesTransformHost and apply those to the state machine definition. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.apply"></a>

```typescript
public apply(template: {[ key: string ]: any}): {[ key: string ]: any}
```

Find the StatesTransformHost and apply those to the state machine definition.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.apply.parameter.template"></a>

- *Type:* {[ key: string ]: any}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.applierId">applierId</a></code> | Construct ID for a PropertyTransformApplier. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.PropertyTransformApplier.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.PropertyTransformApplier.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `applierId` <a name="applierId" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.applierId"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.PropertyTransformApplier.applierId(propertyName: string)
```

Construct ID for a PropertyTransformApplier.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.applierId.parameter.propertyName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.propertyName">propertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@michanto/cdk-orchestration.transforms.PropertyTransformApplier.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---


### PropertyTransformHost <a name="PropertyTransformHost" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost"></a>

Hosts PropertyTransforms.

Must be a child of a PropertyTransformApplier.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.PropertyTransformHost(scope: PropertyTransformApplier, propertyName: string, resourceType: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.Initializer.parameter.scope">scope</a></code> | <code>@michanto/cdk-orchestration.transforms.PropertyTransformApplier</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.Initializer.parameter.propertyName">propertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.Initializer.parameter.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.Initializer.parameter.scope"></a>

- *Type:* @michanto/cdk-orchestration.transforms.PropertyTransformApplier

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.Initializer.parameter.propertyName"></a>

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.Initializer.parameter.resourceType"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.isCfnTransformHost">isCfnTransformHost</a></code> | Checks if `x` if a CfnTransformHost construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.createImportOrders">createImportOrders</a></code> | Add import orders to any CfnElement or Stack to order the transforms. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.getPropertyTransformHost">getPropertyTransformHost</a></code> | Gets or create a PropertyTransformHost for a PropertyTransform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.hostId">hostId</a></code> | Construct ID for a PropertyTransformHost. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.PropertyTransformHost.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransformHost` <a name="isCfnTransformHost" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.isCfnTransformHost"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.PropertyTransformHost.isCfnTransformHost(x: Construct)
```

Checks if `x` if a CfnTransformHost construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.isCfnTransformHost.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

##### `createImportOrders` <a name="createImportOrders" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.createImportOrders"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.PropertyTransformHost.createImportOrders(scope: Construct)
```

Add import orders to any CfnElement or Stack to order the transforms.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.createImportOrders.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `getPropertyTransformHost` <a name="getPropertyTransformHost" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.getPropertyTransformHost"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.PropertyTransformHost.getPropertyTransformHost(scope: Construct, propertyName: string, resourceType: string)
```

Gets or create a PropertyTransformHost for a PropertyTransform.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.getPropertyTransformHost.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the PropertyTransform.

---

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.getPropertyTransformHost.parameter.propertyName"></a>

- *Type:* string

Name of the property to transform.

---

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.getPropertyTransformHost.parameter.resourceType"></a>

- *Type:* string

Resource type to transform.

---

##### `hostId` <a name="hostId" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.hostId"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.PropertyTransformHost.hostId(propertyName: string)
```

Construct ID for a PropertyTransformHost.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.hostId.parameter.propertyName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.parserOrder">parserOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.PARSER. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.preReaderOrder">preReaderOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.PRE_READER. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.readerOrder">readerOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.READER. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.stringTransformOrder">stringTransformOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.STRING_TRANSFORMS. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.templateTransformOrder">templateTransformOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.TRANSFORMS. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.writerOrder">writerOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.WRITER. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.propertyName">propertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `parserOrder`<sup>Required</sup> <a name="parserOrder" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.parserOrder"></a>

```typescript
public readonly parserOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.PARSER.

---

##### `preReaderOrder`<sup>Required</sup> <a name="preReaderOrder" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.preReaderOrder"></a>

```typescript
public readonly preReaderOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.PRE_READER.

---

##### `readerOrder`<sup>Required</sup> <a name="readerOrder" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.readerOrder"></a>

```typescript
public readonly readerOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.READER.

---

##### `stringTransformOrder`<sup>Required</sup> <a name="stringTransformOrder" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.stringTransformOrder"></a>

```typescript
public readonly stringTransformOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.STRING_TRANSFORMS.

---

##### `templateTransformOrder`<sup>Required</sup> <a name="templateTransformOrder" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.templateTransformOrder"></a>

```typescript
public readonly templateTransformOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.TRANSFORMS.

---

##### `writerOrder`<sup>Required</sup> <a name="writerOrder" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.writerOrder"></a>

```typescript
public readonly writerOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.WRITER.

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@michanto/cdk-orchestration.transforms.PropertyTransformHost.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---


### RunResourceAlways <a name="RunResourceAlways" id="@michanto/cdk-orchestration.custom_resources.RunResourceAlways"></a>

Always run a custom resource.

Throws if it cannot find one custom resource under target.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.custom_resources.RunResourceAlways.Initializer"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

new custom_resources.RunResourceAlways(scope: Construct, id?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.RunResourceAlways.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.RunResourceAlways.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.custom_resources.RunResourceAlways.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Optional</sup> <a name="id" id="@michanto/cdk-orchestration.custom_resources.RunResourceAlways.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.RunResourceAlways.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.custom_resources.RunResourceAlways.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.RunResourceAlways.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.custom_resources.RunResourceAlways.isConstruct"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

custom_resources.RunResourceAlways.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.custom_resources.RunResourceAlways.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.RunResourceAlways.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.RunResourceAlways.property.target">target</a></code> | <code>aws-cdk-lib.CfnResource</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.custom_resources.RunResourceAlways.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.custom_resources.RunResourceAlways.property.target"></a>

```typescript
public readonly target: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

---


### S3FileMetadata <a name="S3FileMetadata" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata"></a>

Where S3FileResource WRITES a JSON file (with optional metadata) to S3, this construct READS the METADATA from an S3 and makes them available as attributes.

Attributes are flattened as per AwsCustomResource.

You MUST request attributes from this class, otherwise there
is no purpose in creating it.  An error will result.

CFN has limits to how much data can be returned.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

new orchestration.S3FileMetadata(scope: Construct, id: string, props: S3FileReaderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.orchestration.S3FileReaderProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.orchestration.S3FileReaderProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.executeAfter">executeAfter</a></code> | Adds task dependencies. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.executeBefore">executeBefore</a></code> | Adds task as a dependency on other constructs. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.getAtt">getAtt</a></code> | Returns the value of an attribute of the custom resource of an arbitrary type. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.getAttString">getAttString</a></code> | Returns the value of an attribute of the custom resource of type string. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Sets the deletion policy of the resource based on the removal policy specified.

###### `policy`<sup>Required</sup> <a name="policy" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `executeAfter` <a name="executeAfter" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.executeAfter"></a>

```typescript
public executeAfter(scopes: ...Construct[]): void
```

Adds task dependencies.

Execute this task only after these construct
scopes have been provisioned.

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.executeAfter.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which this task will depend on.

---

##### `executeBefore` <a name="executeBefore" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.executeBefore"></a>

```typescript
public executeBefore(scopes: ...Construct[]): void
```

Adds task as a dependency on other constructs.

This means that this
task will get executed *before* the given construct(s).

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.executeBefore.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which will take a dependency on this task.

---

##### `getAtt` <a name="getAtt" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns the value of an attribute of the custom resource of an arbitrary type.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.getAtt.parameter.attributeName"></a>

- *Type:* string

---

##### `getAttString` <a name="getAttString" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.getAttString"></a>

```typescript
public getAttString(attributeName: string): string
```

Returns the value of an attribute of the custom resource of type string.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.getAttString.parameter.attributeName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.isTask">isTask</a></code> | Checks if `x` if a Task construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.isConstruct"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.S3FileMetadata.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTask` <a name="isTask" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.isTask"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.S3FileMetadata.isTask(x: Construct)
```

Checks if `x` if a Task construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.isTask.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.property.customResource">customResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | L2 custom resource for this Task. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.property.ref">ref</a></code> | <code>string</code> | The physical name of this custom resource. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadata.property.lambdaCustomResource">lambdaCustomResource</a></code> | <code>@michanto/cdk-orchestration.custom_resources.LambdaCustomResource</code> | LambdaCustomResource that implements this Task. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResource`<sup>Required</sup> <a name="customResource" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.property.customResource"></a>

```typescript
public readonly customResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

L2 custom resource for this Task.

---

##### `ref`<sup>Required</sup> <a name="ref" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The physical name of this custom resource.

---

##### `lambdaCustomResource`<sup>Required</sup> <a name="lambdaCustomResource" id="@michanto/cdk-orchestration.orchestration.S3FileMetadata.property.lambdaCustomResource"></a>

```typescript
public readonly lambdaCustomResource: LambdaCustomResource;
```

- *Type:* @michanto/cdk-orchestration.custom_resources.LambdaCustomResource

LambdaCustomResource that implements this Task.

---


### S3FileReader <a name="S3FileReader" id="@michanto/cdk-orchestration.orchestration.S3FileReader"></a>

Where S3FileResource WRITES a JSON file to S3, this construct READS a JSON file from S3 and makes the contents of the file available as attributes.

Attributes are flattened as per AwsCustomResource.

You MUST request attributes from this class, otherwise there
is no purpose in creating it.  An error will result.

CFN has limits to how much data can be returned.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.orchestration.S3FileReader.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

new orchestration.S3FileReader(scope: Construct, id: string, props: S3FileReaderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.orchestration.S3FileReaderProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.orchestration.S3FileReader.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.orchestration.S3FileReader.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.orchestration.S3FileReader.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.orchestration.S3FileReaderProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.executeAfter">executeAfter</a></code> | Adds task dependencies. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.executeBefore">executeBefore</a></code> | Adds task as a dependency on other constructs. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.getAtt">getAtt</a></code> | Returns the value of an attribute of the custom resource of an arbitrary type. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.getAttString">getAttString</a></code> | Returns the value of an attribute of the custom resource of type string. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.orchestration.S3FileReader.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@michanto/cdk-orchestration.orchestration.S3FileReader.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Sets the deletion policy of the resource based on the removal policy specified.

###### `policy`<sup>Required</sup> <a name="policy" id="@michanto/cdk-orchestration.orchestration.S3FileReader.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `executeAfter` <a name="executeAfter" id="@michanto/cdk-orchestration.orchestration.S3FileReader.executeAfter"></a>

```typescript
public executeAfter(scopes: ...Construct[]): void
```

Adds task dependencies.

Execute this task only after these construct
scopes have been provisioned.

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.S3FileReader.executeAfter.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which this task will depend on.

---

##### `executeBefore` <a name="executeBefore" id="@michanto/cdk-orchestration.orchestration.S3FileReader.executeBefore"></a>

```typescript
public executeBefore(scopes: ...Construct[]): void
```

Adds task as a dependency on other constructs.

This means that this
task will get executed *before* the given construct(s).

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.S3FileReader.executeBefore.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which will take a dependency on this task.

---

##### `getAtt` <a name="getAtt" id="@michanto/cdk-orchestration.orchestration.S3FileReader.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns the value of an attribute of the custom resource of an arbitrary type.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.S3FileReader.getAtt.parameter.attributeName"></a>

- *Type:* string

---

##### `getAttString` <a name="getAttString" id="@michanto/cdk-orchestration.orchestration.S3FileReader.getAttString"></a>

```typescript
public getAttString(attributeName: string): string
```

Returns the value of an attribute of the custom resource of type string.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.S3FileReader.getAttString.parameter.attributeName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.isTask">isTask</a></code> | Checks if `x` if a Task construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.orchestration.S3FileReader.isConstruct"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.S3FileReader.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.S3FileReader.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTask` <a name="isTask" id="@michanto/cdk-orchestration.orchestration.S3FileReader.isTask"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.S3FileReader.isTask(x: Construct)
```

Checks if `x` if a Task construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.S3FileReader.isTask.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.property.customResource">customResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | L2 custom resource for this Task. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.property.ref">ref</a></code> | <code>string</code> | The physical name of this custom resource. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReader.property.lambdaCustomResource">lambdaCustomResource</a></code> | <code>@michanto/cdk-orchestration.custom_resources.LambdaCustomResource</code> | LambdaCustomResource that implements this Task. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.orchestration.S3FileReader.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResource`<sup>Required</sup> <a name="customResource" id="@michanto/cdk-orchestration.orchestration.S3FileReader.property.customResource"></a>

```typescript
public readonly customResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

L2 custom resource for this Task.

---

##### `ref`<sup>Required</sup> <a name="ref" id="@michanto/cdk-orchestration.orchestration.S3FileReader.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The physical name of this custom resource.

---

##### `lambdaCustomResource`<sup>Required</sup> <a name="lambdaCustomResource" id="@michanto/cdk-orchestration.orchestration.S3FileReader.property.lambdaCustomResource"></a>

```typescript
public readonly lambdaCustomResource: LambdaCustomResource;
```

- *Type:* @michanto/cdk-orchestration.custom_resources.LambdaCustomResource

LambdaCustomResource that implements this Task.

---


### S3FileResource <a name="S3FileResource" id="@michanto/cdk-orchestration.orchestration.S3FileResource"></a>

A resources that writes an S3 JSON file.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.orchestration.S3FileResource.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

new orchestration.S3FileResource(scope: Construct, id: string, props: S3FileResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.orchestration.S3FileResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.orchestration.S3FileResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.orchestration.S3FileResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.orchestration.S3FileResource.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.orchestration.S3FileResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.executeAfter">executeAfter</a></code> | Adds task dependencies. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.executeBefore">executeBefore</a></code> | Adds task as a dependency on other constructs. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.getAtt">getAtt</a></code> | Returns the value of an attribute of the custom resource of an arbitrary type. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.getAttString">getAttString</a></code> | Returns the value of an attribute of the custom resource of type string. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.orchestration.S3FileResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@michanto/cdk-orchestration.orchestration.S3FileResource.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Sets the deletion policy of the resource based on the removal policy specified.

###### `policy`<sup>Required</sup> <a name="policy" id="@michanto/cdk-orchestration.orchestration.S3FileResource.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `executeAfter` <a name="executeAfter" id="@michanto/cdk-orchestration.orchestration.S3FileResource.executeAfter"></a>

```typescript
public executeAfter(scopes: ...Construct[]): void
```

Adds task dependencies.

Execute this task only after these construct
scopes have been provisioned.

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.S3FileResource.executeAfter.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which this task will depend on.

---

##### `executeBefore` <a name="executeBefore" id="@michanto/cdk-orchestration.orchestration.S3FileResource.executeBefore"></a>

```typescript
public executeBefore(scopes: ...Construct[]): void
```

Adds task as a dependency on other constructs.

This means that this
task will get executed *before* the given construct(s).

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.S3FileResource.executeBefore.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which will take a dependency on this task.

---

##### `getAtt` <a name="getAtt" id="@michanto/cdk-orchestration.orchestration.S3FileResource.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns the value of an attribute of the custom resource of an arbitrary type.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.S3FileResource.getAtt.parameter.attributeName"></a>

- *Type:* string

---

##### `getAttString` <a name="getAttString" id="@michanto/cdk-orchestration.orchestration.S3FileResource.getAttString"></a>

```typescript
public getAttString(attributeName: string): string
```

Returns the value of an attribute of the custom resource of type string.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.S3FileResource.getAttString.parameter.attributeName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.isTask">isTask</a></code> | Checks if `x` if a Task construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.orchestration.S3FileResource.isConstruct"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.S3FileResource.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.S3FileResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTask` <a name="isTask" id="@michanto/cdk-orchestration.orchestration.S3FileResource.isTask"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.S3FileResource.isTask(x: Construct)
```

Checks if `x` if a Task construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.S3FileResource.isTask.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.property.customResource">customResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.property.ref">ref</a></code> | <code>string</code> | The physical name of this custom resource. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResource.property.resource">resource</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResource</code> | AwsCustomResource that implements this task. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.orchestration.S3FileResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResource`<sup>Required</sup> <a name="customResource" id="@michanto/cdk-orchestration.orchestration.S3FileResource.property.customResource"></a>

```typescript
public readonly customResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

##### `ref`<sup>Required</sup> <a name="ref" id="@michanto/cdk-orchestration.orchestration.S3FileResource.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The physical name of this custom resource.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@michanto/cdk-orchestration.orchestration.S3FileResource.property.resource"></a>

```typescript
public readonly resource: AwsCustomResource;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResource

AwsCustomResource that implements this task.

---


### StackProvenance <a name="StackProvenance" id="@michanto/cdk-orchestration.StackProvenance"></a>

Adds provenance data to the stack metadata.

Use StackProvenanceAspect to add provenance data to all stacks.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.StackProvenance.Initializer"></a>

```typescript
import { StackProvenance } from '@michanto/cdk-orchestration'

new StackProvenance(scope: Construct, id?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.StackProvenance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.StackProvenance.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackProvenance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Optional</sup> <a name="id" id="@michanto/cdk-orchestration.StackProvenance.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.StackProvenance.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.StackProvenance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.StackProvenance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.StackProvenance.isConstruct"></a>

```typescript
import { StackProvenance } from '@michanto/cdk-orchestration'

StackProvenance.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.StackProvenance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.StackProvenance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.StackProvenance.property.timestamp">timestamp</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.StackProvenance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@michanto/cdk-orchestration.StackProvenance.property.timestamp"></a>

```typescript
public readonly timestamp: number;
```

- *Type:* number

---


### StatesTransform <a name="StatesTransform" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform"></a>

This transform allows you to edit the DefinitionString property of a StateMachine.

This is great for editing the DefinitionString
of a StateMachine you don't have the code for.

This Transform creates it's own scaffolding (TransformHost and Applier)
for the L1 Transform when you add it to an existing StateMachine.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.Initializer"></a>

```typescript
import { aws_stepfunctions } from '@michanto/cdk-orchestration'

new aws_stepfunctions.StatesTransform(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.apply">apply</a></code> | Modifies the passed in template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.apply"></a>

```typescript
public apply(template: {[ key: string ]: any}): {[ key: string ]: any}
```

Modifies the passed in template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.apply.parameter.template"></a>

- *Type:* {[ key: string ]: any}

Always return the template.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.isConstruct"></a>

```typescript
import { aws_stepfunctions } from '@michanto/cdk-orchestration'

aws_stepfunctions.StatesTransform.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.isTransformBase"></a>

```typescript
import { aws_stepfunctions } from '@michanto/cdk-orchestration'

aws_stepfunctions.StatesTransform.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.propertyName">propertyName</a></code> | <code>string</code> | Gets the propertyName from the scope of this construct. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.resourceType">resourceType</a></code> | <code>string</code> | Gets the resourceType from the scope of this construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

Gets the propertyName from the scope of this construct.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@michanto/cdk-orchestration.aws_stepfunctions.StatesTransform.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Gets the resourceType from the scope of this construct.

---


### StepFunctionTask <a name="StepFunctionTask" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask"></a>

This class creates multiple StepFunctionTaskStep resources to monitor the execution of a long-running step function.

The first StepFunctionTaskStep is created with the StateMachine
ARN and input so it can start the step function.  This resource
sets it's physical ID to the ExecutionArn.

Subsequent StepFunctionTaskStep resources are created with
the ExecutionArn so they can continue monitoring the StepFunction.

Once the StepFunction has finished running, subsequent
StepFunctionTaskStep resources (if any) will fast-succeed.
If the StepFunction fails, the subsequent StepFunctionTaskStep
resources will fast-fail.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

new orchestration.StepFunctionTask(scope: Construct, id: string, props: StepFunctionTaskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.orchestration.StepFunctionTaskProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.executeAfter">executeAfter</a></code> | Adds task dependencies. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.executeBefore">executeBefore</a></code> | Adds task as a dependency on other constructs. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.getAtt">getAtt</a></code> | Returns the value of an attribute of the custom resource of an arbitrary type. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.getAttString">getAttString</a></code> | Returns the value of an attribute of the custom resource of type string. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Sets the deletion policy of the resource based on the removal policy specified.

###### `policy`<sup>Required</sup> <a name="policy" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `executeAfter` <a name="executeAfter" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.executeAfter"></a>

```typescript
public executeAfter(scopes: ...Construct[]): void
```

Adds task dependencies.

Execute this task only after these construct
scopes have been provisioned.

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.executeAfter.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which this task will depend on.

---

##### `executeBefore` <a name="executeBefore" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.executeBefore"></a>

```typescript
public executeBefore(scopes: ...Construct[]): void
```

Adds task as a dependency on other constructs.

This means that this
task will get executed *before* the given construct(s).

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.executeBefore.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which will take a dependency on this task.

---

##### `getAtt` <a name="getAtt" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns the value of an attribute of the custom resource of an arbitrary type.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.getAtt.parameter.attributeName"></a>

- *Type:* string

---

##### `getAttString` <a name="getAttString" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.getAttString"></a>

```typescript
public getAttString(attributeName: string): string
```

Returns the value of an attribute of the custom resource of type string.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.getAttString.parameter.attributeName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.isTask">isTask</a></code> | Checks if `x` if a Task construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.isConstruct"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.StepFunctionTask.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTask` <a name="isTask" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.isTask"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.StepFunctionTask.isTask(x: Construct)
```

Checks if `x` if a Task construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.isTask.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.property.customResource">customResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | L2 custom resource for this Task. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.property.ref">ref</a></code> | <code>string</code> | The physical name of this custom resource. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.property.numberOfSteps">numberOfSteps</a></code> | <code>number</code> | Total number of StepFunctionTaskStep resources created. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTask.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResource`<sup>Required</sup> <a name="customResource" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.property.customResource"></a>

```typescript
public readonly customResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

L2 custom resource for this Task.

---

##### `ref`<sup>Required</sup> <a name="ref" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The physical name of this custom resource.

---

##### `numberOfSteps`<sup>Required</sup> <a name="numberOfSteps" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.property.numberOfSteps"></a>

```typescript
public readonly numberOfSteps: number;
```

- *Type:* number

Total number of StepFunctionTaskStep resources created.

---

##### `role`<sup>Required</sup> <a name="role" id="@michanto/cdk-orchestration.orchestration.StepFunctionTask.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role.

---


### StepFunctionTaskStep <a name="StepFunctionTaskStep" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep"></a>

Executes a StepFunction as part of a stack deployment.

This construct executes and monitors a StepFunction for up to 2 hours.

End users should use StepFunctionTask.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

new orchestration.StepFunctionTaskStep(scope: Construct, id: string, props: StepFunctionTaskStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.executeAfter">executeAfter</a></code> | Adds task dependencies. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.executeBefore">executeBefore</a></code> | Adds task as a dependency on other constructs. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.getAtt">getAtt</a></code> | Returns the value of an attribute of the custom resource of an arbitrary type. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.getAttString">getAttString</a></code> | Returns the value of an attribute of the custom resource of type string. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Sets the deletion policy of the resource based on the removal policy specified.

###### `policy`<sup>Required</sup> <a name="policy" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `executeAfter` <a name="executeAfter" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.executeAfter"></a>

```typescript
public executeAfter(scopes: ...Construct[]): void
```

Adds task dependencies.

Execute this task only after these construct
scopes have been provisioned.

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.executeAfter.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which this task will depend on.

---

##### `executeBefore` <a name="executeBefore" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.executeBefore"></a>

```typescript
public executeBefore(scopes: ...Construct[]): void
```

Adds task as a dependency on other constructs.

This means that this
task will get executed *before* the given construct(s).

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.executeBefore.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which will take a dependency on this task.

---

##### `getAtt` <a name="getAtt" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns the value of an attribute of the custom resource of an arbitrary type.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.getAtt.parameter.attributeName"></a>

- *Type:* string

---

##### `getAttString` <a name="getAttString" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.getAttString"></a>

```typescript
public getAttString(attributeName: string): string
```

Returns the value of an attribute of the custom resource of type string.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.getAttString.parameter.attributeName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.isTask">isTask</a></code> | Checks if `x` if a Task construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.isConstruct"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.StepFunctionTaskStep.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTask` <a name="isTask" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.isTask"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.StepFunctionTaskStep.isTask(x: Construct)
```

Checks if `x` if a Task construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.isTask.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.property.customResource">customResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.property.ref">ref</a></code> | <code>string</code> | The physical name of this custom resource. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.property.resources">resources</a></code> | <code>@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResource`<sup>Required</sup> <a name="customResource" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.property.customResource"></a>

```typescript
public readonly customResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

##### `ref`<sup>Required</sup> <a name="ref" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The physical name of this custom resource.

---

##### `resources`<sup>Required</sup> <a name="resources" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStep.property.resources"></a>

```typescript
public readonly resources: StepFunctionTaskStepResources;
```

- *Type:* @michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources

---


### StepFunctionTaskStepResources <a name="StepFunctionTaskStepResources" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources"></a>

Internal resources for StepFunctionTaskStep.

Created as a Singleton.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

new orchestration.StepFunctionTaskStepResources(scope: Construct, id: string, props: StepFunctionTaskStepResourcesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResourcesProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResourcesProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.isConstruct"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

orchestration.StepFunctionTaskStepResources.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.isComplete">isComplete</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | The custom resource isComplete provider method. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.onEvent">onEvent</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | The custom resource onEvent provider method. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.provider">provider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | The custom resource provider. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The shared role. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `isComplete`<sup>Required</sup> <a name="isComplete" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.isComplete"></a>

```typescript
public readonly isComplete: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

The custom resource isComplete provider method.

---

##### `onEvent`<sup>Required</sup> <a name="onEvent" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.onEvent"></a>

```typescript
public readonly onEvent: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

The custom resource onEvent provider method.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.provider"></a>

```typescript
public readonly provider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

The custom resource provider.

---

##### `role`<sup>Required</sup> <a name="role" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The shared role.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.PURPOSE">PURPOSE</a></code> | <code>string</code> | Resource type will be Custom::StepFunctionTaskStep. |

---

##### `PURPOSE`<sup>Required</sup> <a name="PURPOSE" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResources.property.PURPOSE"></a>

```typescript
public readonly PURPOSE: string;
```

- *Type:* string

Resource type will be Custom::StepFunctionTaskStep.

---

### Stringifier <a name="Stringifier" id="@michanto/cdk-orchestration.transforms.Stringifier"></a>

Stringifies the template so it can be written to a file.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.Stringifier.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.Stringifier(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Stringifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.Stringifier.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Stringifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.Stringifier.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Stringifier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Stringifier.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Stringifier.apply">apply</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.Stringifier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.Stringifier.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.Stringifier.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.Stringifier.apply"></a>

```typescript
public apply(template: any): string
```

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.Stringifier.apply.parameter.template"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Stringifier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Stringifier.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.Stringifier.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Stringifier.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.Stringifier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.Stringifier.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Stringifier.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Stringifier.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Stringifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Stringifier.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Stringifier.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Stringifier.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.Stringifier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.Stringifier.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.Stringifier.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.Stringifier.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---


### StringReplacer <a name="StringReplacer" id="@michanto/cdk-orchestration.transforms.StringReplacer"></a>

StringTransform that replaces strings in a template.

Useful for renaming LogicalIDs, as long as they are reasonably
unique.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.StringReplacer.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.StringReplacer(scope: Construct, id: string, props: StringReplacerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.Initializer.parameter.props">props</a></code> | <code>@michanto/cdk-orchestration.transforms.StringReplacerProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.StringReplacer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.StringReplacer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.transforms.StringReplacer.Initializer.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.transforms.StringReplacerProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.apply">apply</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.StringReplacer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.StringReplacer.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.StringReplacer.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.StringReplacer.apply"></a>

```typescript
public apply(template: string): string
```

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.StringReplacer.apply.parameter.template"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.StringReplacer.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.StringReplacer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.StringReplacer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.StringReplacer.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.StringReplacer.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.StringReplacer.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacer.property.props">props</a></code> | <code>@michanto/cdk-orchestration.transforms.StringReplacerProps</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.StringReplacer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.StringReplacer.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.StringReplacer.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.StringReplacer.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.transforms.StringReplacer.property.props"></a>

```typescript
public readonly props: StringReplacerProps;
```

- *Type:* @michanto/cdk-orchestration.transforms.StringReplacerProps

---


### StringTransform <a name="StringTransform" id="@michanto/cdk-orchestration.transforms.StringTransform"></a>

L2 transform that manipulates templates in string form. Ensures input and output are both string typed.

See StringReplacer for an example.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.StringTransform.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.StringTransform(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.StringTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.StringTransform.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringTransform.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringTransform.apply">apply</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.StringTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.StringTransform.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.StringTransform.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.StringTransform.apply"></a>

```typescript
public apply(template: string): string
```

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.StringTransform.apply.parameter.template"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringTransform.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.StringTransform.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.StringTransform.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.StringTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.StringTransform.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.StringTransform.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.StringTransform.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringTransform.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringTransform.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringTransform.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.StringTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.StringTransform.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.StringTransform.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.StringTransform.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---


### Task <a name="Task" id="@michanto/cdk-orchestration.custom_resources.Task"></a>

- *Implements:* @michanto/cdk-orchestration.custom_resources.ITask

An L3 custom resource based on the CustomResource class.

Makes it easier to access CustomResource methods without
having to navigate the construct tree.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.custom_resources.Task.Initializer"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

new custom_resources.Task(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.custom_resources.Task.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.custom_resources.Task.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.executeAfter">executeAfter</a></code> | Adds task dependencies. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.executeBefore">executeBefore</a></code> | Adds task as a dependency on other constructs. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.getAtt">getAtt</a></code> | Returns the value of an attribute of the custom resource of an arbitrary type. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.getAttString">getAttString</a></code> | Returns the value of an attribute of the custom resource of type string. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.custom_resources.Task.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@michanto/cdk-orchestration.custom_resources.Task.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Sets the deletion policy of the resource based on the removal policy specified.

###### `policy`<sup>Required</sup> <a name="policy" id="@michanto/cdk-orchestration.custom_resources.Task.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `executeAfter` <a name="executeAfter" id="@michanto/cdk-orchestration.custom_resources.Task.executeAfter"></a>

```typescript
public executeAfter(scopes: ...Construct[]): void
```

Adds task dependencies.

Execute this task only after these construct
scopes have been provisioned.

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.custom_resources.Task.executeAfter.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which this task will depend on.

---

##### `executeBefore` <a name="executeBefore" id="@michanto/cdk-orchestration.custom_resources.Task.executeBefore"></a>

```typescript
public executeBefore(scopes: ...Construct[]): void
```

Adds task as a dependency on other constructs.

This means that this
task will get executed *before* the given construct(s).

###### `scopes`<sup>Required</sup> <a name="scopes" id="@michanto/cdk-orchestration.custom_resources.Task.executeBefore.parameter.scopes"></a>

- *Type:* ...constructs.Construct[]

A list of construct scopes which will take a dependency on this task.

---

##### `getAtt` <a name="getAtt" id="@michanto/cdk-orchestration.custom_resources.Task.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns the value of an attribute of the custom resource of an arbitrary type.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.custom_resources.Task.getAtt.parameter.attributeName"></a>

- *Type:* string

---

##### `getAttString` <a name="getAttString" id="@michanto/cdk-orchestration.custom_resources.Task.getAttString"></a>

```typescript
public getAttString(attributeName: string): string
```

Returns the value of an attribute of the custom resource of type string.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.custom_resources.Task.getAttString.parameter.attributeName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.isTask">isTask</a></code> | Checks if `x` if a Task construct. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.custom_resources.Task.isConstruct"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

custom_resources.Task.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.custom_resources.Task.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTask` <a name="isTask" id="@michanto/cdk-orchestration.custom_resources.Task.isTask"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

custom_resources.Task.isTask(x: Construct)
```

Checks if `x` if a Task construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.custom_resources.Task.isTask.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.property.customResource">customResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.Task.property.ref">ref</a></code> | <code>string</code> | The physical name of this custom resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.custom_resources.Task.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResource`<sup>Required</sup> <a name="customResource" id="@michanto/cdk-orchestration.custom_resources.Task.property.customResource"></a>

```typescript
public readonly customResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

##### `ref`<sup>Required</sup> <a name="ref" id="@michanto/cdk-orchestration.custom_resources.Task.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The physical name of this custom resource.

---


### TempFileWriter <a name="TempFileWriter" id="@michanto/cdk-orchestration.transforms.TempFileWriter"></a>

Writes a template to a temp file, so it can be used with CfnInclude.

This should be the LAST transform run before handing off to the CfnInclude.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.TempFileWriter.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.TempFileWriter(scope: Construct, id: string, tmpDir?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.Initializer.parameter.tmpDir">tmpDir</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.TempFileWriter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.TempFileWriter.Initializer.parameter.id"></a>

- *Type:* string

---

##### `tmpDir`<sup>Optional</sup> <a name="tmpDir" id="@michanto/cdk-orchestration.transforms.TempFileWriter.Initializer.parameter.tmpDir"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.apply">apply</a></code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.writeTempFile">writeTempFile</a></code> | Writes data to a temporary file. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.TempFileWriter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.TempFileWriter.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.TempFileWriter.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.TempFileWriter.apply"></a>

```typescript
public apply(template: string): string
```

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.TempFileWriter.apply.parameter.template"></a>

- *Type:* string

---

##### `writeTempFile` <a name="writeTempFile" id="@michanto/cdk-orchestration.transforms.TempFileWriter.writeTempFile"></a>

```typescript
public writeTempFile(data: string, tmpDir?: string): string
```

Writes data to a temporary file.

###### `data`<sup>Required</sup> <a name="data" id="@michanto/cdk-orchestration.transforms.TempFileWriter.writeTempFile.parameter.data"></a>

- *Type:* string

Data to write.

---

###### `tmpDir`<sup>Optional</sup> <a name="tmpDir" id="@michanto/cdk-orchestration.transforms.TempFileWriter.writeTempFile.parameter.tmpDir"></a>

- *Type:* string

Temp directory.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.TempFileWriter.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.TempFileWriter.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.TempFileWriter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.TempFileWriter.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.TempFileWriter.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.TempFileWriter.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |
| <code><a href="#@michanto/cdk-orchestration.transforms.TempFileWriter.property.tmpDir">tmpDir</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.TempFileWriter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.TempFileWriter.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.TempFileWriter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.TempFileWriter.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---

##### `tmpDir`<sup>Optional</sup> <a name="tmpDir" id="@michanto/cdk-orchestration.transforms.TempFileWriter.property.tmpDir"></a>

```typescript
public readonly tmpDir: string;
```

- *Type:* string

---


### TemplateCapture <a name="TemplateCapture" id="@michanto/cdk-orchestration.transforms.TemplateCapture"></a>

Capture the template right before it is written to a file.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.TemplateCapture.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.TemplateCapture(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.TemplateCapture.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.TemplateCapture.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.apply">apply</a></code> | Modifies the passed in template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.TemplateCapture.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.TemplateCapture.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.TemplateCapture.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.TemplateCapture.apply"></a>

```typescript
public apply(template: {[ key: string ]: any}): {[ key: string ]: any}
```

Modifies the passed in template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.TemplateCapture.apply.parameter.template"></a>

- *Type:* {[ key: string ]: any}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.TemplateCapture.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.TemplateCapture.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.TemplateCapture.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.TemplateCapture.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.TemplateCapture.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.TemplateCapture.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |
| <code><a href="#@michanto/cdk-orchestration.transforms.TemplateCapture.property.template">template</a></code> | <code>any</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.TemplateCapture.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.TemplateCapture.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.TemplateCapture.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.TemplateCapture.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---

##### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.TemplateCapture.property.template"></a>

```typescript
public readonly template: any;
```

- *Type:* any

---


### TemplateImporter <a name="TemplateImporter" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter"></a>

This class uses Transforms to manage the process of importing external CloudFormation into the CDK.

Import proceeds in a series of steps:  PreReader, Reader, StringTransforms, Parser,
TemplateTransforms, Stringify and TempFile.  The reason for the Stringify and TempFile
steps is that CfnInclude requires a file, so we need to write the template out to
a temporary file so CfnInclude can include it.

Three of these steps are defined extension points.  The "StringTransforms" step is extended by creating a
transform of type {@link StringTransform } as a descendent of TemplateImporter, while the "TemplateTransforms" step
is extended by creating a transform of type {@link Transform } as a descendent of TemplateImporter.

This class exposes an additional insertion point:  PreReader, which comes before the
Reader step.  This allows the user to add pre-reader-steps that output a template file, such as calling an
external script that returns a template file name.  To extend PreReader, create a StringTransform with an
{@link StringTransformProps.order } of "PreReader".

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.Initializer"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

new cloudformation_include.TemplateImporter(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.importTemplate">importTemplate</a></code> | Applies the import transforms on the given file and creates a new CfnInclude for the imported template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `importTemplate` <a name="importTemplate" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.importTemplate"></a>

```typescript
public importTemplate(templateFile: string, props?: ImportTemplateProps): CfnInclude
```

Applies the import transforms on the given file and creates a new CfnInclude for the imported template.

###### `templateFile`<sup>Required</sup> <a name="templateFile" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.importTemplate.parameter.templateFile"></a>

- *Type:* string

Normally this is the file you wish to import, and is passed to the Reader step.

However, if you have added any PreReader Transforms than this string is passed to those transforms,
and the output of the PreReader transforms is passed to the Reader step.

PreReader transforms are useful for calling scripts that write JSON files.

---

###### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.importTemplate.parameter.props"></a>

- *Type:* @michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.isCfnTransformHost">isCfnTransformHost</a></code> | Checks if `x` if a CfnTransformHost construct. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.createImportOrders">createImportOrders</a></code> | Add import orders to any CfnElement or Stack to order the transforms. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.isConstruct"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

cloudformation_include.TemplateImporter.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransformHost` <a name="isCfnTransformHost" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.isCfnTransformHost"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

cloudformation_include.TemplateImporter.isCfnTransformHost(x: Construct)
```

Checks if `x` if a CfnTransformHost construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.isCfnTransformHost.parameter.x"></a>

- *Type:* constructs.Construct

Construct to test.

---

##### `createImportOrders` <a name="createImportOrders" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.createImportOrders"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

cloudformation_include.TemplateImporter.createImportOrders(scope: Construct)
```

Add import orders to any CfnElement or Stack to order the transforms.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.createImportOrders.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.parserOrder">parserOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.PARSER. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.preReaderOrder">preReaderOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.PRE_READER. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.readerOrder">readerOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.READER. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.stringTransformOrder">stringTransformOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.STRING_TRANSFORMS. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.templateTransformOrder">templateTransformOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.TRANSFORMS. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.writerOrder">writerOrder</a></code> | <code>@michanto/cdk-orchestration.transforms.Order</code> | Order for ImportOrders.WRITER. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.capture">capture</a></code> | <code>@michanto/cdk-orchestration.transforms.TemplateCapture</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `parserOrder`<sup>Required</sup> <a name="parserOrder" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.parserOrder"></a>

```typescript
public readonly parserOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.PARSER.

---

##### `preReaderOrder`<sup>Required</sup> <a name="preReaderOrder" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.preReaderOrder"></a>

```typescript
public readonly preReaderOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.PRE_READER.

---

##### `readerOrder`<sup>Required</sup> <a name="readerOrder" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.readerOrder"></a>

```typescript
public readonly readerOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.READER.

---

##### `stringTransformOrder`<sup>Required</sup> <a name="stringTransformOrder" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.stringTransformOrder"></a>

```typescript
public readonly stringTransformOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.STRING_TRANSFORMS.

---

##### `templateTransformOrder`<sup>Required</sup> <a name="templateTransformOrder" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.templateTransformOrder"></a>

```typescript
public readonly templateTransformOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.TRANSFORMS.

---

##### `writerOrder`<sup>Required</sup> <a name="writerOrder" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.writerOrder"></a>

```typescript
public readonly writerOrder: Order;
```

- *Type:* @michanto/cdk-orchestration.transforms.Order

Order for ImportOrders.WRITER.

---

##### `capture`<sup>Required</sup> <a name="capture" id="@michanto/cdk-orchestration.cloudformation_include.TemplateImporter.property.capture"></a>

```typescript
public readonly capture: TemplateCapture;
```

- *Type:* @michanto/cdk-orchestration.transforms.TemplateCapture

---


### Transform <a name="Transform" id="@michanto/cdk-orchestration.transforms.Transform"></a>

Base class for ordinary Transforms that act on CloudFormation and other forms of JSON.

Most Transforms will use this as their base class.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.Transform.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.Transform(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transform.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Transform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.Transform.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transform.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transform.apply">apply</a></code> | Modifies the passed in template. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.Transform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.Transform.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.Transform.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.Transform.apply"></a>

```typescript
public apply(template: {[ key: string ]: any}): {[ key: string ]: any}
```

Modifies the passed in template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.Transform.apply.parameter.template"></a>

- *Type:* {[ key: string ]: any}

Always return the template.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transform.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.Transform.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Transform.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.Transform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.Transform.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Transform.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Transform.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transform.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transform.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transform.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.Transform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.Transform.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.Transform.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.Transform.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---


### TransformBase <a name="TransformBase" id="@michanto/cdk-orchestration.transforms.TransformBase"></a>

- *Implements:* aws-cdk-lib.IInspectable

TransformBase is the base class for L2 transforms.

L2 transforms exist to make it possible to apply Transforms directly to L2 and L3 constructs,
without having to navigate to the underlying L1 construct.

TransformBase creates an L1 shim CfnTransform that calls the _apply function of the
L2 TransformBase that created it.

TransformBase.target determines where to put the L1 shim in the construct tree.
There are four possibilites:

1. The parent of the Transform is a Resource.  In this case, the shim is created as a child
of the Resources L1 construct (resource.node.defaultChild).
2. The host is an ordered host, in which case Transform will attempt to parent the shim under
one of the hosts children, as determined by TransformBase.order.  If the order does not exist,
the shim transform is created normally (as a child of TransformBase).
3. Neither of the above are true, in which case the shim transform is created as a child
of TransformBase.
4. target has been overridden to support a specific use-case.

The TransformBase._apply method should call a concretely typed "apply" method on the subclass.
See {@link StringTransform } or {@link Transform} for examples.

Ordering transforms is necessary when serializing and deserializing CloudFormation (CfnInclude scenarios),
which moves CloudFormation between different representations.  TemplateImporter handles
CloudFormation as a filename, then as a string, a POJO, back to a string, and
back to file name for use with CfnInclude.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.TransformBase.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.TransformBase(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.TransformBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.TransformBase.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformBase.inspect">inspect</a></code> | Examines construct. |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.TransformBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.TransformBase.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.TransformBase.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformBase.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.TransformBase.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.TransformBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.TransformBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.TransformBase.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.TransformBase.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.TransformBase.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformBase.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformBase.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformBase.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.TransformBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.TransformBase.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.TransformBase.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.TransformBase.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---


### YamlParser <a name="YamlParser" id="@michanto/cdk-orchestration.transforms.YamlParser"></a>

Uses a yaml parser to parse a template.

Takes in a template as a string either Yaml or JSON,
and returns a parsed template.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.YamlParser.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.YamlParser(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.YamlParser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.YamlParser.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.YamlParser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.transforms.YamlParser.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.YamlParser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.YamlParser.inspect">inspect</a></code> | Examines construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.YamlParser.apply">apply</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.transforms.YamlParser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.transforms.YamlParser.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.transforms.YamlParser.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.YamlParser.apply"></a>

```typescript
public apply(template: string): {[ key: string ]: any}
```

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.YamlParser.apply.parameter.template"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.YamlParser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@michanto/cdk-orchestration.transforms.YamlParser.isTransformBase">isTransformBase</a></code> | True if the scope is a TransformBase. |

---

##### `isConstruct` <a name="isConstruct" id="@michanto/cdk-orchestration.transforms.YamlParser.isConstruct"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.YamlParser.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.transforms.YamlParser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTransformBase` <a name="isTransformBase" id="@michanto/cdk-orchestration.transforms.YamlParser.isTransformBase"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.YamlParser.isTransformBase(scope: IConstruct)
```

True if the scope is a TransformBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.YamlParser.isTransformBase.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.YamlParser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.transforms.YamlParser.property.cfnTransform">cfnTransform</a></code> | <code>@michanto/cdk-orchestration.transforms.ICfnTransform</code> | The L1 shim transform  for this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.YamlParser.property.order">order</a></code> | <code>string</code> | The order of this L2 transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.YamlParser.property.target">target</a></code> | <code>constructs.Construct</code> | Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform). |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.YamlParser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnTransform`<sup>Required</sup> <a name="cfnTransform" id="@michanto/cdk-orchestration.transforms.YamlParser.property.cfnTransform"></a>

```typescript
public readonly cfnTransform: ICfnTransform;
```

- *Type:* @michanto/cdk-orchestration.transforms.ICfnTransform

The L1 shim transform  for this L2 transform.

---

##### `order`<sup>Required</sup> <a name="order" id="@michanto/cdk-orchestration.transforms.YamlParser.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The order of this L2 transform.

---

##### `target`<sup>Required</sup> <a name="target" id="@michanto/cdk-orchestration.transforms.YamlParser.property.target"></a>

```typescript
public readonly target: Construct;
```

- *Type:* constructs.Construct

Returns the parent for the CfnTransformShim (L1 transform) that will be created by this TransformBase (L2 transform).

Override this method to parent the CfnTransform to a specific CfnResource
if that is desired.  The default behavior is to return the L1 construct (or
the order under the L1 construct) if the transform is added to an L2 construct.
Otherwise, return either an order under the transform host of this
(to support ordered hosts), or the TransformBase (this).

- Note to implementors:
   Since target is called from the TransformBase constructor, it
   will not have access to any properties of subclasses.  See
   PropertyTransform for a work-around.

---


## Structs <a name="Structs" id="Structs"></a>

### ConstructHostProps <a name="ConstructHostProps" id="@michanto/cdk-orchestration.ConstructHostProps"></a>

Properties for ConstructHost.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.ConstructHostProps.Initializer"></a>

```typescript
import { ConstructHostProps } from '@michanto/cdk-orchestration'

const constructHostProps: ConstructHostProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructHostProps.property.hostConstructTypeInfo">hostConstructTypeInfo</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a></code> | Host RTTI. |
| <code><a href="#@michanto/cdk-orchestration.ConstructHostProps.property.hostedConstructTypeInfo">hostedConstructTypeInfo</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a></code> | Hosted construct RTTI. |
| <code><a href="#@michanto/cdk-orchestration.ConstructHostProps.property.stopCondition">stopCondition</a></code> | <code><a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a></code> | Stop condition for searching for hosted constructs. |

---

##### `hostConstructTypeInfo`<sup>Required</sup> <a name="hostConstructTypeInfo" id="@michanto/cdk-orchestration.ConstructHostProps.property.hostConstructTypeInfo"></a>

```typescript
public readonly hostConstructTypeInfo: ConstructRunTimeTypeInfo;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a>

Host RTTI.

---

##### `hostedConstructTypeInfo`<sup>Required</sup> <a name="hostedConstructTypeInfo" id="@michanto/cdk-orchestration.ConstructHostProps.property.hostedConstructTypeInfo"></a>

```typescript
public readonly hostedConstructTypeInfo: ConstructRunTimeTypeInfo;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a>

Hosted construct RTTI.

---

##### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.ConstructHostProps.property.stopCondition"></a>

```typescript
public readonly stopCondition: IStopCondition;
```

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

Stop condition for searching for hosted constructs.

Normally this will at least exclude sub-stacks.

---

### ConstructServiceProps <a name="ConstructServiceProps" id="@michanto/cdk-orchestration.ConstructServiceProps"></a>

Properties for defining a construct service.

A construct service is a symbol-keyed property on a construct.  The CDK uses
symbol-keyed properties extensively for RTTI, service caches, such as the myStack cache on
constructs created after calling Stack.of (see Stack.of in Stack.ts in the CDK), and hosting constructs (such as the Stack hosting
CfnElements.  See cfnElements function in Stack.ts in the CDK).

The construct service classes take these CDK techniques and make them explicit.
Construct services are similar to construct context, but are settable after the construct has children.

There is no type associated with these symbols unless a typed accessor function is defined,
such as {@link Stack.of } or {@link CfnElement.isCfnElement }, just to name two CDK examples.

In regards to this technique the CDK says (wrt `CfnElement.isCfnElement`):

> Uses duck-typing instead of `instanceof` to allow stack elements from different
> versions of this library to be included in the same stack.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.ConstructServiceProps.Initializer"></a>

```typescript
import { ConstructServiceProps } from '@michanto/cdk-orchestration'

const constructServiceProps: ConstructServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructServiceProps.property.servicePropertyName">servicePropertyName</a></code> | <code>string</code> | The symbol property for this construct service. |
| <code><a href="#@michanto/cdk-orchestration.ConstructServiceProps.property.factory">factory</a></code> | <code><a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a></code> | This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found. |

---

##### `servicePropertyName`<sup>Required</sup> <a name="servicePropertyName" id="@michanto/cdk-orchestration.ConstructServiceProps.property.servicePropertyName"></a>

```typescript
public readonly servicePropertyName: string;
```

- *Type:* string

The symbol property for this construct service.

This needs to be
unique, so namespacing symobls is recommended:
```
// Your package name
const NAMESPACE = "@michanto/cdk-orchestration"
// PackageName.ServiceName
Symbol.for(`${NAMESPACE}.CfnTransform`)
```
To ensure uniqueness.

---

##### `factory`<sup>Optional</sup> <a name="factory" id="@michanto/cdk-orchestration.ConstructServiceProps.property.factory"></a>

```typescript
public readonly factory: IConstructServiceFactory;
```

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found.

Note:  You can also store factories in the tree itself using ConstructService.setFactory.
If a factory is found instead of a service, then that factory will be used instead of this
default factory.

---

### ConstructTreeServiceProps <a name="ConstructTreeServiceProps" id="@michanto/cdk-orchestration.ConstructTreeServiceProps"></a>

Properties for ConstructTreeService.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.ConstructTreeServiceProps.Initializer"></a>

```typescript
import { ConstructTreeServiceProps } from '@michanto/cdk-orchestration'

const constructTreeServiceProps: ConstructTreeServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps.property.servicePropertyName">servicePropertyName</a></code> | <code>string</code> | The symbol property for this construct service. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps.property.factory">factory</a></code> | <code><a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a></code> | This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps.property.stopCondition">stopCondition</a></code> | <code><a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a></code> | The `stopCondition` function is used in two cases:. |

---

##### `servicePropertyName`<sup>Required</sup> <a name="servicePropertyName" id="@michanto/cdk-orchestration.ConstructTreeServiceProps.property.servicePropertyName"></a>

```typescript
public readonly servicePropertyName: string;
```

- *Type:* string

The symbol property for this construct service.

This needs to be
unique, so namespacing symobls is recommended:
```
// Your package name
const NAMESPACE = "@michanto/cdk-orchestration"
// PackageName.ServiceName
Symbol.for(`${NAMESPACE}.CfnTransform`)
```
To ensure uniqueness.

---

##### `factory`<sup>Optional</sup> <a name="factory" id="@michanto/cdk-orchestration.ConstructTreeServiceProps.property.factory"></a>

```typescript
public readonly factory: IConstructServiceFactory;
```

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found.

Note:  You can also store factories in the tree itself using ConstructService.setFactory.
If a factory is found instead of a service, then that factory will be used instead of this
default factory.

---

##### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.ConstructTreeServiceProps.property.stopCondition"></a>

```typescript
public readonly stopCondition: IStopCondition;
```

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

The `stopCondition` function is used in two cases:.

1. To determine when to stop searching up the tree when calling
{@link ConstructService.searchUpOrCreate }.  For example, this function can be used to stop
searching up the tree when we reach a Stack object.

2. To stop recursion down the tree when calling {@link ConstructService.searchDown}.
Recursion will continue with the next child, unless that child also meets the stopCondition.
For example, this function can be used to stop recursion into sub-stacks.

If not defined, recursion will stop when we reach either the top or bottom of the tree,
depending on search direction.

A typical condition would be something like:
```
(c) => Stack.isStack(c)
```
Which would cause the search to stop at a stack (or sub-stack depending on direction of the search).

The stopCondition is not applied when calling  {@link ConstructService.searchSelf}
or {@link ConstructService.searchSelfOrCreate}.

---

### ImportTemplateProps <a name="ImportTemplateProps" id="@michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps"></a>

CfnIncludeProps minus the templateFile, which is passed separately to {@link BaseTemplateImporter.importTemplate}.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps.Initializer"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

const importTemplateProps: cloudformation_include.ImportTemplateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps.property.allowCyclicalReferences">allowCyclicalReferences</a></code> | <code>boolean</code> | See {@link CfnIncludeProps.allowCyclicalReferences}. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps.property.loadNestedStacks">loadNestedStacks</a></code> | <code>{[ key: string ]: aws-cdk-lib.cloudformation_include.CfnIncludeProps}</code> | See {@link CfnIncludeProps.loadNestedStacks}. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: any}</code> | See {@link CfnIncludeProps.parameters}. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps.property.preserveLogicalIds">preserveLogicalIds</a></code> | <code>boolean</code> | See {@link CfnIncludeProps.preserveLogicalIds}. |

---

##### `allowCyclicalReferences`<sup>Optional</sup> <a name="allowCyclicalReferences" id="@michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps.property.allowCyclicalReferences"></a>

```typescript
public readonly allowCyclicalReferences: boolean;
```

- *Type:* boolean

See {@link CfnIncludeProps.allowCyclicalReferences}.

---

##### `loadNestedStacks`<sup>Optional</sup> <a name="loadNestedStacks" id="@michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps.property.loadNestedStacks"></a>

```typescript
public readonly loadNestedStacks: {[ key: string ]: CfnIncludeProps};
```

- *Type:* {[ key: string ]: aws-cdk-lib.cloudformation_include.CfnIncludeProps}

See {@link CfnIncludeProps.loadNestedStacks}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

See {@link CfnIncludeProps.parameters}.

---

##### `preserveLogicalIds`<sup>Optional</sup> <a name="preserveLogicalIds" id="@michanto/cdk-orchestration.cloudformation_include.ImportTemplateProps.property.preserveLogicalIds"></a>

```typescript
public readonly preserveLogicalIds: boolean;
```

- *Type:* boolean
- *Default:* true

See {@link CfnIncludeProps.preserveLogicalIds}.

---

### InlineNodejsFunctionProps <a name="InlineNodejsFunctionProps" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps"></a>

Properties for an InlineNodejsFunction.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.Initializer"></a>

```typescript
import { aws_lambda_nodejs } from '@michanto/cdk-orchestration'

const inlineNodejsFunctionProps: aws_lambda_nodejs.InlineNodejsFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.adotInstrumentation">adotInstrumentation</a></code> | <code>aws-cdk-lib.aws_lambda.AdotInstrumentationConfig</code> | Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.allowAllIpv6Outbound">allowAllIpv6Outbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all ipv6 network traffic. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic (except ipv6). |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | Sets the application log level for the function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.applicationLogLevelV2">applicationLogLevelV2</a></code> | <code>aws-cdk-lib.aws_lambda.ApplicationLogLevel</code> | Sets the application log level for the function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>boolean</code> | Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logFormat">logFormat</a></code> | <code>string</code> | Sets the logFormat for the function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.loggingFormat">loggingFormat</a></code> | <code>aws-cdk-lib.aws_lambda.LoggingFormat</code> | Sets the loggingFormat for the function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group the function sends logs to. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.paramsAndSecrets">paramsAndSecrets</a></code> | <code>aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion</code> | Specify the configuration of Parameters and Secrets Extension. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.recursiveLoop">recursiveLoop</a></code> | <code>aws-cdk-lib.aws_lambda.RecursiveLoop</code> | Sets the Recursive Loop Protection for Lambda Function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.runtimeManagementMode">runtimeManagementMode</a></code> | <code>aws-cdk-lib.aws_lambda.RuntimeManagementMode</code> | Sets the runtime management configuration for a function's version. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.snapStart">snapStart</a></code> | <code>aws-cdk-lib.aws_lambda.SnapStartConf</code> | Enable SnapStart for Lambda Function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | Sets the system log level for the function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.systemLogLevelV2">systemLogLevelV2</a></code> | <code>aws-cdk-lib.aws_lambda.SystemLogLevel</code> | Sets the system log level for the function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.entry">entry</a></code> | <code>string</code> | Path to the entry file (JavaScript only). |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.awsSdkConnectionReuse">awsSdkConnectionReuse</a></code> | <code>boolean</code> | Whether to automatically reuse TCP connections when working with the AWS SDK for JavaScript. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.handler">handler</a></code> | <code>string</code> | The name of the exported handler in the entry file. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.minifyEngine">minifyEngine</a></code> | <code>@michanto/cdk-orchestration.aws_lambda_nodejs.MinifyEngine</code> | Default is "SIMPLE". |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime environment. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `adotInstrumentation`<sup>Optional</sup> <a name="adotInstrumentation" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.adotInstrumentation"></a>

```typescript
public readonly adotInstrumentation: AdotInstrumentationConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.AdotInstrumentationConfig
- *Default:* No ADOT instrumentation

Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation.

> [https://aws-otel.github.io/docs/getting-started/lambda](https://aws-otel.github.io/docs/getting-started/lambda)

---

##### `allowAllIpv6Outbound`<sup>Optional</sup> <a name="allowAllIpv6Outbound" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.allowAllIpv6Outbound"></a>

```typescript
public readonly allowAllIpv6Outbound: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to allow the Lambda to send all ipv6 network traffic.

If set to true, there will only be a single egress rule which allows all
outbound ipv6 traffic. If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets using ipv6.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllIpv6Outbound` directly on the security group.

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic (except ipv6).

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllOutbound` directly on the security group.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### ~~`applicationLogLevel`~~<sup>Optional</sup> <a name="applicationLogLevel" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.applicationLogLevel"></a>

- *Deprecated:* Use `applicationLogLevelV2` as a property instead.

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the application log level for the function.

---

##### `applicationLogLevelV2`<sup>Optional</sup> <a name="applicationLogLevelV2" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.applicationLogLevelV2"></a>

```typescript
public readonly applicationLogLevelV2: ApplicationLogLevel;
```

- *Type:* aws-cdk-lib.aws_lambda.ApplicationLogLevel
- *Default:* ApplicationLogLevel.INFO

Sets the application log level for the function.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `ipv6AllowedForDualStack`<sup>Optional</sup> <a name="ipv6AllowedForDualStack" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: boolean;
```

- *Type:* boolean
- *Default:* false

Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.

Only used if 'vpc' is supplied.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### ~~`logFormat`~~<sup>Optional</sup> <a name="logFormat" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logFormat"></a>

- *Deprecated:* Use `loggingFormat` as a property instead.

```typescript
public readonly logFormat: string;
```

- *Type:* string
- *Default:* "Text"

Sets the logFormat for the function.

---

##### `loggingFormat`<sup>Optional</sup> <a name="loggingFormat" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.loggingFormat"></a>

```typescript
public readonly loggingFormat: LoggingFormat;
```

- *Type:* aws-cdk-lib.aws_lambda.LoggingFormat
- *Default:* LoggingFormat.TEXT

Sets the loggingFormat for the function.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* `/aws/lambda/${this.functionName}` - default log group created by Lambda

The log group the function sends logs to.

By default, Lambda functions send logs to an automatically created default log group named /aws/lambda/\<function name\>.
However you cannot change the properties of this auto-created log group using the AWS CDK, e.g. you cannot set a different log retention.

Use the `logGroup` property to create a fully customizable LogGroup ahead of time, and instruct the Lambda function to send logs to it.

Providing a user-controlled log group was rolled out to commercial regions on 2023-11-16.
If you are deploying to another type of region, please check regional availability first.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

This is a legacy API and we strongly recommend you move away from it if you can.
Instead create a fully customizable log group with `logs.LogGroup` and use the `logGroup` property
to instruct the Lambda function to send logs to it.
Migrating from `logRetention` to `logGroup` will cause the name of the log group to change.
Users and code and referencing the name verbatim will have to adjust.

In AWS CDK code, you can access the log group name directly from the LogGroup construct:
```ts
import * as logs from 'aws-cdk-lib/aws-logs';

declare const myLogGroup: logs.LogGroup;
myLogGroup.logGroupName;
```

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `paramsAndSecrets`<sup>Optional</sup> <a name="paramsAndSecrets" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.paramsAndSecrets"></a>

```typescript
public readonly paramsAndSecrets: ParamsAndSecretsLayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion
- *Default:* No Parameters and Secrets Extension

Specify the configuration of Parameters and Secrets Extension.

> [https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html)

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `recursiveLoop`<sup>Optional</sup> <a name="recursiveLoop" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.recursiveLoop"></a>

```typescript
public readonly recursiveLoop: RecursiveLoop;
```

- *Type:* aws-cdk-lib.aws_lambda.RecursiveLoop
- *Default:* RecursiveLoop.Terminate

Sets the Recursive Loop Protection for Lambda Function.

It lets Lambda detect and terminate unintended recusrive loops.

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `runtimeManagementMode`<sup>Optional</sup> <a name="runtimeManagementMode" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.runtimeManagementMode"></a>

```typescript
public readonly runtimeManagementMode: RuntimeManagementMode;
```

- *Type:* aws-cdk-lib.aws_lambda.RuntimeManagementMode
- *Default:* Auto

Sets the runtime management configuration for a function's version.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.snapStart"></a>

```typescript
public readonly snapStart: SnapStartConf;
```

- *Type:* aws-cdk-lib.aws_lambda.SnapStartConf
- *Default:* No snapstart

Enable SnapStart for Lambda Function.

SnapStart is currently supported only for Java 11, 17 runtime

---

##### ~~`systemLogLevel`~~<sup>Optional</sup> <a name="systemLogLevel" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.systemLogLevel"></a>

- *Deprecated:* Use `systemLogLevelV2` as a property instead.

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the system log level for the function.

---

##### `systemLogLevelV2`<sup>Optional</sup> <a name="systemLogLevelV2" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.systemLogLevelV2"></a>

```typescript
public readonly systemLogLevelV2: SystemLogLevel;
```

- *Type:* aws-cdk-lib.aws_lambda.SystemLogLevel
- *Default:* SystemLogLevel.INFO

Sets the system log level for the function.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

##### `entry`<sup>Required</sup> <a name="entry" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.entry"></a>

```typescript
public readonly entry: string;
```

- *Type:* string

Path to the entry file (JavaScript only).

If you are using typescript, just pass the path to the compiled .js file.

To support unit testing your constructs, it is best to pass a relative path to the code, such as:
```
`${__dirname}/../../../dist/lib/constructs/handlers/my_handler.js`
```
Otherwise the unit tests may not be able to find the javascript file.

---

##### `awsSdkConnectionReuse`<sup>Optional</sup> <a name="awsSdkConnectionReuse" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.awsSdkConnectionReuse"></a>

```typescript
public readonly awsSdkConnectionReuse: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to automatically reuse TCP connections when working with the AWS SDK for JavaScript.

This sets the `AWS_NODEJS_CONNECTION_REUSE_ENABLED` environment variable
to `1`.

> [https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-reusing-connections.html](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-reusing-connections.html)

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string
- *Default:* index.handler

The name of the exported handler in the entry file.

The handler is prefixed with `index.` unless the specified handler value contains a `.`,
in which case it is used as-is.

---

##### `minifyEngine`<sup>Optional</sup> <a name="minifyEngine" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.minifyEngine"></a>

```typescript
public readonly minifyEngine: MinifyEngine;
```

- *Type:* @michanto/cdk-orchestration.aws_lambda_nodejs.MinifyEngine

Default is "SIMPLE".

See {@link MinifyEngine} for values.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@michanto/cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime
- *Default:* Runtime.NODEJS_18_X

The runtime environment.

Only runtimes of the Node.js family are
supported.

---

### InsertStepFunctionStateProps <a name="InsertStepFunctionStateProps" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionStateProps"></a>

Properties for InsertStepFunctionState.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionStateProps.Initializer"></a>

```typescript
import { aws_stepfunctions } from '@michanto/cdk-orchestration'

const insertStepFunctionStateProps: aws_stepfunctions.InsertStepFunctionStateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionStateProps.property.insertAfterStep">insertAfterStep</a></code> | <code>string</code> | Step after which to insert the new state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionStateProps.property.state">state</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State</code> | State to insert into the StateMachine. |

---

##### `insertAfterStep`<sup>Required</sup> <a name="insertAfterStep" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionStateProps.property.insertAfterStep"></a>

```typescript
public readonly insertAfterStep: string;
```

- *Type:* string

Step after which to insert the new state.

---

##### `state`<sup>Required</sup> <a name="state" id="@michanto/cdk-orchestration.aws_stepfunctions.InsertStepFunctionStateProps.property.state"></a>

```typescript
public readonly state: State;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State

State to insert into the StateMachine.

---

### JsonPropertyTransformProps <a name="JsonPropertyTransformProps" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransformProps"></a>

Properties for JsonPropertyTransform.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransformProps.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

const jsonPropertyTransformProps: transforms.JsonPropertyTransformProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransformProps.property.propertyName">propertyName</a></code> | <code>string</code> | Name of the property to transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.JsonPropertyTransformProps.property.resourceType">resourceType</a></code> | <code>string</code> | Resource type to transform. |

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransformProps.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

Name of the property to transform.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@michanto/cdk-orchestration.transforms.JsonPropertyTransformProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Resource type to transform.

---

### LambdaCustomResourceProps <a name="LambdaCustomResourceProps" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps"></a>

Properties for LambdaCustomResource.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.Initializer"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

const lambdaCustomResourceProps: custom_resources.LambdaCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the singleton Lambda function implementing this custom resource. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.installLatestAwsSdk">installLatestAwsSdk</a></code> | <code>boolean</code> | Whether to install the latest AWS SDK v2. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The Log Group used for logging of events emitted by the custom resource's lambda function. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events of the singleton Lambda function implementing this custom resource are kept in CloudWatch Logs. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.memorySize">memorySize</a></code> | <code>number</code> | The memory size for the singleton Lambda function implementing this custom resource. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.onCreate">onCreate</a></code> | <code>aws-cdk-lib.custom_resources.AwsSdkCall</code> | The AWS SDK call to make when the resource is created. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.onDelete">onDelete</a></code> | <code>aws-cdk-lib.custom_resources.AwsSdkCall</code> | The AWS SDK call to make when the resource is deleted. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.onUpdate">onUpdate</a></code> | <code>aws-cdk-lib.custom_resources.AwsSdkCall</code> | The AWS SDK call to make when the resource is updated. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.policy">policy</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResourcePolicy</code> | The policy that will be added to the execution role of the Lambda function implementing this custom resource provider. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The policy to apply when this resource is removed from the application. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.resourceType">resourceType</a></code> | <code>string</code> | Cloudformation Resource type. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The execution role for the singleton Lambda function implementing this custom resource provider. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout for the singleton Lambda function implementing this custom resource. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The vpc to provision the lambda function in. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Which subnets from the VPC to place the lambda function in. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.autoPaginate">autoPaginate</a></code> | <code>boolean</code> | If the AwsApiCall returns an NextToken, this will attempt to auto-paginate and get subsequent pages until there are none left. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.defaults">defaults</a></code> | <code>{[ key: string ]: string}</code> | Default attribute values to use when the underlying task fails to return expected values. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.responseBufferField">responseBufferField</a></code> | <code>string</code> | Specifies a field in the API response that should be deserlized, such as Payload when calling lambda:Invoke, or Body when calling s3:GetObject. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.runAlways">runAlways</a></code> | <code>boolean</code> | Whether to run the task every time the stack is updated. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the singleton Lambda function implementing this custom resource.

The function name will remain the same after the first AwsCustomResource is created in a stack.

---

##### `installLatestAwsSdk`<sup>Optional</sup> <a name="installLatestAwsSdk" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.installLatestAwsSdk"></a>

```typescript
public readonly installLatestAwsSdk: boolean;
```

- *Type:* boolean
- *Default:* The value of `@aws-cdk/customresources:installLatestAwsSdkDefault`, otherwise `true`

Whether to install the latest AWS SDK v2.

If not specified, this uses whatever JavaScript SDK version is the default in
AWS Lambda at the time of execution.

Otherwise, installs the latest version from 'npmjs.com'. The installation takes
around 60 seconds and requires internet connectivity.

The default can be controlled using the context key
`@aws-cdk/customresources:installLatestAwsSdkDefault` is.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* a default log group created by AWS Lambda

The Log Group used for logging of events emitted by the custom resource's lambda function.

Providing a user-controlled log group was rolled out to commercial regions on 2023-11-16.
If you are deploying to another type of region, please check regional availability first.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events of the singleton Lambda function implementing this custom resource are kept in CloudWatch Logs.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 512 mega in case if installLatestAwsSdk is false.

The memory size for the singleton Lambda function implementing this custom resource.

---

##### `onCreate`<sup>Optional</sup> <a name="onCreate" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.onCreate"></a>

```typescript
public readonly onCreate: AwsSdkCall;
```

- *Type:* aws-cdk-lib.custom_resources.AwsSdkCall
- *Default:* the call when the resource is updated

The AWS SDK call to make when the resource is created.

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.onDelete"></a>

```typescript
public readonly onDelete: AwsSdkCall;
```

- *Type:* aws-cdk-lib.custom_resources.AwsSdkCall
- *Default:* no call

The AWS SDK call to make when the resource is deleted.

---

##### `onUpdate`<sup>Optional</sup> <a name="onUpdate" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.onUpdate"></a>

```typescript
public readonly onUpdate: AwsSdkCall;
```

- *Type:* aws-cdk-lib.custom_resources.AwsSdkCall
- *Default:* no call

The AWS SDK call to make when the resource is updated.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.policy"></a>

```typescript
public readonly policy: AwsCustomResourcePolicy;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResourcePolicy
- *Default:* no policy added

The policy that will be added to the execution role of the Lambda function implementing this custom resource provider.

The custom resource also implements `iam.IGrantable`, making it possible
to use the `grantXxx()` methods.

As this custom resource uses a singleton Lambda function, it's important
to note the that function's role will eventually accumulate the
permissions/grants from all resources.

Note that a policy must be specified if `role` is not provided, as
by default a new role is created which requires policy changes to access
resources.

> [Policy.fromSdkCalls](Policy.fromSdkCalls)

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* cdk.RemovalPolicy.Destroy

The policy to apply when this resource is removed from the application.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string
- *Default:* Custom::AWS

Cloudformation Resource type.

---

##### `role`<sup>Optional</sup> <a name="role" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a new role is created

The execution role for the singleton Lambda function implementing this custom resource provider.

This role will apply to all `AwsCustomResource`
instances in the stack. The role must be assumable by the
`lambda.amazonaws.com` service principal.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.minutes(2)

The timeout for the singleton Lambda function implementing this custom resource.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* the function is not provisioned inside a vpc.

The vpc to provision the lambda function in.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Which subnets from the VPC to place the lambda function in.

Only used if 'vpc' is supplied. Note: internet access for Lambdas
requires a NAT gateway, so picking Public subnets is not allowed.

---

##### `autoPaginate`<sup>Optional</sup> <a name="autoPaginate" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.autoPaginate"></a>

```typescript
public readonly autoPaginate: boolean;
```

- *Type:* boolean

If the AwsApiCall returns an NextToken, this will attempt to auto-paginate and get subsequent pages until there are none left.

This is a dangerous flag to set if there are a lot of pages,
and may cause the lambda to time out and the resource to fail.
Be careful.

Default is false.

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.defaults"></a>

```typescript
public readonly defaults: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Default attribute values to use when the underlying task fails to return expected values.

---

##### `responseBufferField`<sup>Optional</sup> <a name="responseBufferField" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.responseBufferField"></a>

```typescript
public readonly responseBufferField: string;
```

- *Type:* string

Specifies a field in the API response that should be deserlized, such as Payload when calling lambda:Invoke, or Body when calling s3:GetObject.

---

##### `runAlways`<sup>Optional</sup> <a name="runAlways" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceProps.property.runAlways"></a>

```typescript
public readonly runAlways: boolean;
```

- *Type:* boolean

Whether to run the task every time the stack is updated.

Default is true.

---

### LambdaCustomResourceResourcesProps <a name="LambdaCustomResourceResourcesProps" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps"></a>

Props for LambdaCustomResourceResources.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.Initializer"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

const lambdaCustomResourceResourcesProps: custom_resources.LambdaCustomResourceResourcesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | *No description.* |

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays

---

##### `role`<sup>Optional</sup> <a name="role" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@michanto/cdk-orchestration.custom_resources.LambdaCustomResourceResourcesProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

### LambdaTaskProps <a name="LambdaTaskProps" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps"></a>

Properties for LambdaTask.

Basically these are used to create AwsCustomResource input for the LambdaCustomResource.
They work very similar to how AwsCustomResource and AwsSdkCall work.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

const lambdaTaskProps: orchestration.LambdaTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.lambdaFunction">lambdaFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The lambda function to invoke. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.payload">payload</a></code> | <code>string</code> | The payload to send to the lambda. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.defaults">defaults</a></code> | <code>{[ key: string ]: string}</code> | Default attribute values to use when the underlying task fails to return expected values. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.functionName">functionName</a></code> | <code>string</code> | See {@link AwsCustomResourceProps.functionName}. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | See {@link AwsCustomResourceProps.logRetention}. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.outputPaths">outputPaths</a></code> | <code>string[]</code> | See {@link AwsSdkCall.outputPaths}. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.physicalResourceId">physicalResourceId</a></code> | <code>aws-cdk-lib.custom_resources.PhysicalResourceId</code> | See {@link AwsSdkCall.physicalResourceId}. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.policy">policy</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResourcePolicy</code> | See {@link AwsCustomResourceProps.policy}. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.resourceType">resourceType</a></code> | <code>string</code> | Custom resource type. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | See {@link AwsCustomResourceProps.role}. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.runAlways">runAlways</a></code> | <code>boolean</code> | Whether to run the task every time the stack is updated. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | See {@link AwsCustomResourceProps.timeout}. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | See {@link AwsCustomResourceProps.vpc}. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | See {@link AwsCustomResourceProps.vpcSubnets}. |

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The lambda function to invoke.

---

##### `payload`<sup>Required</sup> <a name="payload" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

The payload to send to the lambda.

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.defaults"></a>

```typescript
public readonly defaults: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Default attribute values to use when the underlying task fails to return expected values.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

See {@link AwsCustomResourceProps.functionName}.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays

See {@link AwsCustomResourceProps.logRetention}.

---

##### `outputPaths`<sup>Optional</sup> <a name="outputPaths" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.outputPaths"></a>

```typescript
public readonly outputPaths: string[];
```

- *Type:* string[]

See {@link AwsSdkCall.outputPaths}.

---

##### `physicalResourceId`<sup>Optional</sup> <a name="physicalResourceId" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.physicalResourceId"></a>

```typescript
public readonly physicalResourceId: PhysicalResourceId;
```

- *Type:* aws-cdk-lib.custom_resources.PhysicalResourceId

See {@link AwsSdkCall.physicalResourceId}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.policy"></a>

```typescript
public readonly policy: AwsCustomResourcePolicy;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResourcePolicy

See {@link AwsCustomResourceProps.policy}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Custom resource type.

Default is Custom::LambdaTask.

---

##### `role`<sup>Optional</sup> <a name="role" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

See {@link AwsCustomResourceProps.role}.

---

##### `runAlways`<sup>Optional</sup> <a name="runAlways" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.runAlways"></a>

```typescript
public readonly runAlways: boolean;
```

- *Type:* boolean

Whether to run the task every time the stack is updated.

Default is true.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

See {@link AwsCustomResourceProps.timeout}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

See {@link AwsCustomResourceProps.vpc}.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@michanto/cdk-orchestration.orchestration.LambdaTaskProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

See {@link AwsCustomResourceProps.vpcSubnets}.

---

### LateBoundStepFunctionsStartExecutionProps <a name="LateBoundStepFunctionsStartExecutionProps" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps"></a>

Properties for LateBoundStepFunctionsStartExecution.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.Initializer"></a>

```typescript
import { aws_stepfunctions_tasks } from '@michanto/cdk-orchestration'

const lateBoundStepFunctionsStartExecutionProps: aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.comment">comment</a></code> | <code>string</code> | An optional description for this state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Credentials</code> | Credentials for an IAM Role that the State Machine assumes for executing the task. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.heartbeat">heartbeat</a></code> | <code>aws-cdk-lib.Duration</code> | Timeout for the heartbeat. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Timeout</code> | Timeout for the heartbeat. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.inputPath">inputPath</a></code> | <code>string</code> | JSONPath expression to select part of the state to be the input to this state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.integrationPattern">integrationPattern</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IntegrationPattern</code> | AWS Step Functions integrates with services directly in the Amazon States Language. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.outputPath">outputPath</a></code> | <code>string</code> | JSONPath expression to select select a portion of the state output to pass to the next state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.resultPath">resultPath</a></code> | <code>string</code> | JSONPath expression to indicate where to inject the state's output. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.resultSelector">resultSelector</a></code> | <code>{[ key: string ]: any}</code> | The JSON that will replace the state's raw result and become the effective result before ResultPath is applied. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.stateName">stateName</a></code> | <code>string</code> | Optional name for this state. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.taskTimeout">taskTimeout</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Timeout</code> | Timeout for the task. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | Timeout for the task. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.associateWithParent">associateWithParent</a></code> | <code>boolean</code> | Pass the execution ID from the context object to the execution input. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.input">input</a></code> | <code>aws-cdk-lib.aws_stepfunctions.TaskInput</code> | The JSON input for the execution, same as that of StartExecution. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.name">name</a></code> | <code>string</code> | The name of the execution, same as that of StartExecution. |
| <code><a href="#@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.stateMachineArnPath">stateMachineArnPath</a></code> | <code>string</code> | Where in the event the arn of the stateMachine to call is stored. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string
- *Default:* No comment

An optional description for this state.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.credentials"></a>

```typescript
public readonly credentials: Credentials;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Credentials
- *Default:* None (Task is executed using the State Machine's execution role)

Credentials for an IAM Role that the State Machine assumes for executing the task.

This enables cross-account resource invocations.

> [https://docs.aws.amazon.com/step-functions/latest/dg/concepts-access-cross-acct-resources.html](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-access-cross-acct-resources.html)

---

##### ~~`heartbeat`~~<sup>Optional</sup> <a name="heartbeat" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.heartbeat"></a>

- *Deprecated:* use `heartbeatTimeout`

```typescript
public readonly heartbeat: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* None

Timeout for the heartbeat.

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="heartbeatTimeout" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.heartbeatTimeout"></a>

```typescript
public readonly heartbeatTimeout: Timeout;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Timeout
- *Default:* None

Timeout for the heartbeat.

[disable-awslint:duration-prop-type] is needed because all props interface in
aws-stepfunctions-tasks extend this interface

---

##### `inputPath`<sup>Optional</sup> <a name="inputPath" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string
- *Default:* The entire task input (JSON path '$')

JSONPath expression to select part of the state to be the input to this state.

May also be the special value JsonPath.DISCARD, which will cause the effective
input to be the empty object {}.

---

##### `integrationPattern`<sup>Optional</sup> <a name="integrationPattern" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.integrationPattern"></a>

```typescript
public readonly integrationPattern: IntegrationPattern;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.IntegrationPattern
- *Default:* `IntegrationPattern.REQUEST_RESPONSE` for most tasks. `IntegrationPattern.RUN_JOB` for the following exceptions: `BatchSubmitJob`, `EmrAddStep`, `EmrCreateCluster`, `EmrTerminationCluster`, and `EmrContainersStartJobRun`.

AWS Step Functions integrates with services directly in the Amazon States Language.

You can control these AWS services using service integration patterns.

Depending on the AWS Service, the Service Integration Pattern availability will vary.

> [https://docs.aws.amazon.com/step-functions/latest/dg/connect-supported-services.html](https://docs.aws.amazon.com/step-functions/latest/dg/connect-supported-services.html)

---

##### `outputPath`<sup>Optional</sup> <a name="outputPath" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.outputPath"></a>

```typescript
public readonly outputPath: string;
```

- *Type:* string
- *Default:* The entire JSON node determined by the state input, the task result, and resultPath is passed to the next state (JSON path '$')

JSONPath expression to select select a portion of the state output to pass to the next state.

May also be the special value JsonPath.DISCARD, which will cause the effective
output to be the empty object {}.

---

##### `resultPath`<sup>Optional</sup> <a name="resultPath" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.resultPath"></a>

```typescript
public readonly resultPath: string;
```

- *Type:* string
- *Default:* Replaces the entire input with the result (JSON path '$')

JSONPath expression to indicate where to inject the state's output.

May also be the special value JsonPath.DISCARD, which will cause the state's
input to become its output.

---

##### `resultSelector`<sup>Optional</sup> <a name="resultSelector" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.resultSelector"></a>

```typescript
public readonly resultSelector: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* None

The JSON that will replace the state's raw result and become the effective result before ResultPath is applied.

You can use ResultSelector to create a payload with values that are static
or selected from the state's raw result.

> [https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector)

---

##### `stateName`<sup>Optional</sup> <a name="stateName" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string
- *Default:* The construct ID will be used as state name

Optional name for this state.

---

##### `taskTimeout`<sup>Optional</sup> <a name="taskTimeout" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.taskTimeout"></a>

```typescript
public readonly taskTimeout: Timeout;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Timeout
- *Default:* None

Timeout for the task.

[disable-awslint:duration-prop-type] is needed because all props interface in
aws-stepfunctions-tasks extend this interface

---

##### ~~`timeout`~~<sup>Optional</sup> <a name="timeout" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.timeout"></a>

- *Deprecated:* use `taskTimeout`

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* None

Timeout for the task.

---

##### `associateWithParent`<sup>Optional</sup> <a name="associateWithParent" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.associateWithParent"></a>

```typescript
public readonly associateWithParent: boolean;
```

- *Type:* boolean
- *Default:* false

Pass the execution ID from the context object to the execution input.

This allows the Step Functions UI to link child executions from parent executions, making it easier to trace execution flow across state machines.

If you set this property to `true`, the `input` property must be an object (provided by `TaskInput.fromObject`) or omitted entirely.

> [https://docs.aws.amazon.com/step-functions/latest/dg/concepts-nested-workflows.html#nested-execution-startid](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-nested-workflows.html#nested-execution-startid)

---

##### `input`<sup>Optional</sup> <a name="input" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.input"></a>

```typescript
public readonly input: TaskInput;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.TaskInput
- *Default:* The state input (JSON path '$')

The JSON input for the execution, same as that of StartExecution.

> [https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html)

---

##### `name`<sup>Optional</sup> <a name="name" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* None

The name of the execution, same as that of StartExecution.

> [https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html)

---

##### `stateMachineArnPath`<sup>Optional</sup> <a name="stateMachineArnPath" id="@michanto/cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.stateMachineArnPath"></a>

```typescript
public readonly stateMachineArnPath: string;
```

- *Type:* string
- *Default:* "$.stateMachineArn"

Where in the event the arn of the stateMachine to call is stored.

---

### LoggerProps <a name="LoggerProps" id="@michanto/cdk-orchestration.LoggerProps"></a>

Properties for creating a Logger.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.LoggerProps.Initializer"></a>

```typescript
import { LoggerProps } from '@michanto/cdk-orchestration'

const loggerProps: LoggerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.LoggerProps.property.logLevel">logLevel</a></code> | <code>number</code> | The log level. |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@michanto/cdk-orchestration.LoggerProps.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

The log level.

---

### PropertyTransformProps <a name="PropertyTransformProps" id="@michanto/cdk-orchestration.transforms.PropertyTransformProps"></a>

Properties for PropertyTransform.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.transforms.PropertyTransformProps.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

const propertyTransformProps: transforms.PropertyTransformProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformProps.property.propertyName">propertyName</a></code> | <code>string</code> | Name of the property to transform. |
| <code><a href="#@michanto/cdk-orchestration.transforms.PropertyTransformProps.property.resourceType">resourceType</a></code> | <code>string</code> | Resource type to transform. |

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@michanto/cdk-orchestration.transforms.PropertyTransformProps.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

Name of the property to transform.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@michanto/cdk-orchestration.transforms.PropertyTransformProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Resource type to transform.

---

### S3FileMetadataProps <a name="S3FileMetadataProps" id="@michanto/cdk-orchestration.orchestration.S3FileMetadataProps"></a>

Properties for S3FileMetadata.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.orchestration.S3FileMetadataProps.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

const s3FileMetadataProps: orchestration.S3FileMetadataProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadataProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Bucket to read from. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadataProps.property.key">key</a></code> | <code>string</code> | S3 file key to read from. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadataProps.property.physicalResourceId">physicalResourceId</a></code> | <code>aws-cdk-lib.custom_resources.PhysicalResourceId</code> | Physical resource ID. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadataProps.property.defaults">defaults</a></code> | <code>{[ key: string ]: any}</code> | Default values to use if the file/properties can't be found. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileMetadataProps.property.resourceType">resourceType</a></code> | <code>string</code> | Resource Type. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@michanto/cdk-orchestration.orchestration.S3FileMetadataProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

Bucket to read from.

---

##### `key`<sup>Required</sup> <a name="key" id="@michanto/cdk-orchestration.orchestration.S3FileMetadataProps.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

S3 file key to read from.

---

##### `physicalResourceId`<sup>Required</sup> <a name="physicalResourceId" id="@michanto/cdk-orchestration.orchestration.S3FileMetadataProps.property.physicalResourceId"></a>

```typescript
public readonly physicalResourceId: PhysicalResourceId;
```

- *Type:* aws-cdk-lib.custom_resources.PhysicalResourceId

Physical resource ID.

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@michanto/cdk-orchestration.orchestration.S3FileMetadataProps.property.defaults"></a>

```typescript
public readonly defaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Default values to use if the file/properties can't be found.

If not specified the default is undefined.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@michanto/cdk-orchestration.orchestration.S3FileMetadataProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Resource Type.

Defaults to Custom::S3FileReader.

---

### S3FileReaderProps <a name="S3FileReaderProps" id="@michanto/cdk-orchestration.orchestration.S3FileReaderProps"></a>

Properties for S3FileReader.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.orchestration.S3FileReaderProps.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

const s3FileReaderProps: orchestration.S3FileReaderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReaderProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Bucket to read from. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReaderProps.property.key">key</a></code> | <code>string</code> | S3 file key to read from. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReaderProps.property.physicalResourceId">physicalResourceId</a></code> | <code>aws-cdk-lib.custom_resources.PhysicalResourceId</code> | Physical resource ID. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReaderProps.property.defaults">defaults</a></code> | <code>{[ key: string ]: any}</code> | Default values to use if the file/properties can't be found. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileReaderProps.property.resourceType">resourceType</a></code> | <code>string</code> | Resource Type. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@michanto/cdk-orchestration.orchestration.S3FileReaderProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

Bucket to read from.

---

##### `key`<sup>Required</sup> <a name="key" id="@michanto/cdk-orchestration.orchestration.S3FileReaderProps.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

S3 file key to read from.

---

##### `physicalResourceId`<sup>Required</sup> <a name="physicalResourceId" id="@michanto/cdk-orchestration.orchestration.S3FileReaderProps.property.physicalResourceId"></a>

```typescript
public readonly physicalResourceId: PhysicalResourceId;
```

- *Type:* aws-cdk-lib.custom_resources.PhysicalResourceId

Physical resource ID.

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@michanto/cdk-orchestration.orchestration.S3FileReaderProps.property.defaults"></a>

```typescript
public readonly defaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Default values to use if the file/properties can't be found.

If not specified the default is undefined.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@michanto/cdk-orchestration.orchestration.S3FileReaderProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Resource Type.

Defaults to Custom::S3FileReader.

---

### S3FileResourceProps <a name="S3FileResourceProps" id="@michanto/cdk-orchestration.orchestration.S3FileResourceProps"></a>

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.orchestration.S3FileResourceProps.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

const s3FileResourceProps: orchestration.S3FileResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.body">body</a></code> | <code>any</code> | Body of the file to write. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Bucket to write to. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.key">key</a></code> | <code>string</code> | S3 file key to write to. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.physicalResourceId">physicalResourceId</a></code> | <code>aws-cdk-lib.custom_resources.PhysicalResourceId</code> | Physical resource ID. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata for the file. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.resourceType">resourceType</a></code> | <code>string</code> | Resource Type. |

---

##### `body`<sup>Required</sup> <a name="body" id="@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.body"></a>

```typescript
public readonly body: any;
```

- *Type:* any

Body of the file to write.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

Bucket to write to.

---

##### `key`<sup>Required</sup> <a name="key" id="@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

S3 file key to write to.

---

##### `physicalResourceId`<sup>Required</sup> <a name="physicalResourceId" id="@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.physicalResourceId"></a>

```typescript
public readonly physicalResourceId: PhysicalResourceId;
```

- *Type:* aws-cdk-lib.custom_resources.PhysicalResourceId

Physical resource ID.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata for the file.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@michanto/cdk-orchestration.orchestration.S3FileResourceProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Resource Type.

Defaults to Custom::S3FileResource.

---

### ServiceQueryResult <a name="ServiceQueryResult" id="@michanto/cdk-orchestration.ServiceQueryResult"></a>

The result of a service query.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.ServiceQueryResult.Initializer"></a>

```typescript
import { ServiceQueryResult } from '@michanto/cdk-orchestration'

const serviceQueryResult: ServiceQueryResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ServiceQueryResult.property.scope">scope</a></code> | <code>constructs.IConstruct</code> | A scope with that value for it's service property. |
| <code><a href="#@michanto/cdk-orchestration.ServiceQueryResult.property.service">service</a></code> | <code>any</code> | The service property of the scope. |
| <code><a href="#@michanto/cdk-orchestration.ServiceQueryResult.property.servicePropertyName">servicePropertyName</a></code> | <code>string</code> | The particular service that was queried. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ServiceQueryResult.property.scope"></a>

```typescript
public readonly scope: IConstruct;
```

- *Type:* constructs.IConstruct

A scope with that value for it's service property.

---

##### `service`<sup>Required</sup> <a name="service" id="@michanto/cdk-orchestration.ServiceQueryResult.property.service"></a>

```typescript
public readonly service: any;
```

- *Type:* any

The service property of the scope.

---

##### `servicePropertyName`<sup>Required</sup> <a name="servicePropertyName" id="@michanto/cdk-orchestration.ServiceQueryResult.property.servicePropertyName"></a>

```typescript
public readonly servicePropertyName: string;
```

- *Type:* string

The particular service that was queried.

---

### StepFunctionTaskProps <a name="StepFunctionTaskProps" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps"></a>

Properties for StepFunctionTask.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

const stepFunctionTaskProps: orchestration.StepFunctionTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IStateMachine</code> | The state machine to execute. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.defaults">defaults</a></code> | <code>{[ key: string ]: string}</code> | Default attribute values to use when the StepFunction output does not contain a requested value. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.inputEvent">inputEvent</a></code> | <code>any</code> | The event to start the state machine with. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.outputPaths">outputPaths</a></code> | <code>string[]</code> | See {@link AwsSdkCall.outputPaths }. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.prefix">prefix</a></code> | <code>string</code> | Prefix for the execution. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Role for execution and monitoring.  Must have permission to execute and describe the state machine, as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.totalTimeout">totalTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | Total timeout for the entire operation. |

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.stateMachine"></a>

```typescript
public readonly stateMachine: IStateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.IStateMachine

The state machine to execute.

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.defaults"></a>

```typescript
public readonly defaults: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Default attribute values to use when the StepFunction output does not contain a requested value.

---

##### `inputEvent`<sup>Optional</sup> <a name="inputEvent" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.inputEvent"></a>

```typescript
public readonly inputEvent: any;
```

- *Type:* any

The event to start the state machine with.

Should only be provided with stateMachine, not with stateMachineExecutionArn.

---

##### `outputPaths`<sup>Optional</sup> <a name="outputPaths" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.outputPaths"></a>

```typescript
public readonly outputPaths: string[];
```

- *Type:* string[]

See {@link AwsSdkCall.outputPaths }.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Prefix for the execution.

---

##### `role`<sup>Optional</sup> <a name="role" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Role for execution and monitoring.  Must have permission to execute and describe the state machine, as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```.

If not provided, a role will be created.

---

##### `totalTimeout`<sup>Optional</sup> <a name="totalTimeout" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskProps.property.totalTimeout"></a>

```typescript
public readonly totalTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(2)

Total timeout for the entire operation.

The maximum timeout is unknown, but less than 500 hours (yes, it can
exceed the AWS Lambda 15 minutes)

---

### StepFunctionTaskStepProps <a name="StepFunctionTaskStepProps" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps"></a>

This class should not be public and should only be used by StepFunctionTask.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

const stepFunctionTaskStepProps: orchestration.StepFunctionTaskStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.defaults">defaults</a></code> | <code>{[ key: string ]: string}</code> | Default attribute values to use when the StepFunction output does not contain a requested value. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.executionArn">executionArn</a></code> | <code>string</code> | If we are just waiting for an already-existing execution, what is the ARN of that execution? |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.inputEvent">inputEvent</a></code> | <code>any</code> | The event to start the state machine with. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.prefix">prefix</a></code> | <code>string</code> | Prefix for the execution name. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Role for execution and monitoring.  Must have permission to execute and describe the state machine, as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IStateMachine</code> | The state machine to execute. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.succeedAfterMs">succeedAfterMs</a></code> | <code>number</code> | Succeeds the resource if the StepFunction has been running for at least this may milliseconds. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.suffix">suffix</a></code> | <code>string</code> | Suffix for the physical resource ID. |

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.defaults"></a>

```typescript
public readonly defaults: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Default attribute values to use when the StepFunction output does not contain a requested value.

---

##### `executionArn`<sup>Optional</sup> <a name="executionArn" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.executionArn"></a>

```typescript
public readonly executionArn: string;
```

- *Type:* string

If we are just waiting for an already-existing execution, what is the ARN of that execution?

---

##### `inputEvent`<sup>Optional</sup> <a name="inputEvent" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.inputEvent"></a>

```typescript
public readonly inputEvent: any;
```

- *Type:* any

The event to start the state machine with.

Should only be provided with stateMachine, not with executionArn.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Prefix for the execution name.

Name will be `${prefix}_${guid}`.
If undefined then StepFunctions defines the execution name as a guid.

---

##### `role`<sup>Optional</sup> <a name="role" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Role for execution and monitoring.  Must have permission to execute and describe the state machine, as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```.

If not provided, a role will be created.

---

##### `stateMachine`<sup>Optional</sup> <a name="stateMachine" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.stateMachine"></a>

```typescript
public readonly stateMachine: IStateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.IStateMachine

The state machine to execute.

---

##### `succeedAfterMs`<sup>Optional</sup> <a name="succeedAfterMs" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.succeedAfterMs"></a>

```typescript
public readonly succeedAfterMs: number;
```

- *Type:* number

Succeeds the resource if the StepFunction has been running for at least this may milliseconds.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepProps.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Suffix for the physical resource ID.

Required when using exeuctionArn.

---

### StepFunctionTaskStepResourcesProps <a name="StepFunctionTaskStepResourcesProps" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResourcesProps"></a>

Properties for StepFunctionTaskStepResources.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResourcesProps.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

const stepFunctionTaskStepResourcesProps: orchestration.StepFunctionTaskStepResourcesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResourcesProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Role for execution and monitoring.  Must have permission to execute and describe the state machine, as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```. |

---

##### `role`<sup>Optional</sup> <a name="role" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepResourcesProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Role for execution and monitoring.  Must have permission to execute and describe the state machine, as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```.

If not provided, a role will be created.

---

### StringReplacerProps <a name="StringReplacerProps" id="@michanto/cdk-orchestration.transforms.StringReplacerProps"></a>

Properties for {@link StringReplacer}.

#### Initializer <a name="Initializer" id="@michanto/cdk-orchestration.transforms.StringReplacerProps.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

const stringReplacerProps: transforms.StringReplacerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacerProps.property.joiner">joiner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.transforms.StringReplacerProps.property.splitter">splitter</a></code> | <code>string</code> | *No description.* |

---

##### `joiner`<sup>Required</sup> <a name="joiner" id="@michanto/cdk-orchestration.transforms.StringReplacerProps.property.joiner"></a>

```typescript
public readonly joiner: string;
```

- *Type:* string

---

##### `splitter`<sup>Required</sup> <a name="splitter" id="@michanto/cdk-orchestration.transforms.StringReplacerProps.property.splitter"></a>

```typescript
public readonly splitter: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### AppConstructTreeService <a name="AppConstructTreeService" id="@michanto/cdk-orchestration.AppConstructTreeService"></a>

An App-scoped service that is found by looking up the tree.

Found services are cached on the querying scope to speed up subsequent lookups.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.AppConstructTreeService.Initializer"></a>

```typescript
import { AppConstructTreeService } from '@michanto/cdk-orchestration'

new AppConstructTreeService(treeServiceProps: ConstructTreeServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.Initializer.parameter.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@michanto/cdk-orchestration.AppConstructTreeService.Initializer.parameter.treeServiceProps"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.of">of</a></code> | Returns the cached service on an object, or creates one if none is available up the hierarchy. |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.searchUpOrCreate">searchUpOrCreate</a></code> | Searches towards the root for a value. |

---

##### `get` <a name="get" id="@michanto/cdk-orchestration.AppConstructTreeService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppConstructTreeService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="@michanto/cdk-orchestration.AppConstructTreeService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppConstructTreeService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="@michanto/cdk-orchestration.AppConstructTreeService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppConstructTreeService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.AppConstructTreeService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="@michanto/cdk-orchestration.AppConstructTreeService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppConstructTreeService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="@michanto/cdk-orchestration.AppConstructTreeService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppConstructTreeService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@michanto/cdk-orchestration.AppConstructTreeService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppConstructTreeService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.AppConstructTreeService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="@michanto/cdk-orchestration.AppConstructTreeService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppConstructTreeService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="@michanto/cdk-orchestration.AppConstructTreeService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="@michanto/cdk-orchestration.AppConstructTreeService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppConstructTreeService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="@michanto/cdk-orchestration.AppConstructTreeService.setFactory.parameter.factory"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `of` <a name="of" id="@michanto/cdk-orchestration.AppConstructTreeService.of"></a>

```typescript
public of(scope: IConstruct): any
```

Returns the cached service on an object, or creates one if none is available up the hierarchy.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppConstructTreeService.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUpOrCreate` <a name="searchUpOrCreate" id="@michanto/cdk-orchestration.AppConstructTreeService.searchUpOrCreate"></a>

```typescript
public searchUpOrCreate(scope: IConstruct): ServiceQueryResult
```

Searches towards the root for a value.

If the value is found,
cache the value on the scope (to speed up future gets) and
return the pair.  If not, call the factory to create a value and
cache it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppConstructTreeService.searchUpOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="@michanto/cdk-orchestration.AppConstructTreeService.isFactory"></a>

```typescript
import { AppConstructTreeService } from '@michanto/cdk-orchestration'

AppConstructTreeService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="@michanto/cdk-orchestration.AppConstructTreeService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="@michanto/cdk-orchestration.AppConstructTreeService.scopeOf"></a>

```typescript
import { AppConstructTreeService } from '@michanto/cdk-orchestration'

AppConstructTreeService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@michanto/cdk-orchestration.AppConstructTreeService.scopeOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="@michanto/cdk-orchestration.AppConstructTreeService.scopesOf"></a>

```typescript
import { AppConstructTreeService } from '@michanto/cdk-orchestration'

AppConstructTreeService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="@michanto/cdk-orchestration.AppConstructTreeService.scopesOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="@michanto/cdk-orchestration.AppConstructTreeService.serviceOf"></a>

```typescript
import { AppConstructTreeService } from '@michanto/cdk-orchestration'

AppConstructTreeService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@michanto/cdk-orchestration.AppConstructTreeService.serviceOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.property.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.AppConstructTreeService.property.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.AppConstructTreeService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@michanto/cdk-orchestration.AppConstructTreeService.property.treeServiceProps"></a>

```typescript
public readonly treeServiceProps: ConstructTreeServiceProps;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---


### AppToken <a name="AppToken" id="@michanto/cdk-orchestration.AppToken"></a>

Provides a way to map named tokens to their producers.

Names should be unique within the app.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.AppToken.Initializer"></a>

```typescript
import { AppToken } from '@michanto/cdk-orchestration'

new AppToken()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.AppToken.any">any</a></code> | Creates a named token. |
| <code><a href="#@michanto/cdk-orchestration.AppToken.list">list</a></code> | Creates a named token. |
| <code><a href="#@michanto/cdk-orchestration.AppToken.number">number</a></code> | Creates a named token. |
| <code><a href="#@michanto/cdk-orchestration.AppToken.resolveAny">resolveAny</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.AppToken.resolveList">resolveList</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.AppToken.resolveNumber">resolveNumber</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.AppToken.resolveString">resolveString</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.AppToken.string">string</a></code> | Creates a named token. |

---

##### `any` <a name="any" id="@michanto/cdk-orchestration.AppToken.any"></a>

```typescript
import { AppToken } from '@michanto/cdk-orchestration'

AppToken.any(scope: IConstruct, name: string, options?: LazyAnyValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppToken.any.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.AppToken.any.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.AppToken.any.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyAnyValueOptions

---

##### `list` <a name="list" id="@michanto/cdk-orchestration.AppToken.list"></a>

```typescript
import { AppToken } from '@michanto/cdk-orchestration'

AppToken.list(scope: IConstruct, name: string, options?: LazyListValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppToken.list.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.AppToken.list.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.AppToken.list.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyListValueOptions

---

##### `number` <a name="number" id="@michanto/cdk-orchestration.AppToken.number"></a>

```typescript
import { AppToken } from '@michanto/cdk-orchestration'

AppToken.number(scope: IConstruct, name: string)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppToken.number.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.AppToken.number.parameter.name"></a>

- *Type:* string

---

##### `resolveAny` <a name="resolveAny" id="@michanto/cdk-orchestration.AppToken.resolveAny"></a>

```typescript
import { AppToken } from '@michanto/cdk-orchestration'

AppToken.resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppToken.resolveAny.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.AppToken.resolveAny.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.AppToken.resolveAny.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableAnyProducer

---

##### `resolveList` <a name="resolveList" id="@michanto/cdk-orchestration.AppToken.resolveList"></a>

```typescript
import { AppToken } from '@michanto/cdk-orchestration'

AppToken.resolveList(scope: IConstruct, name: string, producer: IStableListProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppToken.resolveList.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.AppToken.resolveList.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.AppToken.resolveList.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableListProducer

---

##### `resolveNumber` <a name="resolveNumber" id="@michanto/cdk-orchestration.AppToken.resolveNumber"></a>

```typescript
import { AppToken } from '@michanto/cdk-orchestration'

AppToken.resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppToken.resolveNumber.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.AppToken.resolveNumber.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.AppToken.resolveNumber.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableNumberProducer

---

##### `resolveString` <a name="resolveString" id="@michanto/cdk-orchestration.AppToken.resolveString"></a>

```typescript
import { AppToken } from '@michanto/cdk-orchestration'

AppToken.resolveString(scope: IConstruct, name: string, producer: IStableStringProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppToken.resolveString.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.AppToken.resolveString.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.AppToken.resolveString.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableStringProducer

---

##### `string` <a name="string" id="@michanto/cdk-orchestration.AppToken.string"></a>

```typescript
import { AppToken } from '@michanto/cdk-orchestration'

AppToken.string(scope: IConstruct, name: string, options?: LazyStringValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.AppToken.string.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.AppToken.string.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.AppToken.string.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyStringValueOptions

---



### CfnElementUtilities <a name="CfnElementUtilities" id="@michanto/cdk-orchestration.CfnElementUtilities"></a>

Find L1 constructs (CfnElements and CfnResources) in the construct tree.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.CfnElementUtilities.Initializer"></a>

```typescript
import { CfnElementUtilities } from '@michanto/cdk-orchestration'

new CfnElementUtilities()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.CfnElementUtilities.cfnElementHost">cfnElementHost</a></code> | Returns the antecedent cnfElement in the tree  (if any). |
| <code><a href="#@michanto/cdk-orchestration.CfnElementUtilities.cfnElements">cfnElements</a></code> | Returns a list of all L1 construct descendents of the scope. |
| <code><a href="#@michanto/cdk-orchestration.CfnElementUtilities.cfnResources">cfnResources</a></code> | Returns a list of all CfnResource construct descendents of the scope. |
| <code><a href="#@michanto/cdk-orchestration.CfnElementUtilities.findCfnResource">findCfnResource</a></code> | Finds a single CfnResource, with an optional type and predicate. |

---

##### `cfnElementHost` <a name="cfnElementHost" id="@michanto/cdk-orchestration.CfnElementUtilities.cfnElementHost"></a>

```typescript
public cfnElementHost(scope: Construct, predicate?: ICfnElementPredicate): CfnElement
```

Returns the antecedent cnfElement in the tree  (if any).

Basially, CfnElement.of (like Stack.of).

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.CfnElementUtilities.cfnElementHost.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the search.

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@michanto/cdk-orchestration.CfnElementUtilities.cfnElementHost.parameter.predicate"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ICfnElementPredicate">ICfnElementPredicate</a>

Optional predicate.

---

##### `cfnElements` <a name="cfnElements" id="@michanto/cdk-orchestration.CfnElementUtilities.cfnElements"></a>

```typescript
public cfnElements(scope: Construct, predicate?: ICfnElementPredicate): CfnElement[]
```

Returns a list of all L1 construct descendents of the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.CfnElementUtilities.cfnElements.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the search.

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@michanto/cdk-orchestration.CfnElementUtilities.cfnElements.parameter.predicate"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ICfnElementPredicate">ICfnElementPredicate</a>

Optional predicate.

---

##### `cfnResources` <a name="cfnResources" id="@michanto/cdk-orchestration.CfnElementUtilities.cfnResources"></a>

```typescript
public cfnResources(scope: Construct, resourceType?: string, predicate?: ICfnResourcePredicate): CfnResource[]
```

Returns a list of all CfnResource construct descendents of the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.CfnElementUtilities.cfnResources.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the search.

---

###### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@michanto/cdk-orchestration.CfnElementUtilities.cfnResources.parameter.resourceType"></a>

- *Type:* string

Type of resource to return.

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@michanto/cdk-orchestration.CfnElementUtilities.cfnResources.parameter.predicate"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ICfnResourcePredicate">ICfnResourcePredicate</a>

Optional predicate.

---

##### `findCfnResource` <a name="findCfnResource" id="@michanto/cdk-orchestration.CfnElementUtilities.findCfnResource"></a>

```typescript
public findCfnResource(scope: Construct, resourceType?: string, predicate?: ICfnResourcePredicate): CfnResource
```

Finds a single CfnResource, with an optional type and predicate.

If the defaultChild is a matching CfnResource, that is returned.
- Otherwise checks for a single matching CfnResource under the scope and throws if:
  - There aren't any.
  - There is more than one.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.CfnElementUtilities.findCfnResource.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the search.

---

###### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@michanto/cdk-orchestration.CfnElementUtilities.findCfnResource.parameter.resourceType"></a>

- *Type:* string

Type of resource to return.

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@michanto/cdk-orchestration.CfnElementUtilities.findCfnResource.parameter.predicate"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ICfnResourcePredicate">ICfnResourcePredicate</a>

Optional predicate.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.CfnElementUtilities.isCfnResource">isCfnResource</a></code> | Better version of CfnResource.isCfnResource, because it first checks to see if the construct is a CfnElement, which is missing in the CfnResource.isCfnResource implementation. |

---

##### `isCfnResource` <a name="isCfnResource" id="@michanto/cdk-orchestration.CfnElementUtilities.isCfnResource"></a>

```typescript
import { CfnElementUtilities } from '@michanto/cdk-orchestration'

CfnElementUtilities.isCfnResource(x: IConstruct)
```

Better version of CfnResource.isCfnResource, because it first checks to see if the construct is a CfnElement, which is missing in the CfnResource.isCfnResource implementation.

See https://github.com/aws/aws-cdk/issues/30473 for details.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.CfnElementUtilities.isCfnResource.parameter.x"></a>

- *Type:* constructs.IConstruct

Construct to test.

---



### CfnIncludeToCdk <a name="CfnIncludeToCdk" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk"></a>

Utilities for converting resources from CfnInclude to a CDK L2-derived class.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.Initializer"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

new cloudformation_include.CfnIncludeToCdk()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.isCfnInclude">isCfnInclude</a></code> | Checks if `x` if a CfnInclude construct. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.removeIncluded">removeIncluded</a></code> | Removes a construct from CfnInclude with the given logicalId. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.replaceIncluded">replaceIncluded</a></code> | Replaces an L1 construct in a CfnInclude with an L1 or L2 CDK construct of your choosing. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.setLogicalId">setLogicalId</a></code> | Sets the logical ID of the resource to the Node ID of the construct. |
| <code><a href="#@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.tryFindIncluded">tryFindIncluded</a></code> | Finds a construct from CfnIncludes in scope with the given logicalId. |

---

##### `isCfnInclude` <a name="isCfnInclude" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.isCfnInclude"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

cloudformation_include.CfnIncludeToCdk.isCfnInclude(x?: IConstruct)
```

Checks if `x` if a CfnInclude construct.

###### `x`<sup>Optional</sup> <a name="x" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.isCfnInclude.parameter.x"></a>

- *Type:* constructs.IConstruct

Construct to test.

---

##### `removeIncluded` <a name="removeIncluded" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.removeIncluded"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

cloudformation_include.CfnIncludeToCdk.removeIncluded(logicalId: string, scope: Construct)
```

Removes a construct from CfnInclude with the given logicalId.

Finds the CfnInclude in the stack of the given scope.

###### `logicalId`<sup>Required</sup> <a name="logicalId" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.removeIncluded.parameter.logicalId"></a>

- *Type:* string

---

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.removeIncluded.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `replaceIncluded` <a name="replaceIncluded" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.replaceIncluded"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

cloudformation_include.CfnIncludeToCdk.replaceIncluded(logicalId: string, replacementConstruct: IConstruct)
```

Replaces an L1 construct in a CfnInclude with an L1 or L2 CDK construct of your choosing.

Removes the original imported L1 for the construct from the CfnInclude.
- Sets the logical resource ID of the replacement to the correct value so it acts as a drop-in replacement.

If the L1 cannot be found, this function assumes the related CfnInclude is converted
and was removed from the stack.

FUTURE: Ensure the new construct is of the same resource type as the old one?  Is that useful?

###### `logicalId`<sup>Required</sup> <a name="logicalId" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.replaceIncluded.parameter.logicalId"></a>

- *Type:* string

Logical ID of the construct we are replacing.

---

###### `replacementConstruct`<sup>Required</sup> <a name="replacementConstruct" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.replaceIncluded.parameter.replacementConstruct"></a>

- *Type:* constructs.IConstruct

Construct that should be replacing the included construct.

---

##### `setLogicalId` <a name="setLogicalId" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.setLogicalId"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

cloudformation_include.CfnIncludeToCdk.setLogicalId(construct: IConstruct, id?: string)
```

Sets the logical ID of the resource to the Node ID of the construct.

This should be used when you want the resource ID to be the same as the Node ID.
Such as when you are replicating an existing hand-crafted template.

Note:  This function works with L1 or L2 constructs, or any case where there is one L1 in the
sub-tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.setLogicalId.parameter.construct"></a>

- *Type:* constructs.IConstruct

The resource construct.

---

###### `id`<sup>Optional</sup> <a name="id" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.setLogicalId.parameter.id"></a>

- *Type:* string

New ID.

Defaults to `construct.node.id`.

---

##### `tryFindIncluded` <a name="tryFindIncluded" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.tryFindIncluded"></a>

```typescript
import { cloudformation_include } from '@michanto/cdk-orchestration'

cloudformation_include.CfnIncludeToCdk.tryFindIncluded(logicalId: string, scope: Construct)
```

Finds a construct from CfnIncludes in scope with the given logicalId.

###### `logicalId`<sup>Required</sup> <a name="logicalId" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.tryFindIncluded.parameter.logicalId"></a>

- *Type:* string

---

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.cloudformation_include.CfnIncludeToCdk.tryFindIncluded.parameter.scope"></a>

- *Type:* constructs.Construct

---



### ConstructHost <a name="ConstructHost" id="@michanto/cdk-orchestration.ConstructHost"></a>

Helper class to make it easier for a construct to "host" constructs of a specific type, as defined by Construct RTTI.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.ConstructHost.Initializer"></a>

```typescript
import { ConstructHost } from '@michanto/cdk-orchestration'

new ConstructHost(props: ConstructHostProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructHost.Initializer.parameter.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructHostProps">ConstructHostProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.ConstructHost.Initializer.parameter.props"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructHostProps">ConstructHostProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructHost.getHostedConstructs">getHostedConstructs</a></code> | Returns constructs that match the hosted type that are under scope. |

---

##### `getHostedConstructs` <a name="getHostedConstructs" id="@michanto/cdk-orchestration.ConstructHost.getHostedConstructs"></a>

```typescript
public getHostedConstructs(scope: IConstruct): IConstruct[]
```

Returns constructs that match the hosted type that are under scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructHost.getHostedConstructs.parameter.scope"></a>

- *Type:* constructs.IConstruct

Scope for the search.

Not required to be the host.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructHost.property.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructHostProps">ConstructHostProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.ConstructHost.property.props"></a>

```typescript
public readonly props: ConstructHostProps;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructHostProps">ConstructHostProps</a>

---


### ConstructRunTimeTypeInfo <a name="ConstructRunTimeTypeInfo" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo"></a>

This class should be used for symbol-based Construct RTTI.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.Initializer"></a>

```typescript
import { ConstructRunTimeTypeInfo } from '@michanto/cdk-orchestration'

new ConstructRunTimeTypeInfo(props: ConstructServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.Initializer.parameter.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.Initializer.parameter.props"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.addRtti">addRtti</a></code> | Sets the RTTI of the construct.  Should be called from a Construct constructor. |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.hasRtti">hasRtti</a></code> | Returns true if the construct has this RTTI set on it. |

---

##### `get` <a name="get" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.setFactory.parameter.factory"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `addRtti` <a name="addRtti" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.addRtti"></a>

```typescript
public addRtti(scope: IConstruct): any
```

Sets the RTTI of the construct.  Should be called from a Construct constructor.

Obviously a construct can have many of these, so be thoughtful.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.addRtti.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `hasRtti` <a name="hasRtti" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.hasRtti"></a>

```typescript
public hasRtti(scope: IConstruct): boolean
```

Returns true if the construct has this RTTI set on it.

Used to implement ConstructXXX:isConstructXXX functions.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.hasRtti.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.isFactory"></a>

```typescript
import { ConstructRunTimeTypeInfo } from '@michanto/cdk-orchestration'

ConstructRunTimeTypeInfo.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.scopeOf"></a>

```typescript
import { ConstructRunTimeTypeInfo } from '@michanto/cdk-orchestration'

ConstructRunTimeTypeInfo.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.scopeOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.scopesOf"></a>

```typescript
import { ConstructRunTimeTypeInfo } from '@michanto/cdk-orchestration'

ConstructRunTimeTypeInfo.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.scopesOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.serviceOf"></a>

```typescript
import { ConstructRunTimeTypeInfo } from '@michanto/cdk-orchestration'

ConstructRunTimeTypeInfo.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.serviceOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.property.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.ConstructRunTimeTypeInfo.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---


### ConstructService <a name="ConstructService" id="@michanto/cdk-orchestration.ConstructService"></a>

Defines a service (symbol-keyed property) that can be stored on a construct.

Symbol-keyed properties are rarely used directly by end users.  Usage is normally
through construct methods, such as Stack.of and Stack.isStack in the CDK.

This class and it's derivatives make it easier to use symbol-keyed properites in the CDK.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.ConstructService.Initializer"></a>

```typescript
import { ConstructService } from '@michanto/cdk-orchestration'

new ConstructService(props: ConstructServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.Initializer.parameter.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.ConstructService.Initializer.parameter.props"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |

---

##### `get` <a name="get" id="@michanto/cdk-orchestration.ConstructService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="@michanto/cdk-orchestration.ConstructService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="@michanto/cdk-orchestration.ConstructService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.ConstructService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="@michanto/cdk-orchestration.ConstructService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="@michanto/cdk-orchestration.ConstructService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@michanto/cdk-orchestration.ConstructService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.ConstructService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="@michanto/cdk-orchestration.ConstructService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="@michanto/cdk-orchestration.ConstructService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="@michanto/cdk-orchestration.ConstructService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="@michanto/cdk-orchestration.ConstructService.setFactory.parameter.factory"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="@michanto/cdk-orchestration.ConstructService.isFactory"></a>

```typescript
import { ConstructService } from '@michanto/cdk-orchestration'

ConstructService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="@michanto/cdk-orchestration.ConstructService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="@michanto/cdk-orchestration.ConstructService.scopeOf"></a>

```typescript
import { ConstructService } from '@michanto/cdk-orchestration'

ConstructService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@michanto/cdk-orchestration.ConstructService.scopeOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="@michanto/cdk-orchestration.ConstructService.scopesOf"></a>

```typescript
import { ConstructService } from '@michanto/cdk-orchestration'

ConstructService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="@michanto/cdk-orchestration.ConstructService.scopesOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="@michanto/cdk-orchestration.ConstructService.serviceOf"></a>

```typescript
import { ConstructService } from '@michanto/cdk-orchestration'

ConstructService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@michanto/cdk-orchestration.ConstructService.serviceOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructService.property.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.ConstructService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---


### ConstructTreeSearch <a name="ConstructTreeSearch" id="@michanto/cdk-orchestration.ConstructTreeSearch"></a>

Searches the construct tree based on predicate and stopConditions.

Three searches are supported: {@link searchSelf}, {@link searchDown}
and {@link searchUp}.

QueryResult should either be, or contain (as a property), the construct itself,
so you know which construct to associate with the query result.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.ConstructTreeSearch.Initializer"></a>

```typescript
import { ConstructTreeSearch } from '@michanto/cdk-orchestration'

new ConstructTreeSearch(predicate: IConstructPredicate)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeSearch.Initializer.parameter.predicate">predicate</a></code> | <code><a href="#@michanto/cdk-orchestration.IConstructPredicate">IConstructPredicate</a></code> | *No description.* |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@michanto/cdk-orchestration.ConstructTreeSearch.Initializer.parameter.predicate"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructPredicate">IConstructPredicate</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeSearch.searchDown">searchDown</a></code> | Returns array of results based on predicate, searching the sub-tree starting at scope. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeSearch.searchSelf">searchSelf</a></code> | Returns the scope or undefined, depending on a predicate match. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeSearch.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty. |

---

##### `searchDown` <a name="searchDown" id="@michanto/cdk-orchestration.ConstructTreeSearch.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition, into?: IConstruct[]): IConstruct[]
```

Returns array of results based on predicate, searching the sub-tree starting at scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeSearch.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

Start for search.

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.ConstructTreeSearch.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

End for search (such as sub stack).

---

###### `into`<sup>Optional</sup> <a name="into" id="@michanto/cdk-orchestration.ConstructTreeSearch.searchDown.parameter.into"></a>

- *Type:* constructs.IConstruct[]

Array of results.

Same as return value.

---

##### `searchSelf` <a name="searchSelf" id="@michanto/cdk-orchestration.ConstructTreeSearch.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): IConstruct
```

Returns the scope or undefined, depending on a predicate match.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeSearch.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@michanto/cdk-orchestration.ConstructTreeSearch.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): IConstruct
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty.

Uses stopCondition to decide where to stop the searchUp, defaults to root.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeSearch.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.ConstructTreeSearch.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeSearch.for">for</a></code> | Helper for finding constructs using ConstructTreeSearch with XXX.isXXX functions (such as Stack.isStack and CfnElement.isCfnElement).  Returns a construct predicate that itself returns only the construct, as opposed to ConstructService which returns both the construct and the service. |

---

##### `for` <a name="for" id="@michanto/cdk-orchestration.ConstructTreeSearch.for"></a>

```typescript
import { ConstructTreeSearch } from '@michanto/cdk-orchestration'

ConstructTreeSearch.for(test: IConstructTest)
```

Helper for finding constructs using ConstructTreeSearch with XXX.isXXX functions (such as Stack.isStack and CfnElement.isCfnElement).  Returns a construct predicate that itself returns only the construct, as opposed to ConstructService which returns both the construct and the service.

###### `test`<sup>Required</sup> <a name="test" id="@michanto/cdk-orchestration.ConstructTreeSearch.for.parameter.test"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructTest">IConstructTest</a>

Test to use when finding constructs.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeSearch.property.predicate">predicate</a></code> | <code><a href="#@michanto/cdk-orchestration.IConstructPredicate">IConstructPredicate</a></code> | *No description.* |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@michanto/cdk-orchestration.ConstructTreeSearch.property.predicate"></a>

```typescript
public readonly predicate: IConstructPredicate;
```

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructPredicate">IConstructPredicate</a>

---


### ConstructTreeService <a name="ConstructTreeService" id="@michanto/cdk-orchestration.ConstructTreeService"></a>

An IOC service stored in the construct tree with heirarchical lookup.

If the service is not found on a consturct, it is looked for up the tree and then is cached on
the construct.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.ConstructTreeService.Initializer"></a>

```typescript
import { ConstructTreeService } from '@michanto/cdk-orchestration'

new ConstructTreeService(treeServiceProps: ConstructTreeServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.Initializer.parameter.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@michanto/cdk-orchestration.ConstructTreeService.Initializer.parameter.treeServiceProps"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.of">of</a></code> | Returns the cached service on an object, or creates one if none is available up the hierarchy. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.searchUpOrCreate">searchUpOrCreate</a></code> | Searches towards the root for a value. |

---

##### `get` <a name="get" id="@michanto/cdk-orchestration.ConstructTreeService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="@michanto/cdk-orchestration.ConstructTreeService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="@michanto/cdk-orchestration.ConstructTreeService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.ConstructTreeService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="@michanto/cdk-orchestration.ConstructTreeService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="@michanto/cdk-orchestration.ConstructTreeService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@michanto/cdk-orchestration.ConstructTreeService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.ConstructTreeService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="@michanto/cdk-orchestration.ConstructTreeService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="@michanto/cdk-orchestration.ConstructTreeService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="@michanto/cdk-orchestration.ConstructTreeService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="@michanto/cdk-orchestration.ConstructTreeService.setFactory.parameter.factory"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `of` <a name="of" id="@michanto/cdk-orchestration.ConstructTreeService.of"></a>

```typescript
public of(scope: IConstruct): any
```

Returns the cached service on an object, or creates one if none is available up the hierarchy.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeService.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUpOrCreate` <a name="searchUpOrCreate" id="@michanto/cdk-orchestration.ConstructTreeService.searchUpOrCreate"></a>

```typescript
public searchUpOrCreate(scope: IConstruct): ServiceQueryResult
```

Searches towards the root for a value.

If the value is found,
cache the value on the scope (to speed up future gets) and
return the pair.  If not, call the factory to create a value and
cache it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ConstructTreeService.searchUpOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="@michanto/cdk-orchestration.ConstructTreeService.isFactory"></a>

```typescript
import { ConstructTreeService } from '@michanto/cdk-orchestration'

ConstructTreeService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="@michanto/cdk-orchestration.ConstructTreeService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="@michanto/cdk-orchestration.ConstructTreeService.scopeOf"></a>

```typescript
import { ConstructTreeService } from '@michanto/cdk-orchestration'

ConstructTreeService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@michanto/cdk-orchestration.ConstructTreeService.scopeOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="@michanto/cdk-orchestration.ConstructTreeService.scopesOf"></a>

```typescript
import { ConstructTreeService } from '@michanto/cdk-orchestration'

ConstructTreeService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="@michanto/cdk-orchestration.ConstructTreeService.scopesOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="@michanto/cdk-orchestration.ConstructTreeService.serviceOf"></a>

```typescript
import { ConstructTreeService } from '@michanto/cdk-orchestration'

ConstructTreeService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@michanto/cdk-orchestration.ConstructTreeService.serviceOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.property.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.ConstructTreeService.property.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.ConstructTreeService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@michanto/cdk-orchestration.ConstructTreeService.property.treeServiceProps"></a>

```typescript
public readonly treeServiceProps: ConstructTreeServiceProps;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---


### CustomResourceHandler <a name="CustomResourceHandler" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler"></a>

Class to create AwsCustomResource based handlers.

Copies the functionality of AwsCustomResource and
adds the following features:
- Default values for attributes.
- ResponseBufferField for deserlializing streamed return values.

Most of this code was copied from the CDK here:

https://github.com/aws/aws-cdk/blob/main/packages/%40aws-cdk/custom-resource-handlers/lib/custom-resources/aws-custom-resource-handler/aws-sdk-v3-handler.ts

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.Initializer"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

new custom_resources.CustomResourceHandler()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.decodeProperties">decodeProperties</a></code> | Decodes the encoded properties passed to the resource. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.filter">filter</a></code> | Filters the flattened result using the outputPaths. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.flatten">flatten</a></code> | Flattens the response into attributes. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.getCall">getCall</a></code> | Gets the AwsSdkCall from the properties for the given request type. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.getPhysicalResourceId">getPhysicalResourceId</a></code> | Returns the PhysicalResourceId from the event. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.getResponse">getResponse</a></code> | Makes the call encapsulated by an AwsApiCall. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.handle">handle</a></code> | Custom resource handler for LambdaCustomResource. |

---

##### `decodeProperties` <a name="decodeProperties" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.decodeProperties"></a>

```typescript
public decodeProperties(event: any): any
```

Decodes the encoded properties passed to the resource.

###### `event`<sup>Required</sup> <a name="event" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.decodeProperties.parameter.event"></a>

- *Type:* any

---

##### `filter` <a name="filter" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.filter"></a>

```typescript
public filter(call: any, flattened: any): {[ key: string ]: string}
```

Filters the flattened result using the outputPaths.

###### `call`<sup>Required</sup> <a name="call" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.filter.parameter.call"></a>

- *Type:* any

---

###### `flattened`<sup>Required</sup> <a name="flattened" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.filter.parameter.flattened"></a>

- *Type:* any

---

##### `flatten` <a name="flatten" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.flatten"></a>

```typescript
public flatten(response: any): {[ key: string ]: any}
```

Flattens the response into attributes.

###### `response`<sup>Required</sup> <a name="response" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.flatten.parameter.response"></a>

- *Type:* any

---

##### `getCall` <a name="getCall" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.getCall"></a>

```typescript
public getCall(event: any): any
```

Gets the AwsSdkCall from the properties for the given request type.

###### `event`<sup>Required</sup> <a name="event" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.getCall.parameter.event"></a>

- *Type:* any

---

##### `getPhysicalResourceId` <a name="getPhysicalResourceId" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.getPhysicalResourceId"></a>

```typescript
public getPhysicalResourceId(event: any): string
```

Returns the PhysicalResourceId from the event.

###### `event`<sup>Required</sup> <a name="event" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.getPhysicalResourceId.parameter.event"></a>

- *Type:* any

---

##### `getResponse` <a name="getResponse" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.getResponse"></a>

```typescript
public getResponse(call: any): {[ key: string ]: any}
```

Makes the call encapsulated by an AwsApiCall.

###### `call`<sup>Required</sup> <a name="call" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.getResponse.parameter.call"></a>

- *Type:* any

An AwsApiCall to execute.

---

##### `handle` <a name="handle" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.handle"></a>

```typescript
public handle(event: any, context: any): any
```

Custom resource handler for LambdaCustomResource.

###### `event`<sup>Required</sup> <a name="event" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.handle.parameter.event"></a>

- *Type:* any

---

###### `context`<sup>Required</sup> <a name="context" id="@michanto/cdk-orchestration.custom_resources.CustomResourceHandler.handle.parameter.context"></a>

- *Type:* any

---




### CustomResourceUtilities <a name="CustomResourceUtilities" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities"></a>

Find CustomResource L1s (CfnResources) in the construct tree.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.Initializer"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

new custom_resources.CustomResourceUtilities()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.customResources">customResources</a></code> | Returns a list of all L1 custom resources under the scope. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.findCustomResource">findCustomResource</a></code> | Returns the CfnResource that produces the custom resource. |

---

##### `customResources` <a name="customResources" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.customResources"></a>

```typescript
public customResources(scope: Construct, resourceType?: string, predicate?: ICfnResourcePredicate): CfnResource[]
```

Returns a list of all L1 custom resources under the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.customResources.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the search.

---

###### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.customResources.parameter.resourceType"></a>

- *Type:* string

Must be of the form 'Custom::XXX' or 'AWS::CloudFormation::CustomResource'.

Optional.

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.customResources.parameter.predicate"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ICfnResourcePredicate">ICfnResourcePredicate</a>

Optional predicate.

---

##### `findCustomResource` <a name="findCustomResource" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.findCustomResource"></a>

```typescript
public findCustomResource(scope: Construct, resourceType?: string, predicate?: ICfnResourcePredicate): CfnResource
```

Returns the CfnResource that produces the custom resource.

This function throws
if there are none (or more than one).

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.findCustomResource.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the search.

---

###### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.findCustomResource.parameter.resourceType"></a>

- *Type:* string

Must be of the form 'Custom::XXX' or 'AWS::CloudFormation::CustomResource'.

Optional.

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.findCustomResource.parameter.predicate"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ICfnResourcePredicate">ICfnResourcePredicate</a>

Optional predicate.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.isCustomResource">isCustomResource</a></code> | Checks if `elt` is a L1 CustomResource construct (CfnResource). |

---

##### `isCustomResource` <a name="isCustomResource" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.isCustomResource"></a>

```typescript
import { custom_resources } from '@michanto/cdk-orchestration'

custom_resources.CustomResourceUtilities.isCustomResource(elt: Construct)
```

Checks if `elt` is a L1 CustomResource construct (CfnResource).

Test is that elt is a CfnResource with a resourceType of the form
`Custom::XXX` or `AWS::CloudFormation::CustomResource`.

###### `elt`<sup>Required</sup> <a name="elt" id="@michanto/cdk-orchestration.custom_resources.CustomResourceUtilities.isCustomResource.parameter.elt"></a>

- *Type:* constructs.Construct

Construct to test.

---



### Log <a name="Log" id="@michanto/cdk-orchestration.Log"></a>

Scoped logger.

Logs according to the Logger set on the given scope.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.Log.Initializer"></a>

```typescript
import { Log } from '@michanto/cdk-orchestration'

new Log(scope: Construct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.Log.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.Log.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.Log.debug">debug</a></code> | {@link Logger} will log this via {@link console.debug}. |
| <code><a href="#@michanto/cdk-orchestration.Log.error">error</a></code> | {@link Logger} will log this via {@link console.error}. |
| <code><a href="#@michanto/cdk-orchestration.Log.info">info</a></code> | {@link Logger} will log this via {@link console.info}. |
| <code><a href="#@michanto/cdk-orchestration.Log.warn">warn</a></code> | {@link Logger} will log this via {@link console.warn}. |

---

##### `debug` <a name="debug" id="@michanto/cdk-orchestration.Log.debug"></a>

```typescript
public debug(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.debug}.

###### `msg`<sup>Required</sup> <a name="msg" id="@michanto/cdk-orchestration.Log.debug.parameter.msg"></a>

- *Type:* string | <a href="#@michanto/cdk-orchestration.IStringProvider">IStringProvider</a>

---

##### `error` <a name="error" id="@michanto/cdk-orchestration.Log.error"></a>

```typescript
public error(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.error}.

###### `msg`<sup>Required</sup> <a name="msg" id="@michanto/cdk-orchestration.Log.error.parameter.msg"></a>

- *Type:* string | <a href="#@michanto/cdk-orchestration.IStringProvider">IStringProvider</a>

---

##### `info` <a name="info" id="@michanto/cdk-orchestration.Log.info"></a>

```typescript
public info(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.info}.

###### `msg`<sup>Required</sup> <a name="msg" id="@michanto/cdk-orchestration.Log.info.parameter.msg"></a>

- *Type:* string | <a href="#@michanto/cdk-orchestration.IStringProvider">IStringProvider</a>

---

##### `warn` <a name="warn" id="@michanto/cdk-orchestration.Log.warn"></a>

```typescript
public warn(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.warn}.

###### `msg`<sup>Required</sup> <a name="msg" id="@michanto/cdk-orchestration.Log.warn.parameter.msg"></a>

- *Type:* string | <a href="#@michanto/cdk-orchestration.IStringProvider">IStringProvider</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.Log.of">of</a></code> | *No description.* |

---

##### `of` <a name="of" id="@michanto/cdk-orchestration.Log.of"></a>

```typescript
import { Log } from '@michanto/cdk-orchestration'

Log.of(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.Log.of.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.Log.property.logger">logger</a></code> | <code><a href="#@michanto/cdk-orchestration.ILogger">ILogger</a></code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.Log.property.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |

---

##### `logger`<sup>Required</sup> <a name="logger" id="@michanto/cdk-orchestration.Log.property.logger"></a>

```typescript
public readonly logger: ILogger;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ILogger">ILogger</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.Log.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* constructs.Construct

---


### Logger <a name="Logger" id="@michanto/cdk-orchestration.Logger"></a>

- *Implements:* <a href="#@michanto/cdk-orchestration.ILogger">ILogger</a>

Scoped node console logger.

Provides scoped logging to a construct.  This means the Logger applies to the construct
it was added to, and all descendent constructs in the tree.  Can be overridden by adding
a Logger to a descendent construct, or replacing the Logger on a construct.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.Logger.Initializer"></a>

```typescript
import { Logger } from '@michanto/cdk-orchestration'

new Logger(props?: LoggerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.Logger.Initializer.parameter.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.LoggerProps">LoggerProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@michanto/cdk-orchestration.Logger.Initializer.parameter.props"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.LoggerProps">LoggerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.Logger.levelColor">levelColor</a></code> | Returns the AnsiColor associated with a logLevel. |
| <code><a href="#@michanto/cdk-orchestration.Logger.levelName">levelName</a></code> | Returns the name of the logLevel (if known)/. |
| <code><a href="#@michanto/cdk-orchestration.Logger.log">log</a></code> | Logs a line associated with a scope to the console. |

---

##### `levelColor` <a name="levelColor" id="@michanto/cdk-orchestration.Logger.levelColor"></a>

```typescript
public levelColor(logLevel: number): string
```

Returns the AnsiColor associated with a logLevel.

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@michanto/cdk-orchestration.Logger.levelColor.parameter.logLevel"></a>

- *Type:* number

The log level.

---

##### `levelName` <a name="levelName" id="@michanto/cdk-orchestration.Logger.levelName"></a>

```typescript
public levelName(logLevel: number): string
```

Returns the name of the logLevel (if known)/.

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@michanto/cdk-orchestration.Logger.levelName.parameter.logLevel"></a>

- *Type:* number

The log level.

---

##### `log` <a name="log" id="@michanto/cdk-orchestration.Logger.log"></a>

```typescript
public log(scope: Construct, logLevel: number, message: string | IStringProvider): void
```

Logs a line associated with a scope to the console.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.Logger.log.parameter.scope"></a>

- *Type:* constructs.Construct

Scope associated with the log line.

---

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@michanto/cdk-orchestration.Logger.log.parameter.logLevel"></a>

- *Type:* number

The log level.

---

###### `message`<sup>Required</sup> <a name="message" id="@michanto/cdk-orchestration.Logger.log.parameter.message"></a>

- *Type:* string | <a href="#@michanto/cdk-orchestration.IStringProvider">IStringProvider</a>

Message or string provider to log.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.Logger.of">of</a></code> | Return the Logger associated with the scope. |
| <code><a href="#@michanto/cdk-orchestration.Logger.set">set</a></code> | Sets a Logger on a construct. |

---

##### `of` <a name="of" id="@michanto/cdk-orchestration.Logger.of"></a>

```typescript
import { Logger } from '@michanto/cdk-orchestration'

Logger.of(scope: Construct)
```

Return the Logger associated with the scope.

Searches up the tree if there is none.
Default is NoOpLogger (no logging).

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.Logger.of.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `set` <a name="set" id="@michanto/cdk-orchestration.Logger.set"></a>

```typescript
import { Logger } from '@michanto/cdk-orchestration'

Logger.set(scope: Construct, logger: ILogger)
```

Sets a Logger on a construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.Logger.set.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logger`<sup>Required</sup> <a name="logger" id="@michanto/cdk-orchestration.Logger.set.parameter.logger"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ILogger">ILogger</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.Logger.property.logLevel">logLevel</a></code> | <code>number</code> | logLevel for this logger. |
| <code><a href="#@michanto/cdk-orchestration.Logger.property.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.LoggerProps">LoggerProps</a></code> | *No description.* |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@michanto/cdk-orchestration.Logger.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

logLevel for this logger.

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.Logger.property.props"></a>

```typescript
public readonly props: LoggerProps;
```

- *Type:* <a href="#@michanto/cdk-orchestration.LoggerProps">LoggerProps</a>

---


### LoggingAspect <a name="LoggingAspect" id="@michanto/cdk-orchestration.LoggingAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

Adds a LogLevel environment variable to each Function based on the logLevel parameter (if provided) or the construct log level.

logLevel parameter defaults to `Logger.of(node)?.logLevel`.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.LoggingAspect.Initializer"></a>

```typescript
import { LoggingAspect } from '@michanto/cdk-orchestration'

new LoggingAspect(logLevel?: number)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.LoggingAspect.Initializer.parameter.logLevel">logLevel</a></code> | <code>number</code> | The log level. |

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@michanto/cdk-orchestration.LoggingAspect.Initializer.parameter.logLevel"></a>

- *Type:* number

The log level.

Default is `Logger.of(node)?.logLevel`.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.LoggingAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@michanto/cdk-orchestration.LoggingAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.LoggingAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.LoggingAspect.property.logLevel">logLevel</a></code> | <code>number</code> | The log level. |

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@michanto/cdk-orchestration.LoggingAspect.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

The log level.

Default is `Logger.of(node)?.logLevel`.

---


### NoOpLogger <a name="NoOpLogger" id="@michanto/cdk-orchestration.NoOpLogger"></a>

Logger that does not log.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.NoOpLogger.Initializer"></a>

```typescript
import { NoOpLogger } from '@michanto/cdk-orchestration'

new NoOpLogger()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.NoOpLogger.levelColor">levelColor</a></code> | Returns the AnsiColor associated with a logLevel. |
| <code><a href="#@michanto/cdk-orchestration.NoOpLogger.levelName">levelName</a></code> | Returns the name of the logLevel (if known)/. |
| <code><a href="#@michanto/cdk-orchestration.NoOpLogger.log">log</a></code> | Logs a line associated with a scope to the console. |

---

##### `levelColor` <a name="levelColor" id="@michanto/cdk-orchestration.NoOpLogger.levelColor"></a>

```typescript
public levelColor(logLevel: number): string
```

Returns the AnsiColor associated with a logLevel.

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@michanto/cdk-orchestration.NoOpLogger.levelColor.parameter.logLevel"></a>

- *Type:* number

The log level.

---

##### `levelName` <a name="levelName" id="@michanto/cdk-orchestration.NoOpLogger.levelName"></a>

```typescript
public levelName(logLevel: number): string
```

Returns the name of the logLevel (if known)/.

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@michanto/cdk-orchestration.NoOpLogger.levelName.parameter.logLevel"></a>

- *Type:* number

The log level.

---

##### `log` <a name="log" id="@michanto/cdk-orchestration.NoOpLogger.log"></a>

```typescript
public log(scope: Construct, logLevel: number, message: string | IStringProvider): void
```

Logs a line associated with a scope to the console.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.NoOpLogger.log.parameter.scope"></a>

- *Type:* constructs.Construct

Scope associated with the log line.

---

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@michanto/cdk-orchestration.NoOpLogger.log.parameter.logLevel"></a>

- *Type:* number

The log level.

---

###### `message`<sup>Required</sup> <a name="message" id="@michanto/cdk-orchestration.NoOpLogger.log.parameter.message"></a>

- *Type:* string | <a href="#@michanto/cdk-orchestration.IStringProvider">IStringProvider</a>

Message or string provider to log.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.NoOpLogger.of">of</a></code> | Return the Logger associated with the scope. |
| <code><a href="#@michanto/cdk-orchestration.NoOpLogger.set">set</a></code> | Sets a Logger on a construct. |

---

##### `of` <a name="of" id="@michanto/cdk-orchestration.NoOpLogger.of"></a>

```typescript
import { NoOpLogger } from '@michanto/cdk-orchestration'

NoOpLogger.of(scope: Construct)
```

Return the Logger associated with the scope.

Searches up the tree if there is none.
Default is NoOpLogger (no logging).

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.NoOpLogger.of.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `set` <a name="set" id="@michanto/cdk-orchestration.NoOpLogger.set"></a>

```typescript
import { NoOpLogger } from '@michanto/cdk-orchestration'

NoOpLogger.set(scope: Construct, logger: ILogger)
```

Sets a Logger on a construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.NoOpLogger.set.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logger`<sup>Required</sup> <a name="logger" id="@michanto/cdk-orchestration.NoOpLogger.set.parameter.logger"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ILogger">ILogger</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.NoOpLogger.property.logLevel">logLevel</a></code> | <code>number</code> | logLevel for this logger. |
| <code><a href="#@michanto/cdk-orchestration.NoOpLogger.property.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.LoggerProps">LoggerProps</a></code> | *No description.* |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@michanto/cdk-orchestration.NoOpLogger.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

logLevel for this logger.

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.NoOpLogger.property.props"></a>

```typescript
public readonly props: LoggerProps;
```

- *Type:* <a href="#@michanto/cdk-orchestration.LoggerProps">LoggerProps</a>

---


### PostResolveToken <a name="PostResolveToken" id="@michanto/cdk-orchestration.PostResolveToken"></a>

- *Implements:* aws-cdk-lib.IResolvable, aws-cdk-lib.IPostProcessor

Copied out of the CDK.

Because not public.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.PostResolveToken.Initializer"></a>

```typescript
import { PostResolveToken } from '@michanto/cdk-orchestration'

new PostResolveToken(value: any, processor: IProcessor)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.PostResolveToken.Initializer.parameter.value">value</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.PostResolveToken.Initializer.parameter.processor">processor</a></code> | <code><a href="#@michanto/cdk-orchestration.IProcessor">IProcessor</a></code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="@michanto/cdk-orchestration.PostResolveToken.Initializer.parameter.value"></a>

- *Type:* any

---

##### `processor`<sup>Required</sup> <a name="processor" id="@michanto/cdk-orchestration.PostResolveToken.Initializer.parameter.processor"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IProcessor">IProcessor</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.PostResolveToken.postProcess">postProcess</a></code> | Process the completely resolved value, after full recursion/resolution has happened. |
| <code><a href="#@michanto/cdk-orchestration.PostResolveToken.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@michanto/cdk-orchestration.PostResolveToken.toJSON">toJSON</a></code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.PostResolveToken.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `postProcess` <a name="postProcess" id="@michanto/cdk-orchestration.PostResolveToken.postProcess"></a>

```typescript
public postProcess(o: any, context: IResolveContext): any
```

Process the completely resolved value, after full recursion/resolution has happened.

###### `o`<sup>Required</sup> <a name="o" id="@michanto/cdk-orchestration.PostResolveToken.postProcess.parameter.o"></a>

- *Type:* any

---

###### `context`<sup>Required</sup> <a name="context" id="@michanto/cdk-orchestration.PostResolveToken.postProcess.parameter.context"></a>

- *Type:* aws-cdk-lib.IResolveContext

---

##### `resolve` <a name="resolve" id="@michanto/cdk-orchestration.PostResolveToken.resolve"></a>

```typescript
public resolve(context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `context`<sup>Required</sup> <a name="context" id="@michanto/cdk-orchestration.PostResolveToken.resolve.parameter.context"></a>

- *Type:* aws-cdk-lib.IResolveContext

---

##### `toJSON` <a name="toJSON" id="@michanto/cdk-orchestration.PostResolveToken.toJSON"></a>

```typescript
public toJSON(): any
```

##### `toString` <a name="toString" id="@michanto/cdk-orchestration.PostResolveToken.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.PostResolveToken.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@michanto/cdk-orchestration.PostResolveToken.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

This may return an array with a single informational element indicating how
to get this property populated, if it was skipped for performance reasons.

---


### ServiceInspectorAspect <a name="ServiceInspectorAspect" id="@michanto/cdk-orchestration.ServiceInspectorAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

Writes the names and types (or path in the case of Construct-valued properties) of all symbol properties of a Construct to tree.json.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.ServiceInspectorAspect.Initializer"></a>

```typescript
import { ServiceInspectorAspect } from '@michanto/cdk-orchestration'

new ServiceInspectorAspect()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ServiceInspectorAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@michanto/cdk-orchestration.ServiceInspectorAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.ServiceInspectorAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### Singleton <a name="Singleton" id="@michanto/cdk-orchestration.Singleton"></a>

Manages singletons in the stack.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.Singleton.create">create</a></code> | Creates or returns a singleton object. |
| <code><a href="#@michanto/cdk-orchestration.Singleton.isSingleton">isSingleton</a></code> | Checks if `x` if a Singleton construct. |
| <code><a href="#@michanto/cdk-orchestration.Singleton.mark">mark</a></code> | Marks an existing construct as a singleton. |

---

##### `create` <a name="create" id="@michanto/cdk-orchestration.Singleton.create"></a>

```typescript
import { Singleton } from '@michanto/cdk-orchestration'

Singleton.create(scope: Construct, id: string, factory: IConstructFactory)
```

Creates or returns a singleton object.

Throws if the existing object was not created or marked by this class.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.Singleton.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@michanto/cdk-orchestration.Singleton.create.parameter.id"></a>

- *Type:* string

---

###### `factory`<sup>Required</sup> <a name="factory" id="@michanto/cdk-orchestration.Singleton.create.parameter.factory"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructFactory">IConstructFactory</a>

---

##### `isSingleton` <a name="isSingleton" id="@michanto/cdk-orchestration.Singleton.isSingleton"></a>

```typescript
import { Singleton } from '@michanto/cdk-orchestration'

Singleton.isSingleton(x: IConstruct)
```

Checks if `x` if a Singleton construct.

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.Singleton.isSingleton.parameter.x"></a>

- *Type:* constructs.IConstruct

Construct to test.

---

##### `mark` <a name="mark" id="@michanto/cdk-orchestration.Singleton.mark"></a>

```typescript
import { Singleton } from '@michanto/cdk-orchestration'

Singleton.mark(scope: IConstruct)
```

Marks an existing construct as a singleton.

This allows Singletons created outside this class to be used
with this class.
Throws if the construct is not a direct child of a stack.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.Singleton.mark.parameter.scope"></a>

- *Type:* constructs.IConstruct

---



### StackConstructTreeService <a name="StackConstructTreeService" id="@michanto/cdk-orchestration.StackConstructTreeService"></a>

A stack-scoped service that is found by looking up the tree.

Found services are cached on the querying scope to speed up subsequent lookups.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.StackConstructTreeService.Initializer"></a>

```typescript
import { StackConstructTreeService } from '@michanto/cdk-orchestration'

new StackConstructTreeService(treeServiceProps: ConstructTreeServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.Initializer.parameter.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@michanto/cdk-orchestration.StackConstructTreeService.Initializer.parameter.treeServiceProps"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.of">of</a></code> | Return the stack service for the construct. |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.searchUpOrCreate">searchUpOrCreate</a></code> | Searches towards the root for a value. |

---

##### `get` <a name="get" id="@michanto/cdk-orchestration.StackConstructTreeService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackConstructTreeService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="@michanto/cdk-orchestration.StackConstructTreeService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackConstructTreeService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="@michanto/cdk-orchestration.StackConstructTreeService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackConstructTreeService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.StackConstructTreeService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="@michanto/cdk-orchestration.StackConstructTreeService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackConstructTreeService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="@michanto/cdk-orchestration.StackConstructTreeService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackConstructTreeService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@michanto/cdk-orchestration.StackConstructTreeService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackConstructTreeService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@michanto/cdk-orchestration.StackConstructTreeService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="@michanto/cdk-orchestration.StackConstructTreeService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackConstructTreeService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="@michanto/cdk-orchestration.StackConstructTreeService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="@michanto/cdk-orchestration.StackConstructTreeService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackConstructTreeService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="@michanto/cdk-orchestration.StackConstructTreeService.setFactory.parameter.factory"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `of` <a name="of" id="@michanto/cdk-orchestration.StackConstructTreeService.of"></a>

```typescript
public of(construct: IConstruct): any
```

Return the stack service for the construct.

###### `construct`<sup>Required</sup> <a name="construct" id="@michanto/cdk-orchestration.StackConstructTreeService.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `searchUpOrCreate` <a name="searchUpOrCreate" id="@michanto/cdk-orchestration.StackConstructTreeService.searchUpOrCreate"></a>

```typescript
public searchUpOrCreate(scope: IConstruct): ServiceQueryResult
```

Searches towards the root for a value.

If the value is found,
cache the value on the scope (to speed up future gets) and
return the pair.  If not, call the factory to create a value and
cache it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackConstructTreeService.searchUpOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="@michanto/cdk-orchestration.StackConstructTreeService.isFactory"></a>

```typescript
import { StackConstructTreeService } from '@michanto/cdk-orchestration'

StackConstructTreeService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="@michanto/cdk-orchestration.StackConstructTreeService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="@michanto/cdk-orchestration.StackConstructTreeService.scopeOf"></a>

```typescript
import { StackConstructTreeService } from '@michanto/cdk-orchestration'

StackConstructTreeService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@michanto/cdk-orchestration.StackConstructTreeService.scopeOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="@michanto/cdk-orchestration.StackConstructTreeService.scopesOf"></a>

```typescript
import { StackConstructTreeService } from '@michanto/cdk-orchestration'

StackConstructTreeService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="@michanto/cdk-orchestration.StackConstructTreeService.scopesOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="@michanto/cdk-orchestration.StackConstructTreeService.serviceOf"></a>

```typescript
import { StackConstructTreeService } from '@michanto/cdk-orchestration'

StackConstructTreeService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@michanto/cdk-orchestration.StackConstructTreeService.serviceOf.parameter.found"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.property.props">props</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |
| <code><a href="#@michanto/cdk-orchestration.StackConstructTreeService.property.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@michanto/cdk-orchestration.StackConstructTreeService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@michanto/cdk-orchestration.StackConstructTreeService.property.treeServiceProps"></a>

```typescript
public readonly treeServiceProps: ConstructTreeServiceProps;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---


### StackProvenanceAspect <a name="StackProvenanceAspect" id="@michanto/cdk-orchestration.StackProvenanceAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

Adds StackProvenance to all stacks in scope.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.StackProvenanceAspect.Initializer"></a>

```typescript
import { StackProvenanceAspect } from '@michanto/cdk-orchestration'

new StackProvenanceAspect()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.StackProvenanceAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@michanto/cdk-orchestration.StackProvenanceAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.StackProvenanceAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### StackToken <a name="StackToken" id="@michanto/cdk-orchestration.StackToken"></a>

Provides a way to map named tokens to their producers.

Names should be unique within a stack.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.StackToken.Initializer"></a>

```typescript
import { StackToken } from '@michanto/cdk-orchestration'

new StackToken()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.StackToken.any">any</a></code> | Creates a named token. |
| <code><a href="#@michanto/cdk-orchestration.StackToken.list">list</a></code> | Creates a named token. |
| <code><a href="#@michanto/cdk-orchestration.StackToken.number">number</a></code> | Creates a named token. |
| <code><a href="#@michanto/cdk-orchestration.StackToken.resolveAny">resolveAny</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.StackToken.resolveList">resolveList</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.StackToken.resolveNumber">resolveNumber</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.StackToken.resolveString">resolveString</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.StackToken.string">string</a></code> | Creates a named token. |

---

##### `any` <a name="any" id="@michanto/cdk-orchestration.StackToken.any"></a>

```typescript
import { StackToken } from '@michanto/cdk-orchestration'

StackToken.any(scope: IConstruct, name: string, options?: LazyAnyValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackToken.any.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.StackToken.any.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.StackToken.any.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyAnyValueOptions

---

##### `list` <a name="list" id="@michanto/cdk-orchestration.StackToken.list"></a>

```typescript
import { StackToken } from '@michanto/cdk-orchestration'

StackToken.list(scope: IConstruct, name: string, options?: LazyListValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackToken.list.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.StackToken.list.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.StackToken.list.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyListValueOptions

---

##### `number` <a name="number" id="@michanto/cdk-orchestration.StackToken.number"></a>

```typescript
import { StackToken } from '@michanto/cdk-orchestration'

StackToken.number(scope: IConstruct, name: string)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackToken.number.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.StackToken.number.parameter.name"></a>

- *Type:* string

---

##### `resolveAny` <a name="resolveAny" id="@michanto/cdk-orchestration.StackToken.resolveAny"></a>

```typescript
import { StackToken } from '@michanto/cdk-orchestration'

StackToken.resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackToken.resolveAny.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.StackToken.resolveAny.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.StackToken.resolveAny.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableAnyProducer

---

##### `resolveList` <a name="resolveList" id="@michanto/cdk-orchestration.StackToken.resolveList"></a>

```typescript
import { StackToken } from '@michanto/cdk-orchestration'

StackToken.resolveList(scope: IConstruct, name: string, producer: IStableListProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackToken.resolveList.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.StackToken.resolveList.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.StackToken.resolveList.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableListProducer

---

##### `resolveNumber` <a name="resolveNumber" id="@michanto/cdk-orchestration.StackToken.resolveNumber"></a>

```typescript
import { StackToken } from '@michanto/cdk-orchestration'

StackToken.resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackToken.resolveNumber.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.StackToken.resolveNumber.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.StackToken.resolveNumber.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableNumberProducer

---

##### `resolveString` <a name="resolveString" id="@michanto/cdk-orchestration.StackToken.resolveString"></a>

```typescript
import { StackToken } from '@michanto/cdk-orchestration'

StackToken.resolveString(scope: IConstruct, name: string, producer: IStableStringProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackToken.resolveString.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.StackToken.resolveString.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.StackToken.resolveString.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableStringProducer

---

##### `string` <a name="string" id="@michanto/cdk-orchestration.StackToken.string"></a>

```typescript
import { StackToken } from '@michanto/cdk-orchestration'

StackToken.string(scope: IConstruct, name: string, options?: LazyStringValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackToken.string.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.StackToken.string.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.StackToken.string.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyStringValueOptions

---



### StackUtilities <a name="StackUtilities" id="@michanto/cdk-orchestration.StackUtilities"></a>

Find stacks in the construct tree.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.StackUtilities.Initializer"></a>

```typescript
import { StackUtilities } from '@michanto/cdk-orchestration'

new StackUtilities()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.StackUtilities.stackHost">stackHost</a></code> | Stack.of, but does not throw. |
| <code><a href="#@michanto/cdk-orchestration.StackUtilities.stacks">stacks</a></code> | Returns a list of all Stack construct descendents of the scope. |

---

##### `stackHost` <a name="stackHost" id="@michanto/cdk-orchestration.StackUtilities.stackHost"></a>

```typescript
public stackHost(scope: Construct, predicate?: IStackPredicate): Stack
```

Stack.of, but does not throw.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackUtilities.stackHost.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the search.

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@michanto/cdk-orchestration.StackUtilities.stackHost.parameter.predicate"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStackPredicate">IStackPredicate</a>

Optional predicate.

---

##### `stacks` <a name="stacks" id="@michanto/cdk-orchestration.StackUtilities.stacks"></a>

```typescript
public stacks(scope: Construct, predicate?: IStackPredicate): Stack[]
```

Returns a list of all Stack construct descendents of the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.StackUtilities.stacks.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the search.

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@michanto/cdk-orchestration.StackUtilities.stacks.parameter.predicate"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.IStackPredicate">IStackPredicate</a>

Optional predicate.

---




### StepFunctionTaskStepConstants <a name="StepFunctionTaskStepConstants" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepConstants"></a>

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepConstants.Initializer"></a>

```typescript
import { orchestration } from '@michanto/cdk-orchestration'

new orchestration.StepFunctionTaskStepConstants()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepConstants.property.QUERY_INTERVAL">QUERY_INTERVAL</a></code> | <code>aws-cdk-lib.Duration</code> | Only used by StepFunctionTask. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepConstants.property.SUCCEED_AFTER_MS">SUCCEED_AFTER_MS</a></code> | <code>aws-cdk-lib.Duration</code> | Only used by StepFunctionTask. |
| <code><a href="#@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepConstants.property.TOTAL_TIMEOUT">TOTAL_TIMEOUT</a></code> | <code>aws-cdk-lib.Duration</code> | Only used by StepFunctionTask. |

---

##### `QUERY_INTERVAL`<sup>Required</sup> <a name="QUERY_INTERVAL" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepConstants.property.QUERY_INTERVAL"></a>

```typescript
public readonly QUERY_INTERVAL: Duration;
```

- *Type:* aws-cdk-lib.Duration

Only used by StepFunctionTask.

The execution will run for at most one hour, and query every 30 seconds.

---

##### `SUCCEED_AFTER_MS`<sup>Required</sup> <a name="SUCCEED_AFTER_MS" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepConstants.property.SUCCEED_AFTER_MS"></a>

```typescript
public readonly SUCCEED_AFTER_MS: Duration;
```

- *Type:* aws-cdk-lib.Duration

Only used by StepFunctionTask.

This is how long the resource should monitor the step function.
So it ends up being 59 minutes, after which the resource will
succeed and presumably hand off to the next StepFunctionTaskStep, which
will continue monitoring the step function.

---

##### `TOTAL_TIMEOUT`<sup>Required</sup> <a name="TOTAL_TIMEOUT" id="@michanto/cdk-orchestration.orchestration.StepFunctionTaskStepConstants.property.TOTAL_TIMEOUT"></a>

```typescript
public readonly TOTAL_TIMEOUT: Duration;
```

- *Type:* aws-cdk-lib.Duration

Only used by StepFunctionTask.

Timeout for a single step is 1 hour.

---

### TokenService <a name="TokenService" id="@michanto/cdk-orchestration.TokenService"></a>

Service for tokens scoped to a construct.

Allows the user to cleanly separate token usage and resolution.
Users should use AppTokens or StackTokens instead of directly using this class.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.TokenService.Initializer"></a>

```typescript
import { TokenService } from '@michanto/cdk-orchestration'

new TokenService(service: ConstructTreeService)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.TokenService.Initializer.parameter.service">service</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructTreeService">ConstructTreeService</a></code> | *No description.* |

---

##### `service`<sup>Required</sup> <a name="service" id="@michanto/cdk-orchestration.TokenService.Initializer.parameter.service"></a>

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructTreeService">ConstructTreeService</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.TokenService.any">any</a></code> | Creates a named token. |
| <code><a href="#@michanto/cdk-orchestration.TokenService.list">list</a></code> | Creates a named token. |
| <code><a href="#@michanto/cdk-orchestration.TokenService.number">number</a></code> | Creates a named token. |
| <code><a href="#@michanto/cdk-orchestration.TokenService.resolveAny">resolveAny</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.TokenService.resolveList">resolveList</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.TokenService.resolveNumber">resolveNumber</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.TokenService.resolveString">resolveString</a></code> | Registers a resolver for the named token. |
| <code><a href="#@michanto/cdk-orchestration.TokenService.string">string</a></code> | Creates a named token. |

---

##### `any` <a name="any" id="@michanto/cdk-orchestration.TokenService.any"></a>

```typescript
public any(scope: IConstruct, name: string, options?: LazyAnyValueOptions): IResolvable
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.TokenService.any.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.TokenService.any.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.TokenService.any.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyAnyValueOptions

---

##### `list` <a name="list" id="@michanto/cdk-orchestration.TokenService.list"></a>

```typescript
public list(scope: IConstruct, name: string, options?: LazyListValueOptions): string[]
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.TokenService.list.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.TokenService.list.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.TokenService.list.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyListValueOptions

---

##### `number` <a name="number" id="@michanto/cdk-orchestration.TokenService.number"></a>

```typescript
public number(scope: IConstruct, name: string): number
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.TokenService.number.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.TokenService.number.parameter.name"></a>

- *Type:* string

---

##### `resolveAny` <a name="resolveAny" id="@michanto/cdk-orchestration.TokenService.resolveAny"></a>

```typescript
public resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.TokenService.resolveAny.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.TokenService.resolveAny.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.TokenService.resolveAny.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableAnyProducer

---

##### `resolveList` <a name="resolveList" id="@michanto/cdk-orchestration.TokenService.resolveList"></a>

```typescript
public resolveList(scope: IConstruct, name: string, producer: IStableListProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.TokenService.resolveList.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.TokenService.resolveList.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.TokenService.resolveList.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableListProducer

---

##### `resolveNumber` <a name="resolveNumber" id="@michanto/cdk-orchestration.TokenService.resolveNumber"></a>

```typescript
public resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.TokenService.resolveNumber.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.TokenService.resolveNumber.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.TokenService.resolveNumber.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableNumberProducer

---

##### `resolveString` <a name="resolveString" id="@michanto/cdk-orchestration.TokenService.resolveString"></a>

```typescript
public resolveString(scope: IConstruct, name: string, producer: IStableStringProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.TokenService.resolveString.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.TokenService.resolveString.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@michanto/cdk-orchestration.TokenService.resolveString.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableStringProducer

---

##### `string` <a name="string" id="@michanto/cdk-orchestration.TokenService.string"></a>

```typescript
public string(scope: IConstruct, name: string, options?: LazyStringValueOptions): string
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.TokenService.string.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@michanto/cdk-orchestration.TokenService.string.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@michanto/cdk-orchestration.TokenService.string.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyStringValueOptions

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.TokenService.property.service">service</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructTreeService">ConstructTreeService</a></code> | *No description.* |

---

##### `service`<sup>Required</sup> <a name="service" id="@michanto/cdk-orchestration.TokenService.property.service"></a>

```typescript
public readonly service: ConstructTreeService;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructTreeService">ConstructTreeService</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.TokenService.property.TOKEN_SERVICE_FACTORY">TOKEN_SERVICE_FACTORY</a></code> | <code><a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a></code> | *No description.* |

---

##### `TOKEN_SERVICE_FACTORY`<sup>Required</sup> <a name="TOKEN_SERVICE_FACTORY" id="@michanto/cdk-orchestration.TokenService.property.TOKEN_SERVICE_FACTORY"></a>

```typescript
public readonly TOKEN_SERVICE_FACTORY: IConstructServiceFactory;
```

- *Type:* <a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

### TransformHost <a name="TransformHost" id="@michanto/cdk-orchestration.transforms.TransformHost"></a>

Static helpers for Transform Hosts.

TransformHosts will be either a Stack, a CfnElement, or a CfnTransformHost.

#### Initializers <a name="Initializers" id="@michanto/cdk-orchestration.transforms.TransformHost.Initializer"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

new transforms.TransformHost()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformHost.ensureHosted">ensureHosted</a></code> | Ensures that a Transform is hosted by modifying the ancestor CfnElement or Stack (if necessary) so they can host transforms. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformHost.hook">hook</a></code> | Turns a Stack or CfnElement into a transform host. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformHost.isTransformHost">isTransformHost</a></code> | Returns true for any Stack, CfnElement, or CfnTransformHost constructs. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformHost.mark">mark</a></code> | Marks a construct as a TransformHost, isolating the transforms under it from the Stack. |
| <code><a href="#@michanto/cdk-orchestration.transforms.TransformHost.of">of</a></code> | Returns the transform host, which may be either a Stack, a CfnElement, or a CfnTransformHost. |

---

##### `ensureHosted` <a name="ensureHosted" id="@michanto/cdk-orchestration.transforms.TransformHost.ensureHosted"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.TransformHost.ensureHosted(scope: Construct)
```

Ensures that a Transform is hosted by modifying the ancestor CfnElement or Stack (if necessary) so they can host transforms.

Users should call TransformHost.of instead of this framework function.

Ensures that Tranforms under a CfnElement apply to the CfnElement, and Transforms under
a Stack apply to the Stack.

Not being able to do this may not be fatal, so we don't throw.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.TransformHost.ensureHosted.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `hook` <a name="hook" id="@michanto/cdk-orchestration.transforms.TransformHost.hook"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.TransformHost.hook(construct: IConstruct)
```

Turns a Stack or CfnElement into a transform host.

Called the ensureHosted, which itself is called from
the CfnTransform and TransformBase constructors to ensure that the CfnTransform
is hosted either by a CfnElement or a Stack.

Users should call TransformHost.of.

###### `construct`<sup>Required</sup> <a name="construct" id="@michanto/cdk-orchestration.transforms.TransformHost.hook.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isTransformHost` <a name="isTransformHost" id="@michanto/cdk-orchestration.transforms.TransformHost.isTransformHost"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.TransformHost.isTransformHost(scope: Construct)
```

Returns true for any Stack, CfnElement, or CfnTransformHost constructs.

Stacks and CfnElements start out not being transform
hosts, but become hosts when a TransformHost method
is called (such as when a Transform is applied to them).

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.TransformHost.isTransformHost.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `mark` <a name="mark" id="@michanto/cdk-orchestration.transforms.TransformHost.mark"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.TransformHost.mark(scope: Construct)
```

Marks a construct as a TransformHost, isolating the transforms under it from the Stack.

Host decides when to apply the descendent transforms.

Users likely will not call this framework function.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.TransformHost.mark.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `of` <a name="of" id="@michanto/cdk-orchestration.transforms.TransformHost.of"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.TransformHost.of(scope: Construct)
```

Returns the transform host, which may be either a Stack, a CfnElement, or a CfnTransformHost.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.TransformHost.of.parameter.scope"></a>

- *Type:* constructs.Construct

---



### Transforms <a name="Transforms" id="@michanto/cdk-orchestration.transforms.Transforms"></a>

This helper class can extract ICfnTransforms from a construct tree so they can be applied to a template.

Stacks, CfnElements and subclasses of CfnTransformHost use this class to apply descendent transforms.
See the Transforms section of the README.md file for details.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transforms.apply">apply</a></code> | Applies the transforms on a scope to a template. |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transforms.get">get</a></code> | Returns all transforms attached to the scope as descendents. |

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.Transforms.apply"></a>

```typescript
public apply(template: any): any
```

Applies the transforms on a scope to a template.

Throws when a Transform fails to return a template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.Transforms.apply.parameter.template"></a>

- *Type:* any

Template to apply transforms to.

---

##### `get` <a name="get" id="@michanto/cdk-orchestration.transforms.Transforms.get"></a>

```typescript
public get(): ICfnTransform[]
```

Returns all transforms attached to the scope as descendents.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transforms.of">of</a></code> | Returns a transforms object for the scope. |

---

##### `of` <a name="of" id="@michanto/cdk-orchestration.transforms.Transforms.of"></a>

```typescript
import { transforms } from '@michanto/cdk-orchestration'

transforms.Transforms.of(scope: IConstruct)
```

Returns a transforms object for the scope.

This object has access to all transforms attached to the scope
as descendents.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Transforms.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

Scope for Transforms.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.Transforms.property.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.transforms.Transforms.property.scope"></a>

```typescript
public readonly scope: IConstruct;
```

- *Type:* constructs.IConstruct

---


### TreeInspectable <a name="TreeInspectable" id="@michanto/cdk-orchestration.TreeInspectable"></a>

- *Implements:* aws-cdk-lib.IInspectable

Makes any construct IInspectable so it can add metadata to the tree.json file without creating new constructs.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.TreeInspectable.addAttribute">addAttribute</a></code> | Adds attribute to bag. |
| <code><a href="#@michanto/cdk-orchestration.TreeInspectable.inspect">inspect</a></code> | Called by the CDK to write attribute to tree.json file. |

---

##### `addAttribute` <a name="addAttribute" id="@michanto/cdk-orchestration.TreeInspectable.addAttribute"></a>

```typescript
public addAttribute(key: string, value: any): void
```

Adds attribute to bag.

Keys should be added by convention to prevent conflicts
i.e. L1 constructs will contain attributes with keys prefixed with aws:cdk:cloudformation

###### `key`<sup>Required</sup> <a name="key" id="@michanto/cdk-orchestration.TreeInspectable.addAttribute.parameter.key"></a>

- *Type:* string

key for metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="@michanto/cdk-orchestration.TreeInspectable.addAttribute.parameter.value"></a>

- *Type:* any

value of metadata.

---

##### `inspect` <a name="inspect" id="@michanto/cdk-orchestration.TreeInspectable.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Called by the CDK to write attribute to tree.json file.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@michanto/cdk-orchestration.TreeInspectable.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.TreeInspectable.isInspectable">isInspectable</a></code> | True if a construct supports IInspectable interface. |
| <code><a href="#@michanto/cdk-orchestration.TreeInspectable.of">of</a></code> | Returns or creates a TreeInspectable for the given construct. |

---

##### `isInspectable` <a name="isInspectable" id="@michanto/cdk-orchestration.TreeInspectable.isInspectable"></a>

```typescript
import { TreeInspectable } from '@michanto/cdk-orchestration'

TreeInspectable.isInspectable(inspectable: any)
```

True if a construct supports IInspectable interface.

###### `inspectable`<sup>Required</sup> <a name="inspectable" id="@michanto/cdk-orchestration.TreeInspectable.isInspectable.parameter.inspectable"></a>

- *Type:* any

---

##### `of` <a name="of" id="@michanto/cdk-orchestration.TreeInspectable.of"></a>

```typescript
import { TreeInspectable } from '@michanto/cdk-orchestration'

TreeInspectable.of(scope: IConstruct)
```

Returns or creates a TreeInspectable for the given construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.TreeInspectable.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.TreeInspectable.property.attributes">attributes</a></code> | <code>{[ key: string ]: any}</code> | Represents the bag of attributes as key-value pairs. |
| <code><a href="#@michanto/cdk-orchestration.TreeInspectable.property.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@michanto/cdk-orchestration.TreeInspectable.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Represents the bag of attributes as key-value pairs.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.TreeInspectable.property.scope"></a>

```typescript
public readonly scope: IConstruct;
```

- *Type:* constructs.IConstruct

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.TreeInspectable.property.TREE_INSPECTABLE_SERVICE">TREE_INSPECTABLE_SERVICE</a></code> | <code><a href="#@michanto/cdk-orchestration.ConstructService">ConstructService</a></code> | *No description.* |

---

##### `TREE_INSPECTABLE_SERVICE`<sup>Required</sup> <a name="TREE_INSPECTABLE_SERVICE" id="@michanto/cdk-orchestration.TreeInspectable.property.TREE_INSPECTABLE_SERVICE"></a>

```typescript
public readonly TREE_INSPECTABLE_SERVICE: ConstructService;
```

- *Type:* <a href="#@michanto/cdk-orchestration.ConstructService">ConstructService</a>

---

## Protocols <a name="Protocols" id="Protocols"></a>

### ICfnElementPredicate <a name="ICfnElementPredicate" id="@michanto/cdk-orchestration.ICfnElementPredicate"></a>

- *Implemented By:* <a href="#@michanto/cdk-orchestration.ICfnElementPredicate">ICfnElementPredicate</a>

Typed predicate for use with CfnElementUtilities.



### ICfnResourcePredicate <a name="ICfnResourcePredicate" id="@michanto/cdk-orchestration.ICfnResourcePredicate"></a>

- *Implemented By:* <a href="#@michanto/cdk-orchestration.ICfnResourcePredicate">ICfnResourcePredicate</a>

Typed predicate for use with CfnElementUtilities and CustomResourceUtilities.



### ICfnTransform <a name="ICfnTransform" id="@michanto/cdk-orchestration.transforms.ICfnTransform"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* @michanto/cdk-orchestration.transforms.CfnTransform, @michanto/cdk-orchestration.transforms.ICfnTransform

The base interface for CDK Transforms.

A CDK Transform is a construct that can take
input, such as CloudFormation, and transform it, most likely into slightly different
CloudFormation.

CDK Transforms have many use-cases.  See the Transforms section of the README.md file.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.ICfnTransform.apply">apply</a></code> | Modifies the template. |

---

##### `apply` <a name="apply" id="@michanto/cdk-orchestration.transforms.ICfnTransform.apply"></a>

```typescript
public apply(template: any): any
```

Modifies the template.

###### `template`<sup>Required</sup> <a name="template" id="@michanto/cdk-orchestration.transforms.ICfnTransform.apply.parameter.template"></a>

- *Type:* any

The template to transform.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.ICfnTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.transforms.ICfnTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

### IConstructFactory <a name="IConstructFactory" id="@michanto/cdk-orchestration.IConstructFactory"></a>

- *Implemented By:* <a href="#@michanto/cdk-orchestration.IConstructFactory">IConstructFactory</a>

Interface for creating a construct.



### IConstructPredicate <a name="IConstructPredicate" id="@michanto/cdk-orchestration.IConstructPredicate"></a>

- *Implemented By:* <a href="#@michanto/cdk-orchestration.IConstructPredicate">IConstructPredicate</a>

Generalized little-l lambda for a construct.



### IConstructServiceFactory <a name="IConstructServiceFactory" id="@michanto/cdk-orchestration.IConstructServiceFactory"></a>

- *Implemented By:* <a href="#@michanto/cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

Factory for a construct service.



### IConstructTest <a name="IConstructTest" id="@michanto/cdk-orchestration.IConstructTest"></a>

- *Implemented By:* <a href="#@michanto/cdk-orchestration.IConstructTest">IConstructTest</a>

Enables using CDK XXX.isXXX methods with ConstructTreeSearch and IConstructPredicate.

Example Usage:
`let stackSearch = ConstructTreeSearch.for(Stack.isStack)`



### ILogger <a name="ILogger" id="@michanto/cdk-orchestration.ILogger"></a>

- *Implemented By:* <a href="#@michanto/cdk-orchestration.Logger">Logger</a>, <a href="#@michanto/cdk-orchestration.NoOpLogger">NoOpLogger</a>, <a href="#@michanto/cdk-orchestration.ILogger">ILogger</a>

Interface for scoped logging backend.

See {@link Logger}.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ILogger.log">log</a></code> | *No description.* |

---

##### `log` <a name="log" id="@michanto/cdk-orchestration.ILogger.log"></a>

```typescript
public log(scope: Construct, logLevel: number, message: string | IStringProvider): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="@michanto/cdk-orchestration.ILogger.log.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the log line.

---

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@michanto/cdk-orchestration.ILogger.log.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

###### `message`<sup>Required</sup> <a name="message" id="@michanto/cdk-orchestration.ILogger.log.parameter.message"></a>

- *Type:* string | <a href="#@michanto/cdk-orchestration.IStringProvider">IStringProvider</a>

The message.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.ILogger.property.logLevel">logLevel</a></code> | <code>number</code> | Returns the current log level. |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@michanto/cdk-orchestration.ILogger.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

Returns the current log level.

---

### IProcessor <a name="IProcessor" id="@michanto/cdk-orchestration.IProcessor"></a>

- *Implemented By:* <a href="#@michanto/cdk-orchestration.IProcessor">IProcessor</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.IProcessor.process">process</a></code> | *No description.* |

---

##### `process` <a name="process" id="@michanto/cdk-orchestration.IProcessor.process"></a>

```typescript
public process(x: any, context: IResolveContext): any
```

###### `x`<sup>Required</sup> <a name="x" id="@michanto/cdk-orchestration.IProcessor.process.parameter.x"></a>

- *Type:* any

---

###### `context`<sup>Required</sup> <a name="context" id="@michanto/cdk-orchestration.IProcessor.process.parameter.context"></a>

- *Type:* aws-cdk-lib.IResolveContext

---


### IStackPredicate <a name="IStackPredicate" id="@michanto/cdk-orchestration.IStackPredicate"></a>

- *Implemented By:* <a href="#@michanto/cdk-orchestration.IStackPredicate">IStackPredicate</a>

Typed predicate for use with StackUtilities.



### IStopCondition <a name="IStopCondition" id="@michanto/cdk-orchestration.IStopCondition"></a>

- *Implemented By:* <a href="#@michanto/cdk-orchestration.IStopCondition">IStopCondition</a>

Defines where to stop when navigating the construct tree.

If not provided, we stop either at the top or bottom of the tree (depending
on search direction).



### IStringProvider <a name="IStringProvider" id="@michanto/cdk-orchestration.IStringProvider"></a>

- *Implemented By:* <a href="#@michanto/cdk-orchestration.IStringProvider">IStringProvider</a>

Delayed log-line construction.



### ITask <a name="ITask" id="@michanto/cdk-orchestration.custom_resources.ITask"></a>

- *Extends:* aws-cdk-lib.triggers.ITrigger

- *Implemented By:* @michanto/cdk-orchestration.custom_resources.LambdaCustomResource, @michanto/cdk-orchestration.custom_resources.Task, @michanto/cdk-orchestration.orchestration.LambdaTask, @michanto/cdk-orchestration.orchestration.S3FileMetadata, @michanto/cdk-orchestration.orchestration.S3FileReader, @michanto/cdk-orchestration.orchestration.S3FileResource, @michanto/cdk-orchestration.orchestration.StepFunctionTask, @michanto/cdk-orchestration.orchestration.StepFunctionTaskStep, @michanto/cdk-orchestration.custom_resources.ITask

Task interface.  Allows easy access to both CustomResource and ITrigger functionality.

Tasks are like triggers, but they expose the return value as attributes that
can be used to create other resources.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.ITask.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.ITask.getAtt">getAtt</a></code> | Returns the value of an attribute of the custom resource of an arbitrary type. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.ITask.getAttString">getAttString</a></code> | Returns the value of an attribute of the custom resource of type string. |

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@michanto/cdk-orchestration.custom_resources.ITask.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Sets the deletion policy of the resource based on the removal policy specified.

###### `policy`<sup>Required</sup> <a name="policy" id="@michanto/cdk-orchestration.custom_resources.ITask.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

Removal policy.

---

##### `getAtt` <a name="getAtt" id="@michanto/cdk-orchestration.custom_resources.ITask.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns the value of an attribute of the custom resource of an arbitrary type.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.custom_resources.ITask.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

##### `getAttString` <a name="getAttString" id="@michanto/cdk-orchestration.custom_resources.ITask.getAttString"></a>

```typescript
public getAttString(attributeName: string): string
```

Returns the value of an attribute of the custom resource of type string.

Attributes are returned from the custom resource provider through the
`Data` map where the key is the attribute name.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@michanto/cdk-orchestration.custom_resources.ITask.getAttString.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.ITask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@michanto/cdk-orchestration.custom_resources.ITask.property.ref">ref</a></code> | <code>string</code> | The physical name of this custom resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="@michanto/cdk-orchestration.custom_resources.ITask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ref`<sup>Required</sup> <a name="ref" id="@michanto/cdk-orchestration.custom_resources.ITask.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The physical name of this custom resource.

---

## Enums <a name="Enums" id="Enums"></a>

### ImportOrders <a name="ImportOrders" id="@michanto/cdk-orchestration.transforms.ImportOrders"></a>

Defines where Transforms of a given order are added to a Transform host.

ImportOrders are the names of the Order constructs under the
TransformHost.  See {@link BaseImporter }.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.transforms.ImportOrders.PRE_READER">PRE_READER</a></code> | Transforms that run before the Reader. |
| <code><a href="#@michanto/cdk-orchestration.transforms.ImportOrders.READER">READER</a></code> | Transform that reads a file into a string. |
| <code><a href="#@michanto/cdk-orchestration.transforms.ImportOrders.STRING_TRANSFORMS">STRING_TRANSFORMS</a></code> | Transforms that run against the sting representation of a template. |
| <code><a href="#@michanto/cdk-orchestration.transforms.ImportOrders.PARSER">PARSER</a></code> | Parses the string representation into (for example) JSON. |
| <code><a href="#@michanto/cdk-orchestration.transforms.ImportOrders.TRANSFORMS">TRANSFORMS</a></code> | Transform structured data, such as JSON, YAML, TOML. |
| <code><a href="#@michanto/cdk-orchestration.transforms.ImportOrders.WRITER">WRITER</a></code> | Writes structured data to a file. |

---

##### `PRE_READER` <a name="PRE_READER" id="@michanto/cdk-orchestration.transforms.ImportOrders.PRE_READER"></a>

Transforms that run before the Reader.

---


##### `READER` <a name="READER" id="@michanto/cdk-orchestration.transforms.ImportOrders.READER"></a>

Transform that reads a file into a string.

---


##### `STRING_TRANSFORMS` <a name="STRING_TRANSFORMS" id="@michanto/cdk-orchestration.transforms.ImportOrders.STRING_TRANSFORMS"></a>

Transforms that run against the sting representation of a template.

---


##### `PARSER` <a name="PARSER" id="@michanto/cdk-orchestration.transforms.ImportOrders.PARSER"></a>

Parses the string representation into (for example) JSON.

---


##### `TRANSFORMS` <a name="TRANSFORMS" id="@michanto/cdk-orchestration.transforms.ImportOrders.TRANSFORMS"></a>

Transform structured data, such as JSON, YAML, TOML.

---


##### `WRITER` <a name="WRITER" id="@michanto/cdk-orchestration.transforms.ImportOrders.WRITER"></a>

Writes structured data to a file.

Necessary for CfnInclude scenarios.

---


### LogLevel <a name="LogLevel" id="@michanto/cdk-orchestration.LogLevel"></a>

The Node logging levels (from the console object).

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.LogLevel.OFF">OFF</a></code> | No logging. |
| <code><a href="#@michanto/cdk-orchestration.LogLevel.ERROR">ERROR</a></code> | Log Errors. |
| <code><a href="#@michanto/cdk-orchestration.LogLevel.WARNING">WARNING</a></code> | Log Warnings and Errors. |
| <code><a href="#@michanto/cdk-orchestration.LogLevel.INFO">INFO</a></code> | Log Info, Warnings and Errors. |
| <code><a href="#@michanto/cdk-orchestration.LogLevel.DEBUG">DEBUG</a></code> | Debug logging - verbose. |
| <code><a href="#@michanto/cdk-orchestration.LogLevel.ALL">ALL</a></code> | Log everything - most verbose. |

---

##### `OFF` <a name="OFF" id="@michanto/cdk-orchestration.LogLevel.OFF"></a>

No logging.

---


##### `ERROR` <a name="ERROR" id="@michanto/cdk-orchestration.LogLevel.ERROR"></a>

Log Errors.

---


##### `WARNING` <a name="WARNING" id="@michanto/cdk-orchestration.LogLevel.WARNING"></a>

Log Warnings and Errors.

---


##### `INFO` <a name="INFO" id="@michanto/cdk-orchestration.LogLevel.INFO"></a>

Log Info, Warnings and Errors.

---


##### `DEBUG` <a name="DEBUG" id="@michanto/cdk-orchestration.LogLevel.DEBUG"></a>

Debug logging - verbose.

---


##### `ALL` <a name="ALL" id="@michanto/cdk-orchestration.LogLevel.ALL"></a>

Log everything - most verbose.

---


### MinifyEngine <a name="MinifyEngine" id="@michanto/cdk-orchestration.aws_lambda_nodejs.MinifyEngine"></a>

Minification engine enum.

The default minification engine is SIMPLE.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.MinifyEngine.NONE">NONE</a></code> | No minification. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.MinifyEngine.ES_BUILD">ES_BUILD</a></code> | Uses esbuild for minification. |
| <code><a href="#@michanto/cdk-orchestration.aws_lambda_nodejs.MinifyEngine.SIMPLE">SIMPLE</a></code> | Removes comments and trims leading/trailing spaces from lines. |

---

##### `NONE` <a name="NONE" id="@michanto/cdk-orchestration.aws_lambda_nodejs.MinifyEngine.NONE"></a>

No minification.

---


##### `ES_BUILD` <a name="ES_BUILD" id="@michanto/cdk-orchestration.aws_lambda_nodejs.MinifyEngine.ES_BUILD"></a>

Uses esbuild for minification.

Add the following to your package.json file:
```
"esbuild": "^0.18.6"
```

---


##### `SIMPLE` <a name="SIMPLE" id="@michanto/cdk-orchestration.aws_lambda_nodejs.MinifyEngine.SIMPLE"></a>

Removes comments and trims leading/trailing spaces from lines.

The advantages of SIMPLE minification are readability and simplicity - your line breaks
and variable names are preserved, and you do not need
to take a dependency on esbuild.

Unlike ES_BUILD, SIMPLE minification does NOT use a parser.  It uses a RegEx to
remove comments.  There are limits to this technique, and they are fully described
in this gist file: https://gist.github.com/DesignByOnyx/05c2241affc9dc498379e0d819c4d756.

In short:
 - Comments in a string, such as:
```
let baz = "There's no way to tell that this // is not a single line comment";
```
 - glob patterns (\/**\/)
 - Dangling property values:
```
bar:// regex cannot distinguish "bar://" from "http://"
  "the value for bar is dangling down here - this is valid"
```

If your code falls under one of these categories, modify the code or switch to ES_BUILD
minification, which handles these cases correctly.

---

