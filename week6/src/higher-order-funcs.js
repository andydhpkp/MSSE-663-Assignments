"use strict";
exports.__esModule = true;
exports.curryFunction = exports.mapped = exports.mapThings = exports.callbackThings = exports.things = void 0;
/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
exports.things = ['thing1', 'thing2'];
// create callback here
var callbackThings = function (id, name) {
    var eachThing = { id: (id + 1), name: name };
    return eachThing;
};
exports.callbackThings = callbackThings;
// create map here
var mapThings = function (begMap) {
    var finalMap = new Array();
    finalMap = begMap.map(function (x) { return exports.callbackThings(begMap.indexOf(x), x); });
    return finalMap;
};
exports.mapThings = mapThings;
exports.mapped = exports.mapThings(exports.things);
console.log(exports.mapped);
/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */
// create function here
var curryFunction = function (key) { return function (fil) {
    var newFil = new Array();
    var num = parseInt(key);
    newFil = fil.filter(function (x, y) {
        return (x.id === num);
    });
    return newFil;
}; };
exports.curryFunction = curryFunction;
console.log(exports.curryFunction("1")(exports.mapThings(exports.things)));
