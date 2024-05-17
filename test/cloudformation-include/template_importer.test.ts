import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { IRole, Role } from 'aws-cdk-lib/aws-iam';
import { CfnStateMachine, DefinitionBody, Pass, StateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import {
  CfnIncludeToCdk,
  TempFileWriter,
  TemplateImporter,
} from '../../lib/cloudformation-include';
import {
  CfnTransformHost,
  StringReplacer,
  Transform, TransformHost, Transforms,
} from '../../lib/transforms';
import * as fs from 'fs';

const env = { account: '000000000000', region: 'us-west-2' };

const newResourceName = 'MyStepFunction';
function capitalizeFirstLetter(data: string) {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

export interface PyStepFunctionsCleanupProps {
  resourceName: string;
  role?: IRole;
  removalPolicy?: RemovalPolicy;
}

/**
 * This example takes a template created by the
 * {@link https://docs.aws.amazon.com/step-functions/latest/dg/concepts-python-sdk.html AWS Step Functions Data Science SDK for Python}
 * and imports it into a CDK stack.
 */
class PyStepFunctionsCleanup extends Transform {
  static readonly STATE_MACHINE_RESOURCE_ID = 'StateMachineComponent';
  constructor(scope: Construct, id: string, readonly props?: PyStepFunctionsCleanupProps) {
    super(scope, id );
    if (props?.resourceName) {
      new StringReplacer(scope, 'Replacer', { joiner: props!.resourceName, splitter: PyStepFunctionsCleanup.STATE_MACHINE_RESOURCE_ID });
    }
  }

  apply(template: any) {
    // If we don't delete this it gets put in the larger template.
    delete template.Description;
    let resourceName = this.props?.resourceName ?? PyStepFunctionsCleanup.STATE_MACHINE_RESOURCE_ID;
    let resource = template.Resources[resourceName];
    if (this.props?.role) {
      resource.Properties.RoleArn =this.props!.role.roleArn;
    }
    if (this.props?.removalPolicy) {
      resource.DeletionPolicy = capitalizeFirstLetter(this.props!.removalPolicy);
    }
    return template;
  }

}

const templateFileName = `${__dirname}/workflow_template.yaml`;
describe('Import transform tests', () => {
  test('Import transform noop happy path test.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    let resource = importer.importTemplate(templateFileName)
      .getResource('StateMachineComponent') as CfnStateMachine;
    let template = Template.fromStack(stack).toJSON();
    expect(TransformHost.isTransformHost(importer)).toBeTruthy();
    expect(CfnTransformHost.isCfnTransformHost(importer)).toBeTruthy();
    expect(resource).not.toBeUndefined();
    expect(template).toMatchObject({
      Description: 'CloudFormation template for AWS Step Functions - State Machine',
      Resources: {
        StateMachineComponent: {
          Type: 'AWS::StepFunctions::StateMachine',
        },
      },
    });
  });

  test('Import transform not a file name.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    expect(() => importer.importTemplate('notafile.json')).toThrow();
  });

  test('Import transform workflow logical id.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    new StringReplacer(importer, 'Replacer', { joiner: newResourceName, splitter: 'StateMachineComponent' });
    let resource = importer.importTemplate(templateFileName).getResource(newResourceName) as CfnStateMachine;
    let template = Template.fromStack(stack).toJSON();
    expect(resource).not.toBeUndefined();
    expect(template).toMatchObject({
      Description: 'CloudFormation template for AWS Step Functions - State Machine',
      Resources: {
        [newResourceName]: {
          Type: 'AWS::StepFunctions::StateMachine',
        },
      },
    });
  });

  test('Import transform workflow logical id - inserted in correct order.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    new StringReplacer(importer, 'Replacer', { joiner: newResourceName, splitter: 'StateMachineComponent' });
    let resource = importer.importTemplate(templateFileName).getResource(newResourceName) as CfnStateMachine;
    expect(resource).not.toBeUndefined();
  });

  test('Import transform workflow total cleanup.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    let roleArn = `arn:aws:iam::${env.account}:role/CustomSolonExecutionRole`;
    new PyStepFunctionsCleanup(importer, 'Cleanup', {
      resourceName: newResourceName,
      removalPolicy: RemovalPolicy.RETAIN,
      role: Role.fromRoleArn(importer, 'Role', roleArn),
    });
    let resource = importer.importTemplate(templateFileName).getResource(newResourceName) as CfnStateMachine;
    let template = Template.fromStack(stack).toJSON();
    expect(resource).not.toBeUndefined();
    expect(template).toMatchObject({
      // Description: 'CloudFormation template for AWS Step Functions - State Machine',
      Resources: {
        [newResourceName]: {
          Type: 'AWS::StepFunctions::StateMachine',
          Properties: {
            RoleArn: roleArn,
          },
          DeletionPolicy: 'Retain',
        },
      },
    });
  });

  test('Import transform not applied to stack.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    // Just ensure it does not throw.
    importer.importTemplate(templateFileName, {
      parameters: { NotAParameter: 'value' },
    });

    let stackTransforms = Transforms.of(stack).get().map(t => t.node.id);
    expect(stackTransforms.length).toBe(0);

    let importTransforms = Transforms.of(importer).get().map(t => t.node.id);
    expect(importTransforms.length).toBe(5);

  });

  test('Import transform not a parameter.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    // Just ensure it does not throw.
    importer.importTemplate(templateFileName, {
      parameters: { NotAParameter: 'value' },
    });
  });

  test('CfnIncludeToCdk happy path.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    let roleArn = `arn:aws:iam::${env.account}:role/CustomSolonExecutionRole`;
    let role = Role.fromRoleArn(importer, 'Role', roleArn);
    new PyStepFunctionsCleanup(importer, 'Cleanup', {
      resourceName: newResourceName,
      removalPolicy: RemovalPolicy.RETAIN,
      role: role,
    });
    let resource = importer.importTemplate(templateFileName).getResource(newResourceName) as CfnStateMachine;
    CfnIncludeToCdk.replaceIncluded(newResourceName, new StateMachine(stack, newResourceName, {
      definitionBody: DefinitionBody.fromChainable(new Pass(stack, 'PassStep')),
      role: role,
    }));

    let template = Template.fromStack(stack).toJSON();
    expect(resource).not.toBeUndefined();
    expect(template).toMatchObject({
      // Description: 'CloudFormation template for AWS Step Functions - State Machine',
      Resources: {
        [newResourceName]: {
          Type: 'AWS::StepFunctions::StateMachine',
          Properties: {
            RoleArn: roleArn,
            DefinitionString: '{"StartAt":"PassStep","States":{"PassStep":{"Type":"Pass","End":true}}}',
          },
        },
      },
    });
  });
  test('TempFileWriter happy path.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let host = new CfnTransformHost(stack, "Host");
    let tmpDir = `${__dirname}/test_tmp`
    let tmpFileWriter = new TempFileWriter(host, "Temp", tmpDir);
    let fileName = tmpFileWriter.apply("some data");
    expect(fs.existsSync(fileName)).toBeTruthy()
    fs.rmSync(tmpDir, {recursive: true});
  });
});
