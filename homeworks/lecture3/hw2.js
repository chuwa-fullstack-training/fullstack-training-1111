/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(num1, num2) {
  if (num2 === undefined) {
    return (another) => num1 + another;
  } else {
    return num1 + num2;
  }
}
