//import { ChainableTemporaryCredentials, config } from "aws-sdk";
// let AWS = require('aws-sdk')

if (process.env.LogLevel) {
  // config.logger = console;
}

function log(message: Record<string, any>) {
  if (process.env.LogLevel) {
    console.log(JSON.stringify(message));
  }
}

/**
 * Flattens a nested object
 *
 * @param object the object to be flattened
 * @returns a flat object with path as keys
 */
export function flatten(root: unknown): { [key: string]: any } {
  const ret: { [key: string]: any } = {};
  recurse(root);
  return ret;

  function recurse(x: unknown, path: string[] = []): any {
    if (x && typeof x === 'object') {
      for (const [key, value] of Object.entries(x)) {
        recurse(value, [...path, key]);
      }
      return;
    }

    ret[path.join('.')] = x;
  }
}

/**
 * Filters the keys of an object.
 */
export function filterKeys(object: object, pred: (key: string) => boolean) {
  return Object.entries(object)
    .reduce(
      (acc, [k, v]) => pred(k)
        ? { ...acc, [k]: v }
        : acc,
      {},
    );
}

export function startsWithOneOf(searchStrings: string[]): (string: string) => boolean {
  return function(string: string): boolean {
    for (const searchString of searchStrings) {
      if (string.startsWith(searchString)) {
        return true;
      }
    }
    return false;
  };
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
    let responseBufferField = call.responseBufferField;
    if (call.assumedRoleArn) {
      const timestamp = (new Date()).getTime();
      const params = {
        RoleArn: call.assumedRoleArn,
        RoleSessionName: `AwsSdkCall-${timestamp}`,
      };
      // TODO:  Remove.
      log({ params: params });
      log({ responseBufferField: responseBufferField });

      //config.credentials = new ChainableTemporaryCredentials({
      //  params: params,
      //});
    }
    /*
    const awsService = new (AWS as any)[call.service]({
      apiVersion: call.apiVersion,
      region: call.region,
    });

    try {
      let response = await awsService[call.action](
        call.parameters).promise();
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
      }

      if (responseBufferField && response[responseBufferField]) {
        let body = (response[responseBufferField] as any).toString("utf-8");
        response = JSON.parse(body)
      }
      return await Promise.resolve(response);
    } catch (e) {
      let error = e as any
      if (!call.ignoreErrorCodesMatching || !new RegExp(
        call.ignoreErrorCodesMatching).test(error.code)) {
        log({Error: error});
        return Promise.reject(error);
      }
    } */

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
    if (call.outputPath) {
      outputPaths = [call.outputPath];
    } else if (call.outputPaths) {
      outputPaths = call.outputPaths;
    }
    if (outputPaths) {
      data = filterKeys(flattened, startsWithOneOf(outputPaths));
    } else {
      data = flattened;
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

    if (call) {
      if (event.ResourceProperties.ResponseBufferField) {
        call.responseBufferField = event.ResourceProperties.ResponseBufferField;
      }
      let response = await this.getResponse(call);
      let flattened = this.flatten(response);
      let filtered = this.filter(call, flattened);
      let data: any = {
        ...(event.ResourceProperties.Defaults ?? {}),
        ...filtered,
      };
      let reply = {
        Data: data,
        IsComplete: true,
        PhysicalResourceId: physicalResourceId,
      };
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

export const handler = async (event: any, context: any) => {
  return new CustomResourceHandler().handle(event, context);
};
