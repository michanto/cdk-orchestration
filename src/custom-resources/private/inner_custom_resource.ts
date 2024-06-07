import { CustomResource, CustomResourceProps, Reference } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Custom resource class that writes attribute requests
 * to the requestedOutputs property.
 */
export class InnerCustomResource extends CustomResource {
  readonly requestedOutputs: string[] = [];
  constructor(readonly scope: Construct, id: string, props: CustomResourceProps) {
    super(scope, id, props);
  }

  protected addToRequestedOutputsPaths(attributeName: string) {
    if (this.requestedOutputs.indexOf(attributeName) < 0) {
      this.requestedOutputs.push(attributeName);
    }
  }

  getAtt(attributeName: string): Reference {
    this.addToRequestedOutputsPaths(attributeName);
    return super.getAtt(attributeName);
  }

  getAttString(attributeName: string): string {
    return this.getAtt(attributeName).toString();
  }
}