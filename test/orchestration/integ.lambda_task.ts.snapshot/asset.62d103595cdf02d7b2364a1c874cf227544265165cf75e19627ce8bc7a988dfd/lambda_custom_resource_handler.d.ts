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
export declare class CustomResourceHandler {
    readonly props?: CustomResourceHandlerProps | undefined;
    constructor(props?: CustomResourceHandlerProps | undefined);
    decodeProperties(event: any): any;
    getPhysicalResourceId(event: any): string;
    getCall(event: any): any;
    getResponse(call: any): Promise<{}>;
    flatten(response: any): {
        [key: string]: any;
    };
    filter(call: any, flattened: any): {
        [key: string]: string;
    };
    handle(event: any, context: any): Promise<any>;
}
