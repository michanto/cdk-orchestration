import { Stack } from 'aws-cdk-lib';
import { Construct, IConstruct } from 'constructs';
import { ICfnTransform } from './icfn_transform';
import { CFN_TRANSFORM_HOST_RTTI, CFN_TRANSFORM_RTTI, isTransformHost } from './private/transform_rtti';
import { ConstructHost, Log } from '../core';

/**
 * This helper class can extract ICfnTransforms from a construct tree so they can be applied to a template.
 *
 * This class is used by the framework to apply transforms, and can be used to import templates into
 * a CfnInclude construct.
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

  private readonly constructHost = new ConstructHost({
    hostConstructTypeInfo: CFN_TRANSFORM_HOST_RTTI,
    hostedConstructTypeInfo: CFN_TRANSFORM_RTTI,
    // Don't recurse into a stack or transform host.
    stopCondition: (s: Construct) => Stack.isStack(s) || isTransformHost(s),
  });

  private constructor(readonly scope: IConstruct) {
  }

  /**
   * Returns all transforms attached to the scope as descendents.
   */
  get(): ICfnTransform[] {
    return this.constructHost.getHostedConstructs(this.scope) as ICfnTransform[];
  }

  /**
   * Applies the transforms on a scope to a template.
   * @param template
   */
  apply(template: any): any {
    let log = Log.of(this.scope);
    if (template) {
      let transforms = this.get();
      let index = 0;
      let ids: string[] = [];
      for (const transform of transforms) {
        /** istanbul ignore next */
        if (!Construct.isConstruct(transform)) {
          throw new Error('Transforms must be constructs.');
        }
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
          break;
        }
        index++;
      }
      log.debug(`Successfully applied ${JSON.stringify(ids, undefined, 0)} to ${this.scope.node.path}`);
    }
    return template;
  }
}
