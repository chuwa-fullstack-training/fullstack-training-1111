// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubledNumbers(numbers) {
    return numbers.map(function(value) {
        return value * 2;
    });
}

// 2. Given an array of numbers, return an array of numbers that are even.
function evenNumbers(numbers) {
    return numbers.filter(function(value) {
        return value % 2 === 0;
    });
}

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseString(str) {
    return str.reduce(function(accumulator, value) {
        return value + accumulator
    }, '');
}
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flattenArray(arr) {
    return arr.reduce(function(accumulator, value) {
        if (Array.isArray(value)) {
            return accumulator.concat(flattenArray(value));
        } else {
            accumulator.push(value);
            return accumulator;
        }
    }, []);
}
