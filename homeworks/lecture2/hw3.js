// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// JS uses the IEEE 754 standard for representing floating-point numbers, 
// which sometimes lead to unexpected results due to precision issues.

console.log(0.1 + 0.2 == 0.3);
// false
// As mentioned above, 0.1+0.2 does not strictly equal to 0.3, so this statement is false

console.log(1 +  "2" + "2");
// "122"
// JS does type coercion on operations on different types of variables. It coerces types to String 
// during addition if either operand is a string.

console.log(1 +  +"2" + "2");
// 32
// The unary operator '+' converts the string +"2" to the number 2. Then the operation 1 + 2 is performed with the 
// result of 3. 3 + "2" equals to "32" with type coercion as mentioned above.

console.log(1 +  -"1" + "2");
// 02
// Same as above. The unary operator '-' converts -"1" to the number -1, so 1-1+"2" equals to "02"

console.log(+"1" +  "1" + "2");
// 112
// Same as above, the equation will be simplified to 1+"1"+"2", which equates to "112"

console.log( "A" - "B" + "2");
// NaN2
// "A"-"B" results in NaN because subtraction is not valid between non-numeric strings. 
// NaN + "2" results in a string "NaN2"

console.log( "A" - "B" + 2);
// NaN
// As mentioned above, this equation becomes NaN + 2. However, if NaN is used in addition with non-string 
// operands, the result is still NaN

console.log("0 || 1 = "+(0 || 1));
// "0 || 1 = 1"
// (0 || 1) results in 1, so the equation becomes "0 || 1 = " + 1, which results in "0 || 1 = 1"

console.log("1 || 2 = "+(1 || 2));
// "0 || 1 = 1"
// Due to short-circuit evaluation, (1 || 2) evaluates to 1, because 1 is a truthy value, and the evaluation stops
// there because a truthy value is enough to determine the outcome of this || expression.

console.log("0 && 1 = "+(0 && 1));
// "0 && 1 = 0"
// (0 && 1) returns 0, same concept as above

console.log("1 && 2 = "+(1 && 2));
// "1 && 2 = 2"
// (1 && 2) returns 2 because of short circuit evaluation as well. Since value 1 is not enough to determine the 
// outcome of the && operation, js will evaluate value 2, then stops there and returns the last operand, which is 2 

console.log(false == '0')
// true
// Following the type coercion rule, js coerces false to 0, and '0' to 0, which then results in true for this expression

console.log(false === '0')
// false
// === performs strict equality check, so type coercion will not be performed here, which then returns false because 
// false is a boolean value and '0' is a string

