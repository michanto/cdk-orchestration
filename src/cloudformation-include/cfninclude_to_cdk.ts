import { CfnElement, Stack } from 'aws-cdk-lib';
import { CfnInclude } from 'aws-cdk-lib/cloudformation-include';
import { Construct, IConstruct } from 'constructs';
import { CfnElementUtilities, ConstructTreeSearch } from '../core';


/**
 * Utilities for converting resources from CfnInclude to a CDK L2-derived class.
 */
export class CfnIncludeToCdk {
  /**
   * Returns true if the given construct is an instance of CfnInclude
   * @param x
   * @returns
   */
  static isCfnInclude(x: IConstruct | undefined): x is CfnInclude {
    if (!x) {
      return false;
    }
    return CfnElement.isCfnElement(x) &&
      typeof (x as any).getResource == 'function' &&
      x.node.tryFindChild('$Hooks') != undefined;
  }

  /**
   * Sets the logical ID of the resource to the Node ID of the construct.
   *
   * This should be used when you want the resource ID to be the same as the Node ID.
   * Such as when you are replicating an existing hand-crafted template.
   *
   * Note:  This function L1 or L2 constructs, or any case where there is one L1 in the
   * sub-tree.
   *
   * @param construct The resource construct.
   */
  static setLogicalId<T extends Construct>(construct: T, id?: string): T {
    let logicalId = id ?? construct.node.id;
    if (CfnElement.isCfnElement(construct)) {
      construct.overrideLogicalId(logicalId);
    } else if (construct.node.defaultChild &&
      CfnElement.isCfnElement(construct.node.defaultChild)) {
      construct.node.defaultChild.overrideLogicalId(logicalId);
    } else {
      // Not sure if there are any cases for this, but seems reasonable that if there
      // is only one L1 in the sub-tree, then that is the one we need.
      let elements = new CfnElementUtilities().cfnElements(construct);
      let element = elements.pop();
      if (elements.length == 0 && element) {
        element.overrideLogicalId(logicalId);
      } else {
        // If there is more than one, or none, we have no way of knowing which one to modify.
        throw new Error(`Error attempting to set the Logical ID for construct '${
          construct.node.path
        }'.  Could not find the CfnElement in the construct.`);
      }
    }
    return construct;
  }


  /**
   * Finds a construct from CfnIncludes in scope with the given logicalId.
   *
   * @param logicalId
   * @param scope
   */
  static findIncluded(logicalId: string, scope: Construct): CfnElement | undefined {
    let stack = Stack.of(scope);
    let cfnIncludes = ConstructTreeSearch.for(CfnIncludeToCdk.isCfnInclude).searchDown(stack, x => Stack.isStack(x)) as CfnInclude[];
    for (let include of cfnIncludes) {
      let included: CfnElement | undefined = undefined;
      if (!included) {
        try { included = include.getResource(logicalId); } catch {}
      }
      if (!included) {
        try { included = include.getOutput(logicalId); } catch {}
      }
      if (!included) {
        try { included = include.getCondition(logicalId); } catch {}
      }
      if (!included) {
        try { included = include.getMapping(logicalId); } catch {}
      }
      if (!included) {
        try { included = include.getParameter(logicalId); } catch {}
      }
      if (!included) {
        try { included = include.getRule(logicalId); } catch {}
      }
      if (!included) {
        try { included = include.getHook(logicalId); } catch {}
      }
      return included;
    }
    return undefined;
  }

  /**
   * Removes a construct from CfnInclude with the given logicalId.
   * Finds the CfnInclude in the stack of the given scope.
   *
   * @param logicalId
   * @param scope
   */
  static removeIncluded(logicalId: string, scope: Construct) {
    let included = this.findIncluded(logicalId, scope);
    // Found the original imported resource/mapping/output/whatever.  Remove it from the tree.
    // NOTE:  If we didn't find it, probably the CfnInclude is completely converted and was removed.
    if (included) {
      included.node.scope?.node.tryRemoveChild(included.node.id);
    }
  }

  /**
   * Replaces an L1 construct in a CfnInclude with an L1 or L2 CDK construct of your choosing.
   *
   * - Removes the original imported L1 for the construct from the CfnInclude.
   * - Sets the logical resource ID of the replacement to the correct value so it acts as a drop-in replacement.
   *
   * If the L1 cannot be found, this function assumes the related CfnInclude is converted
   * and was removed from the stack.
   *
   * FUTURE: Ensure the new construct is of the same resource type as the old one?  Is that useful?
   *
   * @param logicalId Logical ID of the construct we are replacing.
   * @param replacementConstruct Construct that should be replacing the included construct.
   */
  static replaceIncluded<T extends Construct>(logicalId: string, replacementConstruct: T): T {
    CfnIncludeToCdk.removeIncluded(logicalId, replacementConstruct);

    // Set the LogicalId of the replacement to be the same as the LogicalId of the replaced construct
    return CfnIncludeToCdk.setLogicalId(replacementConstruct, logicalId);
  }
}
