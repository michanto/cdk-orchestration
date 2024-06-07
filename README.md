# CDK Orchestration Library (cdk-orchestration)
Orchestrate running tasks via CloudFormation.
<!--BEGIN STABILITY BANNER-->

---

![cdk-orchestration: Experimental](https://img.shields.io/badge/cdk--orchestration-experimental-success.svg?style=for-the-badge)

---

<!--END STABILITY BANNER-->

## Tasks - Orchestration custom resources.
CloudFormation is normally used for provisioning resources.  However, CloudFormation itself is a powerful orchestration engine.
The CDK gives us the opportunity to run CustomResources as tasks.  Similar to CDK Tiggers, Tasks can return values (attributes)
that can be inputs to subsequent tasks.

This package allows the user to write Lambdas and StepFunctions that use the CloudFormation orchestrating engine for
running arbitrary tasks via CloudFormation.

Two types of tasks are supported:  LambdaTask, which runs a lambda and surfaces the output fields as custom resource attributes, and
StepFunctionTask, which surfaces the StepFunction output as custom resource attributes. CloudFormation can run and monitor
StepFunctionTasks for up to four days (!).

Artifact creation is a primary use-case for Tasks.  ML model training, FPGA layouts, embedded software builds, or
anything that can be run in an AWS execution environment, including StepFunctions on-prem support for things like HITL testing.

See the integration tests for examples of how to use attributes.  Attributes from one task can be passed as paramters to a
subsequent task.  Attributes are only returned if they are accessed (via getAtt or getAttString), allowing small parts of Lambda
and StepFunction outputs to be used.

## Task Best practices

Create separate stacks for your task infrastructure and task execution.  This makes console-level debugging of task Lambdas and
StepFunctions easier.

A S3 bucket partitioned by a user-supplied build id as part of the key for reading and writing data, allows artifacts
from separate builds to be organized for easy access.

Ths S3 bucket can also be used for task input and output.  JSON files can be written to or read from the bucket using the
orchestration resources S3FileResource (for writing JSON), S3FileReader (for reading JSON) and S3FileMetadata (for reading S3
metadata fields).  Attributes accessed as a flattened JSON path (similar to AwsCustomResource attributes) from S3 can then
be passed as parameters to a LambdaTask or StepFunctionTask.

## Transforms - JSON level access to CloudFormation.

Transforms bring the power of [CloudFormation Transforms](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)
to the CDK, allowing for direct manipulation of CloudFormation
in all it's many forms. The CDK has four primary sources of JSON, and Transforms can operate on each of them.  


1. L1 construct-emitted CloudFormation.
    - Add a Transform an L1 or L2 construct.
2. CfnInclude-imported templates.
    - Add a Transform to a TemplateImporter construct and call TemplateImporter.importTemplate.
3. Resource Properties
    - Example property: CfnStateMachine DefinitionString property
    - Example transform: add an InsertStepFunctionState transform to a StateMachine construct.
4. The Stack itself.
    - Add a Transform to the Stack.

Transforms can be added to any Stack, L1, L2 construct, or to any
TransformHost (such as a TemplateImporter).  Transforms are applied
in construct tree prefix order, the same order that CfnElements are
applied to a base-template during synthesis.

### Construct Host and Transforms
The CDK performs synthesis using the ConstructHost concept, but it doesn't explicity call it that.

In the CDK, the Stack is the host, and the constructs it hosts
are the L1 constructs, those that subclass CfnElement.  At
synthesis time, the CDK calls Stack._toCloudFormation.  _toCloudFormation
[creates a base template](https://github.com/aws/aws-cdk/blob/92ce25085efe0540b9ac94df6de99995d3d900ac/packages/%40aws-cdk/core/lib/stack.ts#L1029-L1042)
for the stack.  Then it finds all the L1 constructs in the
stack, calls _toCloudFormation on each CfnElement, and merges the
resulting CloudFormation into the base template.

A Stack, a CfnElement, or a CfnTransformHost
can host transforms.

- When a Stack or CfnElement hosts Transforms, the Transforms are applied after
  the base _toCloudFormation function is called.

- With CfnTransformHost, the host itself
  defines when and how they apply any Transform descendents (transforms in the sub-tree
  of the host construct).  See TemplateImporter for an example.
Example transform usage:

```typescript
export class StackDescription extends Transform {
  constructor(scope: Construct, id: string, readonly description: string) {
    super(scope, id);
  }

  apply(template: CfTemplateType): CfTemplateType {
    // Any change to the template is allowed.
    template.Description = this.description;
    // Always return the altered template.
    return template;
  }
}

class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // Host a transform.
    new StackDescription(this, "Description",
      "This description came from a transform.")
  }
}
```

The transform StackDescription runs AFTER the stack
template is fully synthesized and resolved.  Regardless of
what the CfnElement constructs do to the description, at the
end the Description field will be overwritten by
the StackDescription transform.

### Using Transforms

Any Stack or CfnElement can become a Transform host simply by
adding transforms to it.  The Transform constructor shims the
_toCloudFormation function of the host to apply transforms at 
synthesis time.

```typescript
class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // Host a transform.
    // This will proxy Stack._toCloudFormation to host
    // Transforms (unless that has already been done).
    new StackDescription(this, "Description",
      "This description came from a transform.")
  }
}
```

### Transform Use case - API Gateway

<blockquote>
 Anecdote: I was working on an API Gateway that was defined with the APIG v1 constructs.  For my UI framework, the APIG GET and POST methods needed to be AuthorizationType.IAM, but the OPTIONS methods needed to be AuthorizationType.NONE.  APIG v1 does not support that, so
 I wrote the following transform:

```
class AuthTypeForCors extends CfnTransform {
  apply(template: CfTemplateType): CfTemplateType {
    for (let resId in template.Resources) {
      let resource = template.Resources[resId]
      if (resource.Type == "AWS::ApiGateway::Method" &&
          resource.Properties.HttpMethod == "OPTIONS") {            
        resource.Properties.AuthorizationType = "NONE"
      }
    }
    return template
  }
}
```
</blockquote>

### Transform Use Case:  Importing python-generated step functions.

My team uses the AWS Step Functions Data Science SDK to define Step Function based workflows for training and processing ML Models.  This SDK allows one to define StepFunctions and install them into an AWS account from the command line.  It can also be used to export workflows as CloudFormation, and that capability allows importing these StepFunctions into the CDK using transforms.  This is exactly what the SolonWorkflow transform chain does to import python-generated step functions.  This chain changes the LogicalId of the Step Function (which the SDK always generates as “StateMachineComponent”), sets the Role, deletes the template Description (which otherwise would be merged with the Stack description), and sets the DeletionPolicy.  In this case, we import the template using a CfnInclude (rather than CfnRawInclude), allowing access to the underlying CfnStateMachine if necessary.

## Construct Services

ConstructService types:

- ConstructService
  - Examples:  ConstructRTTI, Singleton.isSingleton
- ConstructTreeService
  - Example: Logger - Scoped logging framework.
- StackConstructTreeService
  - Example:  StackToken - User-named tokens that resolve to 
  different values in each stack.
- AppConstructTreeService
  - Example:  AppToken -  User-named tokens that resolve the to 
  the same value across stacks.

### Software Design Patterns in the CDK

A while back, I worked on the Amazon Maps Android App.  We used IOC and Software Design Patterns (Gang of Four patterns) extensively to manage what was a very complex application UI, and it worked pretty well.  

Android apps are structured as a tree of Context objects, similar to the Construct tree in the CDK.  Android has a built-in mechanism for exposing IOC services in the Context tree - Context.getSystemService.  We extended this standard mechanism to add our own IOC services.  We had App-level services such as the Route service.  The Route service allowed various UI components to render themselves appropriately for both Routing and non-routing situations.  Activity-level services such as the SidePanelController, to allow the side panels to appear over the current Activity when the user slides them out, and to which the Activity could add menu items.  We also had Node-level services such as Flag, that would allow the PeekController (an Activity-level service) to show and hide flags for pins on the Map.

An IOC framework can work particularly well with a tree, as you can add IOC services and service factories to a node in the tree, and that service implementation can then apply to that node and all descendants.  This also allows for overriding service implementations for different parts of the tree - as long as the same interface is implemented.

The CDK uses a similar IOC mechanism, but, like Android, it has not been formalized for reuse.  IOC services in the construct tree can mostly be identified by looking for a static “<class>.of(construct)" or "<class>.is<class>(construct)" method that accesses or creates the IOC service and returns it to the caller.

In this book we refer to this IOC mechanism the ConstructService pattern.  A ConstructService is a property of a construct stored with a symbolic key (instead of the usual string key).  It is not part of the typescript object definition for a Construct, but rather a runtime attribute that is accessed via IOC helpers.  The CDK uses ConstructServices for two use-cases: Run-Time Type Info) which we will look at below (“is” services), and IOC services (“of” services).  The CDK uses ConstructService everywhere, but you have to read the CDK source code to figure out when it is used and why.  ConstructServices allow for advanced pattern-based interactions between Constructs.

Here are some examples of IOC services currently exposed by the Construct tree using “of” methods:

* `Aspects.of` - Returns the Aspects service, allowing one to add Aspects to any Construct.
* `Stack.of` - Return the nearest Stack ancestor for any construct, or throws if there is no stack ancestor.
* `Stage.of` - Returns the nearest Stage ancestor for any construct.  Since App is a Stage, and App is always the root of the construct tree, this never throws.
* `Annotations.of` - Returns the Annotations service, allowing programmers to report Warnings and Errors during synthesis.
* `Tags.of` - Returns the Tags service, allowing one to add Tags to any taggable Construct. This is just a wrapper on top of the Aspects service
* `PermissionBoundary.of` - Returns a service that can set permissions on resources under a given scope. (Another Aspect-based service).

All of these examples are implemented using symbol properties that are not part of the TypeScript type of the Construct.  

Other services are implemented directly using “_” prefixed private instance variables rather than symbol-keyed properties, but otherwise they either work the same, or nearly the same, as symbol-stored IOC services.

* `Aspects` - Unique in that they are implemented using both the _aspects member and `ASPECTS_SYMBOL` ConstructService.
* `Context` - Directly implemented as Construct._context.
* `FeatureFlags` - Implemented on top of Context (Construct._context).
* `Validations` - Directly implemented as Construct._validations.
* `Dependencies` - Directly implemented as Construct._dependencies.
* `Metadata` - Directly implemented as Construct._metadata.

#### ConstructService

Let’s take a quick look at ConstructService as it is used by the Stack class.

* `STACK_SYMBOL` is defined on a Stack construct in the constructor, and is used as a “duck typing” property.  Duck typing is used by the Construct tree as a kind of RTTI (Run-Time Type Info).  RTTI doesn’t exist in Javascript as a native feature, a hole that is being filled in CDK 2.0 via JSII, which has a built-in RTTI solution.  Duck typing in the Construct tree sometimes involves the existence of a `ConstructService`, and sometimes involves checking other properties on an object and inferring object type that way.  Typescript type assertion functions, such as `Stack.isStack`, use `ConstructService` based duck typing properties to infer the concrete type of a construct.
* The `MY_STACK_CACHE` symbol is defined on any construct that is passed to Stack.of, and which is a member of a Stack sub-tree.  This ConstructService is used to cache the stack on the object, allowing quick lookup of the Stack for a given construct.  If the construct has the `MY_STACK_CACHE` symbol defined, then it is a member of a Stack and we can get the Stack in constant time.  Otherwise, Stack.of looks up the Construct Tree to find a Stack instance, and returns that instance.  In IOC service terms, the `MY_STACK_CACHE` property is the service storage, and looking up the tree to find the Stack is a factory for the `MY_STACK_CACHE` property value.
* The Stack uses a ConstructService to find and execute the CfnElement Chain of Responsibility.  The function cfnElements creates the chain from the construct tree, and code in Stack._toCloudFormation executes the chain to create a template.

#### ConstructService operations

A few patterns emerge when looking at how ConstructServices are used in the tree:

Get data from a Construct.

* Implemented by `ConstructService.searchSelf`.
* This is how RTTI works in the Construct tree.  All those “isFoo” methods like `isCfnElement`, `isCfnResource`, etc.

  ```
  if (construct.isFoo()) {
    // Foo-specific processing
  }
  ```

Find data up the tree.  If not found, call a factory to create the data and cache it on the scope construct.

* Implemented by `ConstructService.searchUpOrCreate`.
* This is how Stack.of works.  After this, subsequent calls to Stack.of on the construct will be fast due to the caching.


  ```
  // Extract an Environment from a construct.
  let stack = Stack.of(construct)
  return { account: stack.account, region: stack.region }
  ```

Find data up the tree.  If not found, call a factory to create the data and cache it on the scope construct AND the stack.

* Implemented by the `ConstructService` subclass `StackConstructTreeService`.
* This is how Stack services work, such as `StackToken`.


Find all constructs with a ConstructService in a sub-tree.  

* Implemented by `ConstructService.searchDown`
* This is how CfnElement constructs are found during synthesis.  It is also how CfnTransform constructs are found during import and synthesis operations:

  ```
  let template = merge({}, cfnElements(this).map(
    e => this.resolve(e._toCloudFormation()));
  ```

#### Viewing construct IOC services is `tree.json`

The `ServiceInspectorAspect` adds information about construct IOC
services to the `tree.json` file.

Adding the ServiceInspectorAspect to an app:

```
let app = new App();
let stack = new Stack(app, 'MyStack');
let bucket = new Bucket(stack, 'MyBucket');
Aspects.of(app).add(new ServiceInspectorAspect());
```

## License

[Apache 2.0](LICENSE)