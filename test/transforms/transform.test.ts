import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { CfTemplateType, CfnTransform, CfnTransformHost, ImportOrder, ImportOrders, Transform } from '../../src/transforms';

export class BucketNameTransform extends Transform {
  constructor(scope: Construct, id: string, readonly bucketName: string) {
    super(scope, id);
  }
  public apply(template: CfTemplateType): CfTemplateType {
    for (let resId in template.Resources) {
      if (template.Resources[resId].Type == 'AWS::S3::Bucket') {
        if (!template.Resources[resId].Properties) {
          template.Resources[resId].Properties = {};
        }
        template.Resources[resId].Properties.BucketName = this.bucketName;
      }
    }
    return template;
  }
}

describe('Transform tests.', () => {
  it('Transform added to L1 works.', () => {
    let stack = new Stack();
    let bucket = new CfnBucket(stack, 'Bucket');
    new BucketNameTransform(bucket, 'BucketName', 'my_bucket');
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        Bucket: {
          Properties: {
            BucketName: 'my_bucket',
          },
        },
      },
    });
  });
  it('Transform added to L2 applies to L1.', () => {
    let stack = new Stack();
    let bucket = new Bucket(stack, 'Bucket');
    new BucketNameTransform(bucket, 'BucketName', 'my_bucket');

    expect(CfnTransform.isCfnTransform(bucket.node.defaultChild!.node.children[0])).toBeTruthy();
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        Bucket83908E77: {
          Properties: {
            BucketName: 'my_bucket',
          },
        },
      },
    });
  });

  it('Transform applied to Order works', () => {
    let stack = new Stack();
    let importer = new CfnTransformHost(stack, 'Importer');
    let order = new ImportOrder(importer, ImportOrders.TRANSFORMS);
    new BucketNameTransform(importer, 'BucketName', 'my_bucket');
    expect(CfnTransform.isCfnTransform(order.node.children[0])).toBeTruthy();
  });

  it('Transform applied to stack Order works', () => {
    let stack = new Stack();
    let order = new ImportOrder(stack, ImportOrders.TRANSFORMS);
    new BucketNameTransform(stack, 'BucketName', 'my_bucket');
    expect(CfnTransform.isCfnTransform(order.node.children[0])).toBeTruthy();
  });

  it('Transform applied to Order directly works', () => {
    let stack = new Stack();
    let order = new ImportOrder(stack, ImportOrders.TRANSFORMS);
    let transform = new BucketNameTransform(order, 'BucketName', 'my_bucket');
    expect(CfnTransform.isCfnTransform(transform.node.children[0])).toBeTruthy();
  });

  it('Transform applied to L1 Order works', () => {
    let stack = new Stack();
    let bucket = new Bucket(stack, 'Bucket');
    let order = new ImportOrder(bucket.node.defaultChild!, ImportOrders.TRANSFORMS);
    new BucketNameTransform(bucket, 'BucketName', 'my_bucket');
    expect(CfnTransform.isCfnTransform(order.node.children[0])).toBeTruthy();
  });
});
