// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 5
// Because setTimeout would ouput the value of i after a second. By the time it outputs i would be incremented to 5 already.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0 1 2 3 4
// Because in each iteration i is declared as a new variable, after a second all the values of i would be output.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// Output: 0 1 2 3 4
// In each iteration the function is called so all possible values of i would be printed.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// Output: I am fn
// Even though function fn is modified in the callStack, original fn was put in the event queue with setTimeout. The output would be the output of the original function.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// Output: {name: 'another job'}
// Here obj is an object pointing to the data stored instead of changing just the value, so when running console.log it would show the updated obj.