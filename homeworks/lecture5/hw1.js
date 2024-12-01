// what is the output of the following code? and explain why?

// 1
// output: 5, 5, 5, 5, 5
// explanation: var declares a variable with function/global scope, so it is shared across all iterations of the loop.
// setTimeout function schedules a () => console.log(i) five times, but all of them gets executed after the for loop completes with i = 5.

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2
// output: 0, 1, 2, 3, 4
// explanation: let declares a variable with block scope, so a new i is created in each iteration of the loop. So each callback will capture its own i.

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
// output: 0, 1, 2, 3, 4
// explanation: in each iteration, current value of i is passed as argument to the IIFE function, and the IIFE function creates a new scope for every callback.

for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
// output: 'I am fn'
// Explanation: when fn is passed as argument to setTimeout, it captures the reference of fn at the time of scheduling. Therefore reassignment of fn is not reflected in the console log.
// if instead we pass () => fn() as the first argument to setTimeout, reassignment of fn will be reflected. 

let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5
// output: { name: 'another obj' }
// explanation: similar to above, by the time the timer finishes, object property is updated.

let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';