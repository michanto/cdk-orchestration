import { ReleasableCommits, awscdk, github, javascript, release } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';

// See how to publish https://github.com/mikejgray/ovos-skill-projen/blob/main/.projenrc.ts
let cdkVersion = '2.120.0';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Michael Antonio',
  authorAddress: '',
  cdkVersion: cdkVersion,
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
  constructsVersion: '10.3.0',
  name: '@michanto/cdk-orchestration',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/michanto/cdk-orchestration.git',
  licensed: true,
  license: 'Apache-2.0',
  packageManager: NodePackageManager.NPM,
  experimentalIntegRunner: false, // we're using the AWS CDK-provided runner
  // autoApproveUpgrades: true,
  // autoApproveOptions: { allowedUsernames: ['hoegertn'] },
  depsUpgradeOptions: { workflowOptions: { schedule: javascript.UpgradeDependenciesSchedule.WEEKLY } },
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp(),
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ['feat', 'fix', 'chore', 'ci', 'docs', 'style', 'refactor', 'test', 'revert', 'Revert'],
      },
    },
  },
  releaseTrigger: release.ReleaseTrigger.continuous(),
  releasableCommits: ReleasableCommits.ofType(['feat', 'fix', 'revert', 'Revert']),
  gitpod: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  /*
  publishToPypi: {
    distName: 'cdk-orchestration',
    module: 'cdk_orchestration',
  }, */
  workflowNodeVersion: '18.x',
  minNodeVersion: '18.0.0',
  // publishToMaven: {
  //   mavenGroupId: 'org.michanto',
  //   mavenArtifactId: 'aws-cdk',
  //   javaPackage: 'org.michanto.cdk_orchestration',
  // },
  // publishToNuget: {
  //   packageId: 'Michanto.CdkOrchestration',
  //   dotNetNamespace: 'Michanto.CdkOrchestration',
  // },
  devDeps: [
    '@types/tmp@^0.2.1',
    `@aws-cdk/integ-runner@${cdkVersion}-alpha.0`,
    `@aws-cdk/integ-tests-alpha@${cdkVersion}-alpha.0`,
  ],

  deps: [
    'aws-lambda@0.1.1',
    '@types/aws-lambda@^8.10.137',
    '@aws-sdk/client-s3@3.6.1',
    '@aws-sdk/client-lambda@3.501.0',
    '@aws-sdk/client-sfn@3.501.0',
    '@aws-sdk/client-ec2@3.501.0',
    '@aws-sdk/credential-providers@3.501.0',
    'tmp@^0.2.1',
    'yaml@^2.1.1',
  ],

  bundledDeps: [
    'aws-lambda@0.1.1',
    '@types/aws-lambda@^8.10.137',
    '@aws-sdk/client-s3@3.6.1',
    '@aws-sdk/client-lambda@3.501.0',
    '@aws-sdk/client-sfn@3.501.0',
    '@aws-sdk/client-ec2@3.501.0',
    '@aws-sdk/credential-providers@3.501.0',
    'tmp@^0.2.1',
    'yaml@^2.1.1',
  ],
  // devDeps: [

  // ],

});

project.addTask('integ', {
  exec: 'integ-runner',
  description: 'Run integration tests',
  receiveArgs: true,
});

project.addTask('integ:update', {
  exec: 'integ-runner --update-on-failed',
  description: 'Run integration tests and update on any failed tests',
  receiveArgs: true,
});

project.synth();
