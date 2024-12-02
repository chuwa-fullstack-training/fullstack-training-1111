// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
} 
// var: function scope, meaning that the variable i is shared across all iterations of the loop.
// output: 5 5 5 5 5

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
} 
//let bracket scope, new instance of i is created for each iteration of the loop.
// output: 1,2,3,4,5

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// output: 0,1,2,3,4

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// output: I am fn

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//output: { name: 'another obj' }, pass by referece