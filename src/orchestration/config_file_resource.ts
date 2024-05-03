import { Construct } from "constructs";
import { CustomResource, RemovalPolicy} from "aws-cdk-lib";
import { IBucket } from "aws-cdk-lib/aws-s3";
import { AwsCustomResource, AwsCustomResourcePolicy, AwsSdkCall, PhysicalResourceId } from "aws-cdk-lib/custom-resources";
import { CustomResourceUtilities } from "../custom-resources";

export interface ConfigFileResourceProps {
    readonly purpose: string,
    readonly body: any,
    readonly bucket: IBucket,
    readonly key: string,
    readonly physicalResourceId: PhysicalResourceId
}

/**
 * A resources that is represented by a JSON S3 file.
 */
export class ConfigFileResource extends Construct {
    readonly resource: AwsCustomResource

    applyRemovalPolicy(policy: RemovalPolicy) {
        let resource = (this.resource as any)["customResource"] as CustomResource
        resource.applyRemovalPolicy(policy)
    }

    constructor(scope: Construct, id: string, props: ConfigFileResourceProps) {
        super(scope, id);
        let onCreate: AwsSdkCall = {
            service: "S3",
            action: "putObject",
            parameters: {
                Body: JSON.stringify(props.body),
                Bucket: props.bucket.bucketName,
                Key: props.key
            },
            physicalResourceId: props.physicalResourceId
        }

        let onDelete: AwsSdkCall = {
            service: "S3",
            action: "deleteObject",
            parameters: {
                Bucket: props.bucket.bucketName,
                Key: props.key
            },
            physicalResourceId: props.physicalResourceId
        }

        this.resource = new AwsCustomResource(this, "Resource", {
            resourceType: `Custom::${props.purpose}`,
            onCreate: onCreate,
            onDelete: onDelete,
            onUpdate: onCreate,
            policy: AwsCustomResourcePolicy.fromSdkCalls({
                resources: [props.bucket.bucketArn, `${props.bucket.bucketArn}/*`]
            }),
            // Mostly to remove the warning.  I've tested it both ways and it works.
            installLatestAwsSdk: false
        })

        // Force re-running every deployment.
        let utils = new CustomResourceUtilities();
        utils.runResourceAlways(this);
    }
}
