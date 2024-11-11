import { App, Aspects, Environment, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';
import { BUILD_TIME, StackProvenanceAspect } from '../../src/core';
import { StringReplacer } from '../../src/transforms';

const env: Required<Environment> = {
  account: '000000000000',
  region: 'us-west-2',
};

describe('StringTransform tests', () => {
  // Note:  Import use case is tested in template_importer.test.ts.
  test('StringTransform bootstrap stack test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });
    Aspects.of(stack).add(new StackProvenanceAspect());

    // EnsureChangeInStackB671AB8A and 1731294054943
    new StringReplacer(stack, 'Replacer', {
      splitter: BUILD_TIME.toString(), joiner: '1731294054943',
    });

    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Metadata: {
        build_timestamp: 1731294054943,
      },
    });
  });

  test('StringTransform bootstrap element test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });
    let bucket = new CfnBucket(stack, 'MyBucket');
    bucket.addMetadata('build_timestamp', BUILD_TIME);

    // EnsureChangeInStackB671AB8A and 1731294054943
    new StringReplacer(bucket, 'Replacer', {
      splitter: BUILD_TIME.toString(), joiner: '1731294054943',
    });

    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        MyBucket: {
          Metadata: {
            build_timestamp: 1731294054943,
          },
        },
      },
    });
  });
});
