/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import { mountSearchParams } from '../../../../src/utils';

test('method `mountSearchParams` exists', (t) => {
  t.truthy(mountSearchParams);
});

test('method `mountSearchParams` is a function', (t) => {
  t.is(typeof mountSearchParams, 'function');
});

test('return `a=a&b=b&c=c` when `mountSearchParams({a: "a", b: "b", c: "c"})`', (t) => {
  const result = mountSearchParams({ a: 'a', b: 'b', c: 'c' });
  t.is(result, 'a=a&b=b&c=c');
});
