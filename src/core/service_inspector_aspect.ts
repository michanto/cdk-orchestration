import { IAspect, Stack } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
import { ConstructTreeSearch } from './construct_tree_search';
import { TreeInspectable } from './tree_inspectable';

/**
 * Writes the names and types of all symbols on a construct to tree.json
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
        inspectable.addAttribute(key, typeof (node as any)[sym]);
      }
    }
  }
}