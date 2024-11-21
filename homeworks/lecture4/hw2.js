// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const nums = [1, 2, 3, 4, 5];
console.log(nums.map((n) => n * 2));

// 2. Given an array of numbers, return an array of numbers that are even.
console.log(nums.filter((n) => n % 2 === 0));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const s = "Hello World";
const sArr = Array.from(s);
console.log(sArr.reduce((base, c) => c + base), "");

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
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];

const flattenArr = (arr) => {
    return arr.reduce((base, item) => {
        if(Array.isArray(item)) {
            item = flattenArr(item);
        }
        return base.concat(item);
    }, []);
}

console.log(flattenArr(arr));
console.log(flattenArr(arr2));
