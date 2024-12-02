/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */

function format(num) {
  return num.toLocaleString();
}

console.log(format(1234512))

// Below is my attempt to implement the format function

// function format(num) {
//   // your code here
//   if (num % 1 === 0) {
//     let s = num.toString();
//     console.log(s)
//     let len = s.length;
//     let ans = '';
//     let count = 0;
//     for (let i = len - 1; i >= 0; i--) {
//       count++;
//       ans = s[i] + ans;
//       if (count === 3) {
//         ans = ',' + ans
//         count = 0
//       }
//     }
//     console.log(ans)
//   }else {
//     let s = num.toString();
//     let newstring = s.slice(0, s.indexOf('.'));
//     let ans = '';
//     ans = s.slice(s.indexOf('.')) + ans;
//     let len = newstring.length;
//     let count = 0;
//     for (let i = len - 1; i >= 0; i--) {
//       count++;
//       ans = newstring[i] + ans;
//       if (count === 3) {
//         ans = ',' + ans
//         count = 0
//       }
//     }
//     console.log(ans)
//   }
// }
