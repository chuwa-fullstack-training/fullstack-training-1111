// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 5 5 5 5 5 
// Since var keyword is not block scoped, when using it with closures, each loop is referencing to 
// the same variable i. When the async operation 'settimeout' is finished, i has already been incremented 
// to 5.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0 1 2 3 4 
// Since let keyword is block scoped, when closures are created during each iteration, a new scope of 
// variable i with its current value is created. So when the callback is executed after the async 
// operations, it logs the expected value of i

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// Output: 0 1 2 3 4
// This is another solution to the first function by using IIFE instead of the let keyword. IIFE creates a new
// scope for each iteration, so each callback has a different i value

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// Output: 
// I am fn
// When fn is passed to setTimeout, its reference gets passed. Reassigning the fn creates a new function and 
// makes fn points to the new function, but doesn't affect the original function that setTimeout has

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// Output: {name: 'another obj'}
// Objects are also passed by reference, but in contrast to the last example, we are modifying the actual object
// instead of creating a new one. So when the callback is executed, the changed value is logged.