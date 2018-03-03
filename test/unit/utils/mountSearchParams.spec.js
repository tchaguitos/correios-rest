import { use, expect } from 'chai';
import { describe, it } from 'mocha';

import dirtyChai from 'dirty-chai';

import mountSearchParams from '../../../src/utils/mountSearchParams';

use(dirtyChai);

describe.only('Replace brackets', () => {
  describe('smoke tests', () => {
    it('should be exist the mountSearchParams method', () => {
      expect(mountSearchParams).to.exist();
      expect(mountSearchParams).to.be.a('function');
    });
  });

  it('should be return `a=a&b=b&c=c` when `mountSearchParams({a: "a", b: "b", c: "c"})`', () => {
    expect(mountSearchParams({ a: 'a', b: 'b', c: 'c' })).to.be.equal('a=a&b=b&c=c');
  });
});
