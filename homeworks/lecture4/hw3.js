/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 *
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// ES5
function Singleton() {
  return Singleton._instance ?? (Singleton._instance = this);
}

// ES6: class
class Singleton {
  constructor() {
    return Singleton._instance ?? (Singleton._instance = this);
  }
}
