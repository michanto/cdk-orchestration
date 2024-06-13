import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { IRole, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { CfnStateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { TemplateImporter } from '../../lib/cloudformation-include';
import { Transform, StringReplacer, CfTemplateType } from '../../src/transforms';

export class DescriptionRemover extends Transform {
  public apply(template: CfTemplateType): CfTemplateType {
    delete template.Description;
    return template;
  }
}

export interface PyStepFunctionsCleanupProps {
  /**
   * Desired logical id for the imported StateMachine.
   * The default logical id for PyStepFunction is 'StateMachineComponent',
   * but user can change it. */
  resourceLogicalId?: string;
  /** Optionally add a role. */
  role?: IRole;
}

/**
 * This transform takes a template created by the
 * [AWS Step Functions Data Science SDK for Python](
 * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-python-sdk.html)
 * and modifies it for import into a CDK stack.
 */
export class PyStepFunctionsCleanup extends Transform {
  /** Default name for StepFunction created by Python SDK. */
  static readonly STATE_MACHINE_RESOURCE_ID = 'StateMachineComponent';

  readonly stepFunctionResourceName;
  constructor(scope: Construct, id: string, readonly props?: PyStepFunctionsCleanupProps) {
    super(scope, id);
    // If we don't delete this it gets put in the larger template.
    new DescriptionRemover(this, 'DescriptionRemover');
    // If the user desires a rename, add a StringReplacer transform to perform the rename.
    this.stepFunctionResourceName = props?.resourceLogicalId ?? PyStepFunctionsCleanup.STATE_MACHINE_RESOURCE_ID;
    if (props?.resourceLogicalId) {
      // Note that StringTransforms always run before Transforms,
      // unless the StringTransform.order is overridden.
      new StringReplacer(scope, 'Replacer', {
        joiner: props.resourceLogicalId,
        splitter: PyStepFunctionsCleanup.STATE_MACHINE_RESOURCE_ID,
      });
    }
  }

  apply(template: any) {
    let resource = template.Resources[this.stepFunctionResourceName];
    if (resource && this.props?.role) {
      resource.Properties.RoleArn =this.props!.role.roleArn;
    }
    return template;
  }
}

export interface PyStepFunctionsTemplateImportProps extends PyStepFunctionsCleanupProps {
  /** Optionally add a removal policy */
  removalPolicy?: RemovalPolicy;
}

/**
 * Imports a template created by the
 * [AWS Step Functions Data Science SDK for Python](
 * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-python-sdk.html)
 * into a CDK stack.
 *
 * Import multiple tempales into the stack by
 */
export class PyStepFunctionsTemplateImport extends Construct {
  readonly stateMachine: CfnStateMachine;

  constructor(scope: Construct, id: string, props?: PyStepFunctionsTemplateImportProps) {
    super(scope, id);
    let importer = new TemplateImporter(this, 'Importer');
    let cleanup = new PyStepFunctionsCleanup(importer, 'Cleanup', props);

    this.stateMachine = importer.importTemplate(templateFileName)
      .getResource(cleanup.stepFunctionResourceName) as CfnStateMachine;

    if (props?.removalPolicy) {
      this.stateMachine.applyRemovalPolicy(props?.removalPolicy);
    }
  }
}

const templateFileName = `${__dirname}/workflow_template.yaml`;
export interface PyStepFunctionsImportStackProps extends StackProps, PyStepFunctionsTemplateImportProps {
  readonly roleArn?: string;
}

export class PyStepFunctionsImportStack extends Stack {
  readonly import: PyStepFunctionsTemplateImport;
  constructor(scope: Construct, id: string, props?: PyStepFunctionsImportStackProps) {
    super(scope, id, props);
    let role: IRole | undefined = undefined;
    if (props?.roleArn) {
      role = Role.fromRoleArn(this, 'Role', props.roleArn);
    }
    if (props?.role) {
      role = props.role;
    }
    if (!role) {
      role = props?.role ?? new Role(this, 'SFRole', {
        assumedBy: new ServicePrincipal('states.amazonaws.com'),
      });
    }

    this.import = new PyStepFunctionsTemplateImport(this, 'ImportPyStepFunction', {
      ...props,
      role: role,
    });
  }
}