import { expect } from 'chai';
import 'mocha';
import { person, job, user, address, id, object, nestedObject, newObject, statement } from './object-destructuring';

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    expect(person).to.eq('elvis');
    expect(job).to.eq('hip swinger');
  });

  it('#2 should have a variable for every property in the given nested object', () => {
    expect(user).to.eq('elvis');
    expect(address).to.eql({ city: 'denver', state: 'colorado' });
    expect(id).to.eq(1);
  });

  it('#3 should create a new object given the destructed variables from the nested object', () => {
    expect(newObject).to.eql({ user: 'elvis', address: {city: 'denver', state: 'colorado'}, id: 1});
  });

  it('#4 should construct a statement from the given object', () => {
    expect(statement).to.eq('hello, taylor!');
  });
});
