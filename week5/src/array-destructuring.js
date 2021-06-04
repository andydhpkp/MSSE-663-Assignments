"use strict";
exports.__esModule = true;
exports.statement = exports.y = exports.x = exports.greeting = exports.others = exports.food = exports.a = exports.b = exports.fruits = void 0;
// #1 Variable swapping
exports.fruits = ['apple', 'banana'];
// Currently, I would get the following:
console.log(exports.fruits[0]); // 'apple'
console.log(exports.fruits[1]); // 'banana'
// deconstruct here
exports.b = exports.fruits[0], exports.a = exports.fruits[1];
// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(exports.a); // 'banana';
console.log(exports.b); // 'apple';
// #2 Variables and Rest
exports.food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
// deconstruct here
exports.a = exports.food[0];
exports.b = exports.food[1];
exports.others = exports.food.slice(2);
// expected result:
console.log(exports.a); // 'apple'
console.log(exports.b); // 'banana'
console.log(exports.others); // ['chocolate, 'pears', 'oats', 'pizza']
// #3 Array: Contruct a statement
exports.greeting = ['hello', 'taylor'];
exports.x = exports.greeting[0], exports.y = exports.greeting[1];
// construct statement here
exports.statement = exports.x + ", " + exports.y + "!";
console.log(exports.statement);
// expected result: 'hello, taylor!'
