import { Aspects, FeatureFlags, Stack, TreeInspector } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { InlineNodejsFunction, InlineNodejsFunctionProps, MinifyEngine } from '../../src/aws-lambda-nodejs';
import { Logger, LoggingAspect } from '../../src/core';

describe('InlineNodeJsFunction tests', () => {
  class MyInlineFunction extends InlineNodejsFunction {
    constructor(scope: Construct, id: string, props?: Partial<InlineNodejsFunctionProps>) {
      super(scope, id, {
        entry: `${__dirname}/test_lambda.js`,
        ...props,
      });
    }
  }

  beforeEach(() => {
    jest.clearAllMocks();
    (Runtime as any).NODEJS_LATEST = Runtime.NODEJS_18_X;
  });

  test('InlineNodejsFunction added', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    new MyInlineFunction(stack, 'MyInlineFunction');

    // THEN
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        MyInlineFunction9974A7D0: {
          Type: 'AWS::Lambda::Function',
          Properties: {
            Code: {
              ZipFile: expect.stringContaining('handler'),
            },
            Role: {
            },
            Handler: 'index.handler',
            Runtime: 'nodejs18.x',
          },
        },
      },
    });
  });


  test('InlineNodejsFunction awsSdkConnectionReuse', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    new MyInlineFunction(stack, 'MyInlineFunction', {
      awsSdkConnectionReuse: true,
    });

    // THEN
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        MyInlineFunction9974A7D0: {
          Type: 'AWS::Lambda::Function',
          Properties: {
            Environment: {
              Variables: {
                AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
              },
            },
            Code: {
              ZipFile: expect.stringContaining('handler'),
            },
            Role: {
            },
            Handler: 'index.handler',
            Runtime: 'nodejs18.x',
          },
        },
      },
    });
  });

  test('InlineNodejsFunction handler specified with "."', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    new MyInlineFunction(stack, 'MyInlineFunction', {
      handler: 'index.handler',
    });

    // THEN
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        MyInlineFunction9974A7D0: {
          Type: 'AWS::Lambda::Function',
          Properties: {
            Code: {
              ZipFile: expect.stringContaining('handler'),
            },
            Role: {
            },
            Handler: 'index.handler',
            Runtime: 'nodejs18.x',
          },
        },
      },
    });
  });

  test('InlineNodejsFunction handler specified without "."', () => {
    // GIVEN
    const stack = new Stack();
    Logger.set(stack, new Logger());
    Aspects.of(stack).add(new LoggingAspect());

    // WHEN
    new MyInlineFunction(stack, 'MyInlineFunction', {
      handler: 'handler',
    });

    // THEN
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        MyInlineFunction9974A7D0: {
          Type: 'AWS::Lambda::Function',
          Properties: {
            Code: {
              ZipFile: expect.stringContaining('handler'),
            },
            Role: {
            },
            Handler: 'index.handler',
            Runtime: 'nodejs18.x',
            Environment: {
              Variables: {
                LogLevel: '18446744073709552000',
              },
            },
          },
        },
      },
    });
  });

  test.each([
    undefined,
    // MinifyEngine.ES_BUILD,
    MinifyEngine.SIMPLE,
    MinifyEngine.NONE,
  ])('InlineNodejsFunction all minify', (engine) => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    let fn = new MyInlineFunction(stack, 'MyInlineFunction', {
      minifyEngine: engine,
    });

    // THEN
    let inspector = new TreeInspector();
    fn.inspect(inspector);
    if (engine == MinifyEngine.NONE) {
      expect(inspector.attributes[InlineNodejsFunction.TMP_FILE_ATTRIBUTE_NAME]).toBeUndefined();
    } else {
      expect(inspector.attributes[InlineNodejsFunction.TMP_FILE_ATTRIBUTE_NAME]).toContain('-test_lambda.js');
    }

    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        MyInlineFunction9974A7D0: {
          Type: 'AWS::Lambda::Function',
          Properties: {
            Code: {
              ZipFile: expect.stringContaining('handler'),
            },
            Role: {
            },
            Handler: 'index.handler',
            Runtime: 'nodejs18.x',
          },
        },
      },
    });
  });

  test.skip('InlineNodejsFunction no esbuild', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    jest.mock('esbuild', () => {
      throw new Error();
    });

    // THEN
    expect(() => new MyInlineFunction(stack, 'MyInlineFunction', {
      minifyEngine: MinifyEngine.ES_BUILD,
    })).toThrow();
  });

  test('InlineNodejsFunction LAMBDA_NODEJS_USE_LATEST_RUNTIME enabled', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    jest
      .spyOn(FeatureFlags.prototype, 'isEnabled')
      .mockImplementation(() => true);
    (Runtime as any).NODEJS_LATEST = Runtime.NODEJS_20_X;

    new MyInlineFunction(stack, 'MyInlineFunction', {
    });

    // THEN
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        MyInlineFunction9974A7D0: {
          Type: 'AWS::Lambda::Function',
          Properties: {
            Code: {
              ZipFile: expect.stringContaining('handler'),
            },
            Role: {
            },
            Handler: 'index.handler',
            Runtime: 'nodejs20.x',
          },
        },
      },
    });
    // Set it back.
    (Runtime as any).NODEJS_LATEST = Runtime.NODEJS_18_X;
  });
});