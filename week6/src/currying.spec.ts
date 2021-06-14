import { expect } from 'chai';
import 'mocha';
import { curried, doMath, curryMe, addition, subtraction, math, ninjasOne, ninjasTwo, status, blackBelt, statusTypes, gamerStatusTypes } from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    expect(curried("abc")("def")("ghi")).to.be.eql(curryMe("abc","def","ghi"));
  });

  it('#2 should output the same result as the original function', () => {
    expect(math(2)(3)(4)).to.be.eql(doMath(2)(3)(4))
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    expect(blackBelt(ninjasOne)(ninjasTwo)("black")).to.contain("Jim")
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    var stat1 = status(ninjasOne)(statusTypes);
    var stat2 = status(ninjasTwo)(gamerStatusTypes);
    stat1.forEach(n1 =>
      {
        expect(n1).to.have.property("status")
      })
      stat2.forEach(n2 =>
        {
          expect(n2).to.have.property("status")
        })
  });
});
