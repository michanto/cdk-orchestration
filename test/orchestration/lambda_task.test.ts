import { Aspects, App, Stack, CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Function} from "aws-cdk-lib/aws-lambda";
import { InlineNodejsFunction } from "../../src/aws-lambda-nodejs";
import { LoggingAspect } from "../../src/core";
import { LambdaTask } from "../../src/orchestration";
import { Template } from "aws-cdk-lib/assertions";

const LAMBDA_PATH = `${__dirname}/../../lib/aws-lambda-nodejs/private/test_lambdas/`;

describe('LambdaTask tests.', () => {
  it('LambdaTask works.', () => {    
    class GreetingLambdaTask extends Construct {
        readonly handler: Function;
        readonly task: LambdaTask;
        constructor(scope: Construct, id: string) {
        super(scope, id);
        this.handler = new InlineNodejsFunction(this, 'Reverse', {
            entry: `${LAMBDA_PATH}reverse_greeting.js`,
            handler: 'reverseGreeting',
        });
    
        this.task = new LambdaTask(this, 'LambdaTask', {
            lambdaFunction: this.handler,
            payload: JSON.stringify({
            Greeting: 'Hello, world.',
            }),
            defaults: {
                Greeting: 'Hello, there.'
            }
        });
    
        Aspects.of(this).add(new LoggingAspect());
        }
    }
  
    const app = new App();
    const stack = new Stack(app, 'LambdaTaskStack', {});
    let greeting = new GreetingLambdaTask(stack, 'Greeting').task.getResponseField('Greeting');
    new CfnOutput(stack, 'AnOutput', {
        exportName: 'LambdaTaskGreetingExport',
        value: greeting,
    });
    let template = Template.fromStack(stack).toJSON();
    console.log(template);
    expect(template).toMatchObject({
        Resources: {
            GreetingLambdaTask1569D06A: {
                Type: 'Custom::LambdaTask'
            }
        },
        Outputs: { AnOutput: {} }
    })
  });
});
