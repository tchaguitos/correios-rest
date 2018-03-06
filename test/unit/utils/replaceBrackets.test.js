/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import { replaceBrackets } from '../../../src/utils';

test('method `replaceBrackets` exists', (t) => {
  t.truthy(replaceBrackets);
});

test('method `replaceBrackets` is a function', (t) => {
  t.is(typeof replaceBrackets, 'function');
});

test('return `abcde` when `replaceBrackets("a[b]c[]de")`', (t) => {
  const result = replaceBrackets('a[b]c[]de');
  t.is(result, 'abcde');
});
