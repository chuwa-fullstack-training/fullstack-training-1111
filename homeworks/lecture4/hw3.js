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
  if (Singleton.instance) {
    return Singleton.instance;
  }
  
  Singleton.instance = this;

  this.name = 'Singleton';

  return Singleton.instance;
}


// ES6
class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
  
      // Create the instance
      Singleton.instance = this;
  
      // Example property
      this.name = "Singleton Instance";
    }
  }
  
  // Example usage
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  console.log(instance1 === instance2); // Output: true