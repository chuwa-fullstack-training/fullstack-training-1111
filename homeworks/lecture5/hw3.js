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
// a c e d b  
// a and c and e will immidiately print out, when in microtask queue the d will be print out since it is resolve and in the end is b


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

// 1 start success 
// when fn got called, the 1 will print out, and it will print start since it is synchronous after promise executor finishes and after synchronous code finishes, then .then() callback will executed 