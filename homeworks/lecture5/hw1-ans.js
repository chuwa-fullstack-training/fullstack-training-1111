// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// var is function scope and timeout f from 0-5 and timeout
//will be 5x5


// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// let is blcock scope so will be 0-4



// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// same 0-4 but use  Immediately Invoked Function Expression


// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

//I am fn it already be used 


// 5
let obj = {
  name: 'obj',
}

setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

// another obj
