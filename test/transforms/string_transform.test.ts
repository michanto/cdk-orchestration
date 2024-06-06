import { App, Environment, Stack } from 'aws-cdk-lib';
import { TemplateImporter } from '../../src/cloudformation-include';
import { StringReplacer } from '../../src/transforms';

const env: Required<Environment> = {
  account: '000000000000',
  region: 'us-west-2',
};

describe('StringTransform tests', () => {
  test('StringTransform validations test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    new StringReplacer(importer, 'Replacer', {
      splitter: ':', joiner: '',
    });
    // TODO:  validation
  });
});
