import {App, Stack} from "aws-cdk-lib";
import {TemplateImporter} from "../../lib/cloudformation-include";
import { Template } from "aws-cdk-lib/assertions";

const env =  {account: '000000000000', region: 'us-west-2'};

describe('Import weird', () => {
  test('Import bang bang test.', () => {
    let app = new App();

    const templateFileName = `${__dirname}/bangbang.yaml`;

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    importer.importTemplate(templateFileName, {
      parameters: {}
    })
    let template = Template.fromStack(stack).toJSON();
    expect(template).toMatchObject({
      Resources: {
        FlowLogsGroup: {
          Properties: {
            RetentionInDays: 365,
          }
        },
      },
    });
  });
})