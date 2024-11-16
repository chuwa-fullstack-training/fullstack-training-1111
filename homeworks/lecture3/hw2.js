/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(...args) {
  if (args.length > 1) {
    return args.reduce((acc, num) => acc + num, 0);
  } else {
    return function(nextNum) {
      return args[0] + nextNum
    }
  }
}

// console.log(sum(2)(3) === 5)
// console.log(sum(2, 3) === 5)