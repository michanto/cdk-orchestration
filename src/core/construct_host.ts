import { IConstruct } from 'constructs';
import { ConstructRunTimeTypeInfo } from './construct_rtti';
import { ConstructService } from './construct_service';
import { IStopCondition } from './construct_tree_search';

/**
 * Properties for ConstructHost.
 */
export interface ConstructHostProps {
  /** Host RTTI */
  readonly hostConstructTypeInfo: ConstructRunTimeTypeInfo;
  /** Hosted construct RTTI */
  readonly hostedConstructTypeInfo: ConstructRunTimeTypeInfo;
  /**
   * Stop condition for searching for hosted constructs.
   * Normally this will at least exclude sub-stacks.
   */
  readonly stopCondition?: IStopCondition;
}

/**
 * Helper class to make it easier for a construct to "host" constructs of
 * a specific type, as defined by Construct RTTI.
 */
export class ConstructHost {
  constructor(readonly props: ConstructHostProps) {
  }

  /**
   * Returns constructs that match the hosted type that are under scope.
   * @param scope Scope for the search.  Not required to be the host.
   * @returns
   */
  getHostedConstructs(scope: IConstruct): IConstruct[] {
    return ConstructService.scopesOf(
      this.props.hostedConstructTypeInfo.searchDown(
        scope, this.props.stopCondition));
  }
}
