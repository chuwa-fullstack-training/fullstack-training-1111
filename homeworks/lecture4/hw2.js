// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const double = arr => arr.map(curVal => curVal * 2)

console.log(double([1,2,3,4]))

// 2. Given an array of numbers, return an array of numbers that are even.
const even = arr => arr.filter(curVal => curVal % 2 === 0)

console.log(even([1,2,3,4,6,8, 10]))

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverseStr = str => {
    chars = str.split('')
    return chars.map((curVal, i, arr) => arr[arr.length - 1 - i]).join("")
}

console.log(reverseStr("hello world"))

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const flatten = arr => arr.reduce((accum, curVal) => {
    if(Array.isArray(curVal)){
        accum.push(...flatten(curVal))
    } else {
        accum.push(curVal)
    }
    
    return accum
}, [])


console.log(flatten([[0, 1], [2, 3], [4, [5, 6]]]))