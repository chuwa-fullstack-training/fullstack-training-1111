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
// Output: a c e d b
// All synchronous code executed first, so a c
// Microtask in Promise are handled next and runs synchronously, so e next
// resolve('d') resolves the promise and mark promise as fulfilled
// Tasks fron the task queue are executed last, so b.

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
// Output: 1 start success
// console.log(1) executes synchronously
// the .then callback is deferred to the microtask queue and will run
// after the current synchronous code finishes