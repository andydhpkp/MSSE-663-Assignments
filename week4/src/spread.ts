// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log(originalNumbers);

// refactor here
export const newNumbers = [...numbers];
console.log(newNumbers);

// #2 Combining arrays
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];
export const originalContestants = ['first', 'second', 'third', 'fourth', 'fifth'];

// refactor here
export const allContestants = [...winners, ...runnerUps];
console.log(allContestants);

// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = Object.assign(bob, kyle);
console.log(originalPersons);

// refactor here
export const newPersons = {...bob, ...kyle};
console.log(newPersons);

// #4 Modifying values in arrays of objects
export const data = [
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

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};

export const originalUpdates = data.map(task => {
  if (task.id === update.id) {
    return Object.assign(task, update);
  }
  return task;
});

console.log(originalUpdates);

// refactor here
export const newUpdates = [{id: 0, taks: 'Do the thing'}, {...update}, {id: 2, task: 'Do the last thing'}];
console.log(newUpdates);

