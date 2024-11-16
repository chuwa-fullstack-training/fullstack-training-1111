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
// undefinrd, 5, 5
// var y = 5 is hoisted to the top of the function, y is declared but not assigned,
//s o the first console.log(y) will output undefined

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
//2,2
//The value of x is modified inside the if block, and this change is reflected outside as well.
