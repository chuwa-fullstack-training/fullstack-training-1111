/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 *
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// es5
function Singleton() {
  if (Singleton.instance) {
    return Singleton.instance;
  }
  Singleton.instance = this;
  return this;
}
// es6
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

// this is the common way when I write singleton
class Singleton {
  static _ins;

  static get ins() {
    if (!this._ins) {
      this._ins = new Singleton();
    }
    return this._ins;
  }
}
