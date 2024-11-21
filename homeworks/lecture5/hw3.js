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
// e
// d
// b
// console logs are synchronous operations, so they get executed first; then micro task promise gets resolved, then
// macro task settimeout gets executed.

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
// When fn is called, a new Promise is created and executed (this operation is sync), so 1 is logged, and resolve() ia being added to the 
// micro task queue. Then console.log('start') executes because synchronous code continues running. Lastly, 
// resolved('success') gets executed and logged
