import { CfnCustomResource, CfnCustomResourceProps, Stack } from "aws-cdk-lib";
import { BadFunction } from "../util";
import { Template } from "aws-cdk-lib/assertions";
import { Construct } from "constructs";
import { EncodeResource } from "../../src/custom-resources";
import { CfnBucket } from "aws-cdk-lib/aws-s3";

describe('Custom Resource Utilities tests.', () => {
    it('EncodeResource works.', () => {
        // Given
        const stack = new Stack();
        let serviceToken = new BadFunction(stack, 'Fun').functionArn;
        new class extends CfnCustomResource{
            constructor(scope: Construct, id: string, props: CfnCustomResourceProps) {
                super(scope, id, props)
                this.addPropertyOverride("One", 1);
                this.addPropertyOverride("Two", true);
                this.addPropertyOverride("Three", "Value");
                EncodeResource.encodeCustomResource(this);
                // Encode twice to test double-encoding works.
                EncodeResource.encodeCustomResource(this, "Encode2");
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
                    "Fn::Base64": JSON.stringify({
                        One: 1,
                        Two: true,
                        Three: "Value"
                    })
                },
                ServiceToken: expect.anything(),
              },
            },
          },
        });
    });

    it('EncodeResource not custom resource does nothing.', () => {
        // Given
        const stack = new Stack();
        let bucket = new CfnBucket(stack, "Bucket", { bucketName: "my_bucket"});
        bucket.addPropertyDeletionOverride
        new EncodeResource(bucket, "Encode")

        // THEN
        let template = Template.fromStack(stack).toJSON();
    
        expect(template).toMatchObject({
          Resources: {
            Bucket: {
                Properties: expect.not.objectContaining({
                    EncodedProperties: expect.anything(),
                    ServiceToken: expect.anything()
                })
            }
          },
        });
    });
});
