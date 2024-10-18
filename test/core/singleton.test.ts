import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Singleton } from '../../src';
import { EchoFunction } from '../util';

describe('Singleton tests', () => {
  test('Creates a singleton.', () => {
    let stack = new Stack();
    let construct = new Construct(stack, 'AConstruct');
    let fn = Singleton.create(construct, 'Function', (s, id) => new EchoFunction(s, id)) as EchoFunction;
    expect(fn).toBeTruthy();
    expect(Singleton.isSingleton(fn)).toBeTruthy();
    expect(Stack.isStack(fn.node.scope)).toBeTruthy();
  });

  test('Create throws when not at stack level.', () => {
    let stack = new Stack();
    let construct = new Construct(stack, 'AConstruct');
    expect(() => Singleton.create(construct, 'Function', (_s, id) => new EchoFunction(construct, id))).toThrow();
  });

  test('Create throws when wrong id.', () => {
    let stack = new Stack();
    let construct = new Construct(stack, 'AConstruct');
    expect(() => Singleton.create(construct, 'Function', (s, _id) => new EchoFunction(s, 'Echo'))).toThrow();
  });

  test('Mark throws when not at stack level.', () => {
    let stack = new Stack();
    let parent = new Construct(stack, 'AConstruct');
    let child = new Construct(parent, 'MakeMeSingleton');
    expect(() => Singleton.mark(child)).toThrow();
  });

  test('Throws when not a singleton.', () => {
    let stack = new Stack();
    let construct = new Construct(stack, 'NotSingleton');
    expect(() => Singleton.create(construct, 'NotSingleton',
      (s, id) => new Construct(s, id))).toThrow();
  });

  test('Marked singleton is a singleton.', () => {
    let stack = new Stack();
    let fn = new EchoFunction(stack, 'Function');
    expect(fn).toBeTruthy();
    expect(() => Singleton.create(stack, 'Function', (s, id) => new EchoFunction(s, id))).toThrow();
    expect(Singleton.isSingleton(fn)).toBeFalsy();
    Singleton.mark(fn);
    expect(Singleton.isSingleton(fn)).toBeTruthy();
    let fn2 = Singleton.create(stack, 'Function', (s, id) => new EchoFunction(s, id)) as EchoFunction;
    expect(fn2).toBe(fn);
  });
});
