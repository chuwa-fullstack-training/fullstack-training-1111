// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);  // undefined
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);  // 5
}
if (x === 3) {
  console.log(y);  // 5
}
// Explanation:
// var x is first equals to undefined because it is not initialized with a value. The first if statement will be executed.
// Inside the first if statement, var y is hoisted to the top, but undeclared, so the first log statement will output undefined.
// Then y is initialized with 5. Inside if (y === 5), we reassign var x with the value of 3, because var x is globally scoped, and 
// we only have blocks here, so no new variable is created here. Then we log the value of y, which is 5.
// Since x is now equals to 3, we go inside the if (x === 3) statement, and prints y value, which is 5.

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);  // 2
}
console.log(x);  // 2
// Explanation:
// Same explanation as above. var x gets re-declared and re-assigned the value of 3 inside the if statement, because 
// var variables are globally scoped, so no new variable is created here. 

