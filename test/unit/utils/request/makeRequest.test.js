/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';

import { makeRequest } from '../../../../src/utils';

sinonStubPromise(sinon);

test('method `makeRequest` exists', (t) => {
  t.truthy(makeRequest);
});

test('method `makeRequest` is a function', (t) => {
  t.is(typeof makeRequest, 'function');
});
