import { Stack, TreeInspector } from 'aws-cdk-lib';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { TreeInspectable } from '../../src';

describe('TreeInspectable tests', () => {
  test('Not inspectable.', () => {
    let stack = new Stack();
    let construct = new Construct(stack, 'AConstruct');
    expect(TreeInspectable.isInspectable(construct)).toBeFalsy();
    TreeInspectable.of(construct).addAttribute('foo', 'bar');
    expect(TreeInspectable.isInspectable(construct)).toBeTruthy();
    if (TreeInspectable.isInspectable(construct)) {
      let inspector = new TreeInspector();
      construct.inspect(inspector);
      expect(inspector.attributes.foo).toBe('bar');
    }
  });
  test('Already inspectable.', () => {
    let stack = new Stack();
    let bucket = new CfnBucket(stack, 'ABucket', {
      bucketName: 'hello',
    });
    expect(TreeInspectable.isInspectable(bucket)).toBeTruthy();
    TreeInspectable.of(bucket).addAttribute('foo', 'bar');
    if (TreeInspectable.isInspectable(bucket)) {
      let inspector = new TreeInspector();
      bucket.inspect(inspector);
      expect(inspector.attributes.foo).toBe('bar');
    }
  });
});
