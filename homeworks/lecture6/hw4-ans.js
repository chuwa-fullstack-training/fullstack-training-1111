/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // Insert commas every three digits


  const parts = num.toString().split('.');
  let intPart = parts[0];
  const decimalPart = parts.length > 1 ? '.' + parts[1] : '';

  let reversedInteger = intPart.split('').reverse();
  let formattedInteger = [];

  
  for (let i = 0; i < reversedInteger.length; i++) {
    if (i > 0 && i % 3 === 0) {
      formattedInteger.push(',');
    }
    formattedInteger.push(reversedInteger[i]);
  }

   formattedInteger = formattedInteger.reverse().join('');

   return formattedInteger + decimalPart;
}

console.log(format(12345678));    // Output: "12,345,678"
console.log(format(1234.56));     // Output: "1,234.56"
console.log(format(12.346));      //12.346
console.log(format(123456789));  //123,456,789
