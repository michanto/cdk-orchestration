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
export declare class CustomResourceHandler {
    protected logApiResponseData: boolean;
    decodeProperties(event: any): any;
    getPhysicalResourceId(event: any): string;
    getCall(event: any): any;
    protected invoke(apiCallIn: any, optionsIn: any): Promise<Record<string, any>>;
    /**
     * Makes the call encapsulated by an AwsApiCall.
     * @param call AwsApiCall
     * @returns
     */
    getResponse(call: any): Promise<Record<string, any>>;
    flatten(response: any): {
        [key: string]: any;
    };
    filter(call: any, flattened: any): {
        [key: string]: string;
    };
    handle(event: any, context: any): Promise<any>;
}
