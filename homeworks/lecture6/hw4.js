/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const numStr = num.toString();
  const [integerPart, decimalPart] = numStr.split('.');

  let integerResult = ''
  let steps = 0

  for (let i = integerPart.length - 1; i >= 0; i--){
    integerResult = integerPart[i] + integerResult
    steps++
    if(i !== 0 && steps % 3 === 0){
      integerResult = ',' + integerResult
    }
  }

  return decimalPart ? integerResult + '.' + decimalPart : integerResult;
}

console.log(format(12345678)); 
console.log(format(1234.56))