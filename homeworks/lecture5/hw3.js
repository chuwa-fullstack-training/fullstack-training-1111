// what is the output in order? and explain why?

// 1
// output: a c e d b 
// first console log executes immediately; setTimeout registers the second console log to macrotask queue; then Promise gets resolved with a value and is registered to the microtask queue and e is logged to the console.
// since microtask queue is prioritized over macrotask queue, so result of promise will be logged to console. Lastly, console.log in macrotask queue is executed with value b. 

console.log('a'); 
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));



// 2
// output: 1 start success

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
