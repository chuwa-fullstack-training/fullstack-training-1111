/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
}



function splitNumberIntoGroups(numberStr) {
    const [integerPart, decimalPart] = numberStr.split('.');

    // 从整数部分从后往前分组，每组最多3位
    const integerGroups = integerPart
        .split('')
        .reverse()
        .join('')
        .match(/.{1,3}/g) || []; // 按3位分组

    // 将每组翻转，回到正常顺序
    const reversedIntegers = integerGroups.map((group) =>
        group.split('').reverse().join('')
    ).reverse();

    // 如果有小数部分，直接放到数组末尾
    if (decimalPart) {
        //reversedIntegers.push(decimalPart);
        let n=reversedIntegers.length;
        reversedIntegers[n-1]=reversedIntegers[n-1]+"."+decimalPart;
    }

    return reversedIntegers;
}

// 测试
const number = "123456789.987";
console.log(splitNumberIntoGroups(number));



