import { App } from 'aws-cdk-lib';
import { Construct, IConstruct } from 'constructs';
import { ConstructService } from '../../src';
import { NAMESPACE } from '../../src/private/internals';

// Service for tests.
const testService = new ConstructService({
  servicePropertyName: `${NAMESPACE}.test.TestService`,
});

describe('ConstructService tests', () => {
  it('scopeOf tests.', () => {
    let app = new App();
    const serviceQueryResult = {
      scope: app,
      service: true,
      servicePropertyName: `${NAMESPACE}.test.TestService`,
    };
    expect(ConstructService.scopeOf(undefined)).toBeUndefined();
    expect(ConstructService.scopeOf(serviceQueryResult)).toBe(app);
    expect(ConstructService.scopesOf([serviceQueryResult])).toEqual([app]);
  });

  it('serviceOf tests.', () => {
    expect(ConstructService.serviceOf(undefined)).toBeUndefined();
  });

  it('createSearchResult tests.', () => {
    const localService = new class extends ConstructService {
      publicCreateSearchResult(scope: IConstruct | undefined) {
        return this.createSearchResult(scope);
      }
    }({
      servicePropertyName: `${NAMESPACE}.test.TestService`,
    });
    expect(localService.publicCreateSearchResult(undefined)).toBeUndefined();
    let app = new App();
    expect(localService.publicCreateSearchResult(app)).toBeUndefined();
  });

  it('not a construct tests.', () => {
    let notConstruct = new Object();
    expect(testService.get(undefined as unknown as IConstruct)).toBeUndefined();
    expect(() => testService.set(undefined as unknown as IConstruct, true)).toThrow();
    expect(() => testService.set(notConstruct as IConstruct, true)).toThrow();
    expect(() => testService.get(notConstruct as IConstruct)).toThrow();
  });

  it('get/set/setFactory tests.', () => {
    let app = new App();
    let construct = new Construct(app, 'AConstruct');
    expect(testService.get(construct)).toBeUndefined();

    // No factory means no service.
    expect(testService.searchSelfOrCreate(app)).toBeFalsy();

    // Test setting a factory.
    let factory = ((_x: IConstruct) => 'from factory on app');
    expect(testService.setFactory(app, factory)).toBeTruthy();
    expect(ConstructService.isFactory(factory)).toBeTruthy();

    // Setting a service works.
    expect(testService.get(construct)).toBeUndefined();
    testService.set(construct, 'From setter.');
    expect(testService.get(construct)).toEqual('From setter.');
  });
});
