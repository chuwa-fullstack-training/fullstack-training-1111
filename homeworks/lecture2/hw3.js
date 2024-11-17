// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
0.30000000000000004
//The values 0.1 and 0.2 cannot be represented exactly in binary, leading to small rounding errors.

console.log(0.1 + 0.2 == 0.3);
false
//0.30000000000000004!=0.3

console.log(1 +  "2" + "2");
"122"
/*
1 + "2" becomes "12".
"12" + "2" becomes "122".
*/

console.log(1 +  +"2" + "2");
"32"
/*
The unary + converts "2" (a string) to a number 2.
1 + 2 becomes 3.
3 + "2" becomes "32" due to string concatenation.
*/

console.log(1 +  -"1" + "2");
"02"
//Same as above

console.log(+"1" +  "1" + "2");
"112"
/*
The unary + converts "1" to 1.
1 + "1" becomes "11" due to string concatenation.
"11" + "2" becomes "112".
*/

console.log( "A" - "B" + "2");
NaN2
//"A" - "B" results in NaN. NaN + "2" becomes "NaN2" due to string concatenation.

console.log( "A" - "B" + 2);
NaN
//Adding a number (NaN + 2) still results in NaN.

console.log("0 || 1 = "+(0 || 1));
0 || 1 = 1
//Concatenating "0 || 1 = " with 1 results in "0 || 1 = 1"

console.log("1 || 2 = "+(1 || 2));
"1 || 2 = 1"
//1 is truthy, (1 || 2) evaluates to 1

console.log("0 && 1 = "+(0 && 1));
"0 && 1 = 0"
//0 is falsy, (0 && 1) evaluates to 0.

console.log("1 && 2 = "+(1 && 2));
"1 && 2 = 2"
//1 is truthy, it evaluates the next value, 2, which is also truthy

console.log(false == '0')
true
//false is coerced to 0, and '0' is coerced to 0

console.log(false === '0')
false