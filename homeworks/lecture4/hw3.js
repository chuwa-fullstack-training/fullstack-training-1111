/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here

// ES5
function Singleton() {
    if(Singleton._instance) {
        return Singleton._instance;
    }

    Singleton._instance = this;
}


 const instance1 = new Singleton();
 const instance2 = new Singleton();
 console.log(instance1 === instance2); // Output: true


// ES6
class Singleton2 {
    constructor(){
        if(Singleton2._instance) {
            return Singleton2._instance;
        }
        Singleton2._instance = this;
    }
}

 const instance3 = new Singleton();
 const instance4 = new Singleton();
 console.log(instance3 === instance4); // Output: true
