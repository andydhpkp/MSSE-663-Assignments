// #1 Convert this javascript function to a curried function
export function curryMe(string1, string2, string3): string {
  return string1 + ' ' + string2 + ' ' + string3;
}
console.log("this", "will", "work");

// source code here
export const curried = (s1: string) => (s2: string) => (s3: string) =>
{
  return [s1, s2, s3].join(" ");
};

console.log(curried("curried")("function")("worked"));

// #2 Hoist and convert nested functions to curried functions
export function doMath(a) {
  return function add(b) {
    return function subtract(c) {
      return a + b - c;
    };
  };
}

// source code here
export const addition = (a: number) => (b: number) => 
{
  return a + b;
};

export const subtraction = (a: number) => (c: number) =>
{
  return a - c;
};

export const math = (a: number) => (b: number) => (c: number) =>
{
  return subtraction(addition(a)(b))(c);
};

console.log(math(3)(4)(6));


// #3 Write a curried function that returns an array containing the ninjas who have a black belt
export const ninjasOne = [
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

export const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here
export const blackBelt = (n1: Array<any>) => (n2: Array<any>) => (belt: string) =>
{
  var results = new Array<string>();
  var allNinjas = [...n1, ...n2];

  allNinjas.forEach(n =>
    {
      if(n.belt === belt)
      {
        results.push(n.name);
      }
    });
    return results;
};

console.log(blackBelt(ninjasOne)(ninjasTwo)("black"));

/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

export const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

export const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

// source code here
export const status = (n: Array<any>) => (stat: {}) =>
{
  var finalArray = new Array<any>();

  n.forEach(newN =>
    {
      finalArray.push({...newN, "status": stat[newN.belt]});
    })
    return finalArray;
};

var stat1 = status(ninjasOne)(statusTypes);
var stat2 = status(ninjasTwo)(gamerStatusTypes);
console.log("Status: " + JSON.stringify(stat1));
console.log("Gamer: " + JSON.stringify(stat2))
