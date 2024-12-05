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

// 2. When executed, what value will be output?

function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// 5

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// 3
// under none-strict mode, a became global variable without var const or let

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

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// 7

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
// equals to, function a is hoisted to the top of the b function, so a = 10 refers to this local variable
var a = 1;
function b() {
  function a() {}
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
