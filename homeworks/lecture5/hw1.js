// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5 5 5 5 5 since the var i is function-scoped and i will be the same and after call back from setTimeout the i will be 5

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 0 1 2 3 4 since the let i will create for every iteration and it will be different 

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0 1 2 3 4 since this is IIFE and it means it will caputure the value that pass in that time


// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// i am another fn, since the setTimeout will callback to the most recent definition

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

// {name : 'another obj'} since the setTimeout will callback to the most recent definition