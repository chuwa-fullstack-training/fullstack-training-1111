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
var SingletonES5 = (function() {
    var instance;
  
    function Singleton() {
      if (instance) {
        return instance;
      }
      instance = this;
      this.name = 'SingletonES5';
    }
  
    return Singleton;
  })();
  
  var instance1 = new SingletonES5();
  var instance2 = new SingletonES5();
  console.log(instance1 === instance2); // Output: true
  
  // ES6 
  class SingletonES6 {
    constructor() {
      if (SingletonES6.instance) {
        return SingletonES6.instance;
      }
      SingletonES6.instance = this;
      this.name = 'SingletonES6';
    }
  }
  
  const instance3 = new SingletonES6();
  const instance4 = new SingletonES6();
  console.log(instance3 === instance4); // Output: true


  const instance5 = new SingletonES5();
  this.name = 'SingletonES6';

  console.log(instance1 === instance3);// Output: false
  console.log(instance2 === instance4);// Output: false
  console.log(instance1 === instance4);// Output: false

  console.log(instance2 === instance5);// Output: true
