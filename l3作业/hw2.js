/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(...args1) {
    // 如果接收到两个参数，直接返回它们的和
    if (args1.length === 2) {
        return args1[0] + args1[1];
    }

    // 否则返回一个函数等待第二个参数
    return function (...args2) {
        return args1[0] + args2[0];
    };
}

// 测试
console.log(sum(2)(3) === 5); // true
console.log(sum(2, 3) === 5); // true
