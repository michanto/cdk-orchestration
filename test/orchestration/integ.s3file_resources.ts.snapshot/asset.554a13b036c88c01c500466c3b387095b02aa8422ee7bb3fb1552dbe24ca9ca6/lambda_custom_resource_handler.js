"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomResourceHandler = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
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
                flattenResponse: false,
            });
            const logApiResponseData = call?.logApiResponseData ?? true;
            if (logApiResponseData) {
                console.log('API response', response);
            }
            flatData.apiVersion = apiCall.client.config.apiVersion; // For test purposes: check if apiVersion was correctly passed.
            flatData.region = await apiCall.client.config.region().catch(() => undefined); // For test purposes: check if region was correctly passed.
            Object.assign(response, flatData);
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
            log({ responseBufferField: responseBufferField });
            log({ response: response });
            if (responseBufferField && response[responseBufferField]) {
                let body = response[responseBufferField].toString('utf-8');
                Object.assign(response, this.flatten(JSON.parse(body)));
            }
            log({ response: response });
            return await Promise.resolve(response);
        }
        catch (e) {
            let error = e;
            if (!call.ignoreErrorCodesMatching || !new RegExp(call.ignoreErrorCodesMatching).test(error.code)) {
                log({ Error: error });
                return Promise.reject(error);
            }
        }
        throw new Error('Should have returned a response or thrown.');
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
_a = JSII_RTTI_SYMBOL_1;
CustomResourceHandler[_a] = { fqn: "@michanto/cdk-orchestration.custom_resources.CustomResourceHandler", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhX2N1c3RvbV9yZXNvdXJjZV9oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2N1c3RvbS1yZXNvdXJjZXMvaGFuZGxlcnMvbGFtYmRhX2N1c3RvbV9yZXNvdXJjZV9oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQTBEO0FBQzFELCtCQUErQjtBQUMvQiw2REFBNkQ7QUFDN0Qsa0ZBQXlIO0FBQ3pILHdHQUFzRjtBQUV0RixTQUFTLEdBQUcsQ0FBQyxPQUE0QjtJQUN2QyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztBQUNILENBQUM7QUFpQkQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBYSxxQkFBcUI7SUFDaEMsWUFBcUIsS0FBa0M7UUFBbEMsVUFBSyxHQUFMLEtBQUssQ0FBNkI7SUFBRyxDQUFDO0lBRTNELGdCQUFnQixDQUFDLEtBQVU7UUFDekIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDO1FBQ3pELElBQUksT0FBTyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1lBQ25FLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2lCQUN0QyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztpQkFDdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO1lBQy9ELEdBQUcsQ0FBQyxFQUFFLFlB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S0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7O0FBak1ILHNEQWtNQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IGRlY29kZVNwZWNpYWxWYWx1ZXMsIGZpbHRlcktleXMsIHN0YXJ0c1dpdGhPbmVPZiB9IGZyb20gJy4vcHJpdmF0ZS9mcm9tX2Nkay9hd3MtY3VzdG9tLXJlc291cmNlLWhhbmRsZXIvc2hhcmVkJztcbmltcG9ydCB7IEFwaUNhbGwsIGZsYXR0ZW4gfSBmcm9tICcuL3ByaXZhdGUvZnJvbV9jZGsvYXdzLWN1c3RvbS1yZXNvdXJjZS1zZGstYWRhcHRlcic7XG5cbmZ1bmN0aW9uIGxvZyhtZXNzYWdlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5Mb2dMZXZlbCkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVJlc291cmNlSGFuZGxlclByb3BzIHtcbiAgLyoqXG4gICAqIElmIHRydWUgd2Ugd2lsbCBhdXRvLXBhZ2luYXRlIHRoZSByZXNwb25zZSBmb3JcbiAgICogYXMgbWFueSBwYWdlcyBhcyB0aGVyZSBhcmUuXG4gICAqXG4gICAqIEF1dG8tcGFnaW5hdGUgZmVhdHVyZSByZWxpZXMgb24gdGhlIGV4aXN0YW5jZSBvZiBhIE5leHRUb2tlbiBpblxuICAgKiB0aGUgcmVzcG9uc2UuICBBbGwgYXJyYXkgZmllbGRzIGluIHRoZSByZXNwb25zZSB3aWxsIGJlIGFwcGVuZGVkIHRvLFxuICAgKiB3aGljaCBtYXkgb3IgbWF5IG5vdCBiZSB0aGUgZGVzaXJlZCByZXN1bHQuICBObyBwZXItQVBJIGxvZ2ljIGhhcyBiZWVuXG4gICAqIGltcGxlbWVudGVkLlxuICAgKlxuICAgKiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgKi9cbiAgcmVhZG9ubHkgYXV0b1BhZ2luYXRlPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDbGFzcyB0byBjcmVhdGUgQXdzQ3VzdG9tUmVzb3VyY2UgYmFzZWQgaGFuZGxlcnMuICBDb3BpZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgQXdzQ3VzdG9tUmVzb3VyY2UgYW5kXG4gKiBhZGRzIHRoZSBmb2xsb3dpbmcgZmVhdHVyZXM6XG4gKiAtIERlZmF1bHQgdmFsdWVzIGZvciBhdHRyaWJ1dGVzLlxuICogLSBSZXNwb25zZUJ1ZmZlckZpZWxkIGZvciBkZXNlcmxpYWxpemluZyBzdHJlYW1lZCByZXR1cm4gdmFsdWVzLlxuICpcbiAqIE1vc3Qgb2YgdGhpcyBjb2RlIHdhcyBjb3BpZWQgZnJvbSB0aGUgQ0RLIGhlcmU6XG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2F3cy9hd3MtY2RrL2Jsb2IvbWFpbi9wYWNrYWdlcy8lNDBhd3MtY2RrL2N1c3RvbS1yZXNvdXJjZS1oYW5kbGVycy9saWIvY3VzdG9tLXJlc291cmNlcy9hd3MtY3VzdG9tLXJlc291cmNlLWhhbmRsZXIvYXdzLXNkay12My1oYW5kbGVyLnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21SZXNvdXJjZUhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSBwcm9wcz86IEN1c3RvbVJlc291cmNlSGFuZGxlclByb3BzKSB7fVxuXG4gIGRlY29kZVByb3BlcnRpZXMoZXZlbnQ6IGFueSkge1xuICAgIGxldCBlbmNvZGVkID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkVuY29kZWRQcm9wZXJ0aWVzO1xuICAgIGlmIChlbmNvZGVkKSB7XG4gICAgICBsZXQgeyBFbmNvZGVkUHJvcGVydGllczogXywgLi4ub3RoZXJzIH0gPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXM7XG4gICAgICBsZXQgZGVjb2RlZFByb3BlcnRpZXMgPSBKU09OLnBhcnNlKEJ1ZmZlclxuICAgICAgICAuZnJvbShlbmNvZGVkLCAnYmFzZTY0JylcbiAgICAgICAgLnRvU3RyaW5nKCd1dGY4JykpO1xuICAgICAgZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzID0geyAuLi5vdGhlcnMsIC4uLmRlY29kZWRQcm9wZXJ0aWVzIH07XG4gICAgICBsb2coeyBEZWNvZGVkRXZlbnQ6IGV2ZW50IH0pO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICBnZXRQaHlzaWNhbFJlc291cmNlSWQoZXZlbnQ6IGFueSkge1xuICAgIGxldCBwaHlzaWNhbFJlc291cmNlSWQ6IHN0cmluZztcbiAgICBzd2l0Y2ggKGV2ZW50LlJlcXVlc3RUeXBlKSB7XG4gICAgICBjYXNlICdDcmVhdGUnOlxuICAgICAgICBwaHlzaWNhbFJlc291cmNlSWQgPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuQ3JlYXRlPy5waHlzaWNhbFJlc291cmNlSWQ/LmlkID8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5VcGRhdGU/LnBoeXNpY2FsUmVzb3VyY2VJZD8uaWQgPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkRlbGV0ZT8ucGh5c2ljYWxSZXNvdXJjZUlkPy5pZCA/P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5Mb2dpY2FsUmVzb3VyY2VJZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdVcGRhdGUnOlxuICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgcGh5c2ljYWxSZXNvdXJjZUlkID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzW2V2ZW50LlJlcXVlc3RUeXBlXT8ucGh5c2ljYWxSZXNvdXJjZUlkPy5pZCA/PyBldmVudC5QaHlzaWNhbFJlc291cmNlSWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCByZXF1ZXN0IHR5cGU6ICR7ZXZlbnQuUmVxdWVzdFR5cGV9YCk7XG4gICAgfVxuICAgIHJldHVybiBwaHlzaWNhbFJlc291cmNlSWQ7XG4gIH1cblxuICBnZXRDYWxsKGV2ZW50OiBhbnkpIHtcbiAgICByZXR1cm4gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzW2V2ZW50LlJlcXVlc3RUeXBlXTtcbiAgfVxuXG4gIGFzeW5jIGdldFJlc3BvbnNlKGNhbGw6IGFueSkge1xuICAgIGNvbnN0IGFwaUNhbGwgPSBuZXcgQXBpQ2FsbChjYWxsLnNlcnZpY2UsIGNhbGwuYWN0aW9uKTtcblxuICAgIGxldCByZXNwb25zZUJ1ZmZlckZpZWxkID0gY2FsbC5yZXNwb25zZUJ1ZmZlckZpZWxkO1xuICAgIGxldCBjcmVkZW50aWFscztcbiAgICBpZiAoY2FsbC5hc3N1bWVkUm9sZUFybikge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgUm9sZUFybjogY2FsbC5hc3N1bWVkUm9sZUFybixcbiAgICAgICAgUm9sZVNlc3Npb25OYW1lOiBgQXdzU2RrQ2FsbC0ke3RpbWVzdGFtcH1gLFxuICAgICAgfTtcbiAgICAgIC8vIFRPRE86ICBSZW1vdmUuXG4gICAgICBsb2coeyBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICAgIGxvZyh7IHJlc3BvbnNlQnVmZmVyRmllbGQ6IHJlc3BvbnNlQnVmZmVyRmllbGQgfSk7XG5cblxuICAgICAgY29uc3QgeyBmcm9tVGVtcG9yYXJ5Q3JlZGVudGlhbHMgfSA9IGF3YWl0IGltcG9ydCgnQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMnKTtcbiAgICAgIGNyZWRlbnRpYWxzID0gZnJvbVRlbXBvcmFyeUNyZWRlbnRpYWxzKHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBjbGllbnRDb25maWc6IGNhbGwucmVnaW9uICE9PSB1bmRlZmluZWQgPyB7IHJlZ2lvbjogY2FsbC5yZWdpb24gfSA6IHVuZGVmaW5lZCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZsYXREYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGFwaUNhbGwuaW52b2tlKHtcbiAgICAgICAgLy8gRlVUVVJFOiAgQ29weSBjb2RlIHRvIGluc3RhbGwgbGF0ZXN0IFNESyBmcm9tIENES1xuICAgICAgICAvLyBzZGtQYWNrYWdlOiBhd3NTZGssXG4gICAgICAgIGFwaVZlcnNpb246IGNhbGwuYXBpVmVyc2lvbixcbiAgICAgICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzLFxuICAgICAgICByZWdpb246IGNhbGwucmVnaW9uLFxuICAgICAgICBwYXJhbWV0ZXJzOiBjYWxsLnBhcmFtZXRlcnMsXG4gICAgICAgIGZsYXR0ZW5SZXNwb25zZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGxvZ0FwaVJlc3BvbnNlRGF0YSA9IGNhbGw/LmxvZ0FwaVJlc3BvbnNlRGF0YSA/PyB0cnVlO1xuICAgICAgaWYgKGxvZ0FwaVJlc3BvbnNlRGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnQVBJIHJlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgZmxhdERhdGEuYXBpVmVyc2lvbiA9IGFwaUNhbGwuY2xpZW50LmNvbmZpZy5hcGlWZXJzaW9uOyAvLyBGb3IgdGVzdCBwdXJwb3NlczogY2hlY2sgaWYgYXBpVmVyc2lvbiB3YXMgY29ycmVjdGx5IHBhc3NlZC5cbiAgICAgIGZsYXREYXRhLnJlZ2lvbiA9IGF3YWl0IGFwaUNhbGwuY2xpZW50LmNvbmZpZy5yZWdpb24oKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpOyAvLyBGb3IgdGVzdCBwdXJwb3NlczogY2hlY2sgaWYgcmVnaW9uIHdhcyBjb3JyZWN0bHkgcGFzc2VkLlxuICAgICAgT2JqZWN0LmFzc2lnbihyZXNwb25zZSwgZmxhdERhdGEpO1xuXG4gICAgICAvKiBGVVRVUkU6ICBBdXRvUGFnaW5hdGUuXG4gICAgICBpZiAocmVzcG9uc2UuTmV4dFRva2VuICYmIHRoaXMucHJvcHM/LmF1dG9QYWdpbmF0ZSkge1xuICAgICAgICBsZXQgbmV4dFRva2VuID0gcmVzcG9uc2UuTmV4dFRva2VuO1xuICAgICAgICB3aGlsZSAobmV4dFRva2VuKSB7XG4gICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgICAuLi5jYWxsLnBhcmFtZXRlcnMsXG4gICAgICAgICAgICBOZXh0VG9rZW46IG5leHRUb2tlbixcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IG5leHRQYWdlID0gYXdhaXQgYXdzU2VydmljZVtjYWxsLmFjdGlvbl0oXG4gICAgICAgICAgICBwYXJhbWV0ZXJzKS5wcm9taXNlKCk7XG4gICAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gbmV4dFBhZ2UpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5leHRQYWdlW2ZpZWxkXSkgJiYgQXJyYXkuaXNBcnJheShyZXNwb25zZVtmaWVsZF0pKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlW2ZpZWxkXSA9IFsuLi5yZXNwb25zZVtmaWVsZF0sXG4gICAgICAgICAgICAgICAgLi4ubmV4dFBhZ2VbZmllbGRdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dFRva2VuID0gbmV4dFBhZ2UuTmV4dFRva2VuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNpbmNlIGl0J3Mgbm93IHVuZGVmaW5lZCwgZG9uJ3QgcmV0dXJuIGl0LlxuICAgICAgICBkZWxldGUgcmVzcG9uc2UuTmV4dFRva2VuO1xuICAgICAgfSAqL1xuXG4gICAgICBsb2coeyByZXNwb25zZUJ1ZmZlckZpZWxkOiByZXNwb25zZUJ1ZmZlckZpZWxkIH0pO1xuICAgICAgbG9nKHsgcmVzcG9uc2U6IHJlc3BvbnNlIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlQnVmZmVyRmllbGQgJiYgcmVzcG9uc2VbcmVzcG9uc2VCdWZmZXJGaWVsZF0pIHtcbiAgICAgICAgbGV0IGJvZHkgPSAocmVzcG9uc2VbcmVzcG9uc2VCdWZmZXJGaWVsZF0gYXMgYW55KS50b1N0cmluZygndXRmLTgnKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNwb25zZSwgdGhpcy5mbGF0dGVuKEpTT04ucGFyc2UoYm9keSkpKTtcbiAgICAgIH1cbiAgICAgIGxvZyh7IHJlc3BvbnNlOiByZXNwb25zZSB9KTtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxldCBlcnJvciA9IGUgYXMgYW55O1xuICAgICAgaWYgKCFjYWxsLmlnbm9yZUVycm9yQ29kZXNNYXRjaGluZyB8fCAhbmV3IFJlZ0V4cChcbiAgICAgICAgY2FsbC5pZ25vcmVFcnJvckNvZGVzTWF0Y2hpbmcpLnRlc3QoZXJyb3IuY29kZSkpIHtcbiAgICAgICAgbG9nKHsgRXJyb3I6IGVycm9yIH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nob3VsZCBoYXZlIHJldHVybmVkIGEgcmVzcG9uc2Ugb3IgdGhyb3duLicpO1xuICB9XG5cbiAgZmxhdHRlbihyZXNwb25zZTogYW55KSB7XG4gICAgbG9nKHsgUmVzcG9uc2U6IHJlc3BvbnNlIH0pO1xuICAgIGxldCBmbGF0dGVuZWQgPSBmbGF0dGVuKHJlc3BvbnNlKTtcbiAgICBsb2coeyBGbGF0dGVuZWQ6IGZsYXR0ZW5lZCB9KTtcbiAgICByZXR1cm4gZmxhdHRlbmVkO1xuICB9XG5cbiAgZmlsdGVyKGNhbGw6IGFueSwgZmxhdHRlbmVkOiBhbnkpIHtcbiAgICBsZXQgZGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGxldCBvdXRwdXRQYXRoczogc3RyaW5nW10gfCB1bmRlZmluZWQ7XG4gICAgaWYgKGNhbGwub3V0cHV0UGF0aHMpIHtcbiAgICAgIG91dHB1dFBhdGhzID0gY2FsbC5vdXRwdXRQYXRocztcbiAgICB9XG5cbiAgICAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcgaWYgdGhlIHVzZXIgZGlkbid0IHJlcXVlc3QgYW55dGhpbmcuXG4gICAgaWYgKG91dHB1dFBhdGhzKSB7XG4gICAgICBkYXRhID0gZmlsdGVyS2V5cyhmbGF0dGVuZWQsIHN0YXJ0c1dpdGhPbmVPZihvdXRwdXRQYXRocykpO1xuICAgIH1cbiAgICBsb2coeyBGaWx0ZXJlZDogZGF0YSB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZShldmVudDogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICBsb2coeyBFdmVudDogZXZlbnQgfSk7XG4gICAgbG9nKHsgQ29udGV4dDogY29udGV4dCB9KTtcblxuICAgIGV2ZW50ID0gdGhpcy5kZWNvZGVQcm9wZXJ0aWVzKGV2ZW50KTtcbiAgICBsZXQgcGh5c2ljYWxSZXNvdXJjZUlkID0gdGhpcy5nZXRQaHlzaWNhbFJlc291cmNlSWQoZXZlbnQpO1xuICAgIGxldCBjYWxsID0gdGhpcy5nZXRDYWxsKGV2ZW50KTtcbiAgICBsZXQgcmVxdWVzdGVkT3V0cHV0cyA9IGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5SZXF1ZXN0ZWRPdXRwdXRzO1xuICAgIGlmIChyZXF1ZXN0ZWRPdXRwdXRzICYmIHJlcXVlc3RlZE91dHB1dHMubGVuZ3RoID09IDApIHtcbiAgICAgIHJlcXVlc3RlZE91dHB1dHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIGlmIChjYWxsLm91dHB1dFBhdGhzICYmIHJlcXVlc3RlZE91dHB1dHMpIHtcbiAgICAgICAgY2FsbC5vdXRwdXRQYXRocyA9IFsuLi5jYWxsLm91dHB1dFBhdGhzLCAuLi5yZXF1ZXN0ZWRPdXRwdXRzXTtcbiAgICAgIH0gZWxzZSBpZiAocmVxdWVzdGVkT3V0cHV0cykge1xuICAgICAgICBjYWxsLm91dHB1dFBhdGhzID0gcmVxdWVzdGVkT3V0cHV0cztcbiAgICAgIH1cblxuICAgICAgY2FsbC5wYXJhbWV0ZXJzID0gZGVjb2RlU3BlY2lhbFZhbHVlcyhjYWxsLnBhcmFtZXRlcnMsIHBoeXNpY2FsUmVzb3VyY2VJZCk7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh7IC4uLmV2ZW50LCBSZXNwb25zZVVSTDogJy4uLicgfSkpO1xuICAgICAgaWYgKGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5SZXNwb25zZUJ1ZmZlckZpZWxkKSB7XG4gICAgICAgIGNhbGwucmVzcG9uc2VCdWZmZXJGaWVsZCA9IGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5SZXNwb25zZUJ1ZmZlckZpZWxkO1xuICAgICAgfVxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZShjYWxsKTtcbiAgICAgIGxldCBmbGF0dGVuZWQgPSB0aGlzLmZsYXR0ZW4ocmVzcG9uc2UpO1xuICAgICAgbGV0IGZpbHRlcmVkID0gdGhpcy5maWx0ZXIoY2FsbCwgZmxhdHRlbmVkKTtcbiAgICAgIGxldCBkZWZhdWx0cyA9IGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5EZWZhdWx0cztcbiAgICAgIGxldCBkYXRhOiBhbnkgPSBmaWx0ZXJlZCB8fCBkZWZhdWx0cyA/IHtcbiAgICAgICAgLi4uKGRlZmF1bHRzID8/IHt9KSxcbiAgICAgICAgLi4uKGZpbHRlcmVkID8/IHt9KSxcbiAgICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgICBsZXQgcmVwbHk6IGFueSA9IHtcbiAgICAgICAgSXNDb21wbGV0ZTogdHJ1ZSxcbiAgICAgICAgUGh5c2ljYWxSZXNvdXJjZUlkOiBwaHlzaWNhbFJlc291cmNlSWQsXG4gICAgICB9O1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmVwbHkuRGF0YSA9IGRhdGE7XG4gICAgICB9XG4gICAgICBsb2coeyBSZXBseTogcmVwbHkgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcGx5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlcGx5ID0ge1xuICAgICAgICBJc0NvbXBsZXRlOiB0cnVlLFxuICAgICAgICBQaHlzaWNhbFJlc291cmNlSWQ6IHBoeXNpY2FsUmVzb3VyY2VJZCxcbiAgICAgIH07XG4gICAgICBsb2coeyBSZXBseTogcmVwbHkgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcGx5KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==