// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));
// Output:
// a
// c
// b
// e
// d
// In the first three lines of code, 'a' and 'c' would be output first because these are in the callStack and setTimeout is in the event queue.
// In the promise part, 'd' is resolved in the function but it only gets printed out in '.then' method so 'e' would be printed before 'd'.
// Since 'f' is rejected it wouldn't be output at all.

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
// Output:
// 1
// start
// success
// In the first function fn it first outputs 1. After that it would run the console.log('start') because it's higher in the callStack.
// Then it would run the '.then' method. Since 'success' is resolved, here it would be printed out.
