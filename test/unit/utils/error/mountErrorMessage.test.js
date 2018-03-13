/* eslint-disble no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import { mountErrorMessage } from '../../../../src/utils';

test('method `checkIfKeysExists` exists', (t) => {
  t.truthy(mountErrorMessage);
});

test('method `mountErrorMessage` is a function', (t) => {
  t.is(typeof mountErrorMessage, 'function');
});

test('return `["a is required", "b is required"]` when `mountErrorMessage(["a", "b"])`', (t) => {
  const result = mountErrorMessage(['a', 'b']);
  t.deepEqual(result, ['a is required', 'b is required']);
});
