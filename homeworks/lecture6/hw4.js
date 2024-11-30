/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  let charArr = num.toString().split('').reverse();
  const index = charArr.indexOf('.');
  const _interval = 3;
  let pos = (index === -1 ? 0 : index + 1) + _interval;
  while (pos < charArr.length) {
    charArr.splice(pos, 0, ',');
    pos += _interval + 1;
  }
  return charArr.reverse().join('');
}

console.log(format(12345678));
console.log(format(1234.56));
