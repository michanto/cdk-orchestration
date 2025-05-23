import { CfnCustomResource, CfnCustomResourceProps, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { EncodeResource } from '../../src/custom-resources';
import { CfJsonType } from '../../src/transforms';
import { EchoFunction } from '../util';

describe('Custom Resource Utilities tests.', () => {
  it('EncodeResource works.', () => {
    // Given
    const stack = new Stack();
    let serviceToken = new EchoFunction(stack, 'Fun').functionArn;
    new class extends CfnCustomResource {
      constructor(scope: Construct, id: string, props: CfnCustomResourceProps) {
        super(scope, id, props);
        this.addPropertyOverride('One', 1);
        this.addPropertyOverride('Two', true);
        this.addPropertyOverride('Three', 'Value');
        new EncodeResource(this);
        // Encode twice to test double-encoding works.
        new EncodeResource(this, 'Encode2');
      }
    }(stack, 'Res1', {
      serviceToken: serviceToken,
      serviceTimeout: 100,
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
            ServiceTimeout: 100,
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
    let serviceToken = new EchoFunction(stack, 'Fun').functionArn;
    new class extends CfnCustomResource {
      constructor(scope: Construct, id: string, props: CfnCustomResourceProps) {
        super(scope, id, props);
        this.addPropertyOverride('One', 1);
        this.addPropertyOverride('Two', true);
        this.addPropertyOverride('Three', 'Value');
        new class EncodeResourceEx extends EncodeResource {
          apply(template: CfJsonType): CfJsonType {
            return super.apply(template);
          }
        } (this);
        this.addPropertyDeletionOverride('ServiceToken');
      }
    }(stack, 'Res1', {
      serviceToken: serviceToken,
    });
    const template = Template.fromStack(stack).toJSON();
    expect(template).toMatchSnapshot();
  });
});
