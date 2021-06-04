"use strict";
var _a;
exports.__esModule = true;
exports.statement = exports.name = exports.greeting = exports.newObject = exports.id = exports.address = exports.user = exports.nestedObject = exports.job = exports.person = exports.object = void 0;
// #1 Object Destructuring
exports.object = { name: 'elvis', title: 'hip swinger' };
// deconstruct here
exports.person = exports.object.name;
exports.job = exports.object.title;
// Assign variables using ES6 so that we get (note, you cannot just make a completely new object):
console.log(exports.person); // 'elvis'
console.log(exports.job); // 'hip swinger'
// #2 Object Matching: Nested destructuring
exports.nestedObject = {
    user: 'elvis',
    address: {
        city: 'denver',
        state: 'colorado'
    },
    id: 1
};
// deconstruct here
exports.user = exports.nestedObject.user, exports.address = exports.nestedObject.address, exports.id = exports.nestedObject.id;
// expected results:
console.log(exports.user); // 'elvis'
console.log(exports.address); // { city: 'denver', state: 'colorado' }
console.log(exports.id); // 1
// #3 Create a new object given the destructed values above
// reconstruct here
exports.newObject = { user: exports.user, address: exports.address, id: exports.id };
console.log(exports.newObject);
// #4 Object with key value pairs: construct a statement
exports.greeting = (_a = { greeting: 'hello', name: 'taylor' }, _a.greeting), exports.name = _a.name;
// construct statement here
exports.statement = exports.greeting + ", " + exports.name + "!";
console.log(exports.statement);
// expected result: 'hello, taylor!'
