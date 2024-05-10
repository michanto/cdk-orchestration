import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Construct } from 'constructs';
import {
  BaseTemplateImporter,
  FileReader,
  JsonParser,
  Stringifier,
  TempFileWriter,
  TemplateImporter,
} from '../../lib/cloudformation-include';

const env = { account: '000000000000', region: 'us-west-2' };

describe('Parser tests', () => {
  test('Parser input test.', () => {
    let app = new App();
    const templateFileName = `${__dirname}/workflow_template.yaml`;

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    expect(importer.node.findChild('YamlParser')).toBeDefined();
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
