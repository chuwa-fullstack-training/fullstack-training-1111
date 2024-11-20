/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(x, y) {
    // implement here
    if(y) return x + y;
    else return function(z) {
        return x + z;
    }
}

console.log(sum(2)(3) === 5);
console.log(sum(2, 3) === 5);
