// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubleArray(array){
    const doubled = array.map(num=>num*2);
    return doubled;
}
const array = [1,2,3];
console.log(doubleArray(array));

// 2. Given an array of numbers, return an array of numbers that are even.
function evenArray(array){
    const even = array.filter(num=>num%2==0);
    return even;
}
console.log(evenArray(array));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseString(str){
    const array = str.split('');
    array.reduce((reversed,char)=>char+reversed,'');
    return array;
};
const str = "Hello World";
console.log(reverseString(str));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flatten(arr){
    return arr.reduce(function(acc,cur){
        return acc.concat(Array.isArray(cur)?flatten(cur):cur)
    },[]);
}
const input = [1, [2, 3], [4, [5, 6]]];
const result = flatten(input);