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
export const things = ['thing1', 'thing2'];

// create callback here
export const callbackThings = (id: number, name: string) =>
{
    var eachThing = {id: (id+1), name: name};
    return eachThing;
}


// create map here

export const mapThings = (begMap: Array<any>) =>
{
    var finalMap = new Array<any>();
    finalMap = begMap.map(x => callbackThings(begMap.indexOf(x), x));
    return finalMap;
}

export const mapped = mapThings(things);

console.log(mapped);


/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */

// create function here

export const curryFunction = (key: string) => (fil: Array<any>) =>
{
    var newFil = new Array<any>();
    var num: number = parseInt(key);
    newFil = fil.filter((x, y) =>
    {
        return(x.id === num);
    });
    return newFil;
}

console.log(curryFunction("1")(mapThings(things)));