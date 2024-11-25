// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
5 5 5 5 5 
/*By the time the setTimeout callback executes (after 1 second), 
the for loop has already completed, and the value of i has been incremented to 5.
the setTimeout callback is added to the event queue and will only execute after the entire loop has completed*/

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
0 1 2 3 4 

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
0 1 2 3 4 
/*Inside the IIFE, the parameter i creates a new variable that is scoped to the function. 
The setTimeout callback closes over this new i, which remains constant for that specific iteration.*/

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
I am another fn
/*fn is passed by reference to setTimeout. 
This means that setTimeout holds a reference to the variable fn, not the value of the function at the time of the call.*/

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
another obj
/*	Objects in JavaScript are passed by reference.*/