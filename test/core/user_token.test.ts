import { App, CustomResource, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Code, Function, IFunction, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Bucket, IBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { AppToken, Singleton, StackToken } from '../../src';

export class BadFunction extends Function {
  constructor(scope: Construct, id: string ) {
    super(scope, id, {
      code: Code.fromInline('bad code'),
      handler: 'handler',
      runtime: Runtime.NODEJS_18_X,
    });
  }
}

export class StackTokenCustomResource extends CustomResource {
  constructor(scope: Construct, id: string, fn: IFunction ) {
    super(scope, id, {
      serviceToken: fn.functionArn,
      properties: {
        bucketName: StackToken.string(scope, 'bucketName'),
        pojo: StackToken.any(scope, 'pojo'),
        list: StackToken.list(scope, 'list'),
        aNumber: StackToken.number(scope, 'aNumber'),
      },
      pascalCaseProperties: true,
    });
  }
}

export class StackTokenStack extends Stack {
  readonly bucket: IBucket;
  readonly handler: IFunction;
  constructor(scope: Construct, id: string ) {
    super(scope, id);
    this.bucket = new Bucket(this, 'Bucket', {
      bucketName: StackToken.string(this, 'bucketName'),
    });

    this.handler = Singleton.create(this, 'Function', (s, i) => new BadFunction(s, i)) as Function;
    new StackTokenCustomResource(this, 'CustomResource', this.handler);
  }
}

describe('UserToken tests', () => {
  test('StackToken happy path.', () => {
    // GIVEN
    const app = new App();
    const stackA = new StackTokenStack(app, 'StackA');
    const stackB = new StackTokenStack(app, 'StackB');

    StackToken.resolveString(stackA, 'bucketName', { produce: () => 'my_bucket' });
    StackToken.resolveString(stackB, 'bucketName', { produce: () => 'other_bucket' });
    StackToken.resolveAny(stackA, 'pojo', {
      produce: () => {
        // Note:  does not work without the 'return'.
        return { value: 'any' };
      },
    });
    StackToken.resolveAny(stackB, 'pojo', {
      produce: () => {
        // Note:  does not work without the 'return'.
        return { value: 'none' };
      },
    });
    StackToken.resolveList(stackA, 'list', { produce: () => ['one', 'two', 'three'] });
    StackToken.resolveNumber(stackA, 'aNumber', { produce: () => 10 });
    StackToken.resolveList(stackB, 'list', { produce: () => ['Manny', 'Moe', 'Mike'] });
    StackToken.resolveNumber(stackB, 'aNumber', { produce: () => 100 });

    // WHEN
    const templateA = Template.fromStack(stackA);
    const templateB = Template.fromStack(stackB);

    // THEN
    templateA.templateMatches({
      Resources: {
        Bucket83908E77: {
          Type: 'AWS::S3::Bucket',
          Properties: {
            BucketName: 'my_bucket',
          },
        },
        CustomResource: {
          Properties: {
            BucketName: 'my_bucket',
            Pojo: { value: 'any' },
            List: ['one', 'two', 'three'],
            ANumber: 10,
          },
        },
      },
    });
    templateB.templateMatches({
      Resources: {
        Bucket83908E77: {
          Type: 'AWS::S3::Bucket',
          Properties: {
            BucketName: 'other_bucket',
          },
        },
        CustomResource: {
          Properties: {
            BucketName: 'other_bucket',
            Pojo: { value: 'none' },
            List: ['Manny', 'Moe', 'Mike'],
            ANumber: 100,
          },
        },
      },
    });
  });

  test('AppToken create in stack 1, resolve in stack 2.', () => {
    // GIVEN
    const app = new App();
    const stack1 = new Stack(app, 'Stack1');
    let fn = new BadFunction(stack1, 'Function');
    new Bucket(stack1, 'Bucket', {
      bucketName: AppToken.string(stack1, 'bucketName'),
    });
    // Like StackTokenCustomResource, but with AppTokens.
    new CustomResource(stack1, 'CustomResource', {
      serviceToken: fn.functionArn,
      properties: {
        bucketName: AppToken.string(stack1, 'bucketName'),
        pojo: AppToken.any(stack1, 'pojo'),
        list: AppToken.list(stack1, 'list'),
        aNumber: AppToken.number(stack1, 'aNumber'),
      },
      pascalCaseProperties: true,
    });
    const stack2 = new Stack(app, 'Stack2');
    AppToken.resolveString(stack2, 'bucketName', { produce: () => 'my_bucket' });

    AppToken.resolveAny(stack2, 'pojo', {
      produce: () => {
        // Note:  does not work without the 'return'.
        return { value: 'any' };
      },
    });
    AppToken.resolveList(stack2, 'list', { produce: () => ['one', 'two', 'three'] });
    AppToken.resolveNumber(stack2, 'aNumber', { produce: () => 10 });

    // WHEN
    const template = Template.fromStack(stack1);

    // THEN
    template.templateMatches({
      Resources: {
        Bucket83908E77: {
          Type: 'AWS::S3::Bucket',
          Properties: {
            BucketName: 'my_bucket',
          },
        },
        CustomResource: {
          Properties: {
            BucketName: 'my_bucket',
            Pojo: { value: 'any' },
            List: ['one', 'two', 'three'],
            ANumber: 10,
          },
        },
      },
    });
  });
});
