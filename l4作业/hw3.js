/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
//ES5
function Singleton() {
    if (Singleton.instance) {
        return Singleton.instance; // Return the existing instance if it exists
    }
    Singleton.instance = this; // Store the instance in a static property
}

// Test ES5 Singleton
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // Output: true

//ES6
class Singleton {
    static instance = null; // 定义静态属性

    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this; // 存储实例到静态属性
    }
}

// 测试
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
