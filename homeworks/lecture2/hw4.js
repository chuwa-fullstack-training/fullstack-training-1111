// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);  // 7
}

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);  // error
    // corect: 5, coz in js var declared is function scope
}

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);  // error if 'use strict'
                // 3 if not. Coz in JS when not declared, it would declare a global var

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second(); // 6

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
} // 7

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);  // 10
// corect: 1
// function a() declaration is hoisted, creating an object 'a'
// what exactly happened?
/**
 * var a = function a() {}
 * a = 10;  // local var
 * return;
 */

// if change it to function c() {}, output is 10
