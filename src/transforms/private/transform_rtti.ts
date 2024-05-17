import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ConstructHost, ConstructRunTimeTypeInfo, ConstructTreeService } from '../../core';
import { NAMESPACE } from '../../private/internals';

/**
 * Runtime Type Info for CfnTransform
 */
export const CFN_TRANSFORM_RTTI = new ConstructRunTimeTypeInfo({
  servicePropertyName: `${NAMESPACE}.CfnTransform`,
});

/**
 * Runtime Type Info for a Transform Host.
 * Note that being a Transform Host just means the construct is
 * marked to host transforms, and does not presume any methods beyond those of Construct.
 */
export const TRANSFORM_HOST_RTTI = new ConstructRunTimeTypeInfo({
  servicePropertyName: `${NAMESPACE}.TransformHost`,
});

/**
 * Establishes the hosting construct/hosted construct relationship between a CfnTransform and it's host.
 */
export const TRANSFORM_CONSTRUCT_HOST = new ConstructHost({
  hostConstructTypeInfo: TRANSFORM_HOST_RTTI,
  hostedConstructTypeInfo: CFN_TRANSFORM_RTTI,
  // Don't recurse into a stack or transform host.
  stopCondition: (s: Construct) => Stack.isStack(s) || TRANSFORM_HOST_RTTI.hasRtti(s),
});


/**
 * Given a construct under a transform host, this will return the transform host (if any).
 *
 * Similar to how Stack.of works.  The cache is a symbol `${NAMESPACE}.TransformHostCache`,
 * but the factory just does a searchUp the tree for a TransformHost
 */
export const TRANSFORM_HOST_OF = new ConstructTreeService({
  servicePropertyName: `${TRANSFORM_HOST_RTTI.props.servicePropertyName}Cache`,
  stopCondition: (s: Construct) => Stack.isStack(s),
  factory: (c: Construct) => {
    return TRANSFORM_HOST_RTTI.searchUp(c)?.scope;
  },
});

