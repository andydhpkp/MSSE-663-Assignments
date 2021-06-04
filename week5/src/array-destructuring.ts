// #1 Variable swapping
export const fruits = ['apple', 'banana'];

// Currently, I would get the following:
console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'

// deconstruct here
export var [b, a] = fruits;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a); // 'banana';
console.log(b); // 'apple';

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here
a = food[0];
b = food[1];
export var [,, ...others] = food;

// expected result:
console.log(a); // 'apple'
console.log(b); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
export const greeting = ['hello', 'taylor'];
export const [x, y] = greeting;

// construct statement here
export const statement = `${x}, ${y}!`;
console.log(statement);

// expected result: 'hello, taylor!'
