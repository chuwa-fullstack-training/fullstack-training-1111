/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(a,b) {
    // implement here
    if (b !== undefined) {
        return a + b;
    } 
    else {
        return function(c) {
            return a + c;
        }
    }
}
console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)
// currying function