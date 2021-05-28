"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
require("mocha");
var spread_1 = require("./spread");
describe('Spread Assignments Tests', function () {
    it('Should be equal to originalNumbers', function () {
        chai_1.expect(spread_1.newNumbers).to.eq(spread_1.originalNumbers);
    });
    it('Should be equal to originalContestants', function () {
        chai_1.expect(spread_1.allContestants).to.eq(spread_1.originalContestants);
    });
    it('Should be equal to originalpersons', function () {
        chai_1.expect(spread_1.newPersons).to.eq(spread_1.originalPersons);
    });
    it('Should be equal to originalUpdates', function () {
        chai_1.expect(spread_1.newUpdates).to.eq(spread_1.originalUpdates);
    });
});
