import * as fs from 'fs';
import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Role } from 'aws-cdk-lib/aws-iam';
import { CfnLogGroup } from 'aws-cdk-lib/aws-logs';
import { CfnStateMachine, DefinitionBody, Pass, StateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { PyStepFunctionsCleanup, PyStepFunctionsImportStack } from './py_step_functions_cleanup';
import {
  CfnIncludeToCdk,
  TemplateImporter,
} from '../../lib/cloudformation-include';
import {
  CfnTransformHost,
  TransformHost,
  Transforms,
  StringReplacer,
  TempFileWriter,
} from '../../lib/transforms';

const env = { account: '000000000000', region: 'us-west-2' };

const newResourceName = 'MyStepFunction';

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

    let roleArn = `arn:aws:iam::${env.account}:role/CustomSolonExecutionRole`;
    let stack = new PyStepFunctionsImportStack(app, 'TestStack', {
      env: env,
      resourceLogicalId: newResourceName,
      removalPolicy: RemovalPolicy.RETAIN,
      roleArn: roleArn,
    });

    let resource = stack.import.stateMachine;
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
      resourceLogicalId: newResourceName,
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

  test('CfnIncludeToCdk two includes.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let importer = new TemplateImporter(stack, 'Importer');
    let roleArn = `arn:aws:iam::${env.account}:role/CustomSolonExecutionRole`;
    let role = Role.fromRoleArn(importer, 'Role', roleArn);
    new PyStepFunctionsCleanup(importer, 'Cleanup', {
      resourceLogicalId: newResourceName,
      role: role,
    });
    importer.importTemplate(templateFileName).getResource(newResourceName) as CfnStateMachine;
    const bangBangFileName = `${__dirname}/bangbang.yaml`;
    importer.importTemplate(bangBangFileName, {
      parameters: {},
    });
    let stateMachine = CfnIncludeToCdk.findIncluded(newResourceName, stack) as CfnStateMachine;
    let flowLogs = CfnIncludeToCdk.findIncluded('FlowLogsGroup', stack) as CfnLogGroup;
    expect(stateMachine).toBeTruthy();
    expect(flowLogs).toBeTruthy();
  });

  test('TempFileWriter happy path.', () => {
    let app = new App();

    let stack = new Stack(app, 'TestStack', {
      env: env,
    });

    let host = new CfnTransformHost(stack, 'Host');
    let tmpDir = `${__dirname}/test_tmp`;
    let tmpFileWriter = new TempFileWriter(host, 'Temp', tmpDir);
    let fileName = tmpFileWriter.apply('some data');
    expect(fs.existsSync(fileName)).toBeTruthy();
    fs.rmSync(tmpDir, { recursive: true });
  });
});
