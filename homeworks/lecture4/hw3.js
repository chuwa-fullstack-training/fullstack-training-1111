/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code her
es5
var Singleton = (function () {
    var instance; 
  
    function Singleton() {
      if (instance) {
        return instance; 
      }
      instance = this; 
    }
  
    return Singleton; 
  })();
  
 es6 
 class Singleton {
    static #instance = null; 
    constructor() {
      if (Singleton.#instance) {
        return Singleton.#instance; 
      }
      Singleton.#instance = this; 
    }
  }
  
