/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the timer will be reset
 * const printHello = () => console.log('hello')
 * const debouncedFn = debounce(printHello, 1000)
 * debouncedFn()
 * debouncedFn() // timer reset to 1s
 * 
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
function debounce(func, delay) {
  // your code here

  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {func.apply(this, args)}, delay);
    console.log(`timer is ${timer}`)
  };
}
const printHello = () => console.log('hello');
const debouncedFn = debounce(printHello, 1000);

debouncedFn(); // Timer starts, will execute after 1s
debouncedFn(); // Timer reset, will now execute 1s from this call
debouncedFn(); // Timer reset again

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the call will be ignored
 * const printHello = () => console.log('hello')
 * const throttledFn = throttle(printHello, 1000)
 * throttledFn()
 * throttledFn() // ignored
 * 
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
function throttle(func, delay) {
  // your code here

  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime > delay) {
      lastTime = now;
      func.apply(this, args);
    }

  }
}
const printHello1 = () => console.log('hello-2');
const throttledFn = throttle(printHello1, 1000);

throttledFn(); // Executes immediately
throttledFn(); // Ignored (called within 1 second of the last call)
setTimeout(throttledFn, 1200); // Executes after 1.2 seconds