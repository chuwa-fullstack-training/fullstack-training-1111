// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/*
 * will print:
 * 5
 * 5
 * 5
 * 5
 * 5
 *
 * Through the for loop, `setTimeout()` schedule 5 callbacks `console.log()` to callback queue after their clock finish
 * after finish js code, variable `i` is already increased to 5
 * since i is global variable here, when the event loop iterate the queue, it will print "5" accordingly
 */

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/*
 * will print:
 * 0
 * 1
 * 2
 * 3
 * 4
 *
 * same process as the first senario but variable 'i' here declared with 'let' so it is block-scope
 * each time the i value during the specific iteration will be bind in the call back function
 */

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/*
 * will print:
 * 0
 * 1
 * 2
 * 3
 * 4
 *
 * the setTimeout() is wrapped within an IIFE that should be executed during each iteration of the for loop,
 * the specific `i` is copied into the function since the primitive type argument is pass-by-value by default
 */

// 4
let fn = () => {
  console.log('I am fn');
};
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
};
/**
 * will print:
 * I am fn
 *
 * When setTimeout() is called, it captures the reference to the current value of fn at that moment.
 * Even though fn is later reassigned to a new function, this does not affect the function reference that setTimeout captured earlier.
 * As a result, when the timer expires, the original function (I am fn) is executed.
 */

// 5
let obj = {
  name: 'obj',
};
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

/**
 * will print:
 * { name: 'another obj'}
 *
 * When setTimeout() is called, it captures the reference of `obj` object.
 * but the callback will be executed after the js code finished.
 * so before obj print out, the obj's name is reassigned to 'another obj'
 * the reassignment is modified on same memory address, which means the reference is same as callback binded but the value within it is changed
 */
