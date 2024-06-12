import { ActualResult, ExpectedResult, IntegTest, Match } from '@aws-cdk/integ-tests-alpha';
import { App, Aspects, Stack } from 'aws-cdk-lib';
import { Effect } from 'aws-cdk-lib/aws-iam';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Logger, LoggingAspect, StackProvenanceAspect } from '../../src/core';
import { S3FileMetadata, S3FileReader, S3FileResource } from '../../src/orchestration';
import { EqualsComparisonAssertion } from '../util/assertions';

export const LAMBDA_PATH = `${__dirname}/../../lib/aws-lambda-nodejs/private/test_lambdas/`;

const app = new App();
Aspects.of(app).add(new StackProvenanceAspect());
const stack = new Stack(app, 'S3ResourcesInteg', { stackName: 'S3ResourcesInteg' });
const assertionStack = new Stack(app, 'S3ResourcesAssertions', {});

Logger.set(app, new Logger());
Aspects.of(app).add(new LoggingAspect());

let bucket = new Bucket(stack, 'MyBucket');
let key = 'foo/bar/baz.json';
let writer = new S3FileResource(stack, 'Writer', {
  resourceType: 'Custom::ToWrite',
  body: { Some: 'Data' },
  bucket: bucket,
  metadata: {
    mymetadata: 'Michael',
  },
  key: key,
  physicalResourceId: PhysicalResourceId.of('Writer'),
});

let reader = new S3FileReader(stack, 'Reader', {
  resourceType: 'Custom::ToRead',
  bucket: bucket,
  key: key,
  physicalResourceId: PhysicalResourceId.of('Reader'),
});

reader.node.addDependency(writer);

let metadata = new S3FileMetadata(stack, 'MdReader', {
  resourceType: 'Custom::ToReadMd',
  bucket: bucket,
  key: key,
  physicalResourceId: PhysicalResourceId.of('Reader'),
});
metadata.node.addDependency(writer);

new EqualsComparisonAssertion(assertionStack, 'ContentsAreEqual', {
  actual: ActualResult.fromCustomResource(reader.customResource, 'Some'),
  expected: ExpectedResult.exact('Data'),
});
new EqualsComparisonAssertion(assertionStack, 'MetadataAreEqual', {
  actual: ActualResult.fromCustomResource(metadata.customResource, 'Metadata.mymetadata'),
  expected: ExpectedResult.exact('Michael'),
});

let integ = new IntegTest(app, 'S3FileResourcesTest', {
  testCases: [
    stack,
  ],
  assertionStack: assertionStack,
  cdkCommandOptions: {
    destroy: {
      args: {
        force: true,
      },
    },
  },
  regions: ['us-east-1'],
});

integ.assertions.awsApiCall('CloudFormation', 'listExports', {
}).expect(ExpectedResult.objectLike({
  Exports: Match.arrayWith([Match.objectLike({})]),
},
)).provider.addToRolePolicy({
  Effect: Effect.ALLOW,
  Action: ['cloudFormation:List*'],
  Resource: ['*'],
});
