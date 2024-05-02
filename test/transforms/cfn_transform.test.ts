import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Construct, IConstruct } from 'constructs';
import {
  CfnTransform,
  TransformHost,
} from '../../src/transforms';

let testEnv = {
  account: '000000000000',
  region: 'us-west-2',
};

/**
 * Simple example transform to set a stack description.
 *
 * You can do this on a stack directly, so this transform is not
 * normally necessary.
 */
export class ChangeStackDescription extends CfnTransform {
  constructor(scope: Construct, id: string, readonly description: string = 'Hello, world.') {
    super(scope, id);
  }

  apply(template: any): any {
    template.Description = this.description;
    return template;
  }
}

/**
 * Set the Description field of a template.
 */
export class StackDescription extends CfnTransform {
  constructor(scope: Construct, id: string, readonly description: string) {
    super(scope, id);
  }

  apply(template: any): any {
    // Any change to the template is allowed.
    template.Description = this.description;
    // Always return the altered template.
    return template;
  }
}

// From the README.md file
class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Host a transform.
    new ChangeStackDescription(this, 'Description',
      'This description came from a transform.');
  }
}

describe('transform tests', () => {
  test('Transform happy path test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: testEnv,
      description: 'This is the old stack description.',
    });

    let stackDescription = new StackDescription(stack, 'Description', 'This is the new stack description.');
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({ Description: 'This is the new stack description.' });
    expect(CfnTransform.isCfnTransform(stackDescription)).toBeTruthy();
    expect(TransformHost.isTransformHost(stack)).toBeTruthy();
  });

  test('Test transform code from README.md file', () => {
    let app = new App();
    let stack = new MyStack(app, 'MyStack');
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({ Description: 'This description came from a transform.' });
  });

  test('Transform stack auto-hosting test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: testEnv,
      description: 'This is the old stack description.',
    });

    new StackDescription(stack, 'Description', 'This is the new stack description.');
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({ Description: 'This is the new stack description.' });
  });

  test('Transform multiple overriding transforms test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: testEnv,
      description: 'This is stack description 0.',
    });

    let transform1 = new StackDescription(stack, 'Description', 'This is stack description 1.');
    new StackDescription(transform1, 'Description', 'This is stack description 2.');
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({ Description: 'This is stack description 2.' });
  });

  test('Does not return a template test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: testEnv,
      description: 'This is the old stack description.',
    });

    let theBad = new class extends CfnTransform {
      apply(_template: any) {
      }
    }(stack, 'TheBad');
    expect(() => Template.fromStack(stack)).toThrow();
    expect(CfnTransform.isCfnTransform(theBad)).toBeTruthy();
  });

  test('hook tests', () => {
    let stack = new Stack();
    // Not a construct throws.
    expect(() => TransformHost.hook(new Object() as unknown as IConstruct)).toThrow();
    // No _toCloudFormation throws.
    expect(() => TransformHost.hook(new Construct(stack, "id"))).toThrow();
    // Not a Stack or L1 throws.
    expect(() => TransformHost.hook(new class extends Construct {
      protected _toCloudFormation() {
        return {};
      }
    }(stack, "id2"))).toThrow();
  })
});
