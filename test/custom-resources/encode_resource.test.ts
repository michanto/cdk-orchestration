import { CfnCustomResource, CfnCustomResourceProps, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { EncodeResource } from '../../src/custom-resources';
import { CfTemplateType } from '../../src/transforms';
import { BadFunction } from '../util';

describe('Custom Resource Utilities tests.', () => {
  it('EncodeResource works.', () => {
    // Given
    const stack = new Stack();
    let serviceToken = new BadFunction(stack, 'Fun').functionArn;
    new class extends CfnCustomResource {
      constructor(scope: Construct, id: string, props: CfnCustomResourceProps) {
        super(scope, id, props);
        this.addPropertyOverride('One', 1);
        this.addPropertyOverride('Two', true);
        this.addPropertyOverride('Three', 'Value');
        this.addPropertyOverride('ServiceTimeout', '100');
        new EncodeResource(this);
        // Encode twice to test double-encoding works.
        new EncodeResource(this, 'Encode2');
      }
    }(stack, 'Res1', {
      serviceToken: serviceToken,
    });

    // THEN
    let template = Template.fromStack(stack).toJSON();

    expect(template).toMatchObject({
      Resources: {
        Res1: {
          Type: 'AWS::CloudFormation::CustomResource',
          Properties: {
            EncodedProperties: {
              'Fn::Base64': JSON.stringify({
                One: 1,
                Two: true,
                Three: 'Value',
              }),
            },
            ServiceToken: expect.anything(),
          },
        },
      },
    });
  });

  it('EncodeResource not custom resource throws.', () => {
    // Given
    const stack = new Stack();
    let bucket = new CfnBucket(stack, 'Bucket', { bucketName: 'my_bucket' });
    expect(() => new EncodeResource(bucket, 'Encode')).toThrow();
  });

  it('EncodeResource no ServiceToken does nothing', () => {
    const stack = new Stack();
    let serviceToken = new BadFunction(stack, 'Fun').functionArn;
    new class extends CfnCustomResource {
      constructor(scope: Construct, id: string, props: CfnCustomResourceProps) {
        super(scope, id, props);
        this.addPropertyOverride('One', 1);
        this.addPropertyOverride('Two', true);
        this.addPropertyOverride('Three', 'Value');
        new class EncodeResourceEx extends EncodeResource {
          apply(template: CfTemplateType): CfTemplateType {
            return super.apply(template);
          }
        } (this);
        this.addPropertyDeletionOverride('ServiceToken');
      }
    }(stack, 'Res1', {
      serviceToken: serviceToken,
    });
    Template.fromStack(stack);
  });
});
