import { IConstruct } from 'constructs';
import { ConstructService } from './construct_service';

/**
 * This class should be used for symbol-based Construct RTTI.
 */
export class ConstructRunTimeTypeInfo extends ConstructService {
  /**
   * Sets the RTTI of the construct.  Should be called from a Construct
   * constructor.
   *
   * Obviously a construct can have many of these, so be thoughtful.
   *
   * @param scope
   */
  addRtti(scope: IConstruct) {
    return this.set(scope, true);
  }

  /**
   * Returns true if the construct has this RTTI set on it.
   *
   * Used to implement ConstructXXX:isConstructXXX functions.
   *
   * @param scope
   */
  hasRtti(scope: IConstruct): boolean {
    return this.get(scope) != undefined;
  }
}
