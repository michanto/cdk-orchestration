import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { S3FileMetadata, S3FileReader, S3FileResource } from '../../src/orchestration';

describe('S3 File Resources tests', () => {
  test('S3FileReader creates expected policies.', async () => {
    let app = new App();
    let stack = new Stack(app, 'MyStack');
    let bucket = Bucket.fromBucketName(stack, 'my_bucket', 'my-bucket');
    let key = 'foo/bar/baz.json';

    new S3FileResource(stack, 'Writer', {
      purpose: 'ToWrite',
      bucket: bucket,
      key: key,
      body: { some: 'data' },
      physicalResourceId: PhysicalResourceId.of('Writer'),
    });

    new S3FileReader(stack, 'Reader', {
      purpose: 'ToRead',
      bucket: bucket,
      key: key,
      physicalResourceId: PhysicalResourceId.of('Reader'),
    });
    new S3FileMetadata(stack, 'Metadata', {
      purpose: 'ToReadMd',
      bucket: bucket,
      key: key,
      physicalResourceId: PhysicalResourceId.of('Metadata'),
    });
    let template = Template.fromStack(stack).toJSON();

    expect(template).toMatchObject({
      Resources: {
        CDKORCHCUSTOMRESOURCEResourcesCDKORCHCUSTOMRESOURCEProviderframeworkonEventServiceRoleDefaultPolicy9B953B1F: {
          Type: 'AWS::IAM::Policy',
        },
        MetadataCustomResourcePolicy2F43C2CA: {
          Type: 'AWS::IAM::Policy',
        },
        ReaderCustomResourcePolicy61FE32A3: {
          Type: 'AWS::IAM::Policy',
        },
      },
    });
  });
});