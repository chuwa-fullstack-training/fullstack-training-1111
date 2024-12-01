// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const num = [1, 2, 3, 4, 5];

const double = num.map(number => number * 2);

console.log(double); // Output: [2, 4, 6, 8, 10]




// 2. Given an array of numbers, return an array of numbers that are even.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);  



// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const  str1 = 'Hello World';

const Reverse = str1 
.split ('')
.reduce((reversed, character) => character + reversed, '');

console.log( Reverse);
console.log(str1);




/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const arr = [[0, 1], [2, 3], [4, [5, 6]]];

const flatten = array => {
  return array.reduce((accumulator, currentValue) => {
    return Array.isArray(currentValue)
      ? accumulator.concat(flatten(currentValue))
      : accumulator.concat(currentValue);
  }, []);
};

const flattenedArr = flatten(arr);

console.log(flattenedArr);
