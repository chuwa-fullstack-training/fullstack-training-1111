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
// output: a, c, e, d, b
// main callstack > promise (microtask) > .then > setTimeout (task)

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
// output: 1, start, success
// console.log(1) is immediately executed when new Promise object (sync), call resovle('success') to mark promise as resolved
// main callstack print 'start'
// fn()'s promise is resolved, schedule .then() callback in next microtask queue
// after all sync events are executed, microtask queue calls .then() callback and print 'success'
