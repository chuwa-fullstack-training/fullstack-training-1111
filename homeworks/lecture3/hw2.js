/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    if (arguments.length === 2) {
        return arguments[0] + arguments[1]
    } else {
        const num = arguments[0];
        return function (a) {
            return a + num
        }
    }
}

// Tried to implement currying here but didn't work

// function curry(fun) {
//     return function(a) {
//         return function(b) {
//             return fun(a, b)
//         }
//     }
// }

// function add(a, b) {
//     return a + b
// }

// let sum = curry(add);

// console.log(sum(2)(3));
// console.log(sum(2, 3));
