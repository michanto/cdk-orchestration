import { IConstruct } from 'constructs';
import { ICfnTransform } from './icfn_transform';
import { TRANSFORM_CONSTRUCT_HOST } from './private/transform_rtti';
import { Log } from '../core';

/**
 * This helper class can extract ICfnTransforms from a construct tree so they can be applied to a template.
 *
 * Stacks, CfnElements and subclasses of CfnTransformHost use this class to apply their transforms.
 * See the Transforms section of the README.md file for details.
 *
 */
export class Transforms {
  /**
   * Returns a transforms object for the scope.  This object has access to all transforms attached to the scope
   * as descendents.
   * @param scope
   */
  public static of(scope: IConstruct): Transforms {
    return new Transforms(scope);
  }

  private constructor(readonly scope: IConstruct) {
  }

  /**
   * Returns all transforms attached to the scope as descendents.
   */
  get(): ICfnTransform[] {
    return TRANSFORM_CONSTRUCT_HOST.getHostedConstructs(this.scope) as ICfnTransform[];
  }

  /**
   * Applies the transforms on a scope to a template.
   *
   * Throws when a Transform fails to return a template.
   * @param template Template to apply transforms to.
   */
  apply(template: any): any {
    let log = Log.of(this.scope);
    if (template) {
      let transforms = this.get();
      let index = 0;
      let ids: string[] = [];
      for (const transform of transforms) {
        try {
          log.debug(`Applying ${transform.node.path}.`);
          template = transform.apply(template);
          ids.push(transform.node.id);
        } catch (e) {
          let error = e as any;
          throw new Error(`CfnTransform ${
            transform.node.path
          } (${index}) threw '${error.toString()}'\n${error.stack}`);
        }
        if (!template) {
          let message = `CfnTransform ${
            transform.node.path
          }  (${index}) failed to return a template.`;
          throw new Error(message);
        }
        index++;
      }
      log.debug(`Successfully applied ${JSON.stringify(ids, undefined, 0)} to ${this.scope.node.path}`);
    }
    return template;
  }
}
