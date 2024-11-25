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

a 
c
e
d
b
/*
Synchronous code runs first.
Microtasks (e.g., .then) have higher priority than macrotasks (e.g., setTimeout).
Once a promise is resolved or rejected, subsequent calls to resolve or reject are ignored.
*/

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

/*1
start
success 
 when fn() is called:
	•	The Promise constructor runs synchronously.
	•	Inside the promise: console.log(1) executes immediately.
	•	resolve('success') is called, marking the promise as resolved. The .then callback is added to the microtask queue.  
*/