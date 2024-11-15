// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);

//0.30000000000000004 todouble 

console.log(0.1 + 0.2 == 0.3);
// different type

console.log(1 +  "2" + "2");
// 122 number and string

console.log(1 +  +"2" + "2");
// 32 +2->2 =1+2 2 =32
console.log(1 +  -"1" + "2");
// same for 02
console.log(+"1" +  "1" + "2");
//numbee 1with 2 with 2 =112
console.log( "A" - "B" + "2");
//nan with string 2
console.log( "A" - "B" + 2);
//nan + number = nan

console.log("0 || 1 = "+(0 || 1));
//0 || 1 = 1 return first true 


console.log("1 || 2 = "+(1 || 2));
//1 || 2 = 1 return first true 


console.log("0 && 1 = "+(0 && 1));
//0 && 1 = 0


console.log("1 && 2 = "+(1 && 2));
//1 && 2 = 2 all true return the 2 value


console.log(false == '0')
//true 

console.log(false === '0')
// boolen not qual to string it is strict 
