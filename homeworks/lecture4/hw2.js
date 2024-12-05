// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.

// 2. Given an array of numbers, return an array of numbers that are even.

// 3. Reverse the string: "Hello World" -> "dlroW olleH"

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

// 1
array.map((value) => 2 * value);

// 2
array.map((value) => value % 2 === 0);

// 3
function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseString(str) {
  return str.split("").reduce((reversed, s) => s + reversed, "");
}

// 4
function flatten(array) {
  return array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      return acc.concat(flatten(value));
    }
    return acc.concat(value);
  }, []);
}
