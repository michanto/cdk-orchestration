import { App, Aspects, Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { ServiceInspectorAspect, TreeInspectable } from '../../src';

describe('ServiceInspectorAspect tests', () => {
  it('Can be applied to a tree and produces expected output.', () => {
    let app = new App();
    let stack = new Stack(app, 'MyStack');
    let bucket = new Bucket(stack, 'MyBucket');
    let aspect = new ServiceInspectorAspect();
    Aspects.of(app).add(aspect);
    app.node.findAll().forEach(x => aspect.visit(x));
    expect(TreeInspectable.of(bucket).attributes).toMatchObject({
      '@aws-cdk/core.DependableTrait': 'object',
      '@aws-cdk/core.Resource': 'boolean',
      '@aws-cdk/core.Stack.myStack': 'object',
      '@open-constructs/aws-cdk.TreeInspectable': 'object',
    });
  });
});
