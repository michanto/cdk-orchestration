import { CfnElement, CfnResource, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ICfnResourcePredicate, ConstructTreeSearch } from '../core';

/** Find CustomResource L1s (CfnResources) in the construct tree. */
export class CustomResourceUtilities {
  /**
   * Checks if `elt` if a L1 CustomResource construct (CfnResource).
   * Test is that elt is a CfnResource with a resourceType of the form
   * 'Custom::XXX' or 'AWS::CloudFormation::CustomResource'.
   *
   * @param elt Construct to test.
   */
  static isCustomResource(elt: Construct): boolean {
    return CfnElement.isCfnElement(elt) // isCfnResource isn't good enough by itself.
      && CfnResource.isCfnResource(elt)
      && (elt.cfnResourceType.startsWith('Custom::') ||
          elt.cfnResourceType == 'AWS::CloudFormation::CustomResource');
  }

  /**
   * Returns a list of all L1 custom resources under the scope.
   * @param scope Scope for the search.
   * @param resourceType Must be of the form 'Custom::XXX' or 'AWS::CloudFormation::CustomResource'.  Optional.
   * @param predicate Optional predicate.
   */
  customResources(scope: Construct, resourceType?: string, predicate?: ICfnResourcePredicate) {
    return ConstructTreeSearch.for(
      x => CustomResourceUtilities.isCustomResource(x) && CfnResource.isCfnResource(x) &&
      (resourceType == undefined || resourceType == (x).cfnResourceType) &&
      (predicate == undefined || predicate(x)),
    ).searchDown(scope, Stack.isStack) as CfnResource[];
  }

  /**
   * Returns the CfnResource that produces the custom resource.  This function throws
   * if there are none (or more than one).
   * @param scope Scope for the search.
   * @param resourceType Must be of the form 'Custom::XXX' or 'AWS::CloudFormation::CustomResource'.  Optional.
   * @param predicate Optional predicate.
   */
  findCustomResource(scope: Construct, resourceType?: string, predicate?: ICfnResourcePredicate) {
    let elements = this.customResources(scope, resourceType, predicate);
    if (elements.length != 1) {
      throw new Error(`Construct ${
        scope.node.path
      } is not a known custom resource type.  Found ${elements.length} CustomResources, expected one (1).`);
    }

    return elements.pop()! as CfnResource;
  }
}

