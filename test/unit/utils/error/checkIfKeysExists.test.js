/* eslint-disble no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import { checkIfKeysExists } from '../../../../src/utils';

test('method `checkIfKeysExists` exists', (t) => {
  t.truthy(checkIfKeysExists);
});

test('method `checkIfKeysExists` is a function', (t) => {
  t.is(typeof checkIfKeysExists, 'function');
});

test('return `false` when `checkIfKeysExists(obj, ["a", "b", "c"])`', (t) => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  const result = checkIfKeysExists(obj, ['a', 'b', 'c']);
  t.deepEqual(result, false);
});

test('return `["d"]` when `checkIfKeysExists(obj, ["d"])`', (t) => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  const result = checkIfKeysExists(obj, ['d']);
  t.deepEqual(result, ['d']);
});
