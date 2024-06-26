import { CustomResource } from 'aws-cdk-lib';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { AwsCustomResource, AwsCustomResourcePolicy, AwsSdkCall, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { RunResourceAlways } from '../custom-resources';
import { Task } from '../custom-resources/task';

export interface S3FileResourceProps {
  /** Resource Type.  Defaults to Custom::S3FileResource. */
  readonly resourceType?: string;
  /** Body of the file to write. */
  readonly body: any;
  /** Metadata for the file. */
  readonly metadata?: Record<string, string>;
  /** Bucket to write to. */
  readonly bucket: IBucket;
  /** S3 file key to write to. */
  readonly key: string;
  /** Physical resource ID. */
  readonly physicalResourceId: PhysicalResourceId;
}

/**
 * A resources that writes an S3 JSON file.
 */
export class S3FileResource extends Task {
  /** AwsCustomResource that implements this task. */
  readonly resource: AwsCustomResource;

  constructor(scope: Construct, id: string, props: S3FileResourceProps) {
    super(scope, id);
    let onCreate: AwsSdkCall = {
      service: 'S3',
      action: 'putObject',
      parameters: {
        Body: JSON.stringify(props.body),
        Bucket: props.bucket.bucketName,
        Key: props.key,
      },
      physicalResourceId: props.physicalResourceId,
    };
    if (props.metadata) {
      onCreate.parameters.Metadata = props.metadata;
    }

    let onDelete: AwsSdkCall = {
      service: 'S3',
      action: 'deleteObject',
      parameters: {
        Bucket: props.bucket.bucketName,
        Key: props.key,
      },
      physicalResourceId: props.physicalResourceId,
    };

    this.resource = new AwsCustomResource(this, 'Resource', {
      resourceType: props.resourceType ?? 'Custom::S3FileResource',
      onCreate: onCreate,
      onDelete: onDelete,
      onUpdate: onCreate,
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: [props.bucket.bucketArn, `${props.bucket.bucketArn}/*`],
      }),
      // Mostly to remove the warning.  I've tested it both ways and it works.
      installLatestAwsSdk: false,
    });

    // Force re-running every deployment.
    new RunResourceAlways(this);
  }

  get customResource() {
    return (this.resource as any).customResource as CustomResource;
  }
}
