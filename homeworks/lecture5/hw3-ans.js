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

//a c e d b
// a c e just log, and after that then micro and macro, job first than the task. so the d and b

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
//  console.log(2);  // test 

});

console.log('start');


//  1 start  success 
// log first for 1 and then the start then the task micro for success