import { App, Stack } from 'aws-cdk-lib';
import { Construct, IConstruct, Node } from 'constructs';
import { IConstructServiceFactory, StackConstructTreeService } from '../../src';

const CDK_TEST_CONTEXT_NAMESPACE = 'cdk-context-test';
const TEST_SERVICE = new StackConstructTreeService({
  servicePropertyName: `${CDK_TEST_CONTEXT_NAMESPACE}.TestService`,
  factory: (scope) => new TestService(scope, 'FromDefaultFactory'),
});
const TEST_SERVICE_NO_FACTORY = new StackConstructTreeService({
  servicePropertyName: `${CDK_TEST_CONTEXT_NAMESPACE}.TestServiceNoFactory`,
});
const TEST_SERVICE_STOP_CONDITION = new StackConstructTreeService({
  servicePropertyName: `${CDK_TEST_CONTEXT_NAMESPACE}.TestServiceStopCondition`,
  stopCondition: (scope) => Stack.isStack(scope),
});

class TestService {
  static of(scope: Construct): TestService | undefined {
    return TEST_SERVICE.of(scope) as TestService | undefined;
  }

  static set(scope: Construct, service: TestService) {
    TEST_SERVICE.set(scope, service);
  }

  static setFactory(scope: Construct, service: IConstructServiceFactory) {
    TEST_SERVICE.setFactory(scope, service);
  }

  constructor(readonly scope: Construct, readonly message: string) {
  }
}

class TestServiceNoFactory {
  static of(scope: Construct): TestServiceNoFactory | undefined {
    return TEST_SERVICE_NO_FACTORY.of(scope) as TestServiceNoFactory | undefined;
  }

  static set(scope: Construct, service: TestServiceNoFactory | IConstructServiceFactory) {
    return TEST_SERVICE_NO_FACTORY.set(scope, service);
  }

  constructor(readonly scope: Construct, readonly message: string) {
  }
}

class TestServiceStopCondition {
  static of(scope: Construct): TestServiceStopCondition | undefined {
    return TEST_SERVICE_STOP_CONDITION.of(scope) as TestServiceStopCondition | undefined;
  }

  static set(scope: Construct, service: TestServiceStopCondition | IConstructServiceFactory) {
    return TEST_SERVICE_STOP_CONDITION.set(scope, service);
  }

  constructor(readonly scope: Construct, readonly message: string) {
  }
}

const testEnv = {
  region: 'us-west-2', account: '000000000000',
};

describe('Stack service tests', () => {
  test('Stack service default factory happy path test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: testEnv,
    });

    let service = TestService.of(stack);
    expect(service).toBeDefined();
    if (service) {
      expect(service.message).toEqual('FromDefaultFactory');
    }
  });

  test('Stack service default factory on app test.', () => {
    let app = new App();

    new Stack(app, 'TestStack', {
      env: testEnv,
    });

    expect(() => TestService.of(app)).toThrow();
  });

  test('Stack service app factory test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: testEnv,
    });

    TestService.setFactory(app, (scope) => new TestService(scope, 'FromAppFactory'));

    let service = TestService.of(stack);
    expect(service).toBeDefined();
    if (service) {
      expect(service.message).toEqual('FromAppFactory');
    }
  });

  test('Stack service app factory on app test.', () => {
    let app = new App();

    new Stack(app, 'TestStack', {
      env: testEnv,
    });

    TestService.setFactory(app, (scope) => new TestService(scope, 'FromAppFactory'));

    expect(() => TestService.of(app)).toThrow();
    expect(() => typeof (TEST_SERVICE.get(app)) == 'function');
  });

  test('Stack service direct set test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: testEnv,
    });

    TestService.setFactory(app, (scope) => new TestService(scope, 'FromAppFactory'));
    TestService.set(stack, new TestService(stack, 'FromStack'));

    let service = TestService.of(stack);
    expect(service).toBeDefined();
    if (service) {
      expect(service.message).toEqual('FromStack');
    }
    let service2 = TestService.of(stack);
    expect(service).toBe(service2);
  });

  // FUTURE:  Re-enable this test when Construct.isConstruct works.
  test('Stack service not a construct fails.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: testEnv,
    });

    let notReallyAConstruct = new class NotConstruct implements IConstruct {
      get node(): Node {
        return stack.node;
      }
    }();

    expect(() => TestService.set(notReallyAConstruct as Construct, new TestService(stack, 'FromStack'))).toThrow();
  });

  test('Stack service no factory happy path test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: testEnv,
    });

    let service = TestServiceNoFactory.of(stack);
    expect(service).toBeUndefined();
  });

  test('Stack service not set with stop condition.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: testEnv,
    });

    let service = TestServiceStopCondition.of(stack);

    expect(service).toBeUndefined();
  });

  test('Stack service set with stop condition.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: testEnv,
    });

    let service = new TestServiceStopCondition(stack, 'FromStack');
    TestServiceStopCondition.set(stack, service);


    expect(TestServiceStopCondition.of(stack)).toEqual(service);
  });

  test('Stack service of app throws.', () => {
    let app = new App();

    expect(() => TestServiceNoFactory.of(app)).toThrow();
  });
});
