// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.3

console.log(0.1 + 0.2 == 0.3);
// false
// because when adding two float numbers, there's rounding error

console.log(1 +  "2" + "2");
// 122
// When adding an integer and string it becomes string concatenating because of coercion

console.log(1 +  +"2" + "2");
// 32
// "+" before a string would convert it to an integer

console.log(1 +  -"1" + "2");
// 02
// Same as above, "-" before a string converts it to integer

console.log(+"1" +  "1" + "2");
// 112
// The first "1" is an integer but everything after is string so output is concatenated string

console.log( "A" - "B" + "2");
// NaN
// "A" - "B" is NaN and "+" concatenates "2"

console.log( "A" - "B" + 2);
// NaN
// "A" - "B" is NaN, adding an integer is still NaN

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1
// First half is the given string, and second half is the output of 0 || 1 which is 1

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1
// Because when you take boolean values of integer 1 and 2, both give true values

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
// Boolean of 0 is False so 0 && 1 should be False

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// The first argument of && is 1 so it's true, then the second arguement is evaluated and its value is returned

console.log(false == '0')
// true
// When evaluating true value with ==, '0' is converted to integer 0 whose boolean value is false

console.log(false === '0')
// false
// === operator also evaluates the syntax between two arguments
