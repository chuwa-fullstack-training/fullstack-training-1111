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
// var y;
// var x;
// variable hoisting to the top -> now is global

// x !== 3 is true, then jump into first if-statement
// the value of y is firstly assigned in line 8
// => line 7: print undefined
// In line 10, x is reassigned as 3
// => line 12: print 5, (assigned in line 8)

// x === 3 is true, then jump into second if-statement
// => line 15: print 5

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
// 2
// 2
// var is for function-scoped defining variable
// x is not in function, so now x is global variable
