import { Stack } from 'aws-cdk-lib';
import { Construct, IConstruct } from 'constructs';
import { ConstructRunTimeTypeInfo, ConstructTreeService } from '../../core';
import { NAMESPACE } from '../../private/internals';

export const CFN_TRANSFORM_RTTI = new ConstructRunTimeTypeInfo({
  servicePropertyName: `${NAMESPACE}.CfnTransform`,
});

export const CFN_TRANSFORM_HOST_RTTI = new ConstructRunTimeTypeInfo({
  servicePropertyName: `${NAMESPACE}.TransformHost`,
});

export function isTransformHost(construct: IConstruct): boolean {
  return CFN_TRANSFORM_HOST_RTTI.hasRtti(construct);
}

/**
 * Given a construct under a transform host, this will return the transform host (if any).
 *
 * Similar to how Stack.of works.  The cache is a symbol `${NAMESPACE}.TransformHostCache`,
 * but the factory just does a searchUp the tree for a TransformHost
 */
export const TRANSFORM_HOST_OF = new ConstructTreeService({
  servicePropertyName: `${CFN_TRANSFORM_HOST_RTTI.props.servicePropertyName}Cache`,
  stopCondition: (s: Construct) => Stack.isStack(s),
  factory: (c: Construct) => {
    return CFN_TRANSFORM_HOST_RTTI.searchUp(c)?.scope;
  },
});

