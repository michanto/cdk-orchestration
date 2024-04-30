# Transforms
Transforms bring the power of [CloudFormation Transforms](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)
to the CDK, allowing for direct manipulation of CloudFormation
before the template is written to disk.  Transforms can also
be used to manipulate CloudFormation being imported into the
CDK.

Transforms can be added to any Stack or CfnElement, and will be automatically applied during synthesis.

### Construct Host and Transforms
The CDK performs synthesis using the ConstructHost concept, but it doesn't explicity call it that.

In the CDK, the Stack is the host, and the constructs it hosts
are the L1 constructs, those that subclass CfnElement.  At
synthesis time, the CDK calls Stack._toCloudFormation.  _toCloudFormation
[creates a base template](https://github.com/aws/aws-cdk/blob/92ce25085efe0540b9ac94df6de99995d3d900ac/packages/%40aws-cdk/core/lib/stack.ts#L1029-L1042)
for the stack.  Then it finds all the L1 constructs in the
stack, calls _toCloudFormation on each CfnElement, and merges the
resulting CloudFormation into the base template.

With Transforms, a Stack, a CfnElement, or any other Construct
can be a TransformHost, (by calling TransformHost.mark).

- When a Stack or CfnElement hosts Transforms, the Transforms are applied after
  the base _toCloudFormation function is called.

- With custom transform hosts, the host itself
  defines when and how they apply any Transform descendents (transforms in the sub-tree
  of the host construct).  
Example transform usage:

```typescript
export class StackDescription extends CfnTransform {
  constructor(scope: Construct, id: string, readonly description: string) {
    super(scope, id);
  }

  transform(template: any): any {
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
adding transforms to it.  TransformHost.hook shims the
_toCloudFormation function to apply transforms at synthesis
time.

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

<blockquote>
 Anecdote: I was working on an API Gateway that was defined with the APIG v1 constructs.  For my UI framework, the APIG GET and POST methods needed to be AuthorizationType.IAM, but the OPTIONS methods needed to be AuthorizationType.NONE.  APIG v1 does not support that, so
 I wrote the following transform:

```
class AuthTypeForCors extends CfnTransform {
  transform(template: any): any {
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
