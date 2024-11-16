// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// 7
// var a is functionally scoped. Value of a is changed from 10 to 7 in the if statement. Logs 7

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// 5
// Same as above, var a is functionally scoped, so even though it is declared inside the if block, it is still
// accessible throughout the whole function

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// 3
// Since a is not declared with var, let, or const, it is created as a global variable. So when f() is executed, 
// variable a equals 3 is created globally, so the log will output 3

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();
// 6
// var a here is declared globally, so both functions are accessing the same variable here.

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// 7
// The var a inside f() shadows the var a outside of the function, so when f() is called, the console log 
// refers the local var a, which is 7

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// 1
// function a() will be hoisted to the top of the function b's scope, which means that the a = 10 refers to the function
// a, not the variable a declared outside of the function. So var a remains unchanged, therefore the output is 1