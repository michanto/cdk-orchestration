
import { App, Aspects, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { StackProvenanceAspect } from '../../src/core';

describe('StackProvenance Tests', () => {
  test('Install Test', () => {
    let app = new App();
    let stack = new Stack(app);
    new Bucket(stack, 'TestBucket');
    Aspects.of(app).add(new StackProvenanceAspect());

    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Metadata: {
        build_timestamp: expect.any(Number),
        build_hostname: expect.any(String),
        build_user: expect.any(String),
      },
    });
  });
});
