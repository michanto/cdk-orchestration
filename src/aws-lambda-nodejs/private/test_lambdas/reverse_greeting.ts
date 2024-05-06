const logger = process.env.LogLevel ? console : undefined;

function log(message: Record<string, any>) {
  logger?.log(JSON.stringify(message));
}

/**
 * Can be used as a custom resource lambda or as a lambda.
 */
export async function reverseGreeting(event: any, context: any) {
  log({ Event: event });
  log({ Context: context });
  let isCustomResource = event.ResourceProperties != undefined;
  if (isCustomResource && 'EncodedProperties' in event.ResourceProperties) {
    event.ResourceProperties = {
      ...event.ResourceProperties,
      ...JSON.parse(
        Buffer.from(
          event.ResourceProperties.EncodedProperties,
          'base64').toString('utf8')),
    };
    log({ DecodedEvent: JSON.stringify(event) });
  }
  let greeting = event.Greeting
        ?? event.ResourceProperties.Greeting
        ?? 'Hello, world';
  let result = greeting.split('').reverse().join('');
  return isCustomResource ? Promise.resolve({
    Data: { Greeting: result },
  }) : Promise.resolve({
    Greeting: result,
  });
}
