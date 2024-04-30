import { App, Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct, IConstruct } from 'constructs';
import { ConstructRunTimeTypeInfo, ConstructTreeSearch } from '../../src';
import { NAMESPACE } from '../../src/private/internals';

/** A construct with RTTI for testing. */
export class TypedConstruct extends Construct {
  static isTypedConstruct(x: IConstruct): x is TypedConstruct {
    return TypedConstruct.TYPED_CONSTRUCT_RTTI.hasRtti(x);
  }

  private static readonly TYPED_CONSTRUCT_RTTI = new ConstructRunTimeTypeInfo({
    servicePropertyName: `${NAMESPACE}.test.TypedConstruct`,
  });

  constructor(scope: Construct, id: string) {
    super(scope, id);
    TypedConstruct.TYPED_CONSTRUCT_RTTI.addRtti(this);
  }
}

describe('Construct RTTI tests', () => {
  it('Is marked with RTTI and is searchable.', () => {
    let app = new App();
    let typedScope1 = new TypedConstruct(app, 'One');

    let stack1 = new Stack(app, 'TestStack');
    let typedScope2 = new TypedConstruct(stack1, 'Two');
    let bucket = new Bucket(typedScope2, 'Bucket');

    expect(TypedConstruct.isTypedConstruct(app)).toBeFalsy();
    expect(TypedConstruct.isTypedConstruct(bucket)).toBeFalsy();
    expect(TypedConstruct.isTypedConstruct(typedScope1)).toBeTruthy();
    expect(TypedConstruct.isTypedConstruct(typedScope2)).toBeTruthy();

    let search = ConstructTreeSearch.for(TypedConstruct.isTypedConstruct);
    expect(search.searchDown(app).length).toBe(2);
    expect(search.searchDown(app, Stack.isStack).length).toBe(1);
    expect(search.searchUp(bucket, Stack.isStack)).toBe(typedScope2);
    expect(search.searchSelf(typedScope2)).toBeTruthy();
  });
});
