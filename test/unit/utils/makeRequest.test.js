/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import test from 'ava';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
import fetch from 'node-fetch';

import { makeRequest } from '../../../src/utils';

sinonStubPromise(sinon);

global.fetch = fetch;

test('method `makeRequest` exists', (t) => {
  t.truthy(makeRequest);
});

test('method `makeRequest` is a function', (t) => {
  t.is(typeof makeRequest, 'function');
});

test('method `makeRequest` should call fetch method', (t) => {
  const fetchStub = sinon.stub(global, 'fetch').returnsPromise();
  const req = makeRequest('https://google.com', 'GET', {});

  t.truthy(fetchStub.called);

  fetchStub.restore();
});
