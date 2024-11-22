// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// it would print 0.30000000000004, there will a very small error
console.log(0.1 + 0.2 == 0.3);
// it is false 
console.log(1 +  "2" + "2");
// it would print in string style which is 122
console.log(1 +  +"2" + "2");
// +"2" would convert 2 to integer and it would print 32
console.log(1 +  -"1" + "2");
// -"1" would convert 1 to -1 and it would trun to 0 + 2 and print 02
console.log(+"1" +  "1" + "2");
// it would print 112 same with number 1 + '2' + '2'
console.log( "A" - "B" + "2");
// "A" - "B" result NaN and when encounter "2", NaN turns to a string and print NaN2
console.log( "A" - "B" + 2);
// "A" - "B" result NaN and when meet 2, it will stay NaN
console.log("0 || 1 = "+(0 || 1));
// 0 is falsy and it would return 1 so it would print 0 || 1 = 1
console.log("1 || 2 = "+(1 || 2));
// 1 is truthy and it would print 1 || 2 = 1
console.log("0 && 1 = "+(0 && 1));
// since && is AND and 0 is falsy, it would print 0 && 1 = 0
console.log("1 && 2 = "+(1 && 2));
// since && is AND and 1 is truthy, it would print 1 && 2 = 2
console.log(false == '0')
// it would print true
console.log(false === '0')
// it would print False since type is different