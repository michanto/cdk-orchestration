import { Construct } from 'constructs';
import { CustomResourceUtilities } from './custom_resources_utilities';
import { BUILD_TIME } from '../core';

/**
 * Always run a custom resource.  Throws if it cannot find one custom resource under target.
 * @param target - CustomResource, AwsCustomResource or similar.
 */

export class RunResourceAlways extends Construct {
  constructor(scope: Construct, id: string = 'RunResourceAlways') {
    super(scope, id);
    let resource = new CustomResourceUtilities().findCustomResource(scope);
    resource.addPropertyOverride('salt', BUILD_TIME);

  }
}
