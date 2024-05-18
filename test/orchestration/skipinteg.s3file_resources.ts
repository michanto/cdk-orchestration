import { ActualResult, EqualsAssertion, ExpectedResult, IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { S3FileReader, S3FileResource } from '../../src/orchestration';
import { PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
export const LAMBDA_PATH = `${__dirname}/../../lib/aws-lambda-nodejs/private/test_lambdas/`;

const app = new App();
const stack = new Stack(app, 'LambdaTaskInteg', {});

let bucket = new Bucket(stack, "MyBucket");
let key = 'foo/bar/baz.json';
new S3FileResource(stack, "Writer", {
  purpose: "ToWrite",
  body: { Some: "Data" },
  bucket: bucket,
  metadata: {
    MyMetadata: "Michael"
  },
  key: key,
  physicalResourceId: PhysicalResourceId.of("Writer")
})

let reader = new S3FileReader(stack, "Reader", {
  purpose: "ToRead",
  bucket: bucket,
  key: key,
  physicalResourceId: PhysicalResourceId.of("Reader")
})

let metadata = new S3FileReader(stack, "Reader", {
  purpose: "ToReadMd",
  bucket: bucket,
  key: key,
  physicalResourceId: PhysicalResourceId.of("Reader")
})

new EqualsAssertion(stack, "ContentsAreEqual", {
  actual: ActualResult.fromCustomResource(reader.resource.resource, "Some"),
  expected: ExpectedResult.exact("Data")
})
new EqualsAssertion(stack, "MetadataAreEqual", {
  actual: ActualResult.fromCustomResource(metadata.resource.resource, "MyMetadata"),
  expected: ExpectedResult.exact("Michael")
})

new IntegTest(app, 'S3FileResourcesTest', {
  testCases: [
    stack,
  ],
  cdkCommandOptions: {
    destroy: {
      args: {
        force: true,
      },
    },
  },
  regions: ['us-east-1'],
});
