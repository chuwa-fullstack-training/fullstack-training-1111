/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let res = "";
  let numf = parseInt(num);
  while (numf > 0) {
    let digit = numf % 10;
    if ((res.length - 3) % 4 === 0) {
      res = "," + res;
    }
    res = digit + res;
    numf = parseInt(numf / 10);
  }
  if (num - parseInt(num) !== 0) {
    let rem = num - parseInt(num);
    res = res + rem.toString().substring(1);
  }
  return res;
}