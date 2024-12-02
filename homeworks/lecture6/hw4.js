/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const [integer, fractional] = num.toString().split('.');

  const result = [];
  const integerArray = integer.split('');

  let count = 0;
  for(let i = integerArray.length-1; i >=0; i--){
    result.unshift(integerArray[i]);
    count++;
    if(count%3 == 0 && i!==0){
      result.unshift(',');
    }
  }
  return fractional?result.join('')+'.'+fractional :result.join('');
}

console.log(format(12345678));
console.log(format(1234.56));