function log(message: Record<string, any>) {
  if (process.env.LogLevel) {
    console.log(JSON.stringify(message));
  }
}

/**
 * Can be used as a custom resource lambda or as a lambda.
 */
export async function equalsComparison(event: any, context: any) {
  log({ Event: event });
  log({ Context: context });

  let expected = JSON.parse(event.expected.result)?.['$Exact'];
  if (!expected) {
    throw new Error('Did not get an expected.')
  }
  let actual = event.actual.result;
  if (!actual) {
    throw new Error('Did not get an actual.')
  }
  if (expected != actual) {
    throw new Error(`Expected ${expected}, got ${actual}.`);
  }
}
