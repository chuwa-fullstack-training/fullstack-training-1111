// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);// 5
}
if (x === 3) {
  console.log(y); //5
}
//



// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); // 2
}
console.log(x); //2 var make =2

