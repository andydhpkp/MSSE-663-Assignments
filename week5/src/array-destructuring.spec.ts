import { expect } from 'chai';
import 'mocha';
import { a, b, others, greeting, statement } from './array-destructuring'

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
    expect(a).to.eq('apple');
    expect(b).to.eq('banana');
  });

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect(a).to.eq('apple');
    expect(b).to.eq('banana');
    expect(others).to.eql(['chocolate', 'pears', 'oats', 'pizza']);
  });

  it('#3 should construct a statement from the given objarrayect', () => {
    expect(statement).to.eq('hello, taylor!');
  });
});
