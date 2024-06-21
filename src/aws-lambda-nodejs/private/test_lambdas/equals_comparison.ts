function log(message: Record<string, any>) {
  if (process.env.LogLevel) {
    console.log(JSON.stringify(message));
  }
}

/**
 * For use with the EqualsComparisonAssertion task.
 */
export async function equalsComparison(event: any, context: any) {
  log({ Event: event });
  log({ Context: context });

  let expected = JSON.parse(event.expected.result)?.$Exact;
  if (!expected) {
    throw new Error('Did not get an expected.');
  }
  let actual = event.actual.result;
  if (!actual) {
    throw new Error('Did not get an actual.');
  }
  let result: string;
  let message: string;
  if (expected != actual) {
    result = 'fail';
    message = `Expected ${expected}, got ${actual}.`;
  } else {
    result = 'success';
    message = 'success';
  }
  return {
    result: result,
    message: message,
  };
}
