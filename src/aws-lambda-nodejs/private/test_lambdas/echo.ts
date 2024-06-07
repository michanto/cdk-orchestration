function log(message: Record<string, any>) {
  if (process.env.LogLevel) {
    console.log(JSON.stringify(message));
  }
}
export async function handler(event: any, context: any) {
  log({ Event: event });
  log({ Context: context });
  return Promise.resolve(event ?? {});
}
