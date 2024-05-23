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
                if (response.FunctionError) {
                    throw new Error(body);
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhX2N1c3RvbV9yZXNvdXJjZV9oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2N1c3RvbS1yZXNvdXJjZXMvaGFuZGxlcnMvbGFtYmRhX2N1c3RvbV9yZXNvdXJjZV9oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQTBEO0FBQzFELCtCQUErQjtBQUMvQiw2REFBNkQ7QUFDN0Qsa0ZBQXlIO0FBQ3pILHdHQUFzRjtBQUV0RixTQUFTLEdBQUcsQ0FBQyxPQUE0QjtJQUN2QyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztBQUNILENBQUM7QUFpQkQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBYSxxQkFBcUI7SUFDaEMsWUFBcUIsS0FBa0M7UUFBbEMsVUFBSyxHQUFMLEtBQUssQ0FBNkI7SUFBRyxDQUFDO0lBRTNELGdCQUFnQixDQUFDLEtBQVU7UUFDekIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDO1FBQ3pELElBQUksT0FBTyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1lBQ25FLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2lCQUN0QyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztpQkFDdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO1lBQy9ELEdBQUcsQ0FBQyxFQUFFLFlB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Q3ZDLENBQUM7WUFDRixHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN0QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7O0FBck1ILHNEQXNNQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IGRlY29kZVNwZWNpYWxWYWx1ZXMsIGZpbHRlcktleXMsIHN0YXJ0c1dpdGhPbmVPZiB9IGZyb20gJy4vcHJpdmF0ZS9mcm9tX2Nkay9hd3MtY3VzdG9tLXJlc291cmNlLWhhbmRsZXIvc2hhcmVkJztcbmltcG9ydCB7IEFwaUNhbGwsIGZsYXR0ZW4gfSBmcm9tICcuL3ByaXZhdGUvZnJvbV9jZGsvYXdzLWN1c3RvbS1yZXNvdXJjZS1zZGstYWRhcHRlcic7XG5cbmZ1bmN0aW9uIGxvZyhtZXNzYWdlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5Mb2dMZXZlbCkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVJlc291cmNlSGFuZGxlclByb3BzIHtcbiAgLyoqXG4gICAqIElmIHRydWUgd2Ugd2lsbCBhdXRvLXBhZ2luYXRlIHRoZSByZXNwb25zZSBmb3JcbiAgICogYXMgbWFueSBwYWdlcyBhcyB0aGVyZSBhcmUuXG4gICAqXG4gICAqIEF1dG8tcGFnaW5hdGUgZmVhdHVyZSByZWxpZXMgb24gdGhlIGV4aXN0YW5jZSBvZiBhIE5leHRUb2tlbiBpblxuICAgKiB0aGUgcmVzcG9uc2UuICBBbGwgYXJyYXkgZmllbGRzIGluIHRoZSByZXNwb25zZSB3aWxsIGJlIGFwcGVuZGVkIHRvLFxuICAgKiB3aGljaCBtYXkgb3IgbWF5IG5vdCBiZSB0aGUgZGVzaXJlZCByZXN1bHQuICBObyBwZXItQVBJIGxvZ2ljIGhhcyBiZWVuXG4gICAqIGltcGxlbWVudGVkLlxuICAgKlxuICAgKiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgKi9cbiAgcmVhZG9ubHkgYXV0b1BhZ2luYXRlPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDbGFzcyB0byBjcmVhdGUgQXdzQ3VzdG9tUmVzb3VyY2UgYmFzZWQgaGFuZGxlcnMuICBDb3BpZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgQXdzQ3VzdG9tUmVzb3VyY2UgYW5kXG4gKiBhZGRzIHRoZSBmb2xsb3dpbmcgZmVhdHVyZXM6XG4gKiAtIERlZmF1bHQgdmFsdWVzIGZvciBhdHRyaWJ1dGVzLlxuICogLSBSZXNwb25zZUJ1ZmZlckZpZWxkIGZvciBkZXNlcmxpYWxpemluZyBzdHJlYW1lZCByZXR1cm4gdmFsdWVzLlxuICpcbiAqIE1vc3Qgb2YgdGhpcyBjb2RlIHdhcyBjb3BpZWQgZnJvbSB0aGUgQ0RLIGhlcmU6XG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2F3cy9hd3MtY2RrL2Jsb2IvbWFpbi9wYWNrYWdlcy8lNDBhd3MtY2RrL2N1c3RvbS1yZXNvdXJjZS1oYW5kbGVycy9saWIvY3VzdG9tLXJlc291cmNlcy9hd3MtY3VzdG9tLXJlc291cmNlLWhhbmRsZXIvYXdzLXNkay12My1oYW5kbGVyLnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21SZXNvdXJjZUhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSBwcm9wcz86IEN1c3RvbVJlc291cmNlSGFuZGxlclByb3BzKSB7fVxuXG4gIGRlY29kZVByb3BlcnRpZXMoZXZlbnQ6IGFueSkge1xuICAgIGxldCBlbmNvZGVkID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkVuY29kZWRQcm9wZXJ0aWVzO1xuICAgIGlmIChlbmNvZGVkKSB7XG4gICAgICBsZXQgeyBFbmNvZGVkUHJvcGVydGllczogXywgLi4ub3RoZXJzIH0gPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXM7XG4gICAgICBsZXQgZGVjb2RlZFByb3BlcnRpZXMgPSBKU09OLnBhcnNlKEJ1ZmZlclxuICAgICAgICAuZnJvbShlbmNvZGVkLCAnYmFzZTY0JylcbiAgICAgICAgLnRvU3RyaW5nKCd1dGY4JykpO1xuICAgICAgZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzID0geyAuLi5vdGhlcnMsIC4uLmRlY29kZWRQcm9wZXJ0aWVzIH07XG4gICAgICBsb2coeyBEZWNvZGVkRXZlbnQ6IGV2ZW50IH0pO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICBnZXRQaHlzaWNhbFJlc291cmNlSWQoZXZlbnQ6IGFueSkge1xuICAgIGxldCBwaHlzaWNhbFJlc291cmNlSWQ6IHN0cmluZztcbiAgICBzd2l0Y2ggKGV2ZW50LlJlcXVlc3RUeXBlKSB7XG4gICAgICBjYXNlICdDcmVhdGUnOlxuICAgICAgICBwaHlzaWNhbFJlc291cmNlSWQgPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuQ3JlYXRlPy5waHlzaWNhbFJlc291cmNlSWQ/LmlkID8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5VcGRhdGU/LnBoeXNpY2FsUmVzb3VyY2VJZD8uaWQgPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkRlbGV0ZT8ucGh5c2ljYWxSZXNvdXJjZUlkPy5pZCA/P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5Mb2dpY2FsUmVzb3VyY2VJZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdVcGRhdGUnOlxuICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgcGh5c2ljYWxSZXNvdXJjZUlkID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzW2V2ZW50LlJlcXVlc3RUeXBlXT8ucGh5c2ljYWxSZXNvdXJjZUlkPy5pZCA/PyBldmVudC5QaHlzaWNhbFJlc291cmNlSWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCByZXF1ZXN0IHR5cGU6ICR7ZXZlbnQuUmVxdWVzdFR5cGV9YCk7XG4gICAgfVxuICAgIHJldHVybiBwaHlzaWNhbFJlc291cmNlSWQ7XG4gIH1cblxuICBnZXRDYWxsKGV2ZW50OiBhbnkpIHtcbiAgICByZXR1cm4gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzW2V2ZW50LlJlcXVlc3RUeXBlXTtcbiAgfVxuXG4gIGFzeW5jIGdldFJlc3BvbnNlKGNhbGw6IGFueSkge1xuICAgIGNvbnN0IGFwaUNhbGwgPSBuZXcgQXBpQ2FsbChjYWxsLnNlcnZpY2UsIGNhbGwuYWN0aW9uKTtcblxuICAgIGxldCByZXNwb25zZUJ1ZmZlckZpZWxkID0gY2FsbC5yZXNwb25zZUJ1ZmZlckZpZWxkO1xuICAgIGxldCBjcmVkZW50aWFscztcbiAgICBpZiAoY2FsbC5hc3N1bWVkUm9sZUFybikge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgUm9sZUFybjogY2FsbC5hc3N1bWVkUm9sZUFybixcbiAgICAgICAgUm9sZVNlc3Npb25OYW1lOiBgQXdzU2RrQ2FsbC0ke3RpbWVzdGFtcH1gLFxuICAgICAgfTtcbiAgICAgIC8vIFRPRE86ICBSZW1vdmUuXG4gICAgICBsb2coeyBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICAgIGxvZyh7IHJlc3BvbnNlQnVmZmVyRmllbGQ6IHJlc3BvbnNlQnVmZmVyRmllbGQgfSk7XG5cblxuICAgICAgY29uc3QgeyBmcm9tVGVtcG9yYXJ5Q3JlZGVudGlhbHMgfSA9IGF3YWl0IGltcG9ydCgnQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMnKTtcbiAgICAgIGNyZWRlbnRpYWxzID0gZnJvbVRlbXBvcmFyeUNyZWRlbnRpYWxzKHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBjbGllbnRDb25maWc6IGNhbGwucmVnaW9uICE9PSB1bmRlZmluZWQgPyB7IHJlZ2lvbjogY2FsbC5yZWdpb24gfSA6IHVuZGVmaW5lZCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZsYXREYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGFwaUNhbGwuaW52b2tlKHtcbiAgICAgICAgLy8gRlVUVVJFOiAgQ29weSBjb2RlIHRvIGluc3RhbGwgbGF0ZXN0IFNESyBmcm9tIENES1xuICAgICAgICAvLyBzZGtQYWNrYWdlOiBhd3NTZGssXG4gICAgICAgIGFwaVZlcnNpb246IGNhbGwuYXBpVmVyc2lvbixcbiAgICAgICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzLFxuICAgICAgICByZWdpb246IGNhbGwucmVnaW9uLFxuICAgICAgICBwYXJhbWV0ZXJzOiBjYWxsLnBhcmFtZXRlcnMsXG4gICAgICAgIGZsYXR0ZW5SZXNwb25zZTogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbG9nQXBpUmVzcG9uc2VEYXRhID0gY2FsbD8ubG9nQXBpUmVzcG9uc2VEYXRhID8/IHRydWU7XG4gICAgICBpZiAobG9nQXBpUmVzcG9uc2VEYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBUEkgcmVzcG9uc2UnLCByZXNwb25zZSk7XG4gICAgICB9XG4gICAgICBmbGF0RGF0YS5hcGlWZXJzaW9uID0gYXBpQ2FsbC5jbGllbnQuY29uZmlnLmFwaVZlcnNpb247IC8vIEZvciB0ZXN0IHB1cnBvc2VzOiBjaGVjayBpZiBhcGlWZXJzaW9uIHdhcyBjb3JyZWN0bHkgcGFzc2VkLlxuICAgICAgZmxhdERhdGEucmVnaW9uID0gYXdhaXQgYXBpQ2FsbC5jbGllbnQuY29uZmlnLnJlZ2lvbigpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7IC8vIEZvciB0ZXN0IHB1cnBvc2VzOiBjaGVjayBpZiByZWdpb24gd2FzIGNvcnJlY3RseSBwYXNzZWQuXG4gICAgICBPYmplY3QuYXNzaWduKHJlc3BvbnNlLCBmbGF0RGF0YSk7XG5cbiAgICAgIC8qIEZVVFVSRTogIEF1dG9QYWdpbmF0ZS5cbiAgICAgIGlmIChyZXNwb25zZS5OZXh0VG9rZW4gJiYgdGhpcy5wcm9wcz8uYXV0b1BhZ2luYXRlKSB7XG4gICAgICAgIGxldCBuZXh0VG9rZW4gPSByZXNwb25zZS5OZXh0VG9rZW47XG4gICAgICAgIHdoaWxlIChuZXh0VG9rZW4pIHtcbiAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgIC4uLmNhbGwucGFyYW1ldGVycyxcbiAgICAgICAgICAgIE5leHRUb2tlbjogbmV4dFRva2VuLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgbmV4dFBhZ2UgPSBhd2FpdCBhd3NTZXJ2aWNlW2NhbGwuYWN0aW9uXShcbiAgICAgICAgICAgIHBhcmFtZXRlcnMpLnByb21pc2UoKTtcbiAgICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiBuZXh0UGFnZSkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV4dFBhZ2VbZmllbGRdKSAmJiBBcnJheS5pc0FycmF5KHJlc3BvbnNlW2ZpZWxkXSkpIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2VbZmllbGRdID0gWy4uLnJlc3BvbnNlW2ZpZWxkXSxcbiAgICAgICAgICAgICAgICAuLi5uZXh0UGFnZVtmaWVsZF1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0VG9rZW4gPSBuZXh0UGFnZS5OZXh0VG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2luY2UgaXQncyBub3cgdW5kZWZpbmVkLCBkb24ndCByZXR1cm4gaXQuXG4gICAgICAgIGRlbGV0ZSByZXNwb25zZS5OZXh0VG9rZW47XG4gICAgICB9ICovXG5cbiAgICAgIGxvZyh7IHJlc3BvbnNlQnVmZmVyRmllbGQ6IHJlc3BvbnNlQnVmZmVyRmllbGQgfSk7XG4gICAgICBsb2coeyByZXNwb25zZTogcmVzcG9uc2UgfSk7XG4gICAgICBpZiAocmVzcG9uc2VCdWZmZXJGaWVsZCAmJiByZXNwb25zZVtyZXNwb25zZUJ1ZmZlckZpZWxkXSkge1xuICAgICAgICBsZXQgYm9keSA9IChyZXNwb25zZVtyZXNwb25zZUJ1ZmZlckZpZWxkXSBhcyBhbnkpLnRvU3RyaW5nKCd1dGYtOCcpO1xuICAgICAgICBpZiAocmVzcG9uc2UuRnVuY3Rpb25FcnJvcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihib2R5KTtcbiAgICAgICAgfSAgXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVzcG9uc2UsIHRoaXMuZmxhdHRlbihKU09OLnBhcnNlKGJvZHkpKSk7XG4gICAgICB9XG4gICAgICBsb2coeyByZXNwb25zZTogcmVzcG9uc2UgfSk7XG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsZXQgZXJyb3IgPSBlIGFzIGFueTtcbiAgICAgIGlmICghY2FsbC5pZ25vcmVFcnJvckNvZGVzTWF0Y2hpbmcgfHwgIW5ldyBSZWdFeHAoXG4gICAgICAgIGNhbGwuaWdub3JlRXJyb3JDb2Rlc01hdGNoaW5nKS50ZXN0KGVycm9yLmNvZGUpKSB7XG4gICAgICAgIGxvZyh7IEVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaG91bGQgaGF2ZSByZXR1cm5lZCBhIHJlc3BvbnNlIG9yIHRocm93bi4nKTtcbiAgfVxuXG4gIGZsYXR0ZW4ocmVzcG9uc2U6IGFueSkge1xuICAgIGxvZyh7IFJlc3BvbnNlOiByZXNwb25zZSB9KTtcbiAgICBsZXQgZmxhdHRlbmVkID0gZmxhdHRlbihyZXNwb25zZSk7XG4gICAgbG9nKHsgRmxhdHRlbmVkOiBmbGF0dGVuZWQgfSk7XG4gICAgcmV0dXJuIGZsYXR0ZW5lZDtcbiAgfVxuXG4gIGZpbHRlcihjYWxsOiBhbnksIGZsYXR0ZW5lZDogYW55KSB7XG4gICAgbGV0IGRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBsZXQgb3V0cHV0UGF0aHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICAgIGlmIChjYWxsLm91dHB1dFBhdGhzKSB7XG4gICAgICBvdXRwdXRQYXRocyA9IGNhbGwub3V0cHV0UGF0aHM7XG4gICAgfVxuXG4gICAgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nIGlmIHRoZSB1c2VyIGRpZG4ndCByZXF1ZXN0IGFueXRoaW5nLlxuICAgIGlmIChvdXRwdXRQYXRocykge1xuICAgICAgZGF0YSA9IGZpbHRlcktleXMoZmxhdHRlbmVkLCBzdGFydHNXaXRoT25lT2Yob3V0cHV0UGF0aHMpKTtcbiAgICB9XG4gICAgbG9nKHsgRmlsdGVyZWQ6IGRhdGEgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyBoYW5kbGUoZXZlbnQ6IGFueSwgY29udGV4dDogYW55KSB7XG4gICAgbG9nKHsgRXZlbnQ6IGV2ZW50IH0pO1xuICAgIGxvZyh7IENvbnRleHQ6IGNvbnRleHQgfSk7XG5cbiAgICBldmVudCA9IHRoaXMuZGVjb2RlUHJvcGVydGllcyhldmVudCk7XG4gICAgbGV0IHBoeXNpY2FsUmVzb3VyY2VJZCA9IHRoaXMuZ2V0UGh5c2ljYWxSZXNvdXJjZUlkKGV2ZW50KTtcbiAgICBsZXQgY2FsbCA9IHRoaXMuZ2V0Q2FsbChldmVudCk7XG4gICAgbGV0IHJlcXVlc3RlZE91dHB1dHMgPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuUmVxdWVzdGVkT3V0cHV0cztcbiAgICBpZiAocmVxdWVzdGVkT3V0cHV0cyAmJiByZXF1ZXN0ZWRPdXRwdXRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXF1ZXN0ZWRPdXRwdXRzID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChjYWxsKSB7XG4gICAgICBpZiAoY2FsbC5vdXRwdXRQYXRocyAmJiByZXF1ZXN0ZWRPdXRwdXRzKSB7XG4gICAgICAgIGNhbGwub3V0cHV0UGF0aHMgPSBbLi4uY2FsbC5vdXRwdXRQYXRocywgLi4ucmVxdWVzdGVkT3V0cHV0c107XG4gICAgICB9IGVsc2UgaWYgKHJlcXVlc3RlZE91dHB1dHMpIHtcbiAgICAgICAgY2FsbC5vdXRwdXRQYXRocyA9IHJlcXVlc3RlZE91dHB1dHM7XG4gICAgICB9XG5cbiAgICAgIGNhbGwucGFyYW1ldGVycyA9IGRlY29kZVNwZWNpYWxWYWx1ZXMoY2FsbC5wYXJhbWV0ZXJzLCBwaHlzaWNhbFJlc291cmNlSWQpO1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoeyAuLi5ldmVudCwgUmVzcG9uc2VVUkw6ICcuLi4nIH0pKTtcbiAgICAgIGlmIChldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuUmVzcG9uc2VCdWZmZXJGaWVsZCkge1xuICAgICAgICBjYWxsLnJlc3BvbnNlQnVmZmVyRmllbGQgPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuUmVzcG9uc2VCdWZmZXJGaWVsZDtcbiAgICAgIH1cbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0UmVzcG9uc2UoY2FsbCk7XG4gICAgICBsZXQgZmxhdHRlbmVkID0gdGhpcy5mbGF0dGVuKHJlc3BvbnNlKTtcbiAgICAgIGxldCBmaWx0ZXJlZCA9IHRoaXMuZmlsdGVyKGNhbGwsIGZsYXR0ZW5lZCk7XG4gICAgICBsZXQgZGVmYXVsdHMgPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuRGVmYXVsdHM7XG4gICAgICBsZXQgZGF0YTogYW55ID0gZmlsdGVyZWQgfHwgZGVmYXVsdHMgPyB7XG4gICAgICAgIC4uLihkZWZhdWx0cyA/PyB7fSksXG4gICAgICAgIC4uLihmaWx0ZXJlZCA/PyB7fSksXG4gICAgICB9IDogdW5kZWZpbmVkO1xuICAgICAgbGV0IHJlcGx5OiBhbnkgPSB7XG4gICAgICAgIElzQ29tcGxldGU6IHRydWUsXG4gICAgICAgIFBoeXNpY2FsUmVzb3VyY2VJZDogcGh5c2ljYWxSZXNvdXJjZUlkLFxuICAgICAgfTtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJlcGx5LkRhdGEgPSBkYXRhO1xuICAgICAgfVxuICAgICAgbG9nKHsgUmVwbHk6IHJlcGx5IH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXBseSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXBseSA9IHtcbiAgICAgICAgSXNDb21wbGV0ZTogdHJ1ZSxcbiAgICAgICAgUGh5c2ljYWxSZXNvdXJjZUlkOiBwaHlzaWNhbFJlc291cmNlSWQsXG4gICAgICB9O1xuICAgICAgbG9nKHsgUmVwbHk6IHJlcGx5IH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXBseSk7XG4gICAgfVxuICB9XG59XG4iXX0=