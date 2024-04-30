# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfnTransform <a name="CfnTransform" id="cdk-orchestration.transforms.CfnTransform"></a>

- *Implements:* cdk-orchestration.transforms.ICfnTransform

This is the base class for CDK Transform constructs.

A CfnTransform class will have no affect on the template unless it is hosted.
The hosting construct must support Transform processing.  CfnTransformHostHook
ensures the construct is hosted by either the antecedent CfnElement, Stack, or by
another construct in the heirarchy (such as a TemplateImporter)

#### Initializers <a name="Initializers" id="cdk-orchestration.transforms.CfnTransform.Initializer"></a>

```typescript
import { transforms } from 'cdk-orchestration'

new transforms.CfnTransform(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.transforms.CfnTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-orchestration.transforms.CfnTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.transforms.CfnTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.transforms.CfnTransform.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.transforms.CfnTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-orchestration.transforms.CfnTransform.apply">apply</a></code> | Modifies the template. |

---

##### `toString` <a name="toString" id="cdk-orchestration.transforms.CfnTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `apply` <a name="apply" id="cdk-orchestration.transforms.CfnTransform.apply"></a>

```typescript
public apply(template: any): any
```

Modifies the template.

###### `template`<sup>Required</sup> <a name="template" id="cdk-orchestration.transforms.CfnTransform.apply.parameter.template"></a>

- *Type:* any

The template to transform.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.transforms.CfnTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-orchestration.transforms.CfnTransform.isCfnTransform">isCfnTransform</a></code> | Returns `true` if a construct is a CfnTransform. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-orchestration.transforms.CfnTransform.isConstruct"></a>

```typescript
import { transforms } from 'cdk-orchestration'

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.transforms.CfnTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransform` <a name="isCfnTransform" id="cdk-orchestration.transforms.CfnTransform.isCfnTransform"></a>

```typescript
import { transforms } from 'cdk-orchestration'

transforms.CfnTransform.isCfnTransform(x: any)
```

Returns `true` if a construct is a CfnTransform.

Uses duck-typing instead of `instanceof` to allow CfnTransforms from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.transforms.CfnTransform.isCfnTransform.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.transforms.CfnTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-orchestration.transforms.CfnTransform.property.host">host</a></code> | <code>constructs.IConstruct</code> | Which construct will apply this transform. |
| <code><a href="#cdk-orchestration.transforms.CfnTransform.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-orchestration.transforms.CfnTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `host`<sup>Required</sup> <a name="host" id="cdk-orchestration.transforms.CfnTransform.property.host"></a>

```typescript
public readonly host: IConstruct;
```

- *Type:* constructs.IConstruct

Which construct will apply this transform.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.transforms.CfnTransform.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---


### CfnTransformHost <a name="CfnTransformHost" id="cdk-orchestration.transforms.CfnTransformHost"></a>

Normally, transforms are hosted by a Stack or CfnElement, and they are applied during synthesis (calls to _toCloudFormation).

Adding a
CfnTransform to a Stack or CfnElement will cause the _toCloudFormation
method to be proxied to apply Transforms.

But if you want transforms hosted for some other reason, this is the class you should use.
This class hosts transforms, but does not know what to do with them.
So anything can be done with the transforms hosted here, but they will not affect the stack itself.

This is used for import and other non-stack not-element scenarios.

#### Initializers <a name="Initializers" id="cdk-orchestration.transforms.CfnTransformHost.Initializer"></a>

```typescript
import { transforms } from 'cdk-orchestration'

new transforms.CfnTransformHost(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.transforms.CfnTransformHost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-orchestration.transforms.CfnTransformHost.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.transforms.CfnTransformHost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.transforms.CfnTransformHost.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.transforms.CfnTransformHost.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-orchestration.transforms.CfnTransformHost.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.transforms.CfnTransformHost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-orchestration.transforms.CfnTransformHost.isCfnTransformHost">isCfnTransformHost</a></code> | Tells you if an object is a CfnTransformHost. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-orchestration.transforms.CfnTransformHost.isConstruct"></a>

```typescript
import { transforms } from 'cdk-orchestration'

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.transforms.CfnTransformHost.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransformHost` <a name="isCfnTransformHost" id="cdk-orchestration.transforms.CfnTransformHost.isCfnTransformHost"></a>

```typescript
import { transforms } from 'cdk-orchestration'

transforms.CfnTransformHost.isCfnTransformHost(scope: Construct)
```

Tells you if an object is a CfnTransformHost.

Duck-typing.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.transforms.CfnTransformHost.isCfnTransformHost.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.transforms.CfnTransformHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-orchestration.transforms.CfnTransformHost.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### EncodeResource <a name="EncodeResource" id="cdk-orchestration.custom_resources.EncodeResource"></a>

This transform base64-encodes any CustomResource it is applied to by moving all properties (other than ServiceToken) to EncodedProperties and applying {@link Fn.base64}. This resource will encode it's properties as a post-resolve step, It is meant to be used on CfnCustomResource (or any CfnResource with a ServiceToken), as it does not encode the ServiceToken.  If there is no ServiceToken, the resource is not encoded.

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

#### Initializers <a name="Initializers" id="cdk-orchestration.custom_resources.EncodeResource.Initializer"></a>

```typescript
import { custom_resources } from 'cdk-orchestration'

new custom_resources.EncodeResource(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.custom_resources.EncodeResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-orchestration.custom_resources.EncodeResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.custom_resources.EncodeResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.custom_resources.EncodeResource.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.custom_resources.EncodeResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-orchestration.custom_resources.EncodeResource.apply">apply</a></code> | Modifies the template. |

---

##### `toString` <a name="toString" id="cdk-orchestration.custom_resources.EncodeResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `apply` <a name="apply" id="cdk-orchestration.custom_resources.EncodeResource.apply"></a>

```typescript
public apply(template: any): any
```

Modifies the template.

###### `template`<sup>Required</sup> <a name="template" id="cdk-orchestration.custom_resources.EncodeResource.apply.parameter.template"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.custom_resources.EncodeResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-orchestration.custom_resources.EncodeResource.isCfnTransform">isCfnTransform</a></code> | Returns `true` if a construct is a CfnTransform. |
| <code><a href="#cdk-orchestration.custom_resources.EncodeResource.encodeCustomResource">encodeCustomResource</a></code> | Encode an L1, L2 or L3 resource by calling this method instead of having to find the L1 yourself. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-orchestration.custom_resources.EncodeResource.isConstruct"></a>

```typescript
import { custom_resources } from 'cdk-orchestration'

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.custom_resources.EncodeResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransform` <a name="isCfnTransform" id="cdk-orchestration.custom_resources.EncodeResource.isCfnTransform"></a>

```typescript
import { custom_resources } from 'cdk-orchestration'

custom_resources.EncodeResource.isCfnTransform(x: any)
```

Returns `true` if a construct is a CfnTransform.

Uses duck-typing instead of `instanceof` to allow CfnTransforms from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.custom_resources.EncodeResource.isCfnTransform.parameter.x"></a>

- *Type:* any

---

##### `encodeCustomResource` <a name="encodeCustomResource" id="cdk-orchestration.custom_resources.EncodeResource.encodeCustomResource"></a>

```typescript
import { custom_resources } from 'cdk-orchestration'

custom_resources.EncodeResource.encodeCustomResource(scope: Construct, id?: string)
```

Encode an L1, L2 or L3 resource by calling this method instead of having to find the L1 yourself.

Throws if there are multiple custom resources under scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.custom_resources.EncodeResource.encodeCustomResource.parameter.scope"></a>

- *Type:* constructs.Construct

Construct containing one L1 custom resource construct.

---

###### `id`<sup>Optional</sup> <a name="id" id="cdk-orchestration.custom_resources.EncodeResource.encodeCustomResource.parameter.id"></a>

- *Type:* string

Id for the EncodeResource transform.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.custom_resources.EncodeResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-orchestration.custom_resources.EncodeResource.property.host">host</a></code> | <code>constructs.IConstruct</code> | Which construct will apply this transform. |
| <code><a href="#cdk-orchestration.custom_resources.EncodeResource.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-orchestration.custom_resources.EncodeResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `host`<sup>Required</sup> <a name="host" id="cdk-orchestration.custom_resources.EncodeResource.property.host"></a>

```typescript
public readonly host: IConstruct;
```

- *Type:* constructs.IConstruct

Which construct will apply this transform.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.custom_resources.EncodeResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---


### InlineNodejsFunction <a name="InlineNodejsFunction" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction"></a>

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

#### Initializers <a name="Initializers" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

new aws_lambda_nodejs.InlineNodejsFunction(scope: Construct, id: string, props: InlineNodejsFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.props">props</a></code> | <code>cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.Initializer.parameter.props"></a>

- *Type:* cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeCompositePrincipal">grantInvokeCompositePrincipal</a></code> | Grant multiple principals the ability to invoke this Lambda via CompositePrincipal. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.invalidateVersionBasedOn">invalidateVersionBasedOn</a></code> | Mix additional information into the hash of the Version object. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.inspect">inspect</a></code> | Examines construct. |

---

##### `toString` <a name="toString" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSource"></a>

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

###### `source`<sup>Required</sup> <a name="source" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeCompositePrincipal` <a name="grantInvokeCompositePrincipal" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeCompositePrincipal"></a>

```typescript
public grantInvokeCompositePrincipal(compositePrincipal: CompositePrincipal): Grant[]
```

Grant multiple principals the ability to invoke this Lambda via CompositePrincipal.

###### `compositePrincipal`<sup>Required</sup> <a name="compositePrincipal" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeCompositePrincipal.parameter.compositePrincipal"></a>

- *Type:* aws-cdk-lib.aws_iam.CompositePrincipal

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addAlias"></a>

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

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addLayers"></a>

```typescript
public addLayers(layers: ILayerVersion): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.addLayers.parameter.layers"></a>

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

the layers to be added.

---

##### `invalidateVersionBasedOn` <a name="invalidateVersionBasedOn" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.invalidateVersionBasedOn"></a>

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.invalidateVersionBasedOn.parameter.x"></a>

- *Type:* string

---

##### `inspect` <a name="inspect" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.minifyEngineFromProps">minifyEngineFromProps</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isConstruct"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isOwnedResource"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isResource"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.classifyVersionProperty"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

For `Function.addPermissions()` to work on this imported lambda, make sure that is
in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

For `Function.addPermissions()` to work on this imported lambda, set the sameEnvironment property to true
if this imported lambda is in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAll"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllConcurrentExecutions"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllDuration"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllErrors"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllInvocations"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllThrottles"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `minifyEngineFromProps` <a name="minifyEngineFromProps" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.minifyEngineFromProps"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

aws_lambda_nodejs.InlineNodejsFunction.minifyEngineFromProps(props: InlineNodejsFunctionProps)
```

###### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.minifyEngineFromProps.parameter.props"></a>

- *Type:* cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.tmpFile">tmpFile</a></code> | <code>string</code> | Path to the temporary file with the minified code (if any). |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.latestVersion"></a>

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

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.logGroup"></a>

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

##### `runtime`<sup>Required</sup> <a name="runtime" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---

##### `tmpFile`<sup>Optional</sup> <a name="tmpFile" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.tmpFile"></a>

```typescript
public readonly tmpFile: string;
```

- *Type:* string

Path to the temporary file with the minified code (if any).

This path is also published via IInspectiable, and thus will appear in
the tree.json file as attribute "@open-constructs/aws-cdk.InlineNodejsFunction.tmpfile".

This makes it possible to get quick development turn around by
compiling your project and copying the minified code to the console.
Note the location will change to a new temporary directory each time the code
is compiled.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.TMP_FILE_ATTRIBUTE_NAME">TMP_FILE_ATTRIBUTE_NAME</a></code> | <code>string</code> | Link in tree.json to the file used for inline code. |

---

##### `TMP_FILE_ATTRIBUTE_NAME`<sup>Required</sup> <a name="TMP_FILE_ATTRIBUTE_NAME" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunction.property.TMP_FILE_ATTRIBUTE_NAME"></a>

```typescript
public readonly TMP_FILE_ATTRIBUTE_NAME: string;
```

- *Type:* string

Link in tree.json to the file used for inline code.

---

### LateBoundStepFunctionsStartExecution <a name="LateBoundStepFunctionsStartExecution" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution"></a>

Calls a stepFunction who's ARN is not known until runtime.

This class can be used to create StepFunction wrappers.
Use it to add pre- or post-processing to any existing StepFunction.

Examples:
 - Wrapper that reads a file from S3, and passes that as input to the wrapped StepFunciton.
 - Wrapper that writes a portion of StepFunction output to S3.

Runs the state machine specified by {@link LateBoundStepFunctionsStartExecutionProps.stateMachineArnPath).}

#### Initializers <a name="Initializers" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer"></a>

```typescript
import { aws_stepfunctions_tasks } from 'cdk-orchestration'

new aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution(scope: Construct, id: string, props: LateBoundStepFunctionsStartExecutionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.props">props</a></code> | <code>cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.id"></a>

- *Type:* string

Descriptive identifier for this chainable.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.Initializer.parameter.props"></a>

- *Type:* cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addPrefix">addPrefix</a></code> | Add a prefix to the stateId of this state. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.bindToGraph">bindToGraph</a></code> | Register this state as part of the given graph. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.toStateJson">toStateJson</a></code> | Return the Amazon States Language object for this state. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addCatch">addCatch</a></code> | Add a recovery handler for this state. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addRetry">addRetry</a></code> | Add retry configuration for this state. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metric">metric</a></code> | Return the given named metric for this Task. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricFailed">metricFailed</a></code> | Metric for the number of times this activity fails. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricHeartbeatTimedOut">metricHeartbeatTimedOut</a></code> | Metric for the number of times the heartbeat times out for this activity. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricRunTime">metricRunTime</a></code> | The interval, in milliseconds, between the time the Task starts and the time it closes. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduled">metricScheduled</a></code> | Metric for the number of times this activity is scheduled. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduleTime">metricScheduleTime</a></code> | The interval, in milliseconds, for which the activity stays in the schedule state. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricStarted">metricStarted</a></code> | Metric for the number of times this activity is started. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricSucceeded">metricSucceeded</a></code> | Metric for the number of times this activity succeeds. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTime">metricTime</a></code> | The interval, in milliseconds, between the time the activity is scheduled and the time it closes. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTimedOut">metricTimedOut</a></code> | Metric for the number of times this activity times out. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.next">next</a></code> | Continue normal execution with the given state. |

---

##### `toString` <a name="toString" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addPrefix` <a name="addPrefix" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addPrefix"></a>

```typescript
public addPrefix(x: string): void
```

Add a prefix to the stateId of this state.

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addPrefix.parameter.x"></a>

- *Type:* string

---

##### `bindToGraph` <a name="bindToGraph" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.bindToGraph"></a>

```typescript
public bindToGraph(graph: StateGraph): void
```

Register this state as part of the given graph.

Don't call this. It will be called automatically when you work
with states normally.

###### `graph`<sup>Required</sup> <a name="graph" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.bindToGraph.parameter.graph"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.StateGraph

---

##### `toStateJson` <a name="toStateJson" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.toStateJson"></a>

```typescript
public toStateJson(): object
```

Return the Amazon States Language object for this state.

##### `addCatch` <a name="addCatch" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addCatch"></a>

```typescript
public addCatch(handler: IChainable, props?: CatchProps): TaskStateBase
```

Add a recovery handler for this state.

When a particular error occurs, execution will continue at the error
handler instead of failing the state machine execution.

###### `handler`<sup>Required</sup> <a name="handler" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addCatch.parameter.handler"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addCatch.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.CatchProps

---

##### `addRetry` <a name="addRetry" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addRetry"></a>

```typescript
public addRetry(props?: RetryProps): TaskStateBase
```

Add retry configuration for this state.

This controls if and how the execution will be retried if a particular
error occurs.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.addRetry.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.RetryProps

---

##### `metric` <a name="metric" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Task.

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricFailed` <a name="metricFailed" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricFailed"></a>

```typescript
public metricFailed(props?: MetricOptions): Metric
```

Metric for the number of times this activity fails.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricFailed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHeartbeatTimedOut` <a name="metricHeartbeatTimedOut" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricHeartbeatTimedOut"></a>

```typescript
public metricHeartbeatTimedOut(props?: MetricOptions): Metric
```

Metric for the number of times the heartbeat times out for this activity.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricHeartbeatTimedOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRunTime` <a name="metricRunTime" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricRunTime"></a>

```typescript
public metricRunTime(props?: MetricOptions): Metric
```

The interval, in milliseconds, between the time the Task starts and the time it closes.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricRunTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricScheduled` <a name="metricScheduled" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduled"></a>

```typescript
public metricScheduled(props?: MetricOptions): Metric
```

Metric for the number of times this activity is scheduled.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduled.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricScheduleTime` <a name="metricScheduleTime" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduleTime"></a>

```typescript
public metricScheduleTime(props?: MetricOptions): Metric
```

The interval, in milliseconds, for which the activity stays in the schedule state.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricScheduleTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStarted` <a name="metricStarted" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricStarted"></a>

```typescript
public metricStarted(props?: MetricOptions): Metric
```

Metric for the number of times this activity is started.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricStarted.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSucceeded` <a name="metricSucceeded" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricSucceeded"></a>

```typescript
public metricSucceeded(props?: MetricOptions): Metric
```

Metric for the number of times this activity succeeds.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricSucceeded.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTime` <a name="metricTime" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTime"></a>

```typescript
public metricTime(props?: MetricOptions): Metric
```

The interval, in milliseconds, between the time the activity is scheduled and the time it closes.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTimedOut` <a name="metricTimedOut" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTimedOut"></a>

```typescript
public metricTimedOut(props?: MetricOptions): Metric
```

Metric for the number of times this activity times out.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.metricTimedOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `next` <a name="next" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.next"></a>

```typescript
public next(next: IChainable): Chain
```

Continue normal execution with the given state.

###### `next`<sup>Required</sup> <a name="next" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.next.parameter.next"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.filterNextables">filterNextables</a></code> | Return only the states that allow chaining from an array of states. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableEndStates">findReachableEndStates</a></code> | Find the set of end states states reachable through transitions from the given start state. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableStates">findReachableStates</a></code> | Find the set of states reachable through transitions from the given start state. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.prefixStates">prefixStates</a></code> | Add a prefix to the stateId of all States found in a construct tree. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.isConstruct"></a>

```typescript
import { aws_stepfunctions_tasks } from 'cdk-orchestration'

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `filterNextables` <a name="filterNextables" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.filterNextables"></a>

```typescript
import { aws_stepfunctions_tasks } from 'cdk-orchestration'

aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.filterNextables(states: State[])
```

Return only the states that allow chaining from an array of states.

###### `states`<sup>Required</sup> <a name="states" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.filterNextables.parameter.states"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State[]

---

##### `findReachableEndStates` <a name="findReachableEndStates" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableEndStates"></a>

```typescript
import { aws_stepfunctions_tasks } from 'cdk-orchestration'

aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableEndStates(start: State, options?: FindStateOptions)
```

Find the set of end states states reachable through transitions from the given start state.

###### `start`<sup>Required</sup> <a name="start" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableEndStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableEndStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `findReachableStates` <a name="findReachableStates" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableStates"></a>

```typescript
import { aws_stepfunctions_tasks } from 'cdk-orchestration'

aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableStates(start: State, options?: FindStateOptions)
```

Find the set of states reachable through transitions from the given start state.

This does not retrieve states from within sub-graphs, such as states within a Parallel state's branch.

###### `start`<sup>Required</sup> <a name="start" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.findReachableStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `prefixStates` <a name="prefixStates" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.prefixStates"></a>

```typescript
import { aws_stepfunctions_tasks } from 'cdk-orchestration'

aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.prefixStates(root: IConstruct, prefix: string)
```

Add a prefix to the stateId of all States found in a construct tree.

###### `root`<sup>Required</sup> <a name="root" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.prefixStates.parameter.root"></a>

- *Type:* constructs.IConstruct

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.prefixStates.parameter.prefix"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.endStates">endStates</a></code> | <code>aws-cdk-lib.aws_stepfunctions.INextable[]</code> | Continuable states of this Chainable. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.startState">startState</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State</code> | First state of this Chainable. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.stateId">stateId</a></code> | <code>string</code> | Tokenized string that evaluates to the state's ID. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endStates`<sup>Required</sup> <a name="endStates" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.endStates"></a>

```typescript
public readonly endStates: INextable[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions.INextable[]

Continuable states of this Chainable.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Descriptive identifier for this chainable.

---

##### `startState`<sup>Required</sup> <a name="startState" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.startState"></a>

```typescript
public readonly startState: State;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State

First state of this Chainable.

---

##### `stateId`<sup>Required</sup> <a name="stateId" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecution.property.stateId"></a>

```typescript
public readonly stateId: string;
```

- *Type:* string

Tokenized string that evaluates to the state's ID.

---


### StepFunctionTask <a name="StepFunctionTask" id="cdk-orchestration.orchestration.StepFunctionTask"></a>

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

#### Initializers <a name="Initializers" id="cdk-orchestration.orchestration.StepFunctionTask.Initializer"></a>

```typescript
import { orchestration } from 'cdk-orchestration'

new orchestration.StepFunctionTask(scope: Construct, id: string, props: StepFunctionTaskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.props">props</a></code> | <code>cdk-orchestration.orchestration.StepFunctionTaskProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.orchestration.StepFunctionTask.Initializer.parameter.props"></a>

- *Type:* cdk-orchestration.orchestration.StepFunctionTaskProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTask.getAtt">getAtt</a></code> | See {@link CustomResource.getAtt }. |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTask.getAttString">getAttString</a></code> | See {@link CustomResource.getAttString }. |

---

##### `toString` <a name="toString" id="cdk-orchestration.orchestration.StepFunctionTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getAtt` <a name="getAtt" id="cdk-orchestration.orchestration.StepFunctionTask.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

See {@link CustomResource.getAtt }.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="cdk-orchestration.orchestration.StepFunctionTask.getAtt.parameter.attributeName"></a>

- *Type:* string

---

##### `getAttString` <a name="getAttString" id="cdk-orchestration.orchestration.StepFunctionTask.getAttString"></a>

```typescript
public getAttString(attributeName: string): string
```

See {@link CustomResource.getAttString }.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="cdk-orchestration.orchestration.StepFunctionTask.getAttString.parameter.attributeName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-orchestration.orchestration.StepFunctionTask.isConstruct"></a>

```typescript
import { orchestration } from 'cdk-orchestration'

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.orchestration.StepFunctionTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTask.property.numberOfSteps">numberOfSteps</a></code> | <code>number</code> | Total number of StepFunctionTaskStep resources created. |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTask.property.ref">ref</a></code> | <code>string</code> | The physical name of this custom resource. |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTask.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-orchestration.orchestration.StepFunctionTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `numberOfSteps`<sup>Required</sup> <a name="numberOfSteps" id="cdk-orchestration.orchestration.StepFunctionTask.property.numberOfSteps"></a>

```typescript
public readonly numberOfSteps: number;
```

- *Type:* number

Total number of StepFunctionTaskStep resources created.

---

##### `ref`<sup>Required</sup> <a name="ref" id="cdk-orchestration.orchestration.StepFunctionTask.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The physical name of this custom resource.

---

##### `role`<sup>Required</sup> <a name="role" id="cdk-orchestration.orchestration.StepFunctionTask.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role.

---


## Structs <a name="Structs" id="Structs"></a>

### ConstructHostProps <a name="ConstructHostProps" id="cdk-orchestration.ConstructHostProps"></a>

Properties for ConstructHost.

#### Initializer <a name="Initializer" id="cdk-orchestration.ConstructHostProps.Initializer"></a>

```typescript
import { ConstructHostProps } from 'cdk-orchestration'

const constructHostProps: ConstructHostProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructHostProps.property.hostConstructTypeInfo">hostConstructTypeInfo</a></code> | <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a></code> | Host RTTI. |
| <code><a href="#cdk-orchestration.ConstructHostProps.property.hostedConstructTypeInfo">hostedConstructTypeInfo</a></code> | <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a></code> | Hosted construct RTTI. |
| <code><a href="#cdk-orchestration.ConstructHostProps.property.stopCondition">stopCondition</a></code> | <code><a href="#cdk-orchestration.IStopCondition">IStopCondition</a></code> | Stop condition for searching for hosted constructs. |

---

##### `hostConstructTypeInfo`<sup>Required</sup> <a name="hostConstructTypeInfo" id="cdk-orchestration.ConstructHostProps.property.hostConstructTypeInfo"></a>

```typescript
public readonly hostConstructTypeInfo: ConstructRunTimeTypeInfo;
```

- *Type:* <a href="#cdk-orchestration.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a>

Host RTTI.

---

##### `hostedConstructTypeInfo`<sup>Required</sup> <a name="hostedConstructTypeInfo" id="cdk-orchestration.ConstructHostProps.property.hostedConstructTypeInfo"></a>

```typescript
public readonly hostedConstructTypeInfo: ConstructRunTimeTypeInfo;
```

- *Type:* <a href="#cdk-orchestration.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a>

Hosted construct RTTI.

---

##### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.ConstructHostProps.property.stopCondition"></a>

```typescript
public readonly stopCondition: IStopCondition;
```

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

Stop condition for searching for hosted constructs.

Normally this will at least exclude sub-stacks.

---

### ConstructServiceProps <a name="ConstructServiceProps" id="cdk-orchestration.ConstructServiceProps"></a>

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

#### Initializer <a name="Initializer" id="cdk-orchestration.ConstructServiceProps.Initializer"></a>

```typescript
import { ConstructServiceProps } from 'cdk-orchestration'

const constructServiceProps: ConstructServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructServiceProps.property.servicePropertyName">servicePropertyName</a></code> | <code>string</code> | The symbol property for this construct service. |
| <code><a href="#cdk-orchestration.ConstructServiceProps.property.factory">factory</a></code> | <code><a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a></code> | This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found. |

---

##### `servicePropertyName`<sup>Required</sup> <a name="servicePropertyName" id="cdk-orchestration.ConstructServiceProps.property.servicePropertyName"></a>

```typescript
public readonly servicePropertyName: string;
```

- *Type:* string

The symbol property for this construct service.

This needs to be
unique, so namespacing symobls is recommended:
```
// Your package name
const NAMESPACE = "@open-constructs/aws-cdk"
// PackageName.ServiceName
Symbol.for(`${NAMESPACE}.CfnTransform`)
```
To ensure uniqueness.

---

##### `factory`<sup>Optional</sup> <a name="factory" id="cdk-orchestration.ConstructServiceProps.property.factory"></a>

```typescript
public readonly factory: IConstructServiceFactory;
```

- *Type:* <a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found.

Note:  You can also store factories in the tree itself using ConstructService.setFactory.
If a factory is found instead of a service, then that factory will be used instead of this
default factory.

---

### ConstructTreeServiceProps <a name="ConstructTreeServiceProps" id="cdk-orchestration.ConstructTreeServiceProps"></a>

Properties for ConstructTreeService.

#### Initializer <a name="Initializer" id="cdk-orchestration.ConstructTreeServiceProps.Initializer"></a>

```typescript
import { ConstructTreeServiceProps } from 'cdk-orchestration'

const constructTreeServiceProps: ConstructTreeServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructTreeServiceProps.property.servicePropertyName">servicePropertyName</a></code> | <code>string</code> | The symbol property for this construct service. |
| <code><a href="#cdk-orchestration.ConstructTreeServiceProps.property.factory">factory</a></code> | <code><a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a></code> | This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found. |
| <code><a href="#cdk-orchestration.ConstructTreeServiceProps.property.stopCondition">stopCondition</a></code> | <code><a href="#cdk-orchestration.IStopCondition">IStopCondition</a></code> | The `stopCondition` function is used in two cases:. |

---

##### `servicePropertyName`<sup>Required</sup> <a name="servicePropertyName" id="cdk-orchestration.ConstructTreeServiceProps.property.servicePropertyName"></a>

```typescript
public readonly servicePropertyName: string;
```

- *Type:* string

The symbol property for this construct service.

This needs to be
unique, so namespacing symobls is recommended:
```
// Your package name
const NAMESPACE = "@open-constructs/aws-cdk"
// PackageName.ServiceName
Symbol.for(`${NAMESPACE}.CfnTransform`)
```
To ensure uniqueness.

---

##### `factory`<sup>Optional</sup> <a name="factory" id="cdk-orchestration.ConstructTreeServiceProps.property.factory"></a>

```typescript
public readonly factory: IConstructServiceFactory;
```

- *Type:* <a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found.

Note:  You can also store factories in the tree itself using ConstructService.setFactory.
If a factory is found instead of a service, then that factory will be used instead of this
default factory.

---

##### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.ConstructTreeServiceProps.property.stopCondition"></a>

```typescript
public readonly stopCondition: IStopCondition;
```

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

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

### InlineNodejsFunctionProps <a name="InlineNodejsFunctionProps" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps"></a>

Properties for an InlineNodejsFunction.

#### Initializer <a name="Initializer" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.Initializer"></a>

```typescript
import { aws_lambda_nodejs } from 'cdk-orchestration'

const inlineNodejsFunctionProps: aws_lambda_nodejs.InlineNodejsFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.adotInstrumentation">adotInstrumentation</a></code> | <code>aws-cdk-lib.aws_lambda.AdotInstrumentationConfig</code> | Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | Sets the application log level for the function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logFormat">logFormat</a></code> | <code>string</code> | Sets the logFormat for the function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | Sets the log group name for the function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.paramsAndSecrets">paramsAndSecrets</a></code> | <code>aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion</code> | Specify the configuration of Parameters and Secrets Extension. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.runtimeManagementMode">runtimeManagementMode</a></code> | <code>aws-cdk-lib.aws_lambda.RuntimeManagementMode</code> | Sets the runtime management configuration for a function's version. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.snapStart">snapStart</a></code> | <code>aws-cdk-lib.aws_lambda.SnapStartConf</code> | Enable SnapStart for Lambda Function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | Sets the system log level for the function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.entry">entry</a></code> | <code>string</code> | Path to the entry file (JavaScript only). |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.awsSdkConnectionReuse">awsSdkConnectionReuse</a></code> | <code>boolean</code> | Whether to automatically reuse TCP connections when working with the AWS SDK for JavaScript. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.handler">handler</a></code> | <code>string</code> | The name of the exported handler in the entry file. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.minifyEngine">minifyEngine</a></code> | <code>cdk-orchestration.aws_lambda_nodejs.MinifyEngine</code> | Default is "SIMPLE". |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime environment. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `adotInstrumentation`<sup>Optional</sup> <a name="adotInstrumentation" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.adotInstrumentation"></a>

```typescript
public readonly adotInstrumentation: AdotInstrumentationConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.AdotInstrumentationConfig
- *Default:* No ADOT instrumentation

Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation.

> [https://aws-otel.github.io/docs/getting-started/lambda](https://aws-otel.github.io/docs/getting-started/lambda)

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllOutbound` directly on the security group.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### `applicationLogLevel`<sup>Optional</sup> <a name="applicationLogLevel" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string
- *Default:* INFO

Sets the application log level for the function.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.environment"></a>

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

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `layers`<sup>Optional</sup> <a name="layers" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.layers"></a>

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

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string
- *Default:* Text format

Sets the logFormat for the function.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* `/aws/lambda/${this.functionName}` default log group name created by Lambda

Sets the log group name for the function.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.memorySize"></a>

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

##### `paramsAndSecrets`<sup>Optional</sup> <a name="paramsAndSecrets" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.paramsAndSecrets"></a>

```typescript
public readonly paramsAndSecrets: ParamsAndSecretsLayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion
- *Default:* No Parameters and Secrets Extension

Specify the configuration of Parameters and Secrets Extension.

> [https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html)

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.role"></a>

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

##### `runtimeManagementMode`<sup>Optional</sup> <a name="runtimeManagementMode" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.runtimeManagementMode"></a>

```typescript
public readonly runtimeManagementMode: RuntimeManagementMode;
```

- *Type:* aws-cdk-lib.aws_lambda.RuntimeManagementMode
- *Default:* Auto

Sets the runtime management configuration for a function's version.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.snapStart"></a>

```typescript
public readonly snapStart: SnapStartConf;
```

- *Type:* aws-cdk-lib.aws_lambda.SnapStartConf
- *Default:* No snapstart

Enable SnapStart for Lambda Function.

SnapStart is currently supported only for Java 11, 17 runtime

---

##### `systemLogLevel`<sup>Optional</sup> <a name="systemLogLevel" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string
- *Default:* INFO

Sets the system log level for the function.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.vpcSubnets"></a>

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

##### `entry`<sup>Required</sup> <a name="entry" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.entry"></a>

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

##### `awsSdkConnectionReuse`<sup>Optional</sup> <a name="awsSdkConnectionReuse" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.awsSdkConnectionReuse"></a>

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

##### `handler`<sup>Optional</sup> <a name="handler" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string
- *Default:* index.handler

The name of the exported handler in the entry file.

The handler is prefixed with `index.` unless the specified handler value contains a `.`,
in which case it is used as-is.

---

##### `minifyEngine`<sup>Optional</sup> <a name="minifyEngine" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.minifyEngine"></a>

```typescript
public readonly minifyEngine: MinifyEngine;
```

- *Type:* cdk-orchestration.aws_lambda_nodejs.MinifyEngine

Default is "SIMPLE".

See {@link MinifyEngine} for values.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="cdk-orchestration.aws_lambda_nodejs.InlineNodejsFunctionProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime
- *Default:* Runtime.NODEJS_18_X

The runtime environment.

Only runtimes of the Node.js family are
supported.

---

### LateBoundStepFunctionsStartExecutionProps <a name="LateBoundStepFunctionsStartExecutionProps" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps"></a>

Properties for LateBoundStepFunctionsStartExecution.

#### Initializer <a name="Initializer" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.Initializer"></a>

```typescript
import { aws_stepfunctions_tasks } from 'cdk-orchestration'

const lateBoundStepFunctionsStartExecutionProps: aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.comment">comment</a></code> | <code>string</code> | An optional description for this state. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Credentials</code> | Credentials for an IAM Role that the State Machine assumes for executing the task. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.heartbeat">heartbeat</a></code> | <code>aws-cdk-lib.Duration</code> | Timeout for the heartbeat. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Timeout</code> | Timeout for the heartbeat. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.inputPath">inputPath</a></code> | <code>string</code> | JSONPath expression to select part of the state to be the input to this state. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.integrationPattern">integrationPattern</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IntegrationPattern</code> | AWS Step Functions integrates with services directly in the Amazon States Language. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.outputPath">outputPath</a></code> | <code>string</code> | JSONPath expression to select select a portion of the state output to pass to the next state. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.resultPath">resultPath</a></code> | <code>string</code> | JSONPath expression to indicate where to inject the state's output. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.resultSelector">resultSelector</a></code> | <code>{[ key: string ]: any}</code> | The JSON that will replace the state's raw result and become the effective result before ResultPath is applied. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.stateName">stateName</a></code> | <code>string</code> | Optional name for this state. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.taskTimeout">taskTimeout</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Timeout</code> | Timeout for the task. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | Timeout for the task. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.associateWithParent">associateWithParent</a></code> | <code>boolean</code> | Pass the execution ID from the context object to the execution input. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.input">input</a></code> | <code>aws-cdk-lib.aws_stepfunctions.TaskInput</code> | The JSON input for the execution, same as that of StartExecution. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.name">name</a></code> | <code>string</code> | The name of the execution, same as that of StartExecution. |
| <code><a href="#cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.stateMachineArnPath">stateMachineArnPath</a></code> | <code>string</code> | Where in the event the arn of the stateMachine to call is stored. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string
- *Default:* No comment

An optional description for this state.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.credentials"></a>

```typescript
public readonly credentials: Credentials;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Credentials
- *Default:* None (Task is executed using the State Machine's execution role)

Credentials for an IAM Role that the State Machine assumes for executing the task.

This enables cross-account resource invocations.

> [https://docs.aws.amazon.com/step-functions/latest/dg/concepts-access-cross-acct-resources.html](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-access-cross-acct-resources.html)

---

##### ~~`heartbeat`~~<sup>Optional</sup> <a name="heartbeat" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.heartbeat"></a>

- *Deprecated:* use `heartbeatTimeout`

```typescript
public readonly heartbeat: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* None

Timeout for the heartbeat.

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="heartbeatTimeout" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.heartbeatTimeout"></a>

```typescript
public readonly heartbeatTimeout: Timeout;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Timeout
- *Default:* None

Timeout for the heartbeat.

[disable-awslint:duration-prop-type] is needed because all props interface in
aws-stepfunctions-tasks extend this interface

---

##### `inputPath`<sup>Optional</sup> <a name="inputPath" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string
- *Default:* The entire task input (JSON path '$')

JSONPath expression to select part of the state to be the input to this state.

May also be the special value JsonPath.DISCARD, which will cause the effective
input to be the empty object {}.

---

##### `integrationPattern`<sup>Optional</sup> <a name="integrationPattern" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.integrationPattern"></a>

```typescript
public readonly integrationPattern: IntegrationPattern;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.IntegrationPattern
- *Default:* `IntegrationPattern.REQUEST_RESPONSE` for most tasks. `IntegrationPattern.RUN_JOB` for the following exceptions: `BatchSubmitJob`, `EmrAddStep`, `EmrCreateCluster`, `EmrTerminationCluster`, and `EmrContainersStartJobRun`.

AWS Step Functions integrates with services directly in the Amazon States Language.

You can control these AWS services using service integration patterns

> [https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token)

---

##### `outputPath`<sup>Optional</sup> <a name="outputPath" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.outputPath"></a>

```typescript
public readonly outputPath: string;
```

- *Type:* string
- *Default:* The entire JSON node determined by the state input, the task result, and resultPath is passed to the next state (JSON path '$')

JSONPath expression to select select a portion of the state output to pass to the next state.

May also be the special value JsonPath.DISCARD, which will cause the effective
output to be the empty object {}.

---

##### `resultPath`<sup>Optional</sup> <a name="resultPath" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.resultPath"></a>

```typescript
public readonly resultPath: string;
```

- *Type:* string
- *Default:* Replaces the entire input with the result (JSON path '$')

JSONPath expression to indicate where to inject the state's output.

May also be the special value JsonPath.DISCARD, which will cause the state's
input to become its output.

---

##### `resultSelector`<sup>Optional</sup> <a name="resultSelector" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.resultSelector"></a>

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

##### `stateName`<sup>Optional</sup> <a name="stateName" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string
- *Default:* The construct ID will be used as state name

Optional name for this state.

---

##### `taskTimeout`<sup>Optional</sup> <a name="taskTimeout" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.taskTimeout"></a>

```typescript
public readonly taskTimeout: Timeout;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Timeout
- *Default:* None

Timeout for the task.

[disable-awslint:duration-prop-type] is needed because all props interface in
aws-stepfunctions-tasks extend this interface

---

##### ~~`timeout`~~<sup>Optional</sup> <a name="timeout" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.timeout"></a>

- *Deprecated:* use `taskTimeout`

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* None

Timeout for the task.

---

##### `associateWithParent`<sup>Optional</sup> <a name="associateWithParent" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.associateWithParent"></a>

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

##### `input`<sup>Optional</sup> <a name="input" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.input"></a>

```typescript
public readonly input: TaskInput;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.TaskInput
- *Default:* The state input (JSON path '$')

The JSON input for the execution, same as that of StartExecution.

> [https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html)

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* None

The name of the execution, same as that of StartExecution.

> [https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html)

---

##### `stateMachineArnPath`<sup>Optional</sup> <a name="stateMachineArnPath" id="cdk-orchestration.aws_stepfunctions_tasks.LateBoundStepFunctionsStartExecutionProps.property.stateMachineArnPath"></a>

```typescript
public readonly stateMachineArnPath: string;
```

- *Type:* string
- *Default:* "$.stateMachineArn"

Where in the event the arn of the stateMachine to call is stored.

---

### LoggerProps <a name="LoggerProps" id="cdk-orchestration.LoggerProps"></a>

#### Initializer <a name="Initializer" id="cdk-orchestration.LoggerProps.Initializer"></a>

```typescript
import { LoggerProps } from 'cdk-orchestration'

const loggerProps: LoggerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.LoggerProps.property.logLevel">logLevel</a></code> | <code>number</code> | # Note: This is a number to support custom log levels (e.g. FATAL = 0.5). |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="cdk-orchestration.LoggerProps.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

# Note: This is a number to support custom log levels (e.g. FATAL = 0.5).

---

### ServiceQueryResult <a name="ServiceQueryResult" id="cdk-orchestration.ServiceQueryResult"></a>

The result of a service query.

#### Initializer <a name="Initializer" id="cdk-orchestration.ServiceQueryResult.Initializer"></a>

```typescript
import { ServiceQueryResult } from 'cdk-orchestration'

const serviceQueryResult: ServiceQueryResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ServiceQueryResult.property.scope">scope</a></code> | <code>constructs.IConstruct</code> | A scope with that value for it's service property. |
| <code><a href="#cdk-orchestration.ServiceQueryResult.property.service">service</a></code> | <code>any</code> | The service property of the scope. |
| <code><a href="#cdk-orchestration.ServiceQueryResult.property.servicePropertyName">servicePropertyName</a></code> | <code>string</code> | The particular service that was queried. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ServiceQueryResult.property.scope"></a>

```typescript
public readonly scope: IConstruct;
```

- *Type:* constructs.IConstruct

A scope with that value for it's service property.

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-orchestration.ServiceQueryResult.property.service"></a>

```typescript
public readonly service: any;
```

- *Type:* any

The service property of the scope.

---

##### `servicePropertyName`<sup>Required</sup> <a name="servicePropertyName" id="cdk-orchestration.ServiceQueryResult.property.servicePropertyName"></a>

```typescript
public readonly servicePropertyName: string;
```

- *Type:* string

The particular service that was queried.

---

### StepFunctionTaskProps <a name="StepFunctionTaskProps" id="cdk-orchestration.orchestration.StepFunctionTaskProps"></a>

Properties for StepFunctionTask.

#### Initializer <a name="Initializer" id="cdk-orchestration.orchestration.StepFunctionTaskProps.Initializer"></a>

```typescript
import { orchestration } from 'cdk-orchestration'

const stepFunctionTaskProps: orchestration.StepFunctionTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTaskProps.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IStateMachine</code> | The state machine to execute. |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTaskProps.property.defaults">defaults</a></code> | <code>{[ key: string ]: string}</code> | Default attribute values to use when the StepFunction output does not contain a requested value. |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTaskProps.property.inputEvent">inputEvent</a></code> | <code>any</code> | The event to start the state machine with. |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTaskProps.property.prefix">prefix</a></code> | <code>string</code> | Prefix for the execution. |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTaskProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Role for execution and monitoring.  Must have permission to execute and describe the state machine, as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```. |
| <code><a href="#cdk-orchestration.orchestration.StepFunctionTaskProps.property.totalTimeout">totalTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | Total timeout for the entire operation. |

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="cdk-orchestration.orchestration.StepFunctionTaskProps.property.stateMachine"></a>

```typescript
public readonly stateMachine: IStateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.IStateMachine

The state machine to execute.

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="cdk-orchestration.orchestration.StepFunctionTaskProps.property.defaults"></a>

```typescript
public readonly defaults: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Default attribute values to use when the StepFunction output does not contain a requested value.

---

##### `inputEvent`<sup>Optional</sup> <a name="inputEvent" id="cdk-orchestration.orchestration.StepFunctionTaskProps.property.inputEvent"></a>

```typescript
public readonly inputEvent: any;
```

- *Type:* any

The event to start the state machine with.

Should only be provided with stateMachine, not with stateMachineExecutionArn.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="cdk-orchestration.orchestration.StepFunctionTaskProps.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Prefix for the execution.

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-orchestration.orchestration.StepFunctionTaskProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Role for execution and monitoring.  Must have permission to execute and describe the state machine, as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```.

If not provided, a role will be created.

---

##### `totalTimeout`<sup>Optional</sup> <a name="totalTimeout" id="cdk-orchestration.orchestration.StepFunctionTaskProps.property.totalTimeout"></a>

```typescript
public readonly totalTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(2)

Total timeout for the entire operation.

The maximum timeout is unknown, but less than 500 hours (yes, it can
exceed the AWS Lambda 15 minutes)

---

## Classes <a name="Classes" id="Classes"></a>

### AppConstructTreeService <a name="AppConstructTreeService" id="cdk-orchestration.AppConstructTreeService"></a>

An App-scoped service that is found by looking up the tree.

Found services are cached on the querying scope to speed up subsequent lookups.

#### Initializers <a name="Initializers" id="cdk-orchestration.AppConstructTreeService.Initializer"></a>

```typescript
import { AppConstructTreeService } from 'cdk-orchestration'

new AppConstructTreeService(treeServiceProps: ConstructTreeServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.AppConstructTreeService.Initializer.parameter.treeServiceProps">treeServiceProps</a></code> | <code><a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="cdk-orchestration.AppConstructTreeService.Initializer.parameter.treeServiceProps"></a>

- *Type:* <a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.AppConstructTreeService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#cdk-orchestration.AppConstructTreeService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#cdk-orchestration.AppConstructTreeService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#cdk-orchestration.AppConstructTreeService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#cdk-orchestration.AppConstructTreeService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#cdk-orchestration.AppConstructTreeService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#cdk-orchestration.AppConstructTreeService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#cdk-orchestration.AppConstructTreeService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#cdk-orchestration.AppConstructTreeService.of">of</a></code> | Returns the cached service on an object, or creates one if none is available up the hierarchy. |
| <code><a href="#cdk-orchestration.AppConstructTreeService.searchUpOrCreate">searchUpOrCreate</a></code> | Searches towards the root for a value. |

---

##### `get` <a name="get" id="cdk-orchestration.AppConstructTreeService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppConstructTreeService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="cdk-orchestration.AppConstructTreeService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppConstructTreeService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="cdk-orchestration.AppConstructTreeService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppConstructTreeService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.AppConstructTreeService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="cdk-orchestration.AppConstructTreeService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppConstructTreeService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="cdk-orchestration.AppConstructTreeService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppConstructTreeService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="cdk-orchestration.AppConstructTreeService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppConstructTreeService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.AppConstructTreeService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="cdk-orchestration.AppConstructTreeService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppConstructTreeService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="cdk-orchestration.AppConstructTreeService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="cdk-orchestration.AppConstructTreeService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppConstructTreeService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="cdk-orchestration.AppConstructTreeService.setFactory.parameter.factory"></a>

- *Type:* <a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `of` <a name="of" id="cdk-orchestration.AppConstructTreeService.of"></a>

```typescript
public of(scope: IConstruct): any
```

Returns the cached service on an object, or creates one if none is available up the hierarchy.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppConstructTreeService.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUpOrCreate` <a name="searchUpOrCreate" id="cdk-orchestration.AppConstructTreeService.searchUpOrCreate"></a>

```typescript
public searchUpOrCreate(scope: IConstruct): ServiceQueryResult
```

Searches towards the root for a value.

If the value is found,
cache the value on the scope (to speed up future gets) and
return the pair.  If not, call the factory to create a value and
cache it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppConstructTreeService.searchUpOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.AppConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#cdk-orchestration.AppConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#cdk-orchestration.AppConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#cdk-orchestration.AppConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="cdk-orchestration.AppConstructTreeService.isFactory"></a>

```typescript
import { AppConstructTreeService } from 'cdk-orchestration'

AppConstructTreeService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="cdk-orchestration.AppConstructTreeService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="cdk-orchestration.AppConstructTreeService.scopeOf"></a>

```typescript
import { AppConstructTreeService } from 'cdk-orchestration'

AppConstructTreeService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="cdk-orchestration.AppConstructTreeService.scopeOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="cdk-orchestration.AppConstructTreeService.scopesOf"></a>

```typescript
import { AppConstructTreeService } from 'cdk-orchestration'

AppConstructTreeService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="cdk-orchestration.AppConstructTreeService.scopesOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="cdk-orchestration.AppConstructTreeService.serviceOf"></a>

```typescript
import { AppConstructTreeService } from 'cdk-orchestration'

AppConstructTreeService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="cdk-orchestration.AppConstructTreeService.serviceOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.AppConstructTreeService.property.props">props</a></code> | <code><a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.AppConstructTreeService.property.treeServiceProps">treeServiceProps</a></code> | <code><a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.AppConstructTreeService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="cdk-orchestration.AppConstructTreeService.property.treeServiceProps"></a>

```typescript
public readonly treeServiceProps: ConstructTreeServiceProps;
```

- *Type:* <a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---


### AppToken <a name="AppToken" id="cdk-orchestration.AppToken"></a>

Provides a way to map named tokens to their producers.

Names should be unique within the app.

#### Initializers <a name="Initializers" id="cdk-orchestration.AppToken.Initializer"></a>

```typescript
import { AppToken } from 'cdk-orchestration'

new AppToken()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.AppToken.any">any</a></code> | Creates a named token. |
| <code><a href="#cdk-orchestration.AppToken.list">list</a></code> | Creates a named token. |
| <code><a href="#cdk-orchestration.AppToken.number">number</a></code> | Creates a named token. |
| <code><a href="#cdk-orchestration.AppToken.resolveAny">resolveAny</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.AppToken.resolveList">resolveList</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.AppToken.resolveNumber">resolveNumber</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.AppToken.resolveString">resolveString</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.AppToken.string">string</a></code> | Creates a named token. |

---

##### `any` <a name="any" id="cdk-orchestration.AppToken.any"></a>

```typescript
import { AppToken } from 'cdk-orchestration'

AppToken.any(scope: IConstruct, name: string, options?: LazyAnyValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppToken.any.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.AppToken.any.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.AppToken.any.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyAnyValueOptions

---

##### `list` <a name="list" id="cdk-orchestration.AppToken.list"></a>

```typescript
import { AppToken } from 'cdk-orchestration'

AppToken.list(scope: IConstruct, name: string, options?: LazyListValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppToken.list.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.AppToken.list.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.AppToken.list.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyListValueOptions

---

##### `number` <a name="number" id="cdk-orchestration.AppToken.number"></a>

```typescript
import { AppToken } from 'cdk-orchestration'

AppToken.number(scope: IConstruct, name: string)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppToken.number.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.AppToken.number.parameter.name"></a>

- *Type:* string

---

##### `resolveAny` <a name="resolveAny" id="cdk-orchestration.AppToken.resolveAny"></a>

```typescript
import { AppToken } from 'cdk-orchestration'

AppToken.resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppToken.resolveAny.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.AppToken.resolveAny.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.AppToken.resolveAny.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableAnyProducer

---

##### `resolveList` <a name="resolveList" id="cdk-orchestration.AppToken.resolveList"></a>

```typescript
import { AppToken } from 'cdk-orchestration'

AppToken.resolveList(scope: IConstruct, name: string, producer: IStableListProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppToken.resolveList.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.AppToken.resolveList.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.AppToken.resolveList.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableListProducer

---

##### `resolveNumber` <a name="resolveNumber" id="cdk-orchestration.AppToken.resolveNumber"></a>

```typescript
import { AppToken } from 'cdk-orchestration'

AppToken.resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppToken.resolveNumber.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.AppToken.resolveNumber.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.AppToken.resolveNumber.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableNumberProducer

---

##### `resolveString` <a name="resolveString" id="cdk-orchestration.AppToken.resolveString"></a>

```typescript
import { AppToken } from 'cdk-orchestration'

AppToken.resolveString(scope: IConstruct, name: string, producer: IStableStringProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppToken.resolveString.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.AppToken.resolveString.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.AppToken.resolveString.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableStringProducer

---

##### `string` <a name="string" id="cdk-orchestration.AppToken.string"></a>

```typescript
import { AppToken } from 'cdk-orchestration'

AppToken.string(scope: IConstruct, name: string, options?: LazyStringValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.AppToken.string.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.AppToken.string.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.AppToken.string.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyStringValueOptions

---



### CfnElementUtilities <a name="CfnElementUtilities" id="cdk-orchestration.CfnElementUtilities"></a>

Utilities for use with CfnElement.

#### Initializers <a name="Initializers" id="cdk-orchestration.CfnElementUtilities.Initializer"></a>

```typescript
import { CfnElementUtilities } from 'cdk-orchestration'

new CfnElementUtilities()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.CfnElementUtilities.cfnElementHost">cfnElementHost</a></code> | Returns the antecedent cnfElement in the tree  (if any). |
| <code><a href="#cdk-orchestration.CfnElementUtilities.cfnElements">cfnElements</a></code> | Returns a list of all L1 construct descendents of the scope. |

---

##### `cfnElementHost` <a name="cfnElementHost" id="cdk-orchestration.CfnElementUtilities.cfnElementHost"></a>

```typescript
public cfnElementHost(scope: Construct): IConstruct
```

Returns the antecedent cnfElement in the tree  (if any).

Basially, CfnElement.of (like Stack.of).

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.CfnElementUtilities.cfnElementHost.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `cfnElements` <a name="cfnElements" id="cdk-orchestration.CfnElementUtilities.cfnElements"></a>

```typescript
public cfnElements(scope: Construct): CfnElement[]
```

Returns a list of all L1 construct descendents of the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.CfnElementUtilities.cfnElements.parameter.scope"></a>

- *Type:* constructs.Construct

---




### CfnIncludeToCdk <a name="CfnIncludeToCdk" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk"></a>

Utilities for converting resources from CfnInclude to a CDK L2-derived class.

#### Initializers <a name="Initializers" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.Initializer"></a>

```typescript
import { cloudformation_include } from 'cdk-orchestration'

new cloudformation_include.CfnIncludeToCdk()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.cloudformation_include.CfnIncludeToCdk.findIncluded">findIncluded</a></code> | Finds a construct from CfnIncludes in scope with the given logicalId. |
| <code><a href="#cdk-orchestration.cloudformation_include.CfnIncludeToCdk.isCfnInclude">isCfnInclude</a></code> | Returns true if the given construct is an instance of CfnInclude. |
| <code><a href="#cdk-orchestration.cloudformation_include.CfnIncludeToCdk.removeIncluded">removeIncluded</a></code> | Removes a construct from CfnInclude with the given logicalId. |
| <code><a href="#cdk-orchestration.cloudformation_include.CfnIncludeToCdk.replaceIncluded">replaceIncluded</a></code> | Replaces an L1 construct in a CfnInclude with an L1 or L2 CDK construct of your choosing. |
| <code><a href="#cdk-orchestration.cloudformation_include.CfnIncludeToCdk.setLogicalId">setLogicalId</a></code> | Sets the logical ID of the resource to the Node ID of the construct. |

---

##### `findIncluded` <a name="findIncluded" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.findIncluded"></a>

```typescript
import { cloudformation_include } from 'cdk-orchestration'

cloudformation_include.CfnIncludeToCdk.findIncluded(logicalId: string, scope: Construct)
```

Finds a construct from CfnIncludes in scope with the given logicalId.

###### `logicalId`<sup>Required</sup> <a name="logicalId" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.findIncluded.parameter.logicalId"></a>

- *Type:* string

---

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.findIncluded.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `isCfnInclude` <a name="isCfnInclude" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.isCfnInclude"></a>

```typescript
import { cloudformation_include } from 'cdk-orchestration'

cloudformation_include.CfnIncludeToCdk.isCfnInclude(x?: IConstruct)
```

Returns true if the given construct is an instance of CfnInclude.

###### `x`<sup>Optional</sup> <a name="x" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.isCfnInclude.parameter.x"></a>

- *Type:* constructs.IConstruct

---

##### `removeIncluded` <a name="removeIncluded" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.removeIncluded"></a>

```typescript
import { cloudformation_include } from 'cdk-orchestration'

cloudformation_include.CfnIncludeToCdk.removeIncluded(logicalId: string, scope: Construct)
```

Removes a construct from CfnInclude with the given logicalId.

Finds the CfnInclude in the stack of the given scope.

###### `logicalId`<sup>Required</sup> <a name="logicalId" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.removeIncluded.parameter.logicalId"></a>

- *Type:* string

---

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.removeIncluded.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `replaceIncluded` <a name="replaceIncluded" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.replaceIncluded"></a>

```typescript
import { cloudformation_include } from 'cdk-orchestration'

cloudformation_include.CfnIncludeToCdk.replaceIncluded(logicalId: string, replacementConstruct: Construct)
```

Replaces an L1 construct in a CfnInclude with an L1 or L2 CDK construct of your choosing.

Removes the original imported L1 for the construct from the CfnInclude.
- Sets the logical resource ID of the replacement to the correct value so it acts as a drop-in replacement.

If the L1 cannot be found, this function assumes the related CfnInclude is converted
and was removed from the stack.

FUTURE: Ensure the new construct is of the same resource type as the old one?  Is that useful?

###### `logicalId`<sup>Required</sup> <a name="logicalId" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.replaceIncluded.parameter.logicalId"></a>

- *Type:* string

Logical ID of the construct we are replacing.

---

###### `replacementConstruct`<sup>Required</sup> <a name="replacementConstruct" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.replaceIncluded.parameter.replacementConstruct"></a>

- *Type:* constructs.Construct

Construct that should be replacing the included construct.

---

##### `setLogicalId` <a name="setLogicalId" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.setLogicalId"></a>

```typescript
import { cloudformation_include } from 'cdk-orchestration'

cloudformation_include.CfnIncludeToCdk.setLogicalId(construct: Construct, id?: string)
```

Sets the logical ID of the resource to the Node ID of the construct.

This should be used when you want the resource ID to be the same as the Node ID.
Such as when you are replicating an existing hand-crafted template.

Note:  This function L1 or L2 constructs, or any case where there is one L1 in the
sub-tree.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.setLogicalId.parameter.construct"></a>

- *Type:* constructs.Construct

The resource construct.

---

###### `id`<sup>Optional</sup> <a name="id" id="cdk-orchestration.cloudformation_include.CfnIncludeToCdk.setLogicalId.parameter.id"></a>

- *Type:* string

---



### ConstructHost <a name="ConstructHost" id="cdk-orchestration.ConstructHost"></a>

Helper class to make it easier for a construct to "host" constructs of a specific type, as defined by Construct RTTI.

#### Initializers <a name="Initializers" id="cdk-orchestration.ConstructHost.Initializer"></a>

```typescript
import { ConstructHost } from 'cdk-orchestration'

new ConstructHost(props: ConstructHostProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructHost.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-orchestration.ConstructHostProps">ConstructHostProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.ConstructHost.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-orchestration.ConstructHostProps">ConstructHostProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.ConstructHost.getHostedConstructs">getHostedConstructs</a></code> | Returns constructs that match the hosted type that are under scope. |

---

##### `getHostedConstructs` <a name="getHostedConstructs" id="cdk-orchestration.ConstructHost.getHostedConstructs"></a>

```typescript
public getHostedConstructs(scope: IConstruct): IConstruct[]
```

Returns constructs that match the hosted type that are under scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructHost.getHostedConstructs.parameter.scope"></a>

- *Type:* constructs.IConstruct

Scope for the search.

Not required to be the host.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructHost.property.props">props</a></code> | <code><a href="#cdk-orchestration.ConstructHostProps">ConstructHostProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.ConstructHost.property.props"></a>

```typescript
public readonly props: ConstructHostProps;
```

- *Type:* <a href="#cdk-orchestration.ConstructHostProps">ConstructHostProps</a>

---


### ConstructRunTimeTypeInfo <a name="ConstructRunTimeTypeInfo" id="cdk-orchestration.ConstructRunTimeTypeInfo"></a>

This class should be used for symbol-based Construct RTTI.

#### Initializers <a name="Initializers" id="cdk-orchestration.ConstructRunTimeTypeInfo.Initializer"></a>

```typescript
import { ConstructRunTimeTypeInfo } from 'cdk-orchestration'

new ConstructRunTimeTypeInfo(props: ConstructServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.ConstructRunTimeTypeInfo.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.addRtti">addRtti</a></code> | Sets the RTTI of the construct.  Should be called from a Construct constructor. |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.hasRtti">hasRtti</a></code> | Returns true if the construct has this RTTI set on it. |

---

##### `get` <a name="get" id="cdk-orchestration.ConstructRunTimeTypeInfo.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructRunTimeTypeInfo.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="cdk-orchestration.ConstructRunTimeTypeInfo.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructRunTimeTypeInfo.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="cdk-orchestration.ConstructRunTimeTypeInfo.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructRunTimeTypeInfo.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.ConstructRunTimeTypeInfo.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="cdk-orchestration.ConstructRunTimeTypeInfo.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructRunTimeTypeInfo.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="cdk-orchestration.ConstructRunTimeTypeInfo.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructRunTimeTypeInfo.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="cdk-orchestration.ConstructRunTimeTypeInfo.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructRunTimeTypeInfo.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.ConstructRunTimeTypeInfo.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="cdk-orchestration.ConstructRunTimeTypeInfo.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructRunTimeTypeInfo.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="cdk-orchestration.ConstructRunTimeTypeInfo.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="cdk-orchestration.ConstructRunTimeTypeInfo.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructRunTimeTypeInfo.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="cdk-orchestration.ConstructRunTimeTypeInfo.setFactory.parameter.factory"></a>

- *Type:* <a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `addRtti` <a name="addRtti" id="cdk-orchestration.ConstructRunTimeTypeInfo.addRtti"></a>

```typescript
public addRtti(scope: IConstruct): any
```

Sets the RTTI of the construct.  Should be called from a Construct constructor.

Obviously a construct can have many of these, so be thoughtful.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructRunTimeTypeInfo.addRtti.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `hasRtti` <a name="hasRtti" id="cdk-orchestration.ConstructRunTimeTypeInfo.hasRtti"></a>

```typescript
public hasRtti(scope: IConstruct): boolean
```

Returns true if the construct has this RTTI set on it.

Used to implement ConstructXXX:isConstructXXX functions.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructRunTimeTypeInfo.hasRtti.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="cdk-orchestration.ConstructRunTimeTypeInfo.isFactory"></a>

```typescript
import { ConstructRunTimeTypeInfo } from 'cdk-orchestration'

ConstructRunTimeTypeInfo.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="cdk-orchestration.ConstructRunTimeTypeInfo.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="cdk-orchestration.ConstructRunTimeTypeInfo.scopeOf"></a>

```typescript
import { ConstructRunTimeTypeInfo } from 'cdk-orchestration'

ConstructRunTimeTypeInfo.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="cdk-orchestration.ConstructRunTimeTypeInfo.scopeOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="cdk-orchestration.ConstructRunTimeTypeInfo.scopesOf"></a>

```typescript
import { ConstructRunTimeTypeInfo } from 'cdk-orchestration'

ConstructRunTimeTypeInfo.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="cdk-orchestration.ConstructRunTimeTypeInfo.scopesOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="cdk-orchestration.ConstructRunTimeTypeInfo.serviceOf"></a>

```typescript
import { ConstructRunTimeTypeInfo } from 'cdk-orchestration'

ConstructRunTimeTypeInfo.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="cdk-orchestration.ConstructRunTimeTypeInfo.serviceOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructRunTimeTypeInfo.property.props">props</a></code> | <code><a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.ConstructRunTimeTypeInfo.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---


### ConstructService <a name="ConstructService" id="cdk-orchestration.ConstructService"></a>

Defines a service (symbol-keyed property) that can be stored on a construct.

Symbol-keyed properties are rarely used directly by end users.  Usage is normally
through construct methods, such as Stack.of and Stack.isStack in the CDK.

This class and it's derivatives make it easier to use symbol-keyed properites in the CDK.

#### Initializers <a name="Initializers" id="cdk-orchestration.ConstructService.Initializer"></a>

```typescript
import { ConstructService } from 'cdk-orchestration'

new ConstructService(props: ConstructServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructService.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.ConstructService.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.ConstructService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#cdk-orchestration.ConstructService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#cdk-orchestration.ConstructService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#cdk-orchestration.ConstructService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#cdk-orchestration.ConstructService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#cdk-orchestration.ConstructService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#cdk-orchestration.ConstructService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#cdk-orchestration.ConstructService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |

---

##### `get` <a name="get" id="cdk-orchestration.ConstructService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="cdk-orchestration.ConstructService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="cdk-orchestration.ConstructService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.ConstructService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="cdk-orchestration.ConstructService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="cdk-orchestration.ConstructService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="cdk-orchestration.ConstructService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.ConstructService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="cdk-orchestration.ConstructService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="cdk-orchestration.ConstructService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="cdk-orchestration.ConstructService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="cdk-orchestration.ConstructService.setFactory.parameter.factory"></a>

- *Type:* <a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.ConstructService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#cdk-orchestration.ConstructService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#cdk-orchestration.ConstructService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#cdk-orchestration.ConstructService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="cdk-orchestration.ConstructService.isFactory"></a>

```typescript
import { ConstructService } from 'cdk-orchestration'

ConstructService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="cdk-orchestration.ConstructService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="cdk-orchestration.ConstructService.scopeOf"></a>

```typescript
import { ConstructService } from 'cdk-orchestration'

ConstructService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="cdk-orchestration.ConstructService.scopeOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="cdk-orchestration.ConstructService.scopesOf"></a>

```typescript
import { ConstructService } from 'cdk-orchestration'

ConstructService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="cdk-orchestration.ConstructService.scopesOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="cdk-orchestration.ConstructService.serviceOf"></a>

```typescript
import { ConstructService } from 'cdk-orchestration'

ConstructService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="cdk-orchestration.ConstructService.serviceOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructService.property.props">props</a></code> | <code><a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.ConstructService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---


### ConstructTreeSearch <a name="ConstructTreeSearch" id="cdk-orchestration.ConstructTreeSearch"></a>

Searches the construct tree based on predicate and stopConditions.

Three searches are supported: {@link searchSelf}, {@link searchDown}
and {@link searchUp}.

QueryResult should either be, or contain (as a property), the construct itself,
so you know which construct to associate with the query result.

#### Initializers <a name="Initializers" id="cdk-orchestration.ConstructTreeSearch.Initializer"></a>

```typescript
import { ConstructTreeSearch } from 'cdk-orchestration'

new ConstructTreeSearch(predicate: IConstructPredicate)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructTreeSearch.Initializer.parameter.predicate">predicate</a></code> | <code><a href="#cdk-orchestration.IConstructPredicate">IConstructPredicate</a></code> | *No description.* |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="cdk-orchestration.ConstructTreeSearch.Initializer.parameter.predicate"></a>

- *Type:* <a href="#cdk-orchestration.IConstructPredicate">IConstructPredicate</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.ConstructTreeSearch.searchDown">searchDown</a></code> | Returns array of results based on predicate, searching the sub-tree starting at scope. |
| <code><a href="#cdk-orchestration.ConstructTreeSearch.searchSelf">searchSelf</a></code> | Returns T or undefined for the scope, based on predicate. |
| <code><a href="#cdk-orchestration.ConstructTreeSearch.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty. |

---

##### `searchDown` <a name="searchDown" id="cdk-orchestration.ConstructTreeSearch.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition, into?: IConstruct[]): IConstruct[]
```

Returns array of results based on predicate, searching the sub-tree starting at scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeSearch.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

Start for search.

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.ConstructTreeSearch.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

End for search (such as sub stack).

---

###### `into`<sup>Optional</sup> <a name="into" id="cdk-orchestration.ConstructTreeSearch.searchDown.parameter.into"></a>

- *Type:* constructs.IConstruct[]

Array of results.

Same as return value.

---

##### `searchSelf` <a name="searchSelf" id="cdk-orchestration.ConstructTreeSearch.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): IConstruct
```

Returns T or undefined for the scope, based on predicate.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeSearch.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="cdk-orchestration.ConstructTreeSearch.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): IConstruct
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty.

Uses stopCondition to decide where to stop the searchUp, defaults to root.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeSearch.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.ConstructTreeSearch.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.ConstructTreeSearch.for">for</a></code> | Helper for finding constructs using ConstructTreeSearch with XXX.isXXX functions (such as Stack.isStack and CfnElement.isCfnElement).  Returns a construct predicate that itself returns only the construct, as opposed to ConstructService which returns both the construct and the service. |

---

##### `for` <a name="for" id="cdk-orchestration.ConstructTreeSearch.for"></a>

```typescript
import { ConstructTreeSearch } from 'cdk-orchestration'

ConstructTreeSearch.for(test: IConstuctTest)
```

Helper for finding constructs using ConstructTreeSearch with XXX.isXXX functions (such as Stack.isStack and CfnElement.isCfnElement).  Returns a construct predicate that itself returns only the construct, as opposed to ConstructService which returns both the construct and the service.

###### `test`<sup>Required</sup> <a name="test" id="cdk-orchestration.ConstructTreeSearch.for.parameter.test"></a>

- *Type:* <a href="#cdk-orchestration.IConstuctTest">IConstuctTest</a>

Test to use when finding constructs.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructTreeSearch.property.predicate">predicate</a></code> | <code><a href="#cdk-orchestration.IConstructPredicate">IConstructPredicate</a></code> | *No description.* |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="cdk-orchestration.ConstructTreeSearch.property.predicate"></a>

```typescript
public readonly predicate: IConstructPredicate;
```

- *Type:* <a href="#cdk-orchestration.IConstructPredicate">IConstructPredicate</a>

---


### ConstructTreeService <a name="ConstructTreeService" id="cdk-orchestration.ConstructTreeService"></a>

An IOC service stored in the construct tree with heirarchical lookup.

If the service is not found on a consturct, it is looked for up the tree and then is cached on
the construct.

#### Initializers <a name="Initializers" id="cdk-orchestration.ConstructTreeService.Initializer"></a>

```typescript
import { ConstructTreeService } from 'cdk-orchestration'

new ConstructTreeService(treeServiceProps: ConstructTreeServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructTreeService.Initializer.parameter.treeServiceProps">treeServiceProps</a></code> | <code><a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="cdk-orchestration.ConstructTreeService.Initializer.parameter.treeServiceProps"></a>

- *Type:* <a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.ConstructTreeService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#cdk-orchestration.ConstructTreeService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#cdk-orchestration.ConstructTreeService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#cdk-orchestration.ConstructTreeService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#cdk-orchestration.ConstructTreeService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#cdk-orchestration.ConstructTreeService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#cdk-orchestration.ConstructTreeService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#cdk-orchestration.ConstructTreeService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#cdk-orchestration.ConstructTreeService.of">of</a></code> | Returns the cached service on an object, or creates one if none is available up the hierarchy. |
| <code><a href="#cdk-orchestration.ConstructTreeService.searchUpOrCreate">searchUpOrCreate</a></code> | Searches towards the root for a value. |

---

##### `get` <a name="get" id="cdk-orchestration.ConstructTreeService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="cdk-orchestration.ConstructTreeService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="cdk-orchestration.ConstructTreeService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.ConstructTreeService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="cdk-orchestration.ConstructTreeService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="cdk-orchestration.ConstructTreeService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="cdk-orchestration.ConstructTreeService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.ConstructTreeService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="cdk-orchestration.ConstructTreeService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="cdk-orchestration.ConstructTreeService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="cdk-orchestration.ConstructTreeService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="cdk-orchestration.ConstructTreeService.setFactory.parameter.factory"></a>

- *Type:* <a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `of` <a name="of" id="cdk-orchestration.ConstructTreeService.of"></a>

```typescript
public of(scope: IConstruct): any
```

Returns the cached service on an object, or creates one if none is available up the hierarchy.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeService.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUpOrCreate` <a name="searchUpOrCreate" id="cdk-orchestration.ConstructTreeService.searchUpOrCreate"></a>

```typescript
public searchUpOrCreate(scope: IConstruct): ServiceQueryResult
```

Searches towards the root for a value.

If the value is found,
cache the value on the scope (to speed up future gets) and
return the pair.  If not, call the factory to create a value and
cache it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ConstructTreeService.searchUpOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.ConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#cdk-orchestration.ConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#cdk-orchestration.ConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#cdk-orchestration.ConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="cdk-orchestration.ConstructTreeService.isFactory"></a>

```typescript
import { ConstructTreeService } from 'cdk-orchestration'

ConstructTreeService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="cdk-orchestration.ConstructTreeService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="cdk-orchestration.ConstructTreeService.scopeOf"></a>

```typescript
import { ConstructTreeService } from 'cdk-orchestration'

ConstructTreeService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="cdk-orchestration.ConstructTreeService.scopeOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="cdk-orchestration.ConstructTreeService.scopesOf"></a>

```typescript
import { ConstructTreeService } from 'cdk-orchestration'

ConstructTreeService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="cdk-orchestration.ConstructTreeService.scopesOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="cdk-orchestration.ConstructTreeService.serviceOf"></a>

```typescript
import { ConstructTreeService } from 'cdk-orchestration'

ConstructTreeService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="cdk-orchestration.ConstructTreeService.serviceOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ConstructTreeService.property.props">props</a></code> | <code><a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.ConstructTreeService.property.treeServiceProps">treeServiceProps</a></code> | <code><a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.ConstructTreeService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="cdk-orchestration.ConstructTreeService.property.treeServiceProps"></a>

```typescript
public readonly treeServiceProps: ConstructTreeServiceProps;
```

- *Type:* <a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---


### CustomResourceUtilities <a name="CustomResourceUtilities" id="cdk-orchestration.custom_resources.CustomResourceUtilities"></a>

Utilities for creating custom resources.

#### Initializers <a name="Initializers" id="cdk-orchestration.custom_resources.CustomResourceUtilities.Initializer"></a>

```typescript
import { custom_resources } from 'cdk-orchestration'

new custom_resources.CustomResourceUtilities()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.custom_resources.CustomResourceUtilities.findCustomResource">findCustomResource</a></code> | Returns the CfnResource that produces the custom resource. |
| <code><a href="#cdk-orchestration.custom_resources.CustomResourceUtilities.runResourceAlways">runResourceAlways</a></code> | Always run a custom resource. |

---

##### `findCustomResource` <a name="findCustomResource" id="cdk-orchestration.custom_resources.CustomResourceUtilities.findCustomResource"></a>

```typescript
public findCustomResource(target: Construct): CfnResource
```

Returns the CfnResource that produces the custom resource.

This function throws
if there are none (or more than one).

###### `target`<sup>Required</sup> <a name="target" id="cdk-orchestration.custom_resources.CustomResourceUtilities.findCustomResource.parameter.target"></a>

- *Type:* constructs.Construct

---

##### `runResourceAlways` <a name="runResourceAlways" id="cdk-orchestration.custom_resources.CustomResourceUtilities.runResourceAlways"></a>

```typescript
public runResourceAlways(target: Construct): void
```

Always run a custom resource.

Throws if it cannot find one custom resource under target.

###### `target`<sup>Required</sup> <a name="target" id="cdk-orchestration.custom_resources.CustomResourceUtilities.runResourceAlways.parameter.target"></a>

- *Type:* constructs.Construct

CustomResource, AwsCustomResource or similar.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.custom_resources.CustomResourceUtilities.isCustomResource">isCustomResource</a></code> | *No description.* |

---

##### `isCustomResource` <a name="isCustomResource" id="cdk-orchestration.custom_resources.CustomResourceUtilities.isCustomResource"></a>

```typescript
import { custom_resources } from 'cdk-orchestration'

custom_resources.CustomResourceUtilities.isCustomResource(elt: Construct)
```

###### `elt`<sup>Required</sup> <a name="elt" id="cdk-orchestration.custom_resources.CustomResourceUtilities.isCustomResource.parameter.elt"></a>

- *Type:* constructs.Construct

---



### Log <a name="Log" id="cdk-orchestration.Log"></a>

Scoped logging.

Allows users to turn logging on and off for individual constructs or whole sub-trees
of the construct tree.  LoggingAspect will set the LogLevel of

#### Initializers <a name="Initializers" id="cdk-orchestration.Log.Initializer"></a>

```typescript
import { Log } from 'cdk-orchestration'

new Log(scope: Construct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.Log.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.Log.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.Log.debug">debug</a></code> | {@link Logger} will log this via {@link console.debug}. |
| <code><a href="#cdk-orchestration.Log.error">error</a></code> | {@link Logger} will log this via {@link console.error}. |
| <code><a href="#cdk-orchestration.Log.info">info</a></code> | {@link Logger} will log this via {@link console.info}. |
| <code><a href="#cdk-orchestration.Log.warn">warn</a></code> | {@link Logger} will log this via {@link console.warn}. |

---

##### `debug` <a name="debug" id="cdk-orchestration.Log.debug"></a>

```typescript
public debug(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.debug}.

###### `msg`<sup>Required</sup> <a name="msg" id="cdk-orchestration.Log.debug.parameter.msg"></a>

- *Type:* string | <a href="#cdk-orchestration.IStringProvider">IStringProvider</a>

---

##### `error` <a name="error" id="cdk-orchestration.Log.error"></a>

```typescript
public error(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.error}.

###### `msg`<sup>Required</sup> <a name="msg" id="cdk-orchestration.Log.error.parameter.msg"></a>

- *Type:* string | <a href="#cdk-orchestration.IStringProvider">IStringProvider</a>

---

##### `info` <a name="info" id="cdk-orchestration.Log.info"></a>

```typescript
public info(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.info}.

###### `msg`<sup>Required</sup> <a name="msg" id="cdk-orchestration.Log.info.parameter.msg"></a>

- *Type:* string | <a href="#cdk-orchestration.IStringProvider">IStringProvider</a>

---

##### `warn` <a name="warn" id="cdk-orchestration.Log.warn"></a>

```typescript
public warn(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.warn}.

###### `msg`<sup>Required</sup> <a name="msg" id="cdk-orchestration.Log.warn.parameter.msg"></a>

- *Type:* string | <a href="#cdk-orchestration.IStringProvider">IStringProvider</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.Log.of">of</a></code> | *No description.* |

---

##### `of` <a name="of" id="cdk-orchestration.Log.of"></a>

```typescript
import { Log } from 'cdk-orchestration'

Log.of(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.Log.of.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.Log.property.logger">logger</a></code> | <code><a href="#cdk-orchestration.ILogger">ILogger</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.Log.property.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |

---

##### `logger`<sup>Required</sup> <a name="logger" id="cdk-orchestration.Log.property.logger"></a>

```typescript
public readonly logger: ILogger;
```

- *Type:* <a href="#cdk-orchestration.ILogger">ILogger</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.Log.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* constructs.Construct

---


### Logger <a name="Logger" id="cdk-orchestration.Logger"></a>

- *Implements:* <a href="#cdk-orchestration.ILogger">ILogger</a>

Node console logger.

Provides scoped logging to a construct.

#### Initializers <a name="Initializers" id="cdk-orchestration.Logger.Initializer"></a>

```typescript
import { Logger } from 'cdk-orchestration'

new Logger(props?: LoggerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.Logger.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-orchestration.LoggerProps">LoggerProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-orchestration.Logger.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-orchestration.LoggerProps">LoggerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.Logger.levelColor">levelColor</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.Logger.levelName">levelName</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.Logger.log">log</a></code> | *No description.* |

---

##### `levelColor` <a name="levelColor" id="cdk-orchestration.Logger.levelColor"></a>

```typescript
public levelColor(logLevel: number): string
```

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="cdk-orchestration.Logger.levelColor.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

##### `levelName` <a name="levelName" id="cdk-orchestration.Logger.levelName"></a>

```typescript
public levelName(logLevel: number): string
```

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="cdk-orchestration.Logger.levelName.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

##### `log` <a name="log" id="cdk-orchestration.Logger.log"></a>

```typescript
public log(scope: Construct, logLevel: number, message: string | IStringProvider): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.Logger.log.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="cdk-orchestration.Logger.log.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

###### `message`<sup>Required</sup> <a name="message" id="cdk-orchestration.Logger.log.parameter.message"></a>

- *Type:* string | <a href="#cdk-orchestration.IStringProvider">IStringProvider</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.Logger.of">of</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.Logger.set">set</a></code> | *No description.* |

---

##### `of` <a name="of" id="cdk-orchestration.Logger.of"></a>

```typescript
import { Logger } from 'cdk-orchestration'

Logger.of(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.Logger.of.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `set` <a name="set" id="cdk-orchestration.Logger.set"></a>

```typescript
import { Logger } from 'cdk-orchestration'

Logger.set(scope: Construct, logger: ILogger)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.Logger.set.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logger`<sup>Required</sup> <a name="logger" id="cdk-orchestration.Logger.set.parameter.logger"></a>

- *Type:* <a href="#cdk-orchestration.ILogger">ILogger</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.Logger.property.logLevel">logLevel</a></code> | <code>number</code> | Returns the current log level. |
| <code><a href="#cdk-orchestration.Logger.property.props">props</a></code> | <code><a href="#cdk-orchestration.LoggerProps">LoggerProps</a></code> | *No description.* |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="cdk-orchestration.Logger.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

Returns the current log level.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.Logger.property.props"></a>

```typescript
public readonly props: LoggerProps;
```

- *Type:* <a href="#cdk-orchestration.LoggerProps">LoggerProps</a>

---


### NoOpLogger <a name="NoOpLogger" id="cdk-orchestration.NoOpLogger"></a>

#### Initializers <a name="Initializers" id="cdk-orchestration.NoOpLogger.Initializer"></a>

```typescript
import { NoOpLogger } from 'cdk-orchestration'

new NoOpLogger()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.NoOpLogger.levelColor">levelColor</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.NoOpLogger.levelName">levelName</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.NoOpLogger.log">log</a></code> | *No description.* |

---

##### `levelColor` <a name="levelColor" id="cdk-orchestration.NoOpLogger.levelColor"></a>

```typescript
public levelColor(logLevel: number): string
```

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="cdk-orchestration.NoOpLogger.levelColor.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

##### `levelName` <a name="levelName" id="cdk-orchestration.NoOpLogger.levelName"></a>

```typescript
public levelName(logLevel: number): string
```

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="cdk-orchestration.NoOpLogger.levelName.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

##### `log` <a name="log" id="cdk-orchestration.NoOpLogger.log"></a>

```typescript
public log(scope: Construct, logLevel: number, message: string | IStringProvider): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.NoOpLogger.log.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="cdk-orchestration.NoOpLogger.log.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

###### `message`<sup>Required</sup> <a name="message" id="cdk-orchestration.NoOpLogger.log.parameter.message"></a>

- *Type:* string | <a href="#cdk-orchestration.IStringProvider">IStringProvider</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.NoOpLogger.of">of</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.NoOpLogger.set">set</a></code> | *No description.* |

---

##### `of` <a name="of" id="cdk-orchestration.NoOpLogger.of"></a>

```typescript
import { NoOpLogger } from 'cdk-orchestration'

NoOpLogger.of(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.NoOpLogger.of.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `set` <a name="set" id="cdk-orchestration.NoOpLogger.set"></a>

```typescript
import { NoOpLogger } from 'cdk-orchestration'

NoOpLogger.set(scope: Construct, logger: ILogger)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.NoOpLogger.set.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logger`<sup>Required</sup> <a name="logger" id="cdk-orchestration.NoOpLogger.set.parameter.logger"></a>

- *Type:* <a href="#cdk-orchestration.ILogger">ILogger</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.NoOpLogger.property.logLevel">logLevel</a></code> | <code>number</code> | Returns the current log level. |
| <code><a href="#cdk-orchestration.NoOpLogger.property.props">props</a></code> | <code><a href="#cdk-orchestration.LoggerProps">LoggerProps</a></code> | *No description.* |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="cdk-orchestration.NoOpLogger.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

Returns the current log level.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.NoOpLogger.property.props"></a>

```typescript
public readonly props: LoggerProps;
```

- *Type:* <a href="#cdk-orchestration.LoggerProps">LoggerProps</a>

---


### PostResolveToken <a name="PostResolveToken" id="cdk-orchestration.PostResolveToken"></a>

- *Implements:* aws-cdk-lib.IResolvable, aws-cdk-lib.IPostProcessor

Copied out of the CDK.

Because not public.

#### Initializers <a name="Initializers" id="cdk-orchestration.PostResolveToken.Initializer"></a>

```typescript
import { PostResolveToken } from 'cdk-orchestration'

new PostResolveToken(value: any, processor: IProcessor)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.PostResolveToken.Initializer.parameter.value">value</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdk-orchestration.PostResolveToken.Initializer.parameter.processor">processor</a></code> | <code><a href="#cdk-orchestration.IProcessor">IProcessor</a></code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-orchestration.PostResolveToken.Initializer.parameter.value"></a>

- *Type:* any

---

##### `processor`<sup>Required</sup> <a name="processor" id="cdk-orchestration.PostResolveToken.Initializer.parameter.processor"></a>

- *Type:* <a href="#cdk-orchestration.IProcessor">IProcessor</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.PostResolveToken.postProcess">postProcess</a></code> | Process the completely resolved value, after full recursion/resolution has happened. |
| <code><a href="#cdk-orchestration.PostResolveToken.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#cdk-orchestration.PostResolveToken.toJSON">toJSON</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.PostResolveToken.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `postProcess` <a name="postProcess" id="cdk-orchestration.PostResolveToken.postProcess"></a>

```typescript
public postProcess(o: any, _context: IResolveContext): any
```

Process the completely resolved value, after full recursion/resolution has happened.

###### `o`<sup>Required</sup> <a name="o" id="cdk-orchestration.PostResolveToken.postProcess.parameter.o"></a>

- *Type:* any

---

###### `_context`<sup>Required</sup> <a name="_context" id="cdk-orchestration.PostResolveToken.postProcess.parameter._context"></a>

- *Type:* aws-cdk-lib.IResolveContext

---

##### `resolve` <a name="resolve" id="cdk-orchestration.PostResolveToken.resolve"></a>

```typescript
public resolve(context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `context`<sup>Required</sup> <a name="context" id="cdk-orchestration.PostResolveToken.resolve.parameter.context"></a>

- *Type:* aws-cdk-lib.IResolveContext

---

##### `toJSON` <a name="toJSON" id="cdk-orchestration.PostResolveToken.toJSON"></a>

```typescript
public toJSON(): any
```

##### `toString` <a name="toString" id="cdk-orchestration.PostResolveToken.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.PostResolveToken.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="cdk-orchestration.PostResolveToken.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

This may return an array with a single informational element indicating how
to get this property populated, if it was skipped for performance reasons.

---


### ServiceInspectorAspect <a name="ServiceInspectorAspect" id="cdk-orchestration.ServiceInspectorAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

Writes the names and types of all symbols on a construct to tree.json.

#### Initializers <a name="Initializers" id="cdk-orchestration.ServiceInspectorAspect.Initializer"></a>

```typescript
import { ServiceInspectorAspect } from 'cdk-orchestration'

new ServiceInspectorAspect()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.ServiceInspectorAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="cdk-orchestration.ServiceInspectorAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="cdk-orchestration.ServiceInspectorAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### Singleton <a name="Singleton" id="cdk-orchestration.Singleton"></a>

Manages singletons in the stack.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.Singleton.create">create</a></code> | Creates or returns a singleton object. |
| <code><a href="#cdk-orchestration.Singleton.isSingleton">isSingleton</a></code> | True if the construct has been marked as Singleton by this class. |
| <code><a href="#cdk-orchestration.Singleton.mark">mark</a></code> | Marks an existing construct as a singleton. |

---

##### `create` <a name="create" id="cdk-orchestration.Singleton.create"></a>

```typescript
import { Singleton } from 'cdk-orchestration'

Singleton.create(scope: Construct, id: string, factory: IConstructFactory)
```

Creates or returns a singleton object.

Throws if the existing object was not created or marked by this class.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.Singleton.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-orchestration.Singleton.create.parameter.id"></a>

- *Type:* string

---

###### `factory`<sup>Required</sup> <a name="factory" id="cdk-orchestration.Singleton.create.parameter.factory"></a>

- *Type:* <a href="#cdk-orchestration.IConstructFactory">IConstructFactory</a>

---

##### `isSingleton` <a name="isSingleton" id="cdk-orchestration.Singleton.isSingleton"></a>

```typescript
import { Singleton } from 'cdk-orchestration'

Singleton.isSingleton(x: IConstruct)
```

True if the construct has been marked as Singleton by this class.

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.Singleton.isSingleton.parameter.x"></a>

- *Type:* constructs.IConstruct

---

##### `mark` <a name="mark" id="cdk-orchestration.Singleton.mark"></a>

```typescript
import { Singleton } from 'cdk-orchestration'

Singleton.mark(scope: IConstruct)
```

Marks an existing construct as a singleton.

This allows Singletons created outside this class to be used
with this class.
Throws if the construct is not a direct child of a stack.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.Singleton.mark.parameter.scope"></a>

- *Type:* constructs.IConstruct

---



### StackConstructTreeService <a name="StackConstructTreeService" id="cdk-orchestration.StackConstructTreeService"></a>

A stack-scoped service that is found by looking up the tree.

Found services are cached on the querying scope to speed up subsequent lookups.

#### Initializers <a name="Initializers" id="cdk-orchestration.StackConstructTreeService.Initializer"></a>

```typescript
import { StackConstructTreeService } from 'cdk-orchestration'

new StackConstructTreeService(treeServiceProps: ConstructTreeServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.StackConstructTreeService.Initializer.parameter.treeServiceProps">treeServiceProps</a></code> | <code><a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="cdk-orchestration.StackConstructTreeService.Initializer.parameter.treeServiceProps"></a>

- *Type:* <a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.StackConstructTreeService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#cdk-orchestration.StackConstructTreeService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#cdk-orchestration.StackConstructTreeService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#cdk-orchestration.StackConstructTreeService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#cdk-orchestration.StackConstructTreeService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#cdk-orchestration.StackConstructTreeService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#cdk-orchestration.StackConstructTreeService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#cdk-orchestration.StackConstructTreeService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#cdk-orchestration.StackConstructTreeService.of">of</a></code> | Return the stack service for the construct. |
| <code><a href="#cdk-orchestration.StackConstructTreeService.searchUpOrCreate">searchUpOrCreate</a></code> | Searches towards the root for a value. |

---

##### `get` <a name="get" id="cdk-orchestration.StackConstructTreeService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackConstructTreeService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="cdk-orchestration.StackConstructTreeService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackConstructTreeService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="cdk-orchestration.StackConstructTreeService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackConstructTreeService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.StackConstructTreeService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="cdk-orchestration.StackConstructTreeService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackConstructTreeService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="cdk-orchestration.StackConstructTreeService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackConstructTreeService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="cdk-orchestration.StackConstructTreeService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackConstructTreeService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="cdk-orchestration.StackConstructTreeService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="cdk-orchestration.StackConstructTreeService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackConstructTreeService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="cdk-orchestration.StackConstructTreeService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="cdk-orchestration.StackConstructTreeService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackConstructTreeService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="cdk-orchestration.StackConstructTreeService.setFactory.parameter.factory"></a>

- *Type:* <a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `of` <a name="of" id="cdk-orchestration.StackConstructTreeService.of"></a>

```typescript
public of(construct: IConstruct): any
```

Return the stack service for the construct.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-orchestration.StackConstructTreeService.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `searchUpOrCreate` <a name="searchUpOrCreate" id="cdk-orchestration.StackConstructTreeService.searchUpOrCreate"></a>

```typescript
public searchUpOrCreate(scope: IConstruct): ServiceQueryResult
```

Searches towards the root for a value.

If the value is found,
cache the value on the scope (to speed up future gets) and
return the pair.  If not, call the factory to create a value and
cache it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackConstructTreeService.searchUpOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.StackConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#cdk-orchestration.StackConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#cdk-orchestration.StackConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#cdk-orchestration.StackConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="cdk-orchestration.StackConstructTreeService.isFactory"></a>

```typescript
import { StackConstructTreeService } from 'cdk-orchestration'

StackConstructTreeService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="cdk-orchestration.StackConstructTreeService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="cdk-orchestration.StackConstructTreeService.scopeOf"></a>

```typescript
import { StackConstructTreeService } from 'cdk-orchestration'

StackConstructTreeService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="cdk-orchestration.StackConstructTreeService.scopeOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="cdk-orchestration.StackConstructTreeService.scopesOf"></a>

```typescript
import { StackConstructTreeService } from 'cdk-orchestration'

StackConstructTreeService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="cdk-orchestration.StackConstructTreeService.scopesOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="cdk-orchestration.StackConstructTreeService.serviceOf"></a>

```typescript
import { StackConstructTreeService } from 'cdk-orchestration'

StackConstructTreeService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="cdk-orchestration.StackConstructTreeService.serviceOf.parameter.found"></a>

- *Type:* <a href="#cdk-orchestration.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.StackConstructTreeService.property.props">props</a></code> | <code><a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.StackConstructTreeService.property.treeServiceProps">treeServiceProps</a></code> | <code><a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-orchestration.StackConstructTreeService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#cdk-orchestration.ConstructServiceProps">ConstructServiceProps</a>

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="cdk-orchestration.StackConstructTreeService.property.treeServiceProps"></a>

```typescript
public readonly treeServiceProps: ConstructTreeServiceProps;
```

- *Type:* <a href="#cdk-orchestration.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---


### StackToken <a name="StackToken" id="cdk-orchestration.StackToken"></a>

Provides a way to map named tokens to their producers.

Names should be unique within a stack.

#### Initializers <a name="Initializers" id="cdk-orchestration.StackToken.Initializer"></a>

```typescript
import { StackToken } from 'cdk-orchestration'

new StackToken()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.StackToken.any">any</a></code> | Creates a named token. |
| <code><a href="#cdk-orchestration.StackToken.list">list</a></code> | Creates a named token. |
| <code><a href="#cdk-orchestration.StackToken.number">number</a></code> | Creates a named token. |
| <code><a href="#cdk-orchestration.StackToken.resolveAny">resolveAny</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.StackToken.resolveList">resolveList</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.StackToken.resolveNumber">resolveNumber</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.StackToken.resolveString">resolveString</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.StackToken.string">string</a></code> | Creates a named token. |

---

##### `any` <a name="any" id="cdk-orchestration.StackToken.any"></a>

```typescript
import { StackToken } from 'cdk-orchestration'

StackToken.any(scope: IConstruct, name: string, options?: LazyAnyValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackToken.any.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.StackToken.any.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.StackToken.any.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyAnyValueOptions

---

##### `list` <a name="list" id="cdk-orchestration.StackToken.list"></a>

```typescript
import { StackToken } from 'cdk-orchestration'

StackToken.list(scope: IConstruct, name: string, options?: LazyListValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackToken.list.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.StackToken.list.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.StackToken.list.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyListValueOptions

---

##### `number` <a name="number" id="cdk-orchestration.StackToken.number"></a>

```typescript
import { StackToken } from 'cdk-orchestration'

StackToken.number(scope: IConstruct, name: string)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackToken.number.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.StackToken.number.parameter.name"></a>

- *Type:* string

---

##### `resolveAny` <a name="resolveAny" id="cdk-orchestration.StackToken.resolveAny"></a>

```typescript
import { StackToken } from 'cdk-orchestration'

StackToken.resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackToken.resolveAny.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.StackToken.resolveAny.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.StackToken.resolveAny.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableAnyProducer

---

##### `resolveList` <a name="resolveList" id="cdk-orchestration.StackToken.resolveList"></a>

```typescript
import { StackToken } from 'cdk-orchestration'

StackToken.resolveList(scope: IConstruct, name: string, producer: IStableListProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackToken.resolveList.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.StackToken.resolveList.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.StackToken.resolveList.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableListProducer

---

##### `resolveNumber` <a name="resolveNumber" id="cdk-orchestration.StackToken.resolveNumber"></a>

```typescript
import { StackToken } from 'cdk-orchestration'

StackToken.resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackToken.resolveNumber.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.StackToken.resolveNumber.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.StackToken.resolveNumber.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableNumberProducer

---

##### `resolveString` <a name="resolveString" id="cdk-orchestration.StackToken.resolveString"></a>

```typescript
import { StackToken } from 'cdk-orchestration'

StackToken.resolveString(scope: IConstruct, name: string, producer: IStableStringProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackToken.resolveString.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.StackToken.resolveString.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.StackToken.resolveString.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableStringProducer

---

##### `string` <a name="string" id="cdk-orchestration.StackToken.string"></a>

```typescript
import { StackToken } from 'cdk-orchestration'

StackToken.string(scope: IConstruct, name: string, options?: LazyStringValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.StackToken.string.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.StackToken.string.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.StackToken.string.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyStringValueOptions

---



### TokenService <a name="TokenService" id="cdk-orchestration.TokenService"></a>

Service for tokens scoped to a construct.

Allows the user to cleanly separate token usage and resolution.
Users should use AppTokens or StackTokens instead of directly using this class.

#### Initializers <a name="Initializers" id="cdk-orchestration.TokenService.Initializer"></a>

```typescript
import { TokenService } from 'cdk-orchestration'

new TokenService(service: ConstructTreeService)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.TokenService.Initializer.parameter.service">service</a></code> | <code><a href="#cdk-orchestration.ConstructTreeService">ConstructTreeService</a></code> | *No description.* |

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-orchestration.TokenService.Initializer.parameter.service"></a>

- *Type:* <a href="#cdk-orchestration.ConstructTreeService">ConstructTreeService</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.TokenService.any">any</a></code> | Creates a named token. |
| <code><a href="#cdk-orchestration.TokenService.list">list</a></code> | Creates a named token. |
| <code><a href="#cdk-orchestration.TokenService.number">number</a></code> | Creates a named token. |
| <code><a href="#cdk-orchestration.TokenService.resolveAny">resolveAny</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.TokenService.resolveList">resolveList</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.TokenService.resolveNumber">resolveNumber</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.TokenService.resolveString">resolveString</a></code> | Registers a resolver for the named token. |
| <code><a href="#cdk-orchestration.TokenService.string">string</a></code> | Creates a named token. |

---

##### `any` <a name="any" id="cdk-orchestration.TokenService.any"></a>

```typescript
public any(scope: IConstruct, name: string, options?: LazyAnyValueOptions): IResolvable
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.TokenService.any.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.TokenService.any.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.TokenService.any.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyAnyValueOptions

---

##### `list` <a name="list" id="cdk-orchestration.TokenService.list"></a>

```typescript
public list(scope: IConstruct, name: string, options?: LazyListValueOptions): string[]
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.TokenService.list.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.TokenService.list.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.TokenService.list.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyListValueOptions

---

##### `number` <a name="number" id="cdk-orchestration.TokenService.number"></a>

```typescript
public number(scope: IConstruct, name: string): number
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.TokenService.number.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.TokenService.number.parameter.name"></a>

- *Type:* string

---

##### `resolveAny` <a name="resolveAny" id="cdk-orchestration.TokenService.resolveAny"></a>

```typescript
public resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.TokenService.resolveAny.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.TokenService.resolveAny.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.TokenService.resolveAny.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableAnyProducer

---

##### `resolveList` <a name="resolveList" id="cdk-orchestration.TokenService.resolveList"></a>

```typescript
public resolveList(scope: IConstruct, name: string, producer: IStableListProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.TokenService.resolveList.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.TokenService.resolveList.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.TokenService.resolveList.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableListProducer

---

##### `resolveNumber` <a name="resolveNumber" id="cdk-orchestration.TokenService.resolveNumber"></a>

```typescript
public resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.TokenService.resolveNumber.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.TokenService.resolveNumber.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.TokenService.resolveNumber.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableNumberProducer

---

##### `resolveString` <a name="resolveString" id="cdk-orchestration.TokenService.resolveString"></a>

```typescript
public resolveString(scope: IConstruct, name: string, producer: IStableStringProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.TokenService.resolveString.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.TokenService.resolveString.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="cdk-orchestration.TokenService.resolveString.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableStringProducer

---

##### `string` <a name="string" id="cdk-orchestration.TokenService.string"></a>

```typescript
public string(scope: IConstruct, name: string, options?: LazyStringValueOptions): string
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.TokenService.string.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk-orchestration.TokenService.string.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-orchestration.TokenService.string.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyStringValueOptions

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.TokenService.property.service">service</a></code> | <code><a href="#cdk-orchestration.ConstructTreeService">ConstructTreeService</a></code> | *No description.* |

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-orchestration.TokenService.property.service"></a>

```typescript
public readonly service: ConstructTreeService;
```

- *Type:* <a href="#cdk-orchestration.ConstructTreeService">ConstructTreeService</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.TokenService.property.TOKEN_SERVICE_FACTORY">TOKEN_SERVICE_FACTORY</a></code> | <code><a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a></code> | *No description.* |

---

##### `TOKEN_SERVICE_FACTORY`<sup>Required</sup> <a name="TOKEN_SERVICE_FACTORY" id="cdk-orchestration.TokenService.property.TOKEN_SERVICE_FACTORY"></a>

```typescript
public readonly TOKEN_SERVICE_FACTORY: IConstructServiceFactory;
```

- *Type:* <a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

---

### TransformHost <a name="TransformHost" id="cdk-orchestration.transforms.TransformHost"></a>

Static helpers.

#### Initializers <a name="Initializers" id="cdk-orchestration.transforms.TransformHost.Initializer"></a>

```typescript
import { transforms } from 'cdk-orchestration'

new transforms.TransformHost()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.transforms.TransformHost.ensureHosted">ensureHosted</a></code> | Ensures that a Transform is hosted by modifying the ancestor CfnElement or Stack (if necessary) so they can host transforms. |
| <code><a href="#cdk-orchestration.transforms.TransformHost.hook">hook</a></code> | This turns a Stack or CfnElement into a transform host. |
| <code><a href="#cdk-orchestration.transforms.TransformHost.isTransformHost">isTransformHost</a></code> | Returns true for any Stack or CfnElement that is a transform host, as well as for all CfnTransformHost constructs. |
| <code><a href="#cdk-orchestration.transforms.TransformHost.mark">mark</a></code> | Marks a construct as a TransformHost, isolating the transforms under it from the Stack. |
| <code><a href="#cdk-orchestration.transforms.TransformHost.of">of</a></code> | Note: This returns the transform host, which may be either a Stack, a CfnElement, or a CfnTransformHost. |

---

##### `ensureHosted` <a name="ensureHosted" id="cdk-orchestration.transforms.TransformHost.ensureHosted"></a>

```typescript
import { transforms } from 'cdk-orchestration'

transforms.TransformHost.ensureHosted(scope: Construct)
```

Ensures that a Transform is hosted by modifying the ancestor CfnElement or Stack (if necessary) so they can host transforms.

Ensures that Tranforms under a CfnElement apply to the CfnElement, and Transforms under
a Stack apply to the Stack.

Not being able to do this may not be fatal, so we don't throw.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.transforms.TransformHost.ensureHosted.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `hook` <a name="hook" id="cdk-orchestration.transforms.TransformHost.hook"></a>

```typescript
import { transforms } from 'cdk-orchestration'

transforms.TransformHost.hook(construct: IConstruct)
```

This turns a Stack or CfnElement into a transform host.

Called from the ensureHosted, which itself is called from
the CfnTransform constructor to ensure that the CfnTransform
is hosted either by a CfnElement or a Stack.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-orchestration.transforms.TransformHost.hook.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isTransformHost` <a name="isTransformHost" id="cdk-orchestration.transforms.TransformHost.isTransformHost"></a>

```typescript
import { transforms } from 'cdk-orchestration'

transforms.TransformHost.isTransformHost(scope: Construct)
```

Returns true for any Stack or CfnElement that is a transform host, as well as for all CfnTransformHost constructs.

It does NOT tell you that the object is of type CfnTransformHost.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.transforms.TransformHost.isTransformHost.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `mark` <a name="mark" id="cdk-orchestration.transforms.TransformHost.mark"></a>

```typescript
import { transforms } from 'cdk-orchestration'

transforms.TransformHost.mark(scope: Construct)
```

Marks a construct as a TransformHost, isolating the transforms under it from the Stack.

Host decides when to apply the descendent transforms.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.transforms.TransformHost.mark.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `of` <a name="of" id="cdk-orchestration.transforms.TransformHost.of"></a>

```typescript
import { transforms } from 'cdk-orchestration'

transforms.TransformHost.of(scope: Construct)
```

Note: This returns the transform host, which may be either a Stack, a CfnElement, or a CfnTransformHost.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.transforms.TransformHost.of.parameter.scope"></a>

- *Type:* constructs.Construct

---



### Transforms <a name="Transforms" id="cdk-orchestration.transforms.Transforms"></a>

This helper class can extract ICfnTransforms from a construct tree so they can be applied to a template.

This class is used by the framework to apply transforms, and can be used to import templates into
a CfnInclude construct.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.transforms.Transforms.apply">apply</a></code> | Applies the transforms on a scope to a template. |
| <code><a href="#cdk-orchestration.transforms.Transforms.get">get</a></code> | Returns all transforms attached to the scope as descendents. |

---

##### `apply` <a name="apply" id="cdk-orchestration.transforms.Transforms.apply"></a>

```typescript
public apply(template: any): any
```

Applies the transforms on a scope to a template.

###### `template`<sup>Required</sup> <a name="template" id="cdk-orchestration.transforms.Transforms.apply.parameter.template"></a>

- *Type:* any

---

##### `get` <a name="get" id="cdk-orchestration.transforms.Transforms.get"></a>

```typescript
public get(): ICfnTransform[]
```

Returns all transforms attached to the scope as descendents.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.transforms.Transforms.of">of</a></code> | Returns a transforms object for the scope. |

---

##### `of` <a name="of" id="cdk-orchestration.transforms.Transforms.of"></a>

```typescript
import { transforms } from 'cdk-orchestration'

transforms.Transforms.of(scope: IConstruct)
```

Returns a transforms object for the scope.

This object has access to all transforms attached to the scope
as descendents.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.transforms.Transforms.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.transforms.Transforms.property.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.transforms.Transforms.property.scope"></a>

```typescript
public readonly scope: IConstruct;
```

- *Type:* constructs.IConstruct

---


### TreeInspectable <a name="TreeInspectable" id="cdk-orchestration.TreeInspectable"></a>

- *Implements:* aws-cdk-lib.IInspectable

Makes any construct IInspectable so it can add metadata to the tree.json file without creating new constructs.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.TreeInspectable.addAttribute">addAttribute</a></code> | Adds attribute to bag. |
| <code><a href="#cdk-orchestration.TreeInspectable.inspect">inspect</a></code> | Called by the CDK to write attribute to tree.json file. |

---

##### `addAttribute` <a name="addAttribute" id="cdk-orchestration.TreeInspectable.addAttribute"></a>

```typescript
public addAttribute(key: string, value: any): void
```

Adds attribute to bag.

Keys should be added by convention to prevent conflicts
i.e. L1 constructs will contain attributes with keys prefixed with aws:cdk:cloudformation

###### `key`<sup>Required</sup> <a name="key" id="cdk-orchestration.TreeInspectable.addAttribute.parameter.key"></a>

- *Type:* string

key for metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk-orchestration.TreeInspectable.addAttribute.parameter.value"></a>

- *Type:* any

value of metadata.

---

##### `inspect` <a name="inspect" id="cdk-orchestration.TreeInspectable.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Called by the CDK to write attribute to tree.json file.

###### `inspector`<sup>Required</sup> <a name="inspector" id="cdk-orchestration.TreeInspectable.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.TreeInspectable.isInspectable">isInspectable</a></code> | True if a construct supports IInspectable interface. |
| <code><a href="#cdk-orchestration.TreeInspectable.of">of</a></code> | Returns or creates a TreeInspectable for the given construct. |

---

##### `isInspectable` <a name="isInspectable" id="cdk-orchestration.TreeInspectable.isInspectable"></a>

```typescript
import { TreeInspectable } from 'cdk-orchestration'

TreeInspectable.isInspectable(inspectable: any)
```

True if a construct supports IInspectable interface.

###### `inspectable`<sup>Required</sup> <a name="inspectable" id="cdk-orchestration.TreeInspectable.isInspectable.parameter.inspectable"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdk-orchestration.TreeInspectable.of"></a>

```typescript
import { TreeInspectable } from 'cdk-orchestration'

TreeInspectable.of(scope: IConstruct)
```

Returns or creates a TreeInspectable for the given construct.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.TreeInspectable.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.TreeInspectable.property.attributes">attributes</a></code> | <code>{[ key: string ]: any}</code> | Represents the bag of attributes as key-value pairs. |
| <code><a href="#cdk-orchestration.TreeInspectable.property.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="cdk-orchestration.TreeInspectable.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Represents the bag of attributes as key-value pairs.

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.TreeInspectable.property.scope"></a>

```typescript
public readonly scope: IConstruct;
```

- *Type:* constructs.IConstruct

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.TreeInspectable.property.TREE_INSPECTABLE_SERVICE">TREE_INSPECTABLE_SERVICE</a></code> | <code><a href="#cdk-orchestration.ConstructService">ConstructService</a></code> | *No description.* |

---

##### `TREE_INSPECTABLE_SERVICE`<sup>Required</sup> <a name="TREE_INSPECTABLE_SERVICE" id="cdk-orchestration.TreeInspectable.property.TREE_INSPECTABLE_SERVICE"></a>

```typescript
public readonly TREE_INSPECTABLE_SERVICE: ConstructService;
```

- *Type:* <a href="#cdk-orchestration.ConstructService">ConstructService</a>

---

## Protocols <a name="Protocols" id="Protocols"></a>

### ICfnTransform <a name="ICfnTransform" id="cdk-orchestration.transforms.ICfnTransform"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* cdk-orchestration.custom_resources.EncodeResource, cdk-orchestration.transforms.CfnTransform, cdk-orchestration.transforms.ICfnTransform

The base interface for CDK Transforms.

A CDK Transform is a construct that can take
input, such as CloudFormation, and transform it, most likely into slightly different
CloudFormation.

CDK Transforms have two use-cases:  Preprocessing CloudFormation before it is imported to the CDK,
and post-processing CloudFormation produced by the CDK before it is written to a file in cdk.out.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.transforms.ICfnTransform.apply">apply</a></code> | *No description.* |

---

##### `apply` <a name="apply" id="cdk-orchestration.transforms.ICfnTransform.apply"></a>

```typescript
public apply(template: any): any
```

###### `template`<sup>Required</sup> <a name="template" id="cdk-orchestration.transforms.ICfnTransform.apply.parameter.template"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.transforms.ICfnTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-orchestration.transforms.ICfnTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

### IConstructFactory <a name="IConstructFactory" id="cdk-orchestration.IConstructFactory"></a>

- *Implemented By:* <a href="#cdk-orchestration.IConstructFactory">IConstructFactory</a>

Interface for creating a construct.



### IConstructPredicate <a name="IConstructPredicate" id="cdk-orchestration.IConstructPredicate"></a>

- *Implemented By:* <a href="#cdk-orchestration.IConstructPredicate">IConstructPredicate</a>

Generalized little-l lambda for a construct.



### IConstructServiceFactory <a name="IConstructServiceFactory" id="cdk-orchestration.IConstructServiceFactory"></a>

- *Implemented By:* <a href="#cdk-orchestration.IConstructServiceFactory">IConstructServiceFactory</a>

Factory for a construct service.



### IConstuctTest <a name="IConstuctTest" id="cdk-orchestration.IConstuctTest"></a>

- *Implemented By:* <a href="#cdk-orchestration.IConstuctTest">IConstuctTest</a>

A construct predicate type assertion.

Enables using CDK XXX.isXXX methods with ConstructTreeSearch and
IConstructPredicate.
Such as CfnElement.isCfnElement or Stack.isStack.

Usage:



### ILogger <a name="ILogger" id="cdk-orchestration.ILogger"></a>

- *Implemented By:* <a href="#cdk-orchestration.Logger">Logger</a>, <a href="#cdk-orchestration.NoOpLogger">NoOpLogger</a>, <a href="#cdk-orchestration.ILogger">ILogger</a>

Interface for scoped logging backend.

See {@link Logger}.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.ILogger.log">log</a></code> | *No description.* |

---

##### `log` <a name="log" id="cdk-orchestration.ILogger.log"></a>

```typescript
public log(scope: Construct, logLevel: number, message: string | IStringProvider): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-orchestration.ILogger.log.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the log line.

---

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="cdk-orchestration.ILogger.log.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

###### `message`<sup>Required</sup> <a name="message" id="cdk-orchestration.ILogger.log.parameter.message"></a>

- *Type:* string | <a href="#cdk-orchestration.IStringProvider">IStringProvider</a>

The message.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-orchestration.ILogger.property.logLevel">logLevel</a></code> | <code>number</code> | Returns the current log level. |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="cdk-orchestration.ILogger.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

Returns the current log level.

---

### IProcessor <a name="IProcessor" id="cdk-orchestration.IProcessor"></a>

- *Implemented By:* <a href="#cdk-orchestration.IProcessor">IProcessor</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.IProcessor.process">process</a></code> | *No description.* |

---

##### `process` <a name="process" id="cdk-orchestration.IProcessor.process"></a>

```typescript
public process(x: any): any
```

###### `x`<sup>Required</sup> <a name="x" id="cdk-orchestration.IProcessor.process.parameter.x"></a>

- *Type:* any

---


### IStopCondition <a name="IStopCondition" id="cdk-orchestration.IStopCondition"></a>

- *Implemented By:* <a href="#cdk-orchestration.IStopCondition">IStopCondition</a>

Defines where to stop when navigating the construct tree.

If not provided, we stop either at the top or bottom of the tree (depending
on search direction).



### IStringProvider <a name="IStringProvider" id="cdk-orchestration.IStringProvider"></a>

- *Implemented By:* <a href="#cdk-orchestration.IStringProvider">IStringProvider</a>

Delayed log-line construction.



## Enums <a name="Enums" id="Enums"></a>

### LogLevel <a name="LogLevel" id="cdk-orchestration.LogLevel"></a>

The Node logging levels (from the console object).

# Note:

The logging interfaces take numbers for logLevel instead of this enum.
This allows the user to define custom log levels (e.g.
FATAL = 0.5).  Subclass Log and Logger to support custom log levels.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.LogLevel.OFF">OFF</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.LogLevel.ERROR">ERROR</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.LogLevel.WARNING">WARNING</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.LogLevel.INFO">INFO</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.LogLevel.DEBUG">DEBUG</a></code> | *No description.* |
| <code><a href="#cdk-orchestration.LogLevel.ALL">ALL</a></code> | *No description.* |

---

##### `OFF` <a name="OFF" id="cdk-orchestration.LogLevel.OFF"></a>

---


##### `ERROR` <a name="ERROR" id="cdk-orchestration.LogLevel.ERROR"></a>

---


##### `WARNING` <a name="WARNING" id="cdk-orchestration.LogLevel.WARNING"></a>

---


##### `INFO` <a name="INFO" id="cdk-orchestration.LogLevel.INFO"></a>

---


##### `DEBUG` <a name="DEBUG" id="cdk-orchestration.LogLevel.DEBUG"></a>

---


##### `ALL` <a name="ALL" id="cdk-orchestration.LogLevel.ALL"></a>

---


### MinifyEngine <a name="MinifyEngine" id="cdk-orchestration.aws_lambda_nodejs.MinifyEngine"></a>

Minification engine enum.

The default minification engine is SIMPLE.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.MinifyEngine.NONE">NONE</a></code> | No minification. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.MinifyEngine.ES_BUILD">ES_BUILD</a></code> | Uses esbuild for minification. |
| <code><a href="#cdk-orchestration.aws_lambda_nodejs.MinifyEngine.SIMPLE">SIMPLE</a></code> | Removes comments and trims leading/trailing spaces from lines. |

---

##### `NONE` <a name="NONE" id="cdk-orchestration.aws_lambda_nodejs.MinifyEngine.NONE"></a>

No minification.

---


##### `ES_BUILD` <a name="ES_BUILD" id="cdk-orchestration.aws_lambda_nodejs.MinifyEngine.ES_BUILD"></a>

Uses esbuild for minification.

Add the following to your package.json file:
```
"esbuild": "^0.18.6"
```

---


##### `SIMPLE` <a name="SIMPLE" id="cdk-orchestration.aws_lambda_nodejs.MinifyEngine.SIMPLE"></a>

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

