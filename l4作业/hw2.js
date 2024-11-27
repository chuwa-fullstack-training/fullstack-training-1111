// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const nums=[1,2,3];
const result=nums.map(function(num){
    return num*2;
});
// 2. Given an array of numbers, return an array of numbers that are even.
const nums=[1,2,3];
const result=nums.filter(num =>num%2!=0);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseString(str) {
    return str.split('').reduce(function (reversed, char) {
        return char + reversed;
    }, '');
}
// 测试
console.log(reverseString("hello")); // 输出: "olleh"

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
function faltenArray(array){
	return array.reduce((result,cur)=>
	{return result.concat(Array.isArray(cur)?faltenArray(cur):cur);
      },[]
      )
    }
