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

  let expected = JSON.parse(event.expected)?.['$Expect'];
  let actual = event.actual;
  if (expected != actual) {
    throw new Error(`Expected ${expected}, got ${actual}.`);
  }
}
