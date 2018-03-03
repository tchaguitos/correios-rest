import { use, expect } from 'chai';
import { describe, it } from 'mocha';

import dirtyChai from 'dirty-chai';

import replaceBrackets from '../../../src/utils/replaceBrackets';

use(dirtyChai);

describe('Replace brackets', () => {
  describe('smoke tests', () => {
    it('should be exist the replaceBrackets method', () => {
      expect(replaceBrackets).to.exist();
      expect(replaceBrackets).to.be.a('function');
    });
  });

  it('should return `abcde` when `replaceBrackets("a[b]c[]de")`', () => {
    expect(replaceBrackets('a[b]c[]de')).to.be.equal('abcde');
  });
});
