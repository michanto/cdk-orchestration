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
    constructor() {
        this.logApiResponseData = false;
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
    // For testability
    /* c8 ignore start */
    async invoke(apiCallIn, optionsIn) {
        let apiCall = apiCallIn;
        let options = optionsIn;
        return apiCall.invoke({
            sdkPackage: options.sdkPackage,
            apiVersion: options.apiVersion,
            credentials: options.credentials,
            region: options.region,
            parameters: options.parameters,
            flattenResponse: options.flattenResponse,
        });
    }
    /* c8 ignore end */
    /**
     * Makes the call encapsulated by an AwsApiCall.
     * @param call AwsApiCall
     * @returns
     */
    async getResponse(call) {
        // User may only be calling getResponse.
        this.logApiResponseData = call?.logApiResponseData ?? false;
        const apiCall = new aws_custom_resource_sdk_adapter_1.ApiCall(call.service, call.action);
        let credentials;
        if (call.assumedRoleArn) {
            const timestamp = (new Date()).getTime();
            const params = {
                RoleArn: call.assumedRoleArn,
                RoleSessionName: `AwsSdkCall-${timestamp}`,
            };
            log({ params: params });
            const { fromTemporaryCredentials } = await Promise.resolve().then(() => require('@aws-sdk/credential-providers'));
            credentials = fromTemporaryCredentials({
                params,
                clientConfig: call.region !== undefined ? { region: call.region } : undefined,
            });
        }
        const flatData = {};
        try {
            let response = await this.invoke(apiCall, {
                // FUTURE:  Copy code to install latest SDK from CDK
                // sdkPackage: awsSdk,
                apiVersion: call.apiVersion,
                credentials: credentials,
                region: call.region,
                parameters: call.parameters,
                flattenResponse: false,
            });
            if (this.logApiResponseData) {
                log({ Response: response });
            }
            flatData.apiVersion = apiCall.client.config.apiVersion; // For test purposes: check if apiVersion was correctly passed.
            flatData.region = await apiCall.client.config.region().catch(() => undefined); // For test purposes: check if region was correctly passed.
            Object.assign(response, flatData);
            if (response.NextToken && call.autoPaginate) {
                let nextToken = response.NextToken;
                while (nextToken) {
                    let parameters = {
                        ...call.parameters,
                        NextToken: nextToken,
                    };
                    let nextPage = await this.invoke(apiCall, {
                        // FUTURE:  Copy code to install latest SDK from CDK
                        // sdkPackage: awsSdk,
                        apiVersion: call.apiVersion,
                        credentials: credentials,
                        region: call.region,
                        parameters: parameters,
                        flattenResponse: false,
                    });
                    if (this.logApiResponseData) {
                        log({ NextPage: nextPage });
                    }
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
            let responseBufferField = call.responseBufferField;
            if (this.logApiResponseData) {
                log({ response: response });
            }
            log({ responseBufferField: responseBufferField });
            if (responseBufferField && response[responseBufferField]) {
                let body = response[responseBufferField].toString('utf-8');
                // For lambda calls, throw if there is an error.
                if (response.FunctionError) {
                    throw new Error(`${response.FunctionError} Cause:${body}`);
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
        if (this.logApiResponseData) {
            log({ Response: response });
        }
        let flattened = (0, aws_custom_resource_sdk_adapter_1.flatten)(response);
        if (this.logApiResponseData) {
            log({ Flattened: flattened });
        }
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
        if (this.logApiResponseData) {
            log({ Filtered: data });
        }
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
            this.logApiResponseData = call?.logApiResponseData ?? false;
            if (event.ResourceProperties.AutoPaginate) {
                call.autoPaginate = event.ResourceProperties.AutoPaginate;
            }
            if (call.outputPaths && requestedOutputs) {
                call.outputPaths = [...call.outputPaths, ...requestedOutputs];
            }
            else if (requestedOutputs) {
                call.outputPaths = requestedOutputs;
            }
            call.parameters = (0, shared_1.decodeSpecialValues)(call.parameters, physicalResourceId);
            log(event);
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
            let defaults = event.ResourceProperties.Defaults;
            if (defaults) {
                reply.Data = defaults;
            }
            log({ Reply: reply });
            return Promise.resolve(reply);
        }
    }
}
exports.CustomResourceHandler = CustomResourceHandler;
_a = JSII_RTTI_SYMBOL_1;
CustomResourceHandler[_a] = { fqn: "@michanto/cdk-orchestration.custom_resources.CustomResourceHandler", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhX2N1c3RvbV9yZXNvdXJjZV9oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2N1c3RvbS1yZXNvdXJjZXMvaGFuZGxlcnMvbGFtYmRhX2N1c3RvbV9yZXNvdXJjZV9oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQTBEO0FBQzFELCtCQUErQjtBQUMvQiw2REFBNkQ7QUFDN0Qsa0ZBQXlIO0FBQ3pILHdHQUFxRztBQUVyRyxTQUFTLEdBQUcsQ0FBQyxPQUE0QjtJQUN2QyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztBQUNILENBQUM7QUFFRDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFhLHFCQUFxQjtJQUFsQztRQUNZLHVCQUFrQixHQUFZLEtBQUssQ0FBQztLQW9QL0M7SUFsUEMsZ0JBQWdCLENBQUMsS0FBVTtRQUN6QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUM7UUFDekQsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7WUFDbkUsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07aUJBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO2lCQUN2QixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLGlCQUFpQixFQUFFLENBQUM7WUFDL0QsR0FBRyxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFB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QUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDOztBQXBQSCxzREFxUEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBkZWNvZGVTcGVjaWFsVmFsdWVzLCBmaWx0ZXJLZXlzLCBzdGFydHNXaXRoT25lT2YgfSBmcm9tICcuL3ByaXZhdGUvZnJvbV9jZGsvYXdzLWN1c3RvbS1yZXNvdXJjZS1oYW5kbGVyL3NoYXJlZCc7XG5pbXBvcnQgeyBBcGlDYWxsLCBJbnZva2VPcHRpb25zLCBmbGF0dGVuIH0gZnJvbSAnLi9wcml2YXRlL2Zyb21fY2RrL2F3cy1jdXN0b20tcmVzb3VyY2Utc2RrLWFkYXB0ZXInO1xuXG5mdW5jdGlvbiBsb2cobWVzc2FnZTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICBpZiAocHJvY2Vzcy5lbnYuTG9nTGV2ZWwpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyB0byBjcmVhdGUgQXdzQ3VzdG9tUmVzb3VyY2UgYmFzZWQgaGFuZGxlcnMuICBDb3BpZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgQXdzQ3VzdG9tUmVzb3VyY2UgYW5kXG4gKiBhZGRzIHRoZSBmb2xsb3dpbmcgZmVhdHVyZXM6XG4gKiAtIERlZmF1bHQgdmFsdWVzIGZvciBhdHRyaWJ1dGVzLlxuICogLSBSZXNwb25zZUJ1ZmZlckZpZWxkIGZvciBkZXNlcmxpYWxpemluZyBzdHJlYW1lZCByZXR1cm4gdmFsdWVzLlxuICpcbiAqIE1vc3Qgb2YgdGhpcyBjb2RlIHdhcyBjb3BpZWQgZnJvbSB0aGUgQ0RLIGhlcmU6XG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2F3cy9hd3MtY2RrL2Jsb2IvbWFpbi9wYWNrYWdlcy8lNDBhd3MtY2RrL2N1c3RvbS1yZXNvdXJjZS1oYW5kbGVycy9saWIvY3VzdG9tLXJlc291cmNlcy9hd3MtY3VzdG9tLXJlc291cmNlLWhhbmRsZXIvYXdzLXNkay12My1oYW5kbGVyLnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21SZXNvdXJjZUhhbmRsZXIge1xuICBwcm90ZWN0ZWQgbG9nQXBpUmVzcG9uc2VEYXRhOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZGVjb2RlUHJvcGVydGllcyhldmVudDogYW55KSB7XG4gICAgbGV0IGVuY29kZWQgPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuRW5jb2RlZFByb3BlcnRpZXM7XG4gICAgaWYgKGVuY29kZWQpIHtcbiAgICAgIGxldCB7IEVuY29kZWRQcm9wZXJ0aWVzOiBfLCAuLi5vdGhlcnMgfSA9IGV2ZW50LlJlc291cmNlUHJvcGVydGllcztcbiAgICAgIGxldCBkZWNvZGVkUHJvcGVydGllcyA9IEpTT04ucGFyc2UoQnVmZmVyXG4gICAgICAgIC5mcm9tKGVuY29kZWQsICdiYXNlNjQnKVxuICAgICAgICAudG9TdHJpbmcoJ3V0ZjgnKSk7XG4gICAgICBldmVudC5SZXNvdXJjZVByb3BlcnRpZXMgPSB7IC4uLm90aGVycywgLi4uZGVjb2RlZFByb3BlcnRpZXMgfTtcbiAgICAgIGxvZyh7IERlY29kZWRFdmVudDogZXZlbnQgfSk7XG4gICAgfVxuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIGdldFBoeXNpY2FsUmVzb3VyY2VJZChldmVudDogYW55KSB7XG4gICAgbGV0IHBoeXNpY2FsUmVzb3VyY2VJZDogc3RyaW5nO1xuICAgIHN3aXRjaCAoZXZlbnQuUmVxdWVzdFR5cGUpIHtcbiAgICAgIGNhc2UgJ0NyZWF0ZSc6XG4gICAgICAgIHBoeXNpY2FsUmVzb3VyY2VJZCA9IGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5DcmVhdGU/LnBoeXNpY2FsUmVzb3VyY2VJZD8uaWQgPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLlVwZGF0ZT8ucGh5c2ljYWxSZXNvdXJjZUlkPy5pZCA/P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuRGVsZXRlPy5waHlzaWNhbFJlc291cmNlSWQ/LmlkID8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LkxvZ2ljYWxSZXNvdXJjZUlkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1VwZGF0ZSc6XG4gICAgICBjYXNlICdEZWxldGUnOlxuICAgICAgICBwaHlzaWNhbFJlc291cmNlSWQgPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXNbZXZlbnQuUmVxdWVzdFR5cGVdPy5waHlzaWNhbFJlc291cmNlSWQ/LmlkID8/IGV2ZW50LlBoeXNpY2FsUmVzb3VyY2VJZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHJlcXVlc3QgdHlwZTogJHtldmVudC5SZXF1ZXN0VHlwZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHBoeXNpY2FsUmVzb3VyY2VJZDtcbiAgfVxuXG4gIGdldENhbGwoZXZlbnQ6IGFueSkge1xuICAgIHJldHVybiBldmVudC5SZXNvdXJjZVByb3BlcnRpZXNbZXZlbnQuUmVxdWVzdFR5cGVdO1xuICB9XG5cbiAgLy8gRm9yIHRlc3RhYmlsaXR5XG4gIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgaW52b2tlKGFwaUNhbGxJbjogYW55LCBvcHRpb25zSW46IGFueSkge1xuICAgIGxldCBhcGlDYWxsID0gYXBpQ2FsbEluIGFzIEFwaUNhbGw7XG4gICAgbGV0IG9wdGlvbnMgPSBvcHRpb25zSW4gYXMgSW52b2tlT3B0aW9ucztcbiAgICByZXR1cm4gYXBpQ2FsbC5pbnZva2Uoe1xuICAgICAgc2RrUGFja2FnZTogb3B0aW9ucy5zZGtQYWNrYWdlLFxuICAgICAgYXBpVmVyc2lvbjogb3B0aW9ucy5hcGlWZXJzaW9uLFxuICAgICAgY3JlZGVudGlhbHM6IG9wdGlvbnMuY3JlZGVudGlhbHMsXG4gICAgICByZWdpb246IG9wdGlvbnMucmVnaW9uLFxuICAgICAgcGFyYW1ldGVyczogb3B0aW9ucy5wYXJhbWV0ZXJzLFxuICAgICAgZmxhdHRlblJlc3BvbnNlOiBvcHRpb25zLmZsYXR0ZW5SZXNwb25zZSxcbiAgICB9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICB9XG4gIC8qIGM4IGlnbm9yZSBlbmQgKi9cblxuICAvKipcbiAgICogTWFrZXMgdGhlIGNhbGwgZW5jYXBzdWxhdGVkIGJ5IGFuIEF3c0FwaUNhbGwuXG4gICAqIEBwYXJhbSBjYWxsIEF3c0FwaUNhbGxcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIGdldFJlc3BvbnNlKGNhbGw6IGFueSkge1xuICAgIC8vIFVzZXIgbWF5IG9ubHkgYmUgY2FsbGluZyBnZXRSZXNwb25zZS5cbiAgICB0aGlzLmxvZ0FwaVJlc3BvbnNlRGF0YSA9IGNhbGw/LmxvZ0FwaVJlc3BvbnNlRGF0YSA/PyBmYWxzZTtcblxuICAgIGNvbnN0IGFwaUNhbGwgPSBuZXcgQXBpQ2FsbChjYWxsLnNlcnZpY2UsIGNhbGwuYWN0aW9uKTtcblxuICAgIGxldCBjcmVkZW50aWFscztcbiAgICBpZiAoY2FsbC5hc3N1bWVkUm9sZUFybikge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgUm9sZUFybjogY2FsbC5hc3N1bWVkUm9sZUFybixcbiAgICAgICAgUm9sZVNlc3Npb25OYW1lOiBgQXdzU2RrQ2FsbC0ke3RpbWVzdGFtcH1gLFxuICAgICAgfTtcbiAgICAgIGxvZyh7IHBhcmFtczogcGFyYW1zIH0pO1xuXG4gICAgICBjb25zdCB7IGZyb21UZW1wb3JhcnlDcmVkZW50aWFscyB9ID0gYXdhaXQgaW1wb3J0KCdAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycycpO1xuICAgICAgY3JlZGVudGlhbHMgPSBmcm9tVGVtcG9yYXJ5Q3JlZGVudGlhbHMoe1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIGNsaWVudENvbmZpZzogY2FsbC5yZWdpb24gIT09IHVuZGVmaW5lZCA/IHsgcmVnaW9uOiBjYWxsLnJlZ2lvbiB9IDogdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmxhdERhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5pbnZva2UoYXBpQ2FsbCwge1xuICAgICAgICAvLyBGVVRVUkU6ICBDb3B5IGNvZGUgdG8gaW5zdGFsbCBsYXRlc3QgU0RLIGZyb20gQ0RLXG4gICAgICAgIC8vIHNka1BhY2thZ2U6IGF3c1NkayxcbiAgICAgICAgYXBpVmVyc2lvbjogY2FsbC5hcGlWZXJzaW9uLFxuICAgICAgICBjcmVkZW50aWFsczogY3JlZGVudGlhbHMsXG4gICAgICAgIHJlZ2lvbjogY2FsbC5yZWdpb24sXG4gICAgICAgIHBhcmFtZXRlcnM6IGNhbGwucGFyYW1ldGVycyxcbiAgICAgICAgZmxhdHRlblJlc3BvbnNlOiBmYWxzZSxcbiAgICAgIH0pIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG5cbiAgICAgIGlmICh0aGlzLmxvZ0FwaVJlc3BvbnNlRGF0YSkge1xuICAgICAgICBsb2coeyBSZXNwb25zZTogcmVzcG9uc2UgfSk7XG4gICAgICB9XG4gICAgICBmbGF0RGF0YS5hcGlWZXJzaW9uID0gYXBpQ2FsbC5jbGllbnQuY29uZmlnLmFwaVZlcnNpb247IC8vIEZvciB0ZXN0IHB1cnBvc2VzOiBjaGVjayBpZiBhcGlWZXJzaW9uIHdhcyBjb3JyZWN0bHkgcGFzc2VkLlxuICAgICAgZmxhdERhdGEucmVnaW9uID0gYXdhaXQgYXBpQ2FsbC5jbGllbnQuY29uZmlnLnJlZ2lvbigpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7IC8vIEZvciB0ZXN0IHB1cnBvc2VzOiBjaGVjayBpZiByZWdpb24gd2FzIGNvcnJlY3RseSBwYXNzZWQuXG4gICAgICBPYmplY3QuYXNzaWduKHJlc3BvbnNlLCBmbGF0RGF0YSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5OZXh0VG9rZW4gJiYgY2FsbC5hdXRvUGFnaW5hdGUpIHtcbiAgICAgICAgbGV0IG5leHRUb2tlbiA9IHJlc3BvbnNlLk5leHRUb2tlbjtcbiAgICAgICAgd2hpbGUgKG5leHRUb2tlbikge1xuICAgICAgICAgIGxldCBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgLi4uY2FsbC5wYXJhbWV0ZXJzLFxuICAgICAgICAgICAgTmV4dFRva2VuOiBuZXh0VG9rZW4sXG4gICAgICAgICAgfTtcbiAgICAgICAgICBsZXQgbmV4dFBhZ2UgPSBhd2FpdCB0aGlzLmludm9rZShhcGlDYWxsLCB7XG4gICAgICAgICAgICAvLyBGVVRVUkU6ICBDb3B5IGNvZGUgdG8gaW5zdGFsbCBsYXRlc3QgU0RLIGZyb20gQ0RLXG4gICAgICAgICAgICAvLyBzZGtQYWNrYWdlOiBhd3NTZGssXG4gICAgICAgICAgICBhcGlWZXJzaW9uOiBjYWxsLmFwaVZlcnNpb24sXG4gICAgICAgICAgICBjcmVkZW50aWFsczogY3JlZGVudGlhbHMsXG4gICAgICAgICAgICByZWdpb246IGNhbGwucmVnaW9uLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVycyxcbiAgICAgICAgICAgIGZsYXR0ZW5SZXNwb25zZTogZmFsc2UsXG4gICAgICAgICAgfSkgYXMgUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICAgICAgICBpZiAodGhpcy5sb2dBcGlSZXNwb25zZURhdGEpIHtcbiAgICAgICAgICAgIGxvZyh7IE5leHRQYWdlOiBuZXh0UGFnZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gbmV4dFBhZ2UpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5leHRQYWdlW2ZpZWxkXSkgJiYgQXJyYXkuaXNBcnJheShyZXNwb25zZVtmaWVsZF0pKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlW2ZpZWxkXSA9IFsuLi5yZXNwb25zZVtmaWVsZF0sXG4gICAgICAgICAgICAgICAgLi4ubmV4dFBhZ2VbZmllbGRdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dFRva2VuID0gbmV4dFBhZ2UuTmV4dFRva2VuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNpbmNlIGl0J3Mgbm93IHVuZGVmaW5lZCwgZG9uJ3QgcmV0dXJuIGl0LlxuICAgICAgICBkZWxldGUgcmVzcG9uc2UuTmV4dFRva2VuO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVzcG9uc2VCdWZmZXJGaWVsZCA9IGNhbGwucmVzcG9uc2VCdWZmZXJGaWVsZDtcbiAgICAgIGlmICh0aGlzLmxvZ0FwaVJlc3BvbnNlRGF0YSkge1xuICAgICAgICBsb2coeyByZXNwb25zZTogcmVzcG9uc2UgfSk7XG4gICAgICB9XG4gICAgICBsb2coeyByZXNwb25zZUJ1ZmZlckZpZWxkOiByZXNwb25zZUJ1ZmZlckZpZWxkIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlQnVmZmVyRmllbGQgJiYgcmVzcG9uc2VbcmVzcG9uc2VCdWZmZXJGaWVsZF0pIHtcbiAgICAgICAgbGV0IGJvZHkgPSAocmVzcG9uc2VbcmVzcG9uc2VCdWZmZXJGaWVsZF0gYXMgYW55KS50b1N0cmluZygndXRmLTgnKTtcbiAgICAgICAgLy8gRm9yIGxhbWJkYSBjYWxscywgdGhyb3cgaWYgdGhlcmUgaXMgYW4gZXJyb3IuXG4gICAgICAgIGlmIChyZXNwb25zZS5GdW5jdGlvbkVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlLkZ1bmN0aW9uRXJyb3J9IENhdXNlOiR7Ym9keX1gKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHJlc3BvbnNlLCB0aGlzLmZsYXR0ZW4oSlNPTi5wYXJzZShib2R5KSkpO1xuICAgICAgfVxuICAgICAgbG9nKHsgcmVzcG9uc2U6IHJlc3BvbnNlIH0pO1xuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbGV0IGVycm9yID0gZSBhcyBhbnk7XG4gICAgICBpZiAoIWNhbGwuaWdub3JlRXJyb3JDb2Rlc01hdGNoaW5nIHx8ICFuZXcgUmVnRXhwKFxuICAgICAgICBjYWxsLmlnbm9yZUVycm9yQ29kZXNNYXRjaGluZykudGVzdChlcnJvci5jb2RlKSkge1xuICAgICAgICBsb2coeyBFcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignU2hvdWxkIGhhdmUgcmV0dXJuZWQgYSByZXNwb25zZSBvciB0aHJvd24uJyk7XG4gIH1cblxuICBmbGF0dGVuKHJlc3BvbnNlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5sb2dBcGlSZXNwb25zZURhdGEpIHtcbiAgICAgIGxvZyh7IFJlc3BvbnNlOiByZXNwb25zZSB9KTtcbiAgICB9XG4gICAgbGV0IGZsYXR0ZW5lZCA9IGZsYXR0ZW4ocmVzcG9uc2UpO1xuICAgIGlmICh0aGlzLmxvZ0FwaVJlc3BvbnNlRGF0YSkge1xuICAgICAgbG9nKHsgRmxhdHRlbmVkOiBmbGF0dGVuZWQgfSk7XG4gICAgfVxuICAgIHJldHVybiBmbGF0dGVuZWQ7XG4gIH1cblxuICBmaWx0ZXIoY2FsbDogYW55LCBmbGF0dGVuZWQ6IGFueSkge1xuICAgIGxldCBkYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgbGV0IG91dHB1dFBhdGhzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcbiAgICBpZiAoY2FsbC5vdXRwdXRQYXRocykge1xuICAgICAgb3V0cHV0UGF0aHMgPSBjYWxsLm91dHB1dFBhdGhzO1xuICAgIH1cblxuICAgIC8vIERvbid0IHJldHVybiBhbnl0aGluZyBpZiB0aGUgdXNlciBkaWRuJ3QgcmVxdWVzdCBhbnl0aGluZy5cbiAgICBpZiAob3V0cHV0UGF0aHMpIHtcbiAgICAgIGRhdGEgPSBmaWx0ZXJLZXlzKGZsYXR0ZW5lZCwgc3RhcnRzV2l0aE9uZU9mKG91dHB1dFBhdGhzKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxvZ0FwaVJlc3BvbnNlRGF0YSkge1xuICAgICAgbG9nKHsgRmlsdGVyZWQ6IGRhdGEgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlKGV2ZW50OiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgIGxvZyh7IEV2ZW50OiBldmVudCB9KTtcbiAgICBsb2coeyBDb250ZXh0OiBjb250ZXh0IH0pO1xuXG4gICAgZXZlbnQgPSB0aGlzLmRlY29kZVByb3BlcnRpZXMoZXZlbnQpO1xuICAgIGxldCBwaHlzaWNhbFJlc291cmNlSWQgPSB0aGlzLmdldFBoeXNpY2FsUmVzb3VyY2VJZChldmVudCk7XG4gICAgbGV0IGNhbGwgPSB0aGlzLmdldENhbGwoZXZlbnQpO1xuICAgIGxldCByZXF1ZXN0ZWRPdXRwdXRzID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLlJlcXVlc3RlZE91dHB1dHM7XG4gICAgaWYgKHJlcXVlc3RlZE91dHB1dHMgJiYgcmVxdWVzdGVkT3V0cHV0cy5sZW5ndGggPT0gMCkge1xuICAgICAgcmVxdWVzdGVkT3V0cHV0cyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoY2FsbCkge1xuICAgICAgdGhpcy5sb2dBcGlSZXNwb25zZURhdGEgPSBjYWxsPy5sb2dBcGlSZXNwb25zZURhdGEgPz8gZmFsc2U7XG5cbiAgICAgIGlmIChldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuQXV0b1BhZ2luYXRlKSB7XG4gICAgICAgIGNhbGwuYXV0b1BhZ2luYXRlID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkF1dG9QYWdpbmF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjYWxsLm91dHB1dFBhdGhzICYmIHJlcXVlc3RlZE91dHB1dHMpIHtcbiAgICAgICAgY2FsbC5vdXRwdXRQYXRocyA9IFsuLi5jYWxsLm91dHB1dFBhdGhzLCAuLi5yZXF1ZXN0ZWRPdXRwdXRzXTtcbiAgICAgIH0gZWxzZSBpZiAocmVxdWVzdGVkT3V0cHV0cykge1xuICAgICAgICBjYWxsLm91dHB1dFBhdGhzID0gcmVxdWVzdGVkT3V0cHV0cztcbiAgICAgIH1cblxuICAgICAgY2FsbC5wYXJhbWV0ZXJzID0gZGVjb2RlU3BlY2lhbFZhbHVlcyhjYWxsLnBhcmFtZXRlcnMsIHBoeXNpY2FsUmVzb3VyY2VJZCk7XG4gICAgICBsb2coZXZlbnQpO1xuICAgICAgaWYgKGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5SZXNwb25zZUJ1ZmZlckZpZWxkKSB7XG4gICAgICAgIGNhbGwucmVzcG9uc2VCdWZmZXJGaWVsZCA9IGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5SZXNwb25zZUJ1ZmZlckZpZWxkO1xuICAgICAgfVxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZShjYWxsKTtcbiAgICAgIGxldCBmbGF0dGVuZWQgPSB0aGlzLmZsYXR0ZW4ocmVzcG9uc2UpO1xuICAgICAgbGV0IGZpbHRlcmVkID0gdGhpcy5maWx0ZXIoY2FsbCwgZmxhdHRlbmVkKTtcbiAgICAgIGxldCBkZWZhdWx0cyA9IGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5EZWZhdWx0cztcbiAgICAgIGxldCBkYXRhOiBhbnkgPSBmaWx0ZXJlZCB8fCBkZWZhdWx0cyA/IHtcbiAgICAgICAgLi4uKGRlZmF1bHRzID8/IHt9KSxcbiAgICAgICAgLi4uKGZpbHRlcmVkID8/IHt9KSxcbiAgICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgICBsZXQgcmVwbHk6IGFueSA9IHtcbiAgICAgICAgSXNDb21wbGV0ZTogdHJ1ZSxcbiAgICAgICAgUGh5c2ljYWxSZXNvdXJjZUlkOiBwaHlzaWNhbFJlc291cmNlSWQsXG4gICAgICB9O1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmVwbHkuRGF0YSA9IGRhdGE7XG4gICAgICB9XG4gICAgICBsb2coeyBSZXBseTogcmVwbHkgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcGx5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlcGx5OiBhbnkgPSB7XG4gICAgICAgIElzQ29tcGxldGU6IHRydWUsXG4gICAgICAgIFBoeXNpY2FsUmVzb3VyY2VJZDogcGh5c2ljYWxSZXNvdXJjZUlkLFxuICAgICAgfTtcbiAgICAgIGxldCBkZWZhdWx0cyA9IGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5EZWZhdWx0cztcbiAgICAgIGlmIChkZWZhdWx0cykge1xuICAgICAgICByZXBseS5EYXRhID0gZGVmYXVsdHM7XG4gICAgICB9XG4gICAgICBsb2coeyBSZXBseTogcmVwbHkgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcGx5KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==