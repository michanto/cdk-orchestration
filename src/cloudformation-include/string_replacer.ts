import { Construct } from 'constructs';
import { StringTransform, StringTransformProps } from '../transforms';

/**
 * Properties for {@link StringReplacer}
 */
export interface StringReplacerProps extends StringTransformProps {
  readonly splitter: string;
  readonly joiner: string;
}

/**
 * StringTransform that replaces strings in a template.  Useful for renaming LogicalIDs, as long as they are reasonably
 * unique.
 */
export class StringReplacer extends StringTransform {
  constructor(scope: Construct, id: string, readonly props: StringReplacerProps) {
    super(scope, id, props);
  }

  apply(template: string): string {
    return template.split(this.props.splitter).join(this.props.joiner);
  }
}
