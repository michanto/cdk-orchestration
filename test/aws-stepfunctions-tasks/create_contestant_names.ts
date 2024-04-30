function log(message: Record<string, any>) {
  if (process.env.LogLevel) {
    console.log(JSON.stringify(message));
  }
}

export const handler = async(event: any, context: any) => {
  log({ Event: event });
  log({ Context: context });

  let executions: any[] = event.StateMachineExecutions;
  for (let i = 0; i < executions.length; i++) {
    if (executions[i].completeFlag == 'Timeout') {
      executions[i].name = `${event.ExecutionName}_Timeout`;
    } else {
      executions[i].name = `${event.ExecutionName}_${i}`;
    }
  }
  return Promise.resolve(executions);
};