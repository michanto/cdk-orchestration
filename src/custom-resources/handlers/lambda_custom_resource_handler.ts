/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { decodeSpecialValues, filterKeys, startsWithOneOf } from './private/from_cdk/aws-custom-resource-handler/shared';
import { ApiCall, flatten } from './private/from_cdk/aws-custom-resource-sdk-adapter';

function log(message: Record<string, any>) {
  if (process.env.LogLevel) {
    console.log(JSON.stringify(message));
  }
}

export interface CustomResourceHandlerProps {
  /**
   * If true we will auto-paginate the response for
   * as many pages as there are.
   *
   * Auto-paginate feature relies on the existance of a NextToken in
   * the response.  All array fields in the response will be appended to,
   * which may or may not be the desired result.  No per-API logic has been
   * implemented.
   *
   * Default is false.
   */
  autoPaginate?: boolean;
}

/**
 * Class to create AwsCustomResource based handlers.  Copies the functionality of AwsCustomResource and
 * adds the following features:
 * - Default values for attributes.
 * - ResponseBufferField for deserlializing streamed return values.
 *
 * Most of this code was copied from the CDK here:
 *
 * https://github.com/aws/aws-cdk/blob/main/packages/%40aws-cdk/custom-resource-handlers/lib/custom-resources/aws-custom-resource-handler/aws-sdk-v3-handler.ts
 */
export class CustomResourceHandler {
  constructor(readonly props?: CustomResourceHandlerProps) {}

  decodeProperties(event: any) {
    let encoded = event.ResourceProperties.EncodedProperties;
    if (encoded) {
      let { EncodedProperties: _, ...others } = event.ResourceProperties;
      let decodedProperties = JSON.parse(Buffer
        .from(encoded, 'base64')
        .toString('utf8'));
      event.ResourceProperties = { ...others, ...decodedProperties };
      log({ DecodedEvent: event });
    }
    return event;
  }

  getPhysicalResourceId(event: any) {
    let physicalResourceId: string;
    switch (event.RequestType) {
      case 'Create':
        physicalResourceId = event.ResourceProperties.Create?.physicalResourceId?.id ??
                             event.ResourceProperties.Update?.physicalResourceId?.id ??
                             event.ResourceProperties.Delete?.physicalResourceId?.id ??
                             event.LogicalResourceId;
        break;
      case 'Update':
      case 'Delete':
        physicalResourceId = event.ResourceProperties[event.RequestType]?.physicalResourceId?.id ?? event.PhysicalResourceId;
        break;
      default:
        throw new Error(`Unsupported request type: ${event.RequestType}`);
    }
    return physicalResourceId;
  }

  getCall(event: any) {
    return event.ResourceProperties[event.RequestType];
  }

  async getResponse(call: any) {
    const apiCall = new ApiCall(call.service, call.action);

    let responseBufferField = call.responseBufferField;
    let credentials;
    if (call.assumedRoleArn) {
      const timestamp = (new Date()).getTime();
      const params = {
        RoleArn: call.assumedRoleArn,
        RoleSessionName: `AwsSdkCall-${timestamp}`,
      };
      // TODO:  Remove.
      log({ params: params });
      log({ responseBufferField: responseBufferField });


      const { fromTemporaryCredentials } = await import('@aws-sdk/credential-providers');
      credentials = fromTemporaryCredentials({
        params,
        clientConfig: call.region !== undefined ? { region: call.region } : undefined,
      });
    }

    const flatData: { [key: string]: string } = {};
    try {
      let response = await apiCall.invoke({
        // FUTURE:  Copy code to install latest SDK from CDK
        // sdkPackage: awsSdk,
        apiVersion: call.apiVersion,
        credentials: credentials,
        region: call.region,
        parameters: call.parameters,
        flattenResponse: true,
      });
      const logApiResponseData = call?.logApiResponseData ?? true;
      if (logApiResponseData) {
        console.log('API response', response);
      }
      flatData.apiVersion = apiCall.client.config.apiVersion; // For test purposes: check if apiVersion was correctly passed.
      flatData.region = await apiCall.client.config.region().catch(() => undefined); // For test purposes: check if region was correctly passed.
      Object.assign(flatData, response);

      /* FUTURE:  AutoPaginate.
      if (response.NextToken && this.props?.autoPaginate) {
        let nextToken = response.NextToken;
        while (nextToken) {
          let parameters = {
            ...call.parameters,
            NextToken: nextToken,
          };
          const nextPage = await awsService[call.action](
            parameters).promise();
          for (let field in nextPage) {
            if (Array.isArray(nextPage[field]) && Array.isArray(response[field])) {
              response[field] = [...response[field],
                ...nextPage[field]];
            }
          }
          nextToken = nextPage.NextToken;
        }
        // Since it's now undefined, don't return it.
        delete response.NextToken;
      } */

      if (responseBufferField && response[responseBufferField]) {
        let body = (response[responseBufferField] as any).toString('utf-8');
        response = this.flatten(JSON.parse(body));
      }
      return await Promise.resolve(response);
    } catch (e) {
      let error = e as any;
      if (!call.ignoreErrorCodesMatching || !new RegExp(
        call.ignoreErrorCodesMatching).test(error.code)) {
        log({ Error: error });
        return Promise.reject(error);
      }
    }

    return Promise.resolve({});
  }

  flatten(response: any) {
    log({ Response: response });
    let flattened = flatten(response);
    log({ Flattened: flattened });
    return flattened;
  }

  filter(call: any, flattened: any) {
    let data: { [key: string]: string } = {};
    let outputPaths: string[] | undefined;
    if (call.outputPaths) {
      outputPaths = call.outputPaths;
    }

    // Don't return anything if the user didn't request anything.
    if (outputPaths) {
      data = filterKeys(flattened, startsWithOneOf(outputPaths));
    }
    log({ Filtered: data });
    return data;
  }

  async handle(event: any, context: any) {
    log({ Event: event });
    log({ Context: context });

    event = this.decodeProperties(event);
    let physicalResourceId = this.getPhysicalResourceId(event);
    let call = this.getCall(event);
    let requestedOutputs = event.ResourceProperties.RequestedOutputs
    if (requestedOutputs && requestedOutputs.length == 0) {
      requestedOutputs = undefined;
    }

    if (call) {
      if (call.outputPaths && requestedOutputs) {
        call.outputPaths = [...call.outputPaths, ...requestedOutputs];
      } else if (requestedOutputs) {
        call.outputPaths = requestedOutputs;
      }

      call.parameters = decodeSpecialValues(call.parameters, physicalResourceId);
      console.log(JSON.stringify({ ...event, ResponseURL: '...' }));
      if (event.ResourceProperties.ResponseBufferField) {
        call.responseBufferField = event.ResourceProperties.ResponseBufferField;
      }
      let response = await this.getResponse(call);
      let flattened = this.flatten(response);
      let filtered = this.filter(call, flattened);
      let defaults = event.ResourceProperties.Defaults
      let data: any = filtered || defaults ? {
        ...(defaults ?? {}),
        ...(filtered ?? {}),
      } : undefined;
      let reply: any = {
        IsComplete: true,
        PhysicalResourceId: physicalResourceId,
      };
      if (data) {
        reply.Data = data;
      }
      log({ Reply: reply });
      return Promise.resolve(reply);
    } else {
      let reply = {
        IsComplete: true,
        PhysicalResourceId: physicalResourceId,
      };
      log({ Reply: reply });
      return Promise.resolve(reply);
    }
  }
}
