import { AwsSdkCall, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { CustomResourceHandler } from '../../../src/custom-resources/handlers/lambda_custom_resource_handler';
import { ApiCall, InvokeOptions } from '../../../src/custom-resources/handlers/private/from_cdk/aws-custom-resource-sdk-adapter/api-call';

function customResourceHandlerSut(
  response: any, region: string = 'us-west-2', apiVersion: string = '1.0') {
  return new class extends CustomResourceHandler {
    protected async invoke(apiCall: ApiCall, _options: InvokeOptions): Promise<Record<string, any>> {
      apiCall.client = {
        config: {
          apiVersion: apiVersion,
          region: () => { return Promise.resolve(region); },
        },
      };
      return Promise.resolve(response);
    }
  };
}

function testCall(params: any = { MyProp: 'MyVal' }, physicalResourceId: PhysicalResourceId = PhysicalResourceId.of('Something')): AwsSdkCall {
  return {
    service: 'S3',
    action: 'getObject',
    parameters: params,
    physicalResourceId: physicalResourceId,
    // If the object does not exist, can return given defaults.
    ignoreErrorCodesMatching: 'NoSuchKey|NoSuchBucket',
  };
};

let testData = {
  anArray: ['Monday', 'Tuesday'],
  people: {
    albert: { lastName: 'Einstein' },
    marie: { lastName: 'Curie' },
  },
  aNumber: 7,
};

const originalEnv = process.env;
describe('CustomResourceHandler test', () => {
  beforeEach(() => {
    jest.resetModules();
    process.env = originalEnv;
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  test('DecodeProperties test.', async () => {
    process.env = {
      ...originalEnv,
      LogLevel: '1',
    };
    let handler = new CustomResourceHandler();
    let event = {
      ResourceProperties: {
        ServiceToken: 'service token',
        EncodedProperties: Buffer.from(JSON.stringify({
          StringProp: 'AString',
          IntProp: 30,
          BoolProp: true,
        })).toString('base64'),
      },
    };
    event = handler.decodeProperties(event);
    expect(event).toMatchObject({
      ResourceProperties: {
        ServiceToken: 'service token',
        StringProp: 'AString',
        IntProp: 30,
        BoolProp: true,
      },
    });
  });

  test('No PhysicalResourceId', () => {
    let handler = new CustomResourceHandler();
    let event = {
      RequestType: 'Create',
      LogicalResourceId: 'LogicalResourceId',
      ResourceProperties: {
        ServiceToken: 'service token',
        EncodedProperties: Buffer.from(JSON.stringify({
          StringProp: 'AString',
          IntProp: 30,
          BoolProp: true,
        })).toString('base64'),
      },
    };
    let physicalResourceId = handler.getPhysicalResourceId(event);
    expect(physicalResourceId).toEqual('LogicalResourceId');
  });

  test('Given PhysicalResourceId', () => {
    let handler = new CustomResourceHandler();
    let event = {
      RequestType: 'Update',
      PhysicalResourceId: 'PhysicalResourceId',
      LogicalResourceId: 'LogicalResourceId',
      ResourceProperties: {
        ServiceToken: 'service token',
        EncodedProperties: Buffer.from(JSON.stringify({
          StringProp: 'AString',
          IntProp: 30,
          BoolProp: true,
        })).toString('base64'),
      },
    };
    let physicalResourceId = handler.getPhysicalResourceId(event);
    expect(physicalResourceId).toEqual('PhysicalResourceId');
  });

  test('getPhysicalResourceId unknown request type', () => {
    let handler = new CustomResourceHandler();
    let event = {
      RequestType: 'List',
      LogicalResourceId: 'LogicalResourceId',
      ResourceProperties: {
        ServiceToken: 'service token',
        EncodedProperties: Buffer.from(JSON.stringify({
          StringProp: 'AString',
          IntProp: 30,
          BoolProp: true,
        })).toString('base64'),
      },
    };
    expect(() => handler.getPhysicalResourceId(event)).toThrow();
  });

  test('getCall', () => {
    let handler = new CustomResourceHandler();
    let call = testCall();
    let event = {
      RequestType: 'Update',
      LogicalResourceId: 'LogicalResourceId',
      ResourceProperties: {
        ServiceToken: 'service token',
        Update: call,
      },
    };
    expect(handler.getCall(event)).toBe(call);
  });

  test('getResponse', async () => {
    let response = await customResourceHandlerSut(testData).getResponse(
      testCall(),
    );
    expect(response).toMatchObject(testData);
  });

  test('flatten', () => {
    let handler = new CustomResourceHandler();

    let flattened = handler.flatten(testData);
    expect(flattened).toMatchObject({
      'anArray.0': 'Monday',
      'anArray.1': 'Tuesday',
      'people.albert.lastName': 'Einstein',
      'people.marie.lastName': 'Curie',
      'aNumber': 7,
    });
  });
});
