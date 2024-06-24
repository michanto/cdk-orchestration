import { IAspect, Stack } from 'aws-cdk-lib';
import { Construct, IConstruct } from 'constructs';
import { ConstructTreeSearch } from './construct_tree_search';
import { TreeInspectable } from './tree_inspectable';

/**
 * Writes the names and types (or path in the case of Construct-valued
 * properties) of all symbol properties of a Construct to tree.json
 */
export class ServiceInspectorAspect implements IAspect {
  private stackSearch = ConstructTreeSearch.for(Stack.isStack);

  visit(node: IConstruct): void {
    if (!this.stackSearch.searchUp(node)) {
      return;
    }

    let inspectable = TreeInspectable.of(node);
    for (let sym of Object.getOwnPropertySymbols(node)) {
      let key = Symbol.keyFor(sym);
      if (key) {
        let propValue = (node as any)[sym];
        let value = Construct.isConstruct(propValue) ? propValue.node.path : typeof propValue;
        inspectable.addAttribute(key, value);
      }
    }
  }
}