// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubledArr = (arr) => arr.map((x) => x * 2);

// 2. Given an array of numbers, return an array of numbers that are even.
const evenEle = (arr) => arr.filter((x) => x % 2 === 0);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverseArr = (str) => [...str].reduce((acc, val) => val + acc, '');

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flatten = (arr) =>
  arr.reduce(
    (acc, val) => [...acc, ...(Array.isArray(val) ? flatten(val) : [val])],
    []
  );
