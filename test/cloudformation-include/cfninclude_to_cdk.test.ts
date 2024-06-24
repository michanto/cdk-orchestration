import { CfnCondition, CfnOutput, CfnParameter, Fn, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CfnFunction, Function } from 'aws-cdk-lib/aws-lambda';
import { Bucket, CfnBucket, EventType } from 'aws-cdk-lib/aws-s3';
import { LambdaDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { CfnInclude } from 'aws-cdk-lib/cloudformation-include';
import { Construct } from 'constructs';
import { CfnIncludeToCdk } from '../../src/cloudformation-include';


describe('CfnIncludeToCdk tests', () => {
  test('CfnIncludeToCdk happy path', () => {
    const stack = new Stack();
    new CfnInclude(stack, 'included', {
      templateFile: `${__dirname}/S3_LambdaTrigger.yaml`,
    });

    let bucket = new Bucket(stack, 'S3BucketNotification', {
      bucketName: Fn.sub('NotificationBucket'),
    });
    let cfnFunction = CfnIncludeToCdk.tryFindIncluded('S3TriggerLambdaFunction', stack) as CfnFunction;
    let fn = Function.fromFunctionArn(stack, 'S3TriggerLambdaFunction', cfnFunction.attrArn);
    bucket.addEventNotification(EventType.OBJECT_CREATED_PUT, new LambdaDestination(fn));

    CfnIncludeToCdk.replaceIncluded('S3BucketNotification', bucket);
    let param = CfnIncludeToCdk.tryFindIncluded('NotificationBucket', stack);
    let template = Template.fromStack(stack).toJSON();
    expect(param).toBeTruthy();
    expect(template).toMatchObject({
      Resources: {
        S3BucketNotification: {
          Type: 'AWS::S3::Bucket',
          Properties: {
            BucketName: { 'Fn::Sub': 'NotificationBucket' },
          },
        },
      },
    });
  });
  test('CfnIncludeToCdk.isCfnInclude(undefined)', () => {
    expect(CfnIncludeToCdk.isCfnInclude(undefined)).toBeFalsy();
  });
  test('CfnIncludeToCdk setLogicalId L1', () => {
    const stack = new Stack();
    const scope = new Construct(stack, 'Construct');
    let bucket = new CfnBucket(scope, 'MyBucket');
    CfnIncludeToCdk.setLogicalId(bucket, 'MyBucket');
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        MyBucket: {
          Type: 'AWS::S3::Bucket',
        },
      },
    });
  });
  test('CfnIncludeToCdk setLogicalId L2', () => {
    const stack = new Stack();
    const scope = new Construct(stack, 'Construct');
    let bucket = new Bucket(scope, 'MyBucket');
    CfnIncludeToCdk.setLogicalId(bucket, 'MyBucket');
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        MyBucket: {
          Type: 'AWS::S3::Bucket',
        },
      },
    });
  });
  test('CfnIncludeToCdk setLogicalId L3', () => {
    const stack = new Stack();
    const scope = new Construct(stack, 'Construct');
    new Bucket(scope, 'MyBucket');
    CfnIncludeToCdk.setLogicalId(scope, 'MyBucket');
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        MyBucket: {
          Type: 'AWS::S3::Bucket',
        },
      },
    });
  });
  test('CfnIncludeToCdk setLogicalId two L1s (throws)', () => {
    const stack = new Stack();
    const scope = new Construct(stack, 'Construct');
    new CfnBucket(scope, 'MyBucket');
    new CfnBucket(scope, 'MyOtherBucket');
    expect(() => CfnIncludeToCdk.setLogicalId(scope, 'MyBucket')).toThrow();
  });
  test('CfnIncludeToCdk tryFindIncluded tests', () => {
    const stack = new Stack();
    new CfnInclude(stack, 'included1', {
      templateFile: `${__dirname}/parameter-references.json`,
    });
    const param = CfnIncludeToCdk.tryFindIncluded('MyParam', stack) as CfnParameter;
    expect(param.default).toEqual('MyValue');
    const output = CfnIncludeToCdk.tryFindIncluded('MyOutput', stack) as CfnOutput;
    expect(output.value).toBeTruthy();
    const condition = CfnIncludeToCdk.tryFindIncluded('AlwaysFalse', stack) as CfnCondition;
    expect(condition.expression).toBeTruthy();

    const dne = CfnIncludeToCdk.tryFindIncluded('DoesNotExist', stack);
    expect(dne).toBeUndefined();
  });
  test('CfnIncludeToCdk tryFindIncluded no included', () => {
    const stack = new Stack();
    const dne = CfnIncludeToCdk.tryFindIncluded('DoesNotExist', stack);
    expect(dne).toBeUndefined();
  });
});
