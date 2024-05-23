# Orchestration (cdk-orchestration)
Orchestrate running tasks via CloudFormation.
<!--BEGIN STABILITY BANNER-->

---

![cdk-orchestration: Experimental](https://img.shields.io/badge/cdk--orchestration-experimental-success.svg?style=for-the-badge)

---

<!--END STABILITY BANNER-->

Normally the CDK is used for provisioning resources.  The process of provisioning is run by a powerful orchestration engine.
This package allows the user to write Lambdas and StepFunctions that use the CloudFormation orchestrating engine for
running arbitrary tasks.

Running tasks in CloudFormation is useful for producing artifacts, such as ML models, FPGA layouts, embedded software, or
anything that can be run in an AWS execution environment, including StepFunctions on-prem support for things like HITL testing.

Two types of tasks are supported:  LambdaTask, which runs a lambda and surfaces the output fields as custom resource attributes, and
StepFunctionTask, which surfaces the StepFunction output as custom resource attributes.

See the integration tests for examples of how to use attributes.  Attributes from one task can be passed as paramters to a
subsequent task.  Attributes are only returned if they are accessed (via getAtt or getAttString), allowing small parts of Lambda
and StepFunction outputs to be used.

S3 can also be used for task input and output.  JSON files can be written to or read from a user-supplied bucket using the S3
orchestration resources S3FileResource (for writing JSON), S3FileReader (for reading JSON) and S3FileMetadata (for reading S3
metadata fields).

The user bucket can be partitioned by a user-supplied build id as part of the key for reading and writing data, allowing artifacts
from separate builds to be organized for easy access.

## License

[Apache 2.0](LICENSE)