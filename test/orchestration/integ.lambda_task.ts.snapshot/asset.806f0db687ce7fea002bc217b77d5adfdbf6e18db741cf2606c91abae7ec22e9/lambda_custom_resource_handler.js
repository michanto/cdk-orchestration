"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomResourceHandler = void 0;
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const shared_1 = require("./private/from_cdk/aws-custom-resource-handler/shared");
const aws_custom_resource_sdk_adapter_1 = require("./private/from_cdk/aws-custom-resource-sdk-adapter");
function log(message) {
    if (process.env.LogLevel) {
        console.log(JSON.stringify(message));
    }
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
class CustomResourceHandler {
    constructor(props) {
        this.props = props;
    }
    decodeProperties(event) {
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
    getPhysicalResourceId(event) {
        let physicalResourceId;
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
    getCall(event) {
        return event.ResourceProperties[event.RequestType];
    }
    async getResponse(call) {
        const apiCall = new aws_custom_resource_sdk_adapter_1.ApiCall(call.service, call.action);
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
            const { fromTemporaryCredentials } = await Promise.resolve().then(() => require('@aws-sdk/credential-providers'));
            credentials = fromTemporaryCredentials({
                params,
                clientConfig: call.region !== undefined ? { region: call.region } : undefined,
            });
        }
        const flatData = {};
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
                let body = response[responseBufferField].toString('utf-8');
                response = this.flatten(JSON.parse(body));
            }
            return await Promise.resolve(response);
        }
        catch (e) {
            let error = e;
            if (!call.ignoreErrorCodesMatching || !new RegExp(call.ignoreErrorCodesMatching).test(error.code)) {
                log({ Error: error });
                return Promise.reject(error);
            }
        }
        return Promise.resolve({});
    }
    flatten(response) {
        log({ Response: response });
        let flattened = (0, aws_custom_resource_sdk_adapter_1.flatten)(response);
        log({ Flattened: flattened });
        return flattened;
    }
    filter(call, flattened) {
        let data = {};
        let outputPaths;
        if (call.outputPaths) {
            outputPaths = call.outputPaths;
        }
        // Don't return anything if the user didn't request anything.
        if (outputPaths) {
            data = (0, shared_1.filterKeys)(flattened, (0, shared_1.startsWithOneOf)(outputPaths));
        }
        log({ Filtered: data });
        return data;
    }
    async handle(event, context) {
        log({ Event: event });
        log({ Context: context });
        event = this.decodeProperties(event);
        let physicalResourceId = this.getPhysicalResourceId(event);
        let call = this.getCall(event);
        let requestedOutputs = event.ResourceProperties.RequestedOutputs;
        if (requestedOutputs && requestedOutputs.length == 0) {
            requestedOutputs = undefined;
        }
        if (call) {
            if (call.outputPaths && requestedOutputs) {
                call.outputPaths = [...call.outputPaths, ...requestedOutputs];
            }
            else if (requestedOutputs) {
                call.outputPaths = requestedOutputs;
            }
            call.parameters = (0, shared_1.decodeSpecialValues)(call.parameters, physicalResourceId);
            console.log(JSON.stringify({ ...event, ResponseURL: '...' }));
            if (event.ResourceProperties.ResponseBufferField) {
                call.responseBufferField = event.ResourceProperties.ResponseBufferField;
            }
            let response = await this.getResponse(call);
            let flattened = this.flatten(response);
            let filtered = this.filter(call, flattened);
            let defaults = event.ResourceProperties.Defaults;
            let data = filtered || defaults ? {
                ...(defaults ?? {}),
                ...(filtered ?? {}),
            } : undefined;
            let reply = {
                IsComplete: true,
                PhysicalResourceId: physicalResourceId,
            };
            if (data) {
                reply.Data = data;
            }
            log({ Reply: reply });
            return Promise.resolve(reply);
        }
        else {
            let reply = {
                IsComplete: true,
                PhysicalResourceId: physicalResourceId,
            };
            log({ Reply: reply });
            return Promise.resolve(reply);
        }
    }
}
exports.CustomResourceHandler = CustomResourceHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhX2N1c3RvbV9yZXNvdXJjZV9oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2N1c3RvbS1yZXNvdXJjZXMvaGFuZGxlcnMvbGFtYmRhX2N1c3RvbV9yZXNvdXJjZV9oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBEQUEwRDtBQUMxRCwrQkFBK0I7QUFDL0IsNkRBQTZEO0FBQzdELGtGQUF5SDtBQUN6SCx3R0FBc0Y7QUFFdEYsU0FBUyxHQUFHLENBQUMsT0FBNEI7SUFDdkMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7QUFDSCxDQUFDO0FBaUJEOzs7Ozs7Ozs7R0FTRztBQUNILE1BQWEscUJBQXFCO0lBQ2hDLFlBQXFCLEtBQWtDO1FBQWxDLFVBQUssR0FBTCxLQUFLLENBQTZCO0lBQUcsQ0FBQztJQUUzRCxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ3pCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQztRQUN6RCxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztZQUNuRSxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtpQkFDdEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7aUJBQ3ZCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztZQUMvRCxHQUFHLENBQUMsRUFBRSxZQUFZ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QUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDNUMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztZQUNqRCxJQUFJLElBQUksR0FBUSxRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO2FBQ3BCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNkLElBQUksS0FBSyxHQUFRO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixrQkFBa0IsRUFBRSxrQkFBa0I7YUFDdkMsQ0FBQztZQUNGLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ1QsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksS0FBSyxHQUFHO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixrQkFBa0IsRUFBRSxrQkFBa0I7YUFDdkMsQ0FBQztZQUNGLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBaE1ELHNEQWdNQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IGRlY29kZVNwZWNpYWxWYWx1ZXMsIGZpbHRlcktleXMsIHN0YXJ0c1dpdGhPbmVPZiB9IGZyb20gJy4vcHJpdmF0ZS9mcm9tX2Nkay9hd3MtY3VzdG9tLXJlc291cmNlLWhhbmRsZXIvc2hhcmVkJztcbmltcG9ydCB7IEFwaUNhbGwsIGZsYXR0ZW4gfSBmcm9tICcuL3ByaXZhdGUvZnJvbV9jZGsvYXdzLWN1c3RvbS1yZXNvdXJjZS1zZGstYWRhcHRlcic7XG5cbmZ1bmN0aW9uIGxvZyhtZXNzYWdlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5Mb2dMZXZlbCkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVJlc291cmNlSGFuZGxlclByb3BzIHtcbiAgLyoqXG4gICAqIElmIHRydWUgd2Ugd2lsbCBhdXRvLXBhZ2luYXRlIHRoZSByZXNwb25zZSBmb3JcbiAgICogYXMgbWFueSBwYWdlcyBhcyB0aGVyZSBhcmUuXG4gICAqXG4gICAqIEF1dG8tcGFnaW5hdGUgZmVhdHVyZSByZWxpZXMgb24gdGhlIGV4aXN0YW5jZSBvZiBhIE5leHRUb2tlbiBpblxuICAgKiB0aGUgcmVzcG9uc2UuICBBbGwgYXJyYXkgZmllbGRzIGluIHRoZSByZXNwb25zZSB3aWxsIGJlIGFwcGVuZGVkIHRvLFxuICAgKiB3aGljaCBtYXkgb3IgbWF5IG5vdCBiZSB0aGUgZGVzaXJlZCByZXN1bHQuICBObyBwZXItQVBJIGxvZ2ljIGhhcyBiZWVuXG4gICAqIGltcGxlbWVudGVkLlxuICAgKlxuICAgKiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgKi9cbiAgYXV0b1BhZ2luYXRlPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDbGFzcyB0byBjcmVhdGUgQXdzQ3VzdG9tUmVzb3VyY2UgYmFzZWQgaGFuZGxlcnMuICBDb3BpZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgQXdzQ3VzdG9tUmVzb3VyY2UgYW5kXG4gKiBhZGRzIHRoZSBmb2xsb3dpbmcgZmVhdHVyZXM6XG4gKiAtIERlZmF1bHQgdmFsdWVzIGZvciBhdHRyaWJ1dGVzLlxuICogLSBSZXNwb25zZUJ1ZmZlckZpZWxkIGZvciBkZXNlcmxpYWxpemluZyBzdHJlYW1lZCByZXR1cm4gdmFsdWVzLlxuICpcbiAqIE1vc3Qgb2YgdGhpcyBjb2RlIHdhcyBjb3BpZWQgZnJvbSB0aGUgQ0RLIGhlcmU6XG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2F3cy9hd3MtY2RrL2Jsb2IvbWFpbi9wYWNrYWdlcy8lNDBhd3MtY2RrL2N1c3RvbS1yZXNvdXJjZS1oYW5kbGVycy9saWIvY3VzdG9tLXJlc291cmNlcy9hd3MtY3VzdG9tLXJlc291cmNlLWhhbmRsZXIvYXdzLXNkay12My1oYW5kbGVyLnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21SZXNvdXJjZUhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSBwcm9wcz86IEN1c3RvbVJlc291cmNlSGFuZGxlclByb3BzKSB7fVxuXG4gIGRlY29kZVByb3BlcnRpZXMoZXZlbnQ6IGFueSkge1xuICAgIGxldCBlbmNvZGVkID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkVuY29kZWRQcm9wZXJ0aWVzO1xuICAgIGlmIChlbmNvZGVkKSB7XG4gICAgICBsZXQgeyBFbmNvZGVkUHJvcGVydGllczogXywgLi4ub3RoZXJzIH0gPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXM7XG4gICAgICBsZXQgZGVjb2RlZFByb3BlcnRpZXMgPSBKU09OLnBhcnNlKEJ1ZmZlclxuICAgICAgICAuZnJvbShlbmNvZGVkLCAnYmFzZTY0JylcbiAgICAgICAgLnRvU3RyaW5nKCd1dGY4JykpO1xuICAgICAgZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzID0geyAuLi5vdGhlcnMsIC4uLmRlY29kZWRQcm9wZXJ0aWVzIH07XG4gICAgICBsb2coeyBEZWNvZGVkRXZlbnQ6IGV2ZW50IH0pO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICBnZXRQaHlzaWNhbFJlc291cmNlSWQoZXZlbnQ6IGFueSkge1xuICAgIGxldCBwaHlzaWNhbFJlc291cmNlSWQ6IHN0cmluZztcbiAgICBzd2l0Y2ggKGV2ZW50LlJlcXVlc3RUeXBlKSB7XG4gICAgICBjYXNlICdDcmVhdGUnOlxuICAgICAgICBwaHlzaWNhbFJlc291cmNlSWQgPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuQ3JlYXRlPy5waHlzaWNhbFJlc291cmNlSWQ/LmlkID8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5VcGRhdGU/LnBoeXNpY2FsUmVzb3VyY2VJZD8uaWQgPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkRlbGV0ZT8ucGh5c2ljYWxSZXNvdXJjZUlkPy5pZCA/P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5Mb2dpY2FsUmVzb3VyY2VJZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdVcGRhdGUnOlxuICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgcGh5c2ljYWxSZXNvdXJjZUlkID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzW2V2ZW50LlJlcXVlc3RUeXBlXT8ucGh5c2ljYWxSZXNvdXJjZUlkPy5pZCA/PyBldmVudC5QaHlzaWNhbFJlc291cmNlSWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCByZXF1ZXN0IHR5cGU6ICR7ZXZlbnQuUmVxdWVzdFR5cGV9YCk7XG4gICAgfVxuICAgIHJldHVybiBwaHlzaWNhbFJlc291cmNlSWQ7XG4gIH1cblxuICBnZXRDYWxsKGV2ZW50OiBhbnkpIHtcbiAgICByZXR1cm4gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzW2V2ZW50LlJlcXVlc3RUeXBlXTtcbiAgfVxuXG4gIGFzeW5jIGdldFJlc3BvbnNlKGNhbGw6IGFueSkge1xuICAgIGNvbnN0IGFwaUNhbGwgPSBuZXcgQXBpQ2FsbChjYWxsLnNlcnZpY2UsIGNhbGwuYWN0aW9uKTtcblxuICAgIGxldCByZXNwb25zZUJ1ZmZlckZpZWxkID0gY2FsbC5yZXNwb25zZUJ1ZmZlckZpZWxkO1xuICAgIGxldCBjcmVkZW50aWFscztcbiAgICBpZiAoY2FsbC5hc3N1bWVkUm9sZUFybikge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgUm9sZUFybjogY2FsbC5hc3N1bWVkUm9sZUFybixcbiAgICAgICAgUm9sZVNlc3Npb25OYW1lOiBgQXdzU2RrQ2FsbC0ke3RpbWVzdGFtcH1gLFxuICAgICAgfTtcbiAgICAgIC8vIFRPRE86ICBSZW1vdmUuXG4gICAgICBsb2coeyBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICAgIGxvZyh7IHJlc3BvbnNlQnVmZmVyRmllbGQ6IHJlc3BvbnNlQnVmZmVyRmllbGQgfSk7XG5cblxuICAgICAgY29uc3QgeyBmcm9tVGVtcG9yYXJ5Q3JlZGVudGlhbHMgfSA9IGF3YWl0IGltcG9ydCgnQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMnKTtcbiAgICAgIGNyZWRlbnRpYWxzID0gZnJvbVRlbXBvcmFyeUNyZWRlbnRpYWxzKHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBjbGllbnRDb25maWc6IGNhbGwucmVnaW9uICE9PSB1bmRlZmluZWQgPyB7IHJlZ2lvbjogY2FsbC5yZWdpb24gfSA6IHVuZGVmaW5lZCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZsYXREYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGFwaUNhbGwuaW52b2tlKHtcbiAgICAgICAgLy8gRlVUVVJFOiAgQ29weSBjb2RlIHRvIGluc3RhbGwgbGF0ZXN0IFNESyBmcm9tIENES1xuICAgICAgICAvLyBzZGtQYWNrYWdlOiBhd3NTZGssXG4gICAgICAgIGFwaVZlcnNpb246IGNhbGwuYXBpVmVyc2lvbixcbiAgICAgICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzLFxuICAgICAgICByZWdpb246IGNhbGwucmVnaW9uLFxuICAgICAgICBwYXJhbWV0ZXJzOiBjYWxsLnBhcmFtZXRlcnMsXG4gICAgICAgIGZsYXR0ZW5SZXNwb25zZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbG9nQXBpUmVzcG9uc2VEYXRhID0gY2FsbD8ubG9nQXBpUmVzcG9uc2VEYXRhID8/IHRydWU7XG4gICAgICBpZiAobG9nQXBpUmVzcG9uc2VEYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBUEkgcmVzcG9uc2UnLCByZXNwb25zZSk7XG4gICAgICB9XG4gICAgICBmbGF0RGF0YS5hcGlWZXJzaW9uID0gYXBpQ2FsbC5jbGllbnQuY29uZmlnLmFwaVZlcnNpb247IC8vIEZvciB0ZXN0IHB1cnBvc2VzOiBjaGVjayBpZiBhcGlWZXJzaW9uIHdhcyBjb3JyZWN0bHkgcGFzc2VkLlxuICAgICAgZmxhdERhdGEucmVnaW9uID0gYXdhaXQgYXBpQ2FsbC5jbGllbnQuY29uZmlnLnJlZ2lvbigpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7IC8vIEZvciB0ZXN0IHB1cnBvc2VzOiBjaGVjayBpZiByZWdpb24gd2FzIGNvcnJlY3RseSBwYXNzZWQuXG4gICAgICBPYmplY3QuYXNzaWduKGZsYXREYXRhLCByZXNwb25zZSk7XG5cbiAgICAgIC8qIEZVVFVSRTogIEF1dG9QYWdpbmF0ZS5cbiAgICAgIGlmIChyZXNwb25zZS5OZXh0VG9rZW4gJiYgdGhpcy5wcm9wcz8uYXV0b1BhZ2luYXRlKSB7XG4gICAgICAgIGxldCBuZXh0VG9rZW4gPSByZXNwb25zZS5OZXh0VG9rZW47XG4gICAgICAgIHdoaWxlIChuZXh0VG9rZW4pIHtcbiAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgIC4uLmNhbGwucGFyYW1ldGVycyxcbiAgICAgICAgICAgIE5leHRUb2tlbjogbmV4dFRva2VuLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgbmV4dFBhZ2UgPSBhd2FpdCBhd3NTZXJ2aWNlW2NhbGwuYWN0aW9uXShcbiAgICAgICAgICAgIHBhcmFtZXRlcnMpLnByb21pc2UoKTtcbiAgICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiBuZXh0UGFnZSkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV4dFBhZ2VbZmllbGRdKSAmJiBBcnJheS5pc0FycmF5KHJlc3BvbnNlW2ZpZWxkXSkpIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2VbZmllbGRdID0gWy4uLnJlc3BvbnNlW2ZpZWxkXSxcbiAgICAgICAgICAgICAgICAuLi5uZXh0UGFnZVtmaWVsZF1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0VG9rZW4gPSBuZXh0UGFnZS5OZXh0VG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2luY2UgaXQncyBub3cgdW5kZWZpbmVkLCBkb24ndCByZXR1cm4gaXQuXG4gICAgICAgIGRlbGV0ZSByZXNwb25zZS5OZXh0VG9rZW47XG4gICAgICB9ICovXG5cbiAgICAgIGlmIChyZXNwb25zZUJ1ZmZlckZpZWxkICYmIHJlc3BvbnNlW3Jlc3BvbnNlQnVmZmVyRmllbGRdKSB7XG4gICAgICAgIGxldCBib2R5ID0gKHJlc3BvbnNlW3Jlc3BvbnNlQnVmZmVyRmllbGRdIGFzIGFueSkudG9TdHJpbmcoJ3V0Zi04Jyk7XG4gICAgICAgIHJlc3BvbnNlID0gdGhpcy5mbGF0dGVuKEpTT04ucGFyc2UoYm9keSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbGV0IGVycm9yID0gZSBhcyBhbnk7XG4gICAgICBpZiAoIWNhbGwuaWdub3JlRXJyb3JDb2Rlc01hdGNoaW5nIHx8ICFuZXcgUmVnRXhwKFxuICAgICAgICBjYWxsLmlnbm9yZUVycm9yQ29kZXNNYXRjaGluZykudGVzdChlcnJvci5jb2RlKSkge1xuICAgICAgICBsb2coeyBFcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7XG4gIH1cblxuICBmbGF0dGVuKHJlc3BvbnNlOiBhbnkpIHtcbiAgICBsb2coeyBSZXNwb25zZTogcmVzcG9uc2UgfSk7XG4gICAgbGV0IGZsYXR0ZW5lZCA9IGZsYXR0ZW4ocmVzcG9uc2UpO1xuICAgIGxvZyh7IEZsYXR0ZW5lZDogZmxhdHRlbmVkIH0pO1xuICAgIHJldHVybiBmbGF0dGVuZWQ7XG4gIH1cblxuICBmaWx0ZXIoY2FsbDogYW55LCBmbGF0dGVuZWQ6IGFueSkge1xuICAgIGxldCBkYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgbGV0IG91dHB1dFBhdGhzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoY2FsbC5vdXRwdXRQYXRocykge1xuICAgICAgb3V0cHV0UGF0aHMgPSBjYWxsLm91dHB1dFBhdGhzO1xuICAgIH1cblxuICAgIC8vIERvbid0IHJldHVybiBhbnl0aGluZyBpZiB0aGUgdXNlciBkaWRuJ3QgcmVxdWVzdCBhbnl0aGluZy5cbiAgICBpZiAob3V0cHV0UGF0aHMpIHtcbiAgICAgIGRhdGEgPSBmaWx0ZXJLZXlzKGZsYXR0ZW5lZCwgc3RhcnRzV2l0aE9uZU9mKG91dHB1dFBhdGhzKSk7XG4gICAgfVxuICAgIGxvZyh7IEZpbHRlcmVkOiBkYXRhIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlKGV2ZW50OiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgIGxvZyh7IEV2ZW50OiBldmVudCB9KTtcbiAgICBsb2coeyBDb250ZXh0OiBjb250ZXh0IH0pO1xuXG4gICAgZXZlbnQgPSB0aGlzLmRlY29kZVByb3BlcnRpZXMoZXZlbnQpO1xuICAgIGxldCBwaHlzaWNhbFJlc291cmNlSWQgPSB0aGlzLmdldFBoeXNpY2FsUmVzb3VyY2VJZChldmVudCk7XG4gICAgbGV0IGNhbGwgPSB0aGlzLmdldENhbGwoZXZlbnQpO1xuICAgIGxldCByZXF1ZXN0ZWRPdXRwdXRzID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLlJlcXVlc3RlZE91dHB1dHM7XG4gICAgaWYgKHJlcXVlc3RlZE91dHB1dHMgJiYgcmVxdWVzdGVkT3V0cHV0cy5sZW5ndGggPT0gMCkge1xuICAgICAgcmVxdWVzdGVkT3V0cHV0cyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoY2FsbCkge1xuICAgICAgaWYgKGNhbGwub3V0cHV0UGF0aHMgJiYgcmVxdWVzdGVkT3V0cHV0cykge1xuICAgICAgICBjYWxsLm91dHB1dFBhdGhzID0gWy4uLmNhbGwub3V0cHV0UGF0aHMsIC4uLnJlcXVlc3RlZE91dHB1dHNdO1xuICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0ZWRPdXRwdXRzKSB7XG4gICAgICAgIGNhbGwub3V0cHV0UGF0aHMgPSByZXF1ZXN0ZWRPdXRwdXRzO1xuICAgICAgfVxuXG4gICAgICBjYWxsLnBhcmFtZXRlcnMgPSBkZWNvZGVTcGVjaWFsVmFsdWVzKGNhbGwucGFyYW1ldGVycywgcGh5c2ljYWxSZXNvdXJjZUlkKTtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHsgLi4uZXZlbnQsIFJlc3BvbnNlVVJMOiAnLi4uJyB9KSk7XG4gICAgICBpZiAoZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLlJlc3BvbnNlQnVmZmVyRmllbGQpIHtcbiAgICAgICAgY2FsbC5yZXNwb25zZUJ1ZmZlckZpZWxkID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLlJlc3BvbnNlQnVmZmVyRmllbGQ7XG4gICAgICB9XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldFJlc3BvbnNlKGNhbGwpO1xuICAgICAgbGV0IGZsYXR0ZW5lZCA9IHRoaXMuZmxhdHRlbihyZXNwb25zZSk7XG4gICAgICBsZXQgZmlsdGVyZWQgPSB0aGlzLmZpbHRlcihjYWxsLCBmbGF0dGVuZWQpO1xuICAgICAgbGV0IGRlZmF1bHRzID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkRlZmF1bHRzO1xuICAgICAgbGV0IGRhdGE6IGFueSA9IGZpbHRlcmVkIHx8IGRlZmF1bHRzID8ge1xuICAgICAgICAuLi4oZGVmYXVsdHMgPz8ge30pLFxuICAgICAgICAuLi4oZmlsdGVyZWQgPz8ge30pLFxuICAgICAgfSA6IHVuZGVmaW5lZDtcbiAgICAgIGxldCByZXBseTogYW55ID0ge1xuICAgICAgICBJc0NvbXBsZXRlOiB0cnVlLFxuICAgICAgICBQaHlzaWNhbFJlc291cmNlSWQ6IHBoeXNpY2FsUmVzb3VyY2VJZCxcbiAgICAgIH07XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICByZXBseS5EYXRhID0gZGF0YTtcbiAgICAgIH1cbiAgICAgIGxvZyh7IFJlcGx5OiByZXBseSB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVwbHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmVwbHkgPSB7XG4gICAgICAgIElzQ29tcGxldGU6IHRydWUsXG4gICAgICAgIFBoeXNpY2FsUmVzb3VyY2VJZDogcGh5c2ljYWxSZXNvdXJjZUlkLFxuICAgICAgfTtcbiAgICAgIGxvZyh7IFJlcGx5OiByZXBseSB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVwbHkpO1xuICAgIH1cbiAgfVxufVxuIl19