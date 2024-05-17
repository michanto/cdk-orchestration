// import { singletonConstruct, InlineNodejsFunction, ConfigFileResource } from "@amzn/cdk-long-promise"
import { Duration } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct, IConstruct } from 'constructs';
import { ConfigFileReader, ConfigFileReaderProps, ConfigFileReaderResources, ConfigFileReaderResourcesProps } from './config_file_reader';
import { InlineNodejsFunction } from '../aws-lambda-nodejs';
import { Singleton } from '../core';

const LAMBDA_PATH = `${__dirname}/../../lib/orchestration/handlers`;

export interface ConfigFileMetadataResourcesProps extends ConfigFileReaderResourcesProps {
}

/**
 * Support resources for ConfigFileReader.
 */
export class ConfigFileMetadataResources extends ConfigFileReaderResources {
  constructor(scope: Construct, id: string, props: ConfigFileMetadataResourcesProps) {
    super(scope, id, props);
  }

  createOnEventFunction(props: ConfigFileReaderResourcesProps) {
    return new InlineNodejsFunction(this, `${props.purpose}OnEvent`, {
      entry: `${LAMBDA_PATH}/config_file_metadata_handler.js`,
      runtime: Runtime.NODEJS_18_X,
      role: this.role,
      timeout: Duration.minutes(1),
    });
  }
}

export interface ConfigFileMetadataProps extends ConfigFileReaderProps {
}

/**
 * This construct reads the metadata from an S3 file and makes them
 * available as resource attributes (Fn.getAtt).
 *
 * Supports passing default values for the attributes if they are not specified
 * on the file, or if the file/bucket does not exist.
 */
export class ConfigFileMetadata extends ConfigFileReader {
  constructor(scope: Construct, id: string, props: ConfigFileReaderProps) {
    super(scope, id, props);
  }

  protected createResources(props: ConfigFileReaderProps): ConfigFileReaderResources {
    return Singleton.create(this, `${props.purpose}::"Resources`,
      (scope: IConstruct, id: string) => {
        return new ConfigFileMetadataResources(scope, id, props);
      }) as ConfigFileReaderResources;
  }
}
