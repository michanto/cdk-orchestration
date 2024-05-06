// Simple task for integration tests.

export function areEqual(leftHandSide: string, rightHandSide: string) {
  if (leftHandSide != rightHandSide) {
    throw new Error(`${leftHandSide} != ${rightHandSide}`);
  }
}
