// import { singletonConstruct, InlineNodejsFunction, ConfigFileResource } from "@amzn/cdk-long-promise"
import { CfnResource, CustomResource, Duration, Fn } from 'aws-cdk-lib';
import { IRole, Role, ServicePrincipal, PolicyDocument, PolicyStatement, Effect, ManagedPolicy } from 'aws-cdk-lib/aws-iam';
import { Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { PhysicalResourceId, Provider } from 'aws-cdk-lib/custom-resources';
import { Construct, IConstruct } from 'constructs';
import { InlineNodejsFunction } from '../aws-lambda-nodejs';
import { BUILD_TIME, Singleton } from '../core';

const LAMBDA_PATH = `${__dirname}/../../../dist/lib/constructs/lambdas`;

export interface ConfigFileReaderResourcesProps {
  readonly purpose: string;
  readonly bucket: IBucket;
}

/**
 * Support resources for ConfigFileReader.
 */
export class ConfigFileReaderResources extends Construct {

  readonly role: IRole;
  readonly onEvent: Function;
  readonly provider: Provider;

  constructor(scope: Construct, id: string, props: ConfigFileReaderResourcesProps) {
    super(scope, id);
    let purpose = props.purpose;

    this.role = this.createRole(props);

    this.onEvent = this.createOnEventFunction(props);

    this.provider = new Provider(this, `${purpose}Provider`, {
      onEventHandler: this.onEvent,
    });
  }

  createOnEventFunction(props: ConfigFileReaderResourcesProps) {
    return new InlineNodejsFunction(this, `${props.purpose}OnEvent`, {
      entry: `${LAMBDA_PATH}/config_file_reader_handler.js`,
      role: this.role,
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.minutes(1),
    });
  }

  createRole(props: ConfigFileReaderResourcesProps) {
    return new Role(this, `${props.purpose}Role`, {
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
      inlinePolicies: {
        CFRPolicy: new PolicyDocument({
          statements: [new PolicyStatement({
            actions: ['s3:HeadObject', 's3:ListObjects', 's3:GetObject'],
            effect: Effect.ALLOW,
            resources: [
              props.bucket.bucketArn,
              `${props.bucket.bucketArn}/*`,
            ],
          })],
        }),
      },
      managedPolicies: [ManagedPolicy.fromAwsManagedPolicyName(
        'service-role/AWSLambdaBasicExecutionRole')],
    });
  }
}

export interface ConfigFileReaderProps extends ConfigFileReaderResourcesProps {
  readonly key: string;
  readonly physicalResourceId: PhysicalResourceId;
  /**
   * Default values to use if the file/properties can't be found.
   * If not specified the default is undefined.
   */
  readonly defaults?: Record<string, any>;
}

/**
 * Where ConfigFileResource WRITES a JSON file to S3, this construct
 * READS the file from S3 and makes the contents of the file available
 * as attributes.
 *
 * Attributes in the file need to be at the top level of the document,
 * since CFN doesn't support heirarchical attributes.  Also, CFN
 * has limits to how large the data returned can be. To support scenarios
 * with heirarchical data and/or returning a subset of the data or specify default
 * values, you can overwrite createResources and
 * ConfigFileReaderResources.createOnEventFunction to re-use most of this
 * construct to support your specific scenario with a custom handler.
 *
 * Note that if the data is not in the file, or the file does not exist,
 * then accessing the attribute will result in a CFN deployment error.
 */
export class ConfigFileReader extends Construct {
  readonly resources: ConfigFileReaderResources;
  readonly resource: CustomResource;

  constructor(scope: Construct, id: string, props: ConfigFileReaderProps) {
    super(scope, id);
    let purpose = props.purpose;

    this.resources = this.createResources(props);

    this.resource = new CustomResource(this, 'Resource', {
      serviceToken: this.resources.provider.serviceToken,
      resourceType: `Custom::${purpose}`,
      properties: {
        Key: props.key,
        Bucket: props.bucket.bucketName,
        // Force re-running every deployment.
        Version: BUILD_TIME,
        Defaults: props.defaults,
        PhysicalResourceId: props.physicalResourceId,
      },
    });
  }

  protected get cfnResource() {
    return this.resource.node.tryFindChild('Default') as CfnResource;
  }

  protected createResources(props: ConfigFileReaderProps) {
    return Singleton.create(this, `${props.purpose}Resources`,
      (scope: IConstruct, id: string) => {
        return new ConfigFileReaderResources(scope, id, props);
      }) as ConfigFileReaderResources;
  }

  /**
   * Returns a top-level JSON key from the file.
   * @param attributeName
   * @returns An IResolvable for the resource attribute.
   */
  getAtt(attributeName: string) {
    return Fn.getAtt(this.cfnResource.logicalId, attributeName);
  }

}
