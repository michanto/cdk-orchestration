import { CfnCustomResource, CfnResource, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AwsCustomResource, AwsCustomResourcePolicy, AwsSdkCall, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { CustomResourceUtilities } from '../../src/custom-resources';
import { BadFunction } from '../util';

describe('Custom Resource Utilities tests.', () => {
  it('isCustomResource works.', () => {
    const stack = new Stack();
    let serviceToken = new BadFunction(stack, 'Fun').functionArn;

    let resource1 = new CfnCustomResource(stack, 'Res1', {
      serviceToken: serviceToken,
    });
    let resource2 = new CfnResource(stack, 'Res2', {
      type: 'Custom::Whatever',
      properties: {
        ServiceToken: serviceToken,
      },
    });
    expect(CustomResourceUtilities.isCustomResource(resource1)).toBeTruthy();
    expect(CustomResourceUtilities.isCustomResource(resource2)).toBeTruthy();
  });

  it('findCustomResource finds the L1.', () => {
    const stack = new Stack();
    let utils = new CustomResourceUtilities();
    let onCreate: AwsSdkCall = {
      service: 'S3',
      action: 'putObject',
      parameters: {
        Body: JSON.stringify({ foo: 'bar' }),
        Bucket: 'mybucket',
        Key: 'mykey',
      },
      physicalResourceId: PhysicalResourceId.of('mykey'),
    };

    let onDelete: AwsSdkCall = {
      service: 'S3',
      action: 'deleteObject',
      parameters: {
        Bucket: 'mybucket',
        Key: 'mykey',
      },
      physicalResourceId: PhysicalResourceId.of('mykey'),
    };
    let res = new AwsCustomResource(stack, 'Res1', {
      onCreate: onCreate,
      onUpdate: onCreate,
      onDelete: onDelete,
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: ['*'],
      }),
    });
    let custom = utils.findCustomResource(res);
    expect(CustomResourceUtilities.isCustomResource(custom)).toBeTruthy();
  });

  it('findCustomResource throw on multiple custom resources.', () => {
    const stack = new Stack();
    let utils = new CustomResourceUtilities();
    let serviceToken = new BadFunction(stack, 'Fun').functionArn;

    new CfnCustomResource(stack, 'Res1', {
      serviceToken: serviceToken,
    });
    new CfnCustomResource(stack, 'Res2', {
      serviceToken: serviceToken,
    });
    expect(() => utils.findCustomResource(stack)).toThrow();
  });

  it('runResourceAlways works.', () => {
    const stack = new Stack();
    let utils = new CustomResourceUtilities();
    let serviceToken = new BadFunction(stack, 'Fun').functionArn;

    utils.runResourceAlways(new CfnCustomResource(stack, 'Res1', {
      serviceToken: serviceToken,
    }));
    // THEN
    let template = Template.fromStack(stack).toJSON();

    expect(template).toMatchObject({
      Resources: {
        Res1: {
          Type: 'AWS::CloudFormation::CustomResource',
          Properties: {
            salt: expect.any(Number),
          },
        },
      },
    });
  });
});