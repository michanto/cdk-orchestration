import { Construct } from 'constructs';
import { CustomResourceUtilities } from './custom_resources_utilities';
import { BUILD_TIME, ICfnResourcePredicate } from '../core';

/** Optional properties for AddSalt construct. */
export interface RunResourceAlwaysProperties {
  /** Custom Resource type to add salt to. Optional. */
  readonly resourceType?: string;
  /** Predicate to use when searching for the custom resource. Optional. */
  readonly predicate?: ICfnResourcePredicate;
}

/**
 * Always run a custom resource.  Throws if it cannot find one custom resource under target.
 * @param target - CustomResource, AwsCustomResource or similar.
 */
export class RunResourceAlways extends Construct {
  constructor(scope: Construct, id: string = 'RunResourceAlways', readonly props?: RunResourceAlwaysProperties) {
    super(scope, id);
    this.target.addPropertyOverride('salt', BUILD_TIME);
  }

  get target() {
    let scope = this.node.scope!;
    return new CustomResourceUtilities().findCustomResource(scope,
      this.props?.resourceType, this.props?.predicate);
  }
}
