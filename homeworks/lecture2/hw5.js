// Hoisting

// 1.
var x;
if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}

var x; 
var y; 
x; 
if (x !== 3) {
  //true 
  console.log(y); //undefine
  y = 5; 
  if (y === 5) {
    // true
    x = 3; 
  }
  console.log(y); // 5
}
if (x === 3) {
  // true
  console.log(y); // 5
}

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

var x; 
x = 3; 

if (x === 3) {
  var x; // Redeclaration of x 
  x = 2; 
  console.log(x); // output:2
}

console.log(x); // output:2