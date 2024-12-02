/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
    let res = "";
    let intPart = Math.floor(num);
    let decPart = num % 1 ? "." + num.toString().split(".")[1] : "";

    while(intPart > 0) {
        let three = intPart % 1000;
        intPart = Math.floor(intPart / 1000);
        if(intPart > 0) {
            res = "," + three.toString().padStart(3, '0') + res;
        } else {
            res = three + res;
        }
    }
    return res + decPart;
}

console.log(format(12345678));
console.log(format(1234.56));
