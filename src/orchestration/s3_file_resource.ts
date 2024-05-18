import { CustomResource, RemovalPolicy } from 'aws-cdk-lib';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { AwsCustomResource, AwsCustomResourcePolicy, AwsSdkCall, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { RunResourceAlways } from '../custom-resources';

export interface S3FileResourceProps {
  readonly purpose: string;
  readonly body: any;
  readonly metadata?: Record<string, string>;
  readonly bucket: IBucket;
  readonly key: string;
  readonly physicalResourceId: PhysicalResourceId;
}

/**
 * A resources that writes an S3 JSON file.
 */
export class S3FileResource extends Construct {
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
      resourceType: `Custom::${props.purpose}`,
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

  applyRemovalPolicy(policy: RemovalPolicy) {
    let resource = (this.resource as any).customResource as CustomResource;
    resource.applyRemovalPolicy(policy);
  }
}
