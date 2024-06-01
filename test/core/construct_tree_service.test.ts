import { App } from 'aws-cdk-lib';
import { Construct, IConstruct } from 'constructs';
import { ConstructService, ConstructTreeService, IConstructServiceFactory, ServiceQueryResult } from '../../src';
import { NAMESPACE } from '../../src/private/internals';

// Service for tests.
const testService = new class extends ConstructTreeService {
  protected onCreateCache(cache: ServiceQueryResult): ServiceQueryResult {
    // NOTE:  We are getting here, so the coverage should say we are testing all lines.
    // console.log('onCreateCache');
    // console.log(new Error().stack);
    return super.onCreateCache(cache);
  }
}({
  servicePropertyName: `${NAMESPACE}.test.TestTreeService`,
  factory: _x => 'TestTreeService from service factory',
});

describe('ConstructTreeService tests', () => {
  it('Factory on service test.', () => {
    let app = new App();
    let construct = new Construct(app, 'AConstruct');
    expect(testService.get(construct)).toBeUndefined();
    expect(testService.searchUpOrCreate(construct)?.service).toEqual('TestTreeService from service factory');
    expect(testService.get(construct)).toEqual('TestTreeService from service factory');
  });

  it('Factory on app test.', () => {
    let app = new App();
    let construct = new Construct(app, 'AConstruct');
    expect(testService.get(construct)).toBeUndefined();

    let factory: IConstructServiceFactory = (_x: IConstruct) => 'TestTreeService from factory on app';
    expect(ConstructService.isFactory(factory)).toBeFalsy();
    expect(testService.setFactory(app, factory)).toBeTruthy();
    expect(ConstructService.isFactory(factory)).toBeTruthy();

    expect(testService.get(construct)).toBeUndefined();
    expect(testService.searchUpOrCreate(construct)?.service).toEqual('TestTreeService from factory on app');
    expect(testService.get(construct)).toEqual('TestTreeService from factory on app');
  });
});
