// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // 0.30000000000000004 because of the way Javascript represents decimal, it can't store the value precisely

console.log(0.1 + 0.2 == 0.3); // false. 0.1 + 0.2 resulting in 0.30000000000000004 not 0.3

console.log(1 +  "2" + "2"); // "122": JavaScript evaluates expressions from left to right. 1 + "2" results in "12" because the 1 is coerced into a string due to the presence of "2". Then, "12" + "2" results in "122".

console.log(1 +  +"2" + "2"); // "32": The unary + operator before "2" converts the string "2" to the number 2. So, 1 + + "2" becomes 1 + 2, which equals 3. Then, 3 + "2" results in "32".

console.log(1 +  -"1" + "2"); // "02"

; // 
console.log(+"1" +  "1" + "2") // "112"
console.log( "A" - "B" + "2"); // "NaN2"

console.log( "A" - "B" + 2); // NaN: typeof NaN is also number, so no coercion

console.log("0 || 1 = "+(0 || 1)); // "0 || 1 = 1": The || (logical OR) operator returns the first "truthy" value it encounters or the last value if none are truthy, so it returns 1 in this case.

console.log("1 || 2 = "+(1 || 2)); // "1 || 2 = 1"

console.log("0 && 1 = "+(0 && 1)); // "0 && 1 = 0"

console.log("1 && 2 = "+(1 && 2)); // "1 && 2 = 2": The && (logical AND) operator returns the first "falsy" value it encounters or the last value if all are "truthy", so it returns 2 in this case.

console.log(false == '0') // true: When using == (loose equality), JavaScript performs type coercion to compare the values. In this case, JavaScript coerces '0' to false to match the type of false.

console.log(false === '0') // no type coercion occurs with === (strict equality)
