// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
//7 , a>5 is true, so a is reassigned to 7

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
//5, var a =5 will be executed because if(true) is always true

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
//undefined, a=3 is a function scope variable

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
//6, the global variable a is reassigned to 6 in when first() is called

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
//7, a=7 is a function scope variable

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
//1, function a() {} is hoisted to the top of the function b(), so a = 10 assigns 10
// to the local a, but not the global a
