import { CustomResource } from 'aws-cdk-lib';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { AwsCustomResourcePolicy, AwsSdkCall } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { S3FileReaderProps } from './s3_file_reader';
import { RunResourceAlways } from '../custom-resources';
import { LambdaCustomResource } from '../custom-resources/lambda_custom_resource';
import { Task } from '../custom-resources/task';

/**
 * Properties for S3FileMetadata
 */
export interface S3FileMetadataProps extends S3FileReaderProps {
}

/**
 * Where S3FileResource WRITES a JSON file (with optional metadata) to S3, this construct
 * READS the METADATA from an S3 and makes them available
 * as attributes.  Attributes are flattened as per AwsCustomResource.
 *
 * You MUST request attributes from this class, otherwise there
 * is no purpose in creating it.  An error will result.
 *
 * CFN has limits to how much data can be returned.
 */
export class S3FileMetadata extends Task {
  /** LambdaCustomResource that implements this Task. */
  readonly lambdaCustomResource: LambdaCustomResource;
  /** L2 custom resource for this Task. */
  readonly customResource: CustomResource;

  constructor(scope: Construct, id: string, props: S3FileReaderProps) {
    super(scope, id);

    let onCreate: AwsSdkCall = {
      service: 'S3',
      action: 'headObject',
      parameters: {
        Bucket: props.bucket.bucketName,
        Key: props.key,
      },
      physicalResourceId: props.physicalResourceId,
      // If the object does not exist, can return given defaults.
      ignoreErrorCodesMatching: 'NoSuchKey|NoSuchBucket',
    };

    this.lambdaCustomResource = new LambdaCustomResource(this, 'Resource', {
      resourceType: props.resourceType ?? 'Custom::S3FileMetadata',
      onCreate: onCreate,
      onUpdate: onCreate,
      defaults: props.defaults,
      policy: AwsCustomResourcePolicy.fromStatements([
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
    this.customResource = this.lambdaCustomResource.customResource;

    // Force re-running every deployment.
    new RunResourceAlways(this);
  }
}
