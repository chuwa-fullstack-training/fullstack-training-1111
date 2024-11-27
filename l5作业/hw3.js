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
//a,c,e,d,b   first log a and c，then promise is microtask,it will print d then e,and setTimeout is macrotask,it will print b
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

//1,start,success.    console.log(1);is Synchronous Task run first,then print start,then run promise,print success
