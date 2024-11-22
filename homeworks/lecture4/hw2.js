// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.

arr = [1, 2, 3, 4, 5]
let doubleNumbers = arr.map((num) => num * 2)
console.log(doubleNumbers)

// 2. Given an array of numbers, return an array of numbers that are even.

let evenNumbers = arr.filter((num) => num % 2 === 0)
console.log(evenNumbers)

// 3. Reverse the string: "Hello World" -> "dlroW olleH"

let str = "Hello World"
let reverseString = str.split('').reduce((accumulator, currentValue) => currentValue + accumulator, '')
console.log(reverseString)

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
let flattenArray = (arr2) => arr2.reduce((accumulator, currentValue) => 
    Array.isArray(currentValue) ? accumulator.concat(flattenArray(currentValue)) : accumulator.concat(currentValue), []);
console.log(flattenArray(arr2))
