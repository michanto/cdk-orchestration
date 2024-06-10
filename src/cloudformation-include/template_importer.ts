import { CfnInclude, CfnIncludeProps } from 'aws-cdk-lib/cloudformation-include';
import { Construct } from 'constructs';
import { Log } from '../core';
import { BaseImporter, FileReader, Stringifier, TempFileWriter, TemplateCapture, YamlParser } from '../transforms';

/** */
export interface ImportTemplateProps {
  /**
   * See {@link CfnIncludeProps.preserveLogicalIds}.
   *
   * @default true
   */
  readonly preserveLogicalIds?: boolean;
  /**
   * See {@link CfnIncludeProps.loadNestedStacks}.
   */
  readonly loadNestedStacks?: {
    [stackName: string]: CfnIncludeProps;
  };
  /**
   * See {@link CfnIncludeProps.parameters}.
   */
  readonly parameters?: {
    [parameterName: string]: any;
  };

  /**
   * See {@link CfnIncludeProps.allowCyclicalReferences}.
   */
  readonly allowCyclicalReferences?: boolean;
}

/**
 * Base class for {@link TemplateImporter}.
 *
 * This is a TemplateImporter minus the transforms.
 *
 * Applies the import transforms on the given file and creates a new CfnInclude for the imported template.
 *
 * Transforms you might want to add to a BaseTemplateImporter subclass:
 *
 * - PreReader - PreReader transforms take an arbitrary string and return a CloudFormation file path.
 *   A PreReader transform could call a python script, run a GetTemplateLongPromise, or otherwise
 *   generate a CloudFormation file.
 * - StringReplacer - Easy string replacement before the template is parsed.
 * - Transform - Modify the parsed template before it is imported.
 */
export abstract class BaseTemplateImporter extends BaseImporter {
  readonly capture: TemplateCapture;
  protected constructor(scope: Construct, id: string) {
    super(scope, id);
    this.capture = new TemplateCapture(this, 'Capture');
  }

  /**
   * CloudFormation and CDK aren't quite the same.  CloudFormation allows
   * the user to set stack parameters that are not in the template.  CfnInclude does not.
   * Thus, a DescribeStacksLongPromise can return parameters that don't exist in the
   * template, and they need to be filtered out before we can call CfnInclude.
   *
   * The Capture transform gives us access to the imported template JSON.
   *
   * @param props
   * @returns
   */
  protected filterProps(props?: ImportTemplateProps): ImportTemplateProps | undefined {
    let log = Log.of(this);
    if (props?.parameters) {
      let templateParameters = this.capture.template.Parameters ?? {};
      let filtered: {[p: string]: any} = {};
      for (let param in templateParameters) {
        log.debug(() => `Given: ${param} = '${(props?.parameters?.[param]) ?? 'undefined'}'`);
        /* c8 ignore start */
        log.debug(() => `Template: ${param}: ${
          JSON.stringify(this.capture.template.Parameters[param], undefined, 2)
        }`);
        /* c8 ignore end */
        let value = props?.parameters?.[param];
        // If we are not given a value, use the default value in the template.
        // That way CfnInclude can delete the parameter for us.
        if (value == undefined) {
          value = templateParameters[param].Default ?? '';
        }
        if (this.capture.template.Parameters[param].Type == 'CommaDelimitedList') {
          if (typeof value == 'string') {
            value = value.split(',').map(v => v.trim());
          }
        }
        filtered[param] = value;
      }
      props = {
        ...props,
        parameters: filtered,
      };
    }
    return props;
  }

  /**
   * Applies the import transforms on the given file and creates a new CfnInclude for the imported template.
   *
   * @param templateFile  Normally this is the file you wish to import, and is passed to the Reader step.
   * However, if you have added any PreReader Transforms than this string is passed to those transforms,
   * and the output of the PreReader transforms is passed to the Reader step.
   *
   * PreReader transforms are useful for calling scripts that write JSON files.
   * @param props
   */
  importTemplate(templateFile: string, props?: ImportTemplateProps): CfnInclude {
    let outputFile = this.apply(templateFile);

    props = this.filterProps(props);

    return this.createCfnInclude(this, `${this.node.id}IMP${this.imports++}`, {
      ...(props ?? {}),
      templateFile: outputFile,
    });
  }

  protected createCfnInclude(scope: Construct, id: string, props: CfnIncludeProps) {
    return new CfnInclude(scope, id, props);
  }
}

/**
 * This class uses Transforms to manage the process of importing external
 * CloudFormation into the CDK.
 *
 * Import proceeds in a series of steps:  PreReader, Reader, StringTransforms, Parser,
 * TemplateTransforms, Stringify and TempFile.  The reason for the Stringify and TempFile
 * steps is that CfnInclude requires a file, so we need to write the template out to
 * a temporary file so CfnInclude can include it.
 *
 * Three of these steps are defined extension points.  The "StringTransforms" step is extended by creating a
 * transform of type {@link StringTransform} as a descendent of TemplateImporter, while the "TemplateTransforms" step
 * is extended by creating a transform of type {@link Transform} as a descendent of TemplateImporter.
 *
 * This class exposes an additional insertion point:  PreReader, which comes before the
 * Reader step.  This allows the user to add pre-reader-steps that output a template file, such as calling an
 * external script that returns a template file name.  To extend PreReader, create a StringTransform with an
 * {@link StringTransformProps.order} of "PreReader".
 */
export class TemplateImporter extends BaseTemplateImporter {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new FileReader(this, 'FileReader');
    new YamlParser(this, 'YamlParser');
    new Stringifier(this, 'Stringify');
    new TempFileWriter(this, 'TempFile');
  }
}