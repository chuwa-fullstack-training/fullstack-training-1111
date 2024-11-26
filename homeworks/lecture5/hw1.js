// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output: 5, 5, 5, 5, 5
// var is function block, setTimeout will asyncly put 5 funcs in callBack queue
// These 5 async funcs wont be exucuted until main callstack is finished, by then var i is already set to 5

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output: 0, 1, 2, 3, 4
// let is block scoped, thus each callBack function has its own value i

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// output: 0, 1, 2, 3, 4
// using IIFE to create a new scope for each iteration and pass the current value to that function

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// output: I am fn
// setTimeout catches the reference pointing to 'I am fn' function at the time it was invoked. Even later in main callstack fun pointer is reassigned, the address stores in callBack queue is still 'I am fn'
//
// // 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// output: another obj
// object is passed by reference so later when in main callstack the value is changed, callBack queue will use the reference to find the value (changed)

let fn2 = () => {
  console.log('I am fn');
}
setTimeout(() => fn2(), 1000);
fn2 = () => {
  console.log('I am another fn');
}

// output: I am another fn
// The key difference between this and case 4 is that here we dynamically call fn2

