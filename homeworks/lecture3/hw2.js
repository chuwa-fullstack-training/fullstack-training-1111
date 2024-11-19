/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(num, ...args) {
    // implement here
    if(args.length){
        return args.reduce((accum, curVal) => {
            return accum + curVal
        }, num)
    } else {
        return newNum => num + newNum
    }

}

console.log(sum(2,3))
console.log(sum(2)(3))