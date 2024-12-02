/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  let numArr = num.toString().split(".");
  let wholeNumArr = numArr[0].split("");
  let newWholeNumArr = [];
  let counter = 0;

  for (let i = wholeNumArr.length - 1; i >= 0; i --) {
    if (counter === 3){
      newWholeNumArr.unshift(',');
      counter = 0;
    }    
    newWholeNumArr.unshift(wholeNumArr[i]);
    counter ++;
  }
  let newNumStr = newWholeNumArr.join("");
  return numArr[1] ? `${newNumStr}.${numArr[1]}` : newNumStr;
}

console.log(format(12345678))
console.log(format(1234.56))
console.log(format(0.1234))