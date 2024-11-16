// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); //0.30000000000000004
//Computer store numbers in binary format, but 0.1and 0.2 can't be represented
// exactly in binary format, so it will be approximated.

console.log(0.1 + 0.2 == 0.3); //false
//Because of the above reason, 0.1 + 0.2 is not equal to 0.3

console.log(1 +  "2" + "2"); //122
//number 1 is converted to string "1"

console.log(1 +  +"2" + "2"); //32
// + operater converts "2" to number 2

console.log(1 +  -"1" + "2"); //02
// - operator converts "1" to number -1

console.log(+"1" +  "1" + "2"); //112
// + operator converts "1" to number 1, then 1(number)+"1"(string) makes number1 comverted to string again

console.log( "A" - "B" + "2"); //NaN2
//Unlike + operator, - can't connnect strings, JavaScript try to convert "A" and "B" to number,
//and it returns NaN, then NaN(number) + "2" makes NaN string

console.log( "A" - "B" + 2); //NaN
//Any operation with NaN and a number results in NaN.

console.log("0 || 1 = "+(0 || 1)); //0 || 1 = 1
//logical OR returns the first true value, or the last value if no true value is founded

console.log("1 || 2 = "+(1 || 2)); //1 || 2 = 1
//Same 

console.log("0 && 1 = "+(0 && 1)); //0 && 1 = 0
//logical AND return the first false value, or the last value if no false value is founded

console.log("1 && 2 = "+(1 && 2));//1 && 2 = 2
//Same

console.log(false == '0') //true
//Type coercion, false is converted to 0, '0' converted to 0 as well,then 0 == '0'

console.log(false === '0')//false
//false is boolean, '0' is string, they are not strictly equal