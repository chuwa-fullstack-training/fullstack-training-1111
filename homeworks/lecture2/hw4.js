// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output? 7
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a); 
}

// 2. When executed, what value will be output? 
// output is 5, even though a is declared inside the if block, it is available throughout the entire function because var is function-scoped and does not respect block-level scoping. 
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output?
// output is 3. a is not explicitly declared with var, let or const, so it is implicitly created as a global variable. 
// When the function gets executed, the global variable a is created and assigned to a value.
function f() {
  a = 3;
}
f();
console.log(a); 

// 4. output should be 6 because a is a global variable
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}

first();
second();

// 5. output is 7. 
// a declared within the function is function scoped, so console log from within the function outputs this local a 
// note that if we have a console.log outside of function f, then it will output 5 which is the global variable a.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
f()

// 6. output is 1. In function b, function a(){} declaration is hoisted to the top of the function, then when you assign 10 to a,
//  this affects the local a, not the global a.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
