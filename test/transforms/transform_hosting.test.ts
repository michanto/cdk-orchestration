import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';
import { CfnTransformHost, TransformHost, Transforms } from '../../src/transforms';
import { NoopTransform } from '../util';

class CfnTransformHostTestSubject extends CfnTransformHost {
  doApply(template: any) {
    return this.apply(template);
  }
}

describe('TransformHosting tests.', () => {
  it('Stack, Element and CfnTransformHost happy-path tests.', () => {
    // Without transforms, the stack and bucket are not hosts.
    let stack = new Stack();

    expect(TransformHost.isTransformHost(stack)).toBeFalsy();
    let bucket = new CfnBucket(stack, 'Bucket');
    expect(TransformHost.isTransformHost(bucket)).toBeFalsy();

    // Adding a transform to the bucket makes both stack and bucket hosts.
    let t1 = new NoopTransform(bucket, 't1');
    expect(TransformHost.isTransformHost(stack)).toBeTruthy();
    expect(TransformHost.isTransformHost(bucket)).toBeTruthy();
    let t2 = new NoopTransform(stack, 't2');

    // Transforms can be added to a CfnTransformHost.
    let host = new CfnTransformHostTestSubject(stack, 'Host');
    expect(TransformHost.isTransformHost(host)).toBeTruthy();
    expect(CfnTransformHost.isCfnTransformHost(host)).toBeTruthy();
    let t3 = new NoopTransform(host, 't3');
    let t4 = new NoopTransform(host, 't4');

    // Transforms are associated with the host they descend from.
    expect(Transforms.of(bucket).get()).toMatchObject([t1]);
    expect(Transforms.of(stack).get()).toMatchObject([t2]);
    expect(Transforms.of(host).get()).toMatchObject([t3, t4]);

    expect(t1.host).toEqual(bucket);
    expect(t2.host).toEqual(stack);
    expect(t3.host).toEqual(host);
    expect(t4.host).toEqual(host);

    // Transforms under host are applied when requested.
    host.doApply({});
    expect(t1.applyCount).toBe(0);
    expect(t2.applyCount).toBe(0);
    expect(t3.applyCount).toBe(1);
    expect(t4.applyCount).toBe(1);

    // Stack and Element transforms are applied on synthesize.
    // Transforms under other hosts are not applied.
    Template.fromStack(stack);
    expect(t1.applyCount).toBe(1);
    expect(t2.applyCount).toBe(1);
    expect(t3.applyCount).toBe(1);
    expect(t4.applyCount).toBe(1);
  });
});
