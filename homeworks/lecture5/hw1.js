// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output: 5 5 5 5 5. The loop scheduled 5 setTimeoout callbacks in the event queue. They share
// the same i. Because with var, the callbacks capture the reference to i, which is 5 after 
// main function

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output: 0 1 2 3 4. With let, a new i is created for each iteration, and the setTimeout 
// callbacks capture the value of i at the time of their creation

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// output: 0 1 2 3 4. The IIFE creates a new scope for each iteration and passes the current
// value of i to the function

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// Output: 'I am fn'. When fn is scheduled in the event loop, the output is 'I am fn'.
// Later reassignment of fn does not affect the captured reference.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//Output: { name: 'another obj' }. Objects are passed by reference, so change to 
// the object are reflected in all references.