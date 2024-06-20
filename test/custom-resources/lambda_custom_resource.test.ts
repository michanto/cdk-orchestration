import { RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Bucket, IBucket } from 'aws-cdk-lib/aws-s3';
import { AwsCustomResourcePolicy, AwsSdkCall, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { LambdaCustomResource, RunResourceAlways } from '../../src/custom-resources';

export interface S3FileReadingProps {
  readonly purpose: string;
  readonly bucket: IBucket;
  readonly key: string;
  readonly physicalResourceId: PhysicalResourceId;
  /**
   * Default values to use if the file/properties can't be found.
   * If not specified the default is undefined.
   */
  readonly defaults?: Record<string, any>;

  readonly policyFromCalls: boolean;
}

function getCall(params: any = { MyProp: 'MyVal' }, physicalResourceId: PhysicalResourceId = PhysicalResourceId.of('Something')): AwsSdkCall {
  return {
    service: 'S3',
    action: 'getObject',
    parameters: params,
    physicalResourceId: physicalResourceId,
    // If the object does not exist, can return given defaults.
    ignoreErrorCodesMatching: 'NoSuchKey|NoSuchBucket',
  };
};

export class S3FileReading extends Construct {
  readonly resource: LambdaCustomResource;

  constructor(scope: Construct, id: string, props: S3FileReadingProps) {
    super(scope, id);
    let onCreate = getCall({
      Bucket: props.bucket.bucketName,
      Key: props.key,
    });

    this.resource = new LambdaCustomResource(this, 'Resource', {
      resourceType: `Custom::${props.purpose}`,
      onCreate: onCreate,
      onUpdate: {
        ...onCreate,
        assumedRoleArn: 'arn:aws:iam::000000000000:role/role-name-with-path',
      },
      removalPolicy: RemovalPolicy.DESTROY,
      defaults: props.defaults,
      responseBufferField: 'Body',
      policy: props.policyFromCalls ? AwsCustomResourcePolicy.fromSdkCalls({
        resources: [
          props.bucket.bucketArn,
          `${props.bucket.bucketArn}/*`,
        ],
      }) :
        AwsCustomResourcePolicy.fromStatements([
          new PolicyStatement({
            actions: ['s3:HeadObject', 's3:ListObjects', 's3:GetObject'],
            effect: Effect.ALLOW,
            resources: [
              props.bucket.bucketArn,
              `${props.bucket.bucketArn}/*`,
            ],
          }),
        ]),
      // Mostly to remove the warning.  I've tested it both ways and it works.
      installLatestAwsSdk: false,
    });

    // Force re-running every deployment.
    new RunResourceAlways(this);
  }

  /**
   * Returns a flattened JSON key from the file.
   * @param attributeName The name of the attribute.
   * @returns An IResolvable for the resource attribute.
   */
  getAtt(attributeName: string) {
    return this.resource.getAtt(attributeName);
  }

  /**
   * Returns a flattened JSON key from the file.
   * @param attributeName The name of the attribute.
   * @returns An string for the resource attribute.
   */
  getAttString(attributeName: string) {
    return this.resource.getAttString(attributeName);
  }
}

describe('LambdaCustomResource tests.', () => {
  it('LambdaCustomResource works.', () => {
    let stack = new Stack();
    let bucket = Bucket.fromBucketName(stack, 'my_bucket', 'my-bucket');
    let key = 'foo/bar/baz.json';
    let customResource = new S3FileReading(stack, 'Reading', {
      purpose: 'ToDoReading',
      bucket: bucket,
      key: key,
      physicalResourceId: PhysicalResourceId.of('Reading'),
      defaults: { Some: 'Data' },
      policyFromCalls: true,
    });
    customResource.getAttString('Some');
    customResource.resource.customResource.getAttString('Some');

    let customResource2 = new S3FileReading(stack, 'Reading2', {
      purpose: 'ToDoReading',
      bucket: bucket,
      key: key,
      physicalResourceId: PhysicalResourceId.of('Reading2'),
      defaults: { Some: 'Data' },
      policyFromCalls: false,
    });
    customResource.resource.getResponseField('Some');
    customResource.resource.getResponseFieldReference('Some');
    if (!customResource2) { throw new Error('badness'); }
    Template.fromStack(stack);
  });

  it('LambdaCustomResource no calls.', () => {
    let stack = new Stack();
    expect(() => new LambdaCustomResource(stack, 'Resource', {
      resourceType: 'Custom::MyResourceType',
    })).toThrow();
  });

  it('LambdaCustomResource no role or policy.', () => {
    let stack = new Stack();
    expect(() => new LambdaCustomResource(stack, 'Resource', {
      resourceType: 'Custom::MyResourceType',
      onCreate: getCall(),
    })).toThrow();
  });
  it('LambdaCustomResource no physical resource id.', () => {
    let stack = new Stack();
    expect(() => new LambdaCustomResource(stack, 'Resource', {
      resourceType: 'Custom::MyResourceType',
      policy: AwsCustomResourcePolicy.fromSdkCalls({ resources: ['*'] }),
      onCreate: { ...getCall(), physicalResourceId: undefined },
    })).toThrow();
  });
  it('LambdaCustomResource only update no physical resource id.', () => {
    let stack = new Stack();
    expect(() => new LambdaCustomResource(stack, 'Resource', {
      resourceType: 'Custom::MyResourceType',
      policy: AwsCustomResourcePolicy.fromSdkCalls({ resources: ['*'] }),
      onUpdate: { ...getCall(), physicalResourceId: undefined },
    })).toThrow();
  });
});
