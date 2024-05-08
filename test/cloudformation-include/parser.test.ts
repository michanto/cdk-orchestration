import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Construct } from 'constructs';
import {
  BaseTemplateImporter,
  FileReader,
  JsonParser,
  Parser,
  Stringifier,
  TempFileWriter,
  TemplateImporter,
} from '../../lib/cloudformation-include';

const env = { account: '000000000000', region: 'us-west-2' };

describe('Parser tests', () => {
  test('Parser input test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    let parser = importer.node.findChild('YamlParser') as Parser;
    expect(parser).toBeDefined();
    expect(() => parser.validateInput(1)).toThrow();
    expect(() => parser.validateOutput('unparsed')).toThrow();
  });

  class JsonOnlyTemplateImporter extends BaseTemplateImporter {
    constructor(scope: Construct, id: string) {
      super(scope, id);
      new FileReader(this, 'FileReader');
      new JsonParser(this, 'JsonParser');
      new Stringifier(this, 'Stringify');
      new TempFileWriter(this, 'TempFile');
    }
  }

  test('Json parser noop happy path test.', () => {
    let app = new App();
    const templateFileName = `${__dirname}/workflow_template.json`;

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new JsonOnlyTemplateImporter(stack, 'Importer');
    importer.importTemplate(templateFileName);
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Description: 'CloudFormation template for AWS Step Functions - State Machine',
      Resources: {
        StateMachineComponent: {
          Type: 'AWS::StepFunctions::StateMachine',
        },
      },
    });
  });
});
