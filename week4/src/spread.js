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
exports.newUpdates = exports.originalUpdates = exports.update = exports.data = exports.newPersons = exports.originalPersons = exports.kyle = exports.bob = exports.allContestants = exports.originalContestants = exports.runnerUps = exports.winners = exports.newNumbers = exports.originalNumbers = exports.numbers = void 0;
// #1 Array copying
exports.numbers = [1, 2, 3, 4, 5];
exports.originalNumbers = exports.numbers.map(function (number) { return number; });
console.log(exports.originalNumbers);
// refactor here
exports.newNumbers = __spreadArray([], exports.numbers);
console.log(exports.newNumbers);
// #2 Combining arrays
exports.winners = ['first'];
exports.runnerUps = ['second', 'third', 'fourth', 'fifth'];
exports.originalContestants = ['first', 'second', 'third', 'fourth', 'fifth'];
// refactor here
exports.allContestants = __spreadArray(__spreadArray([], exports.winners), exports.runnerUps);
console.log(exports.allContestants);
// #3 Combining objects
exports.bob = {
    man: 'Bob'
};
exports.kyle = {
    boy: 'Kyle'
};
exports.originalPersons = Object.assign(exports.bob, exports.kyle);
console.log(exports.originalPersons);
// refactor here
exports.newPersons = __assign(__assign({}, exports.bob), exports.kyle);
console.log(exports.newPersons);
// #4 Modifying values in arrays of objects
exports.data = [
    {
        id: 0,
        task: 'Do the thing'
    },
    {
        id: 1,
        task: 'Do the other thing'
    },
    {
        id: 2,
        task: 'Do the last thing'
    }
];
exports.update = {
    id: 1,
    task: 'Do the other thing... again'
};
exports.originalUpdates = exports.data.map(function (task) {
    if (task.id === exports.update.id) {
        return Object.assign(task, exports.update);
    }
    return task;
});
console.log(exports.originalUpdates);
// refactor here
exports.newUpdates = [{ id: 0, taks: 'Do the thing' }, __assign({}, exports.update), { id: 2, task: 'Do the last thing' }];
console.log(exports.newUpdates);
