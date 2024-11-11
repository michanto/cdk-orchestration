import { execSync } from 'child_process';
import { IAspect, Stack } from 'aws-cdk-lib';
import { IConstruct, Construct } from 'constructs';
import { BUILD_TIME } from './build_time';
import { Singleton } from './singleton';

/**
 * Executes a shell command and returns the result.  Returns undefined on error.
 * @param command Shell command to execute.
 * @param env Environment variables (if any).
 */
function executeShellCommand(command: string, env?: Record<string, string>): string | undefined {
  try {
    return execSync(command,
      env ? { env: env, stdio: 'pipe' } : { stdio: 'pipe' })
      .toString().trim();
  /* c8 ignore start */
  } catch {
    return undefined;
  }
  /* c8 ignore end */
}

/**
 * Adds StackProvenance to all stacks in scope.
 */
export class StackProvenanceAspect implements IAspect {
  visit(node: IConstruct): void {
    if (Stack.isStack(node)) {
      Singleton.create(node, '@StackProvenance', (stack, id) => new StackProvenance(stack, id));
    }
  }
}

/**
 * Adds provenance data to the stack metadata.
 *
 * Use StackProvenanceAspect to add provenance data to all stacks.
 */
export class StackProvenance extends Construct {
  static timestamp = BUILD_TIME;

  constructor(scope: Construct, id: string = '@StackProvenance') {
    super(scope, id);

    let stack = Stack.of(this);
    stack.templateOptions.metadata = stack.templateOptions.metadata ?? {};

    let hostname = executeShellCommand('hostname');
    if (hostname) {
      stack.templateOptions.metadata.build_hostname = hostname;
    }
    stack.templateOptions.metadata.build_timestamp = StackProvenance.timestamp;
    if (process.env.USER) {
      stack.templateOptions.metadata.build_user = process.env.USER;
    }
  }
}