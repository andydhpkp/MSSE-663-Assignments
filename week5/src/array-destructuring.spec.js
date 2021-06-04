"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
require("mocha");
var array_destructuring_1 = require("./array-destructuring");
describe('Array destructuring tests', function () {
    it('#1 should have a variable for every element in the given array', function () {
        chai_1.expect(array_destructuring_1.a).to.eq('apple');
        chai_1.expect(array_destructuring_1.b).to.eq('banana');
    });
    it('#2 should have a variable for the first 2 elements then spread the rest', function () {
        chai_1.expect(array_destructuring_1.a).to.eq('apple');
        chai_1.expect(array_destructuring_1.b).to.eq('banana');
        chai_1.expect(array_destructuring_1.others).to.eq(['chocolate', 'pears', 'oats', 'pizza']);
    });
    it('#3 should construct a statement from the given objarrayect', function () {
        chai_1.expect(array_destructuring_1.greeting).to.eq('hello, taylor!');
    });
});
