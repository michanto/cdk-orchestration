import { IResolvable, IResolveContext, IPostProcessor, Token } from 'aws-cdk-lib';

export interface IProcessor {
  process(x: any): any;
}

/**
 * Copied out of the CDK.  Because not public.
 */
export class PostResolveToken implements IResolvable, IPostProcessor {
  public readonly creationStack: string[] = [];

  constructor(private readonly value: any, private readonly processor: IProcessor) {
    /* istanbul ignore next */
    if (typeof value == 'function') {
      throw new Error(`Argument to PostResolveToken must be a plain value object, got ${value}`);
    }

    this.value = value;
  }

  public postProcess(o: any, _context: IResolveContext): any {
    return this.processor.process(o);
  }

  public resolve(context: IResolveContext) {
    context.registerPostProcessor(this);
    return this.value;
  }

  /* istanbul ignore next */
  public toString(): string {
    return Token.asString(this);
  }

  /* istanbul ignore next */
  public toJSON(): any {
    // We can't do the right work here because in case we contain a function, we
    // won't know the type of value that function represents (in the simplest
    // case, string or number), and we can't know that without an
    // IResolveContext to actually do the resolution, which we don't have.
    // We used to throw an error, but since JSON.stringify() is often used in
    // error messages to produce a readable representation of an object, if we
    // throw here we'll obfuscate that descriptive error with something worse.
    // So return a string representation that indicates this thing is a token
    // and needs resolving.
    return '<unresolved-token>';
  }
}
