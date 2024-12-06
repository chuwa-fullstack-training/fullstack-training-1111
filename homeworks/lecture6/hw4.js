/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  const [int, decimal] = num.toString().split(".");
  let res = [];
  let curr = int;
  while (curr > 0) {
    const reminder = curr % 1000;
    res.push(reminder);
    curr = Math.floor(curr / 1000);
  }
  let intPart = res.reverse().join(",");
  if (decimal) {
    intPart += `.${decimal}`;
  }

  return intPart;
}
