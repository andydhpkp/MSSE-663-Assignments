"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.status = exports.blackBelt = exports.math = exports.subtraction = exports.addition = exports.curried = void 0;
// #1 Convert this javascript function to a curried function
function curryMe(string1, string2, string3) {
    return string1 + ' ' + string2 + ' ' + string3;
}
console.log("this", "will", "work");
// source code here
var curried = function (s1) { return function (s2) { return function (s3) {
    return [s1, s2, s3].join(" ");
}; }; };
exports.curried = curried;
console.log(exports.curried("curried")("function")("worked"));
// #2 Hoist and convert nested functions to curried functions
function doMath(a) {
    return function add(b) {
        return function subtract(c) {
            return a + b - c;
        };
    };
}
// source code here
var addition = function (a) { return function (b) {
    return a + b;
}; };
exports.addition = addition;
var subtraction = function (a) { return function (c) {
    return a - c;
}; };
exports.subtraction = subtraction;
var math = function (a) { return function (b) { return function (c) {
    return exports.subtraction(exports.addition(a)(b))(c);
}; }; };
exports.math = math;
console.log(exports.math(3)(4)(6));
// #3 Write a curried function that returns an array containing the ninjas who have a black belt
var ninjasOne = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Leonardo', belt: 'black' },
    { name: 'Mr. Miyagi', belt: 'black' },
    { name: 'Rocky', belt: 'black' },
    { name: 'Colt', belt: 'green' },
    { name: 'Tum Tum', belt: 'white' },
    { name: 'Haru', belt: 'white' },
    { name: 'The Bride', belt: 'black' },
    { name: 'Cammy', belt: 'black' },
    { name: 'Wong Fei-hung', belt: 'green' }
];
var ninjasTwo = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Jim', belt: 'black' },
    { name: 'The Rat', belt: 'black' }
];
// source code here
var blackBelt = function (n1) { return function (n2) { return function (belt) {
    var results = new Array();
    var allNinjas = __spreadArray(__spreadArray([], n1), n2);
    allNinjas.forEach(function (n) {
        if (n.belt === belt) {
            results.push(n.name);
        }
    });
    return results;
}; }; };
exports.blackBelt = blackBelt;
console.log(exports.blackBelt(ninjasOne)(ninjasTwo)("black"));
/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */
var statusTypes = {
    white: 'grasshopper',
    green: 'warrior',
    black: 'sensei'
};
var gamerStatusTypes = {
    white: 'Noob',
    green: 'Choob',
    black: 'Legend'
};
// source code here
var status = function (n) { return function (stat) {
    var finalArray = new Array();
    n.forEach(function (newN) {
        finalArray.push(__assign(__assign({}, newN), { "status": stat[newN.belt] }));
    });
    return finalArray;
}; };
exports.status = status;
var stat1 = exports.status(ninjasOne)(statusTypes);
var stat2 = exports.status(ninjasTwo)(gamerStatusTypes);
console.log("Status: " + JSON.stringify(stat1));
console.log("Gamer: " + JSON.stringify(stat2));
