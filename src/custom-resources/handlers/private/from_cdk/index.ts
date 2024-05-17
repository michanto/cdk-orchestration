import * as adapter from './aws-custom-resource-sdk-adapter/sdk-v2-to-v3.json';
import * as metadata from './aws-custom-resource-sdk-adapter/sdk-v3-metadata.json';

if (!adapter.apigateway) {
  throw new Error('Did not import adapter');
}

if (!metadata.s3) {
  throw new Error('Did not import metadata');
}

