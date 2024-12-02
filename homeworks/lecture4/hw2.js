// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubleNumbers = (list) => {
    return list.map(num => num * 2)
}
// 2. Given an array of numbers, return an array of numbers that are even.
const evenNumbers = (list) => {
    return list.filter(num => num %2 === 0)
}
// 3. Reverse the string: "Hello World" -> "dlroW olleH"

const reverseString = (string) => {
    s = string.split('')
    return s.reduce((reversedStr, char) => char + reversedStr, '')
}
const a = 'Hellow World'
console.log(reverseString(a))
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flatternArray = (array) => {
    return array.reduce((flattenedArr, subArray) => flattenedArr.concat(subArray), [])
}
const arr = [[0, 1], [2, 3], [4, 5]];
console.log(flatternArray(arr))