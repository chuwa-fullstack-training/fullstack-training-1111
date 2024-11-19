/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(...args1) {
  if (args1.length === 2) {
    return args1[0] + args1[1];
  }

  return function (arg2) {
    return args1[0] + arg2;
  };
}
