import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { CfnTransform } from '../../src/transforms';

export class NoopTransform extends CfnTransform {
  applyCount: number = 0;

  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  apply(template: any) {
    this.applyCount++;
    return template;
  }
}

export class BadFunction extends Function {
  constructor(scope: Construct, id: string ) {
    super(scope, id, {
      code: Code.fromInline('bad code'),
      handler: 'handler',
      runtime: Runtime.NODEJS_18_X,
    });
  }
}
