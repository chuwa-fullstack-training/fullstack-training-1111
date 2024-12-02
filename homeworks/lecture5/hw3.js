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
// output: acedb
/**
 * 'a': logged immediately
 * "b": callback function is added to macrotasj queue and executed later after main execution
 * 'c': logged immediately
 * "d": schedules the .then() handler to run in the microtask queue.
 * 'e': executed immediately in Promise 
 * "f": ignored because resolve
 * Microtasks take priority over macrotasks (like setTimeout), so this will run "d" before the setTimeout callback "b".
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
// ouput: 1, start, success
/**
 * 1: is logged synchronously when the Promise is created and its executor function is run.
 * 'start':  is logged synchronously after fn() finishes and before the microtask queue is processed.
 * 'sucess':  .then() callback is scheduled to run in the microtask queue.
 */