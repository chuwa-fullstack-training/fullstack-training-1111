/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */

function format(num) {
  // your code here
  const numStr = num.toString(); 
  const parts = numStr.split('.'); 
  
  let integerPart = parts[0];
  const decimalPart = parts.length > 1 ? parts[1] : null;

  let result = '';
  let count = 0;

  for (let i = integerPart.length - 1; i >= 0; i--) {
    result = integerPart[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      result = ',' + result;
    }
  }

  if (decimalPart) {
    return result + '.' + decimalPart;
  }
  return result;
}