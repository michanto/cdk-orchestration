/**
 * Defines where Transforms of a given order are added to a Transform host.
 * ImportOrders are the names of the constructs under the TransformHost.  See BaseImporter.
 */
export enum ImportOrders {
  /** Transforms that run before the Reader. */
  PRE_READER = '_PreReader',
  /** Transform that reads a file into a string. */
  READER = '_Reader',
  /** Transforms that run against the sting representation. */
  STRING_TRANSFORMS = '_StringTransforms',
  /** Parses the string representation into (for example) JSON. */
  PARSER = '_Parser',
  /** Transform structured data, such as JSON, YAML, TOML. */
  TRANSFORMS = '_Transforms',
  /** Writes structured data to a file.  Necessary for CfnInclude scenarios. */
  WRITER = '_Writer'
}
