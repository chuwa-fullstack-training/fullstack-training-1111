// ONLY use map, filter, reduce to solve the following problems:
const numbers = [1, 2, 3, 4, 5];
// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubled= numbers.map(num=>num*2);
// 2. Given an array of numbers, return an array of numbers that are even.
const evenNumbers = numbers.fliter(num=>num%2===0);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reversed = str.split('').reduce((c,char)=>char+c,'');
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flatten = arr => arr.reduce((acc,val) => acc.concat(val),[])
const newArr = flatten(arr)

const flattenDeep = arr => arr.reduce( (acc, val) =>{
    return acc.concat(Array.isArray(val)? flattenDeep(val): val)
},[]);