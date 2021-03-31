/*
In this script you'll discover the steps used to recreate the `map` iterator.
Each step has a corresponding console.log()
*/

/**
 * Step 1 : I want to do a specific action
 * @param number value
 * @returns the double of the value
 */

function double(n) {
  return n * 2;
}

const value = 1;
console.log('double', value, double(value));

/**
 * Step 2 : I want to repeat a specific action
 * @param array values
 * @returns a new array with all the value multiplied by two
 */

function doubleAll(numbers) {
  const result = [];
  for (let number of numbers) {
    result.push(double(number));
  }
  return result;
}

const values = [1, 10, 15];
console.log('doubleAll', values, doubleAll(values));

/**
 * Step 3 : I want to repeat any action
 * @param array values
 * @param function action
 * @returns a new array where the action is called on each value
 */

function repeatAction(array, callback) {
  const result = [];
  for (let value of array) {
    result.push(callback(value));
  }
  return result;
}

console.log('repeatAction', values, repeatAction(values, double));
const test = [2, 3, 8];
console.log(
  'tripleAll',
  test,
  repeatAction(test, function (number) {
    return number * 3;
  })
);

/**
 * Step 4 : I want to add my method on the Array.prototype
 * @param function action
 * @returns a new array where this action is called on each value
 */
Array.prototype.myMap = function (callback) {
  const result = [];
  for (i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

console.log(
  'myMap',
  values,
  values.myMap((value) => value * 2)
);

// End of tests
