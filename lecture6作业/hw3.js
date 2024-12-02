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
  const promsie=new promise((resolve,reject)=>
  {
  setTimeOut(()=>{},1000)
  },delay);
}


function debouncedFn(fn, delay) {
    let timer = null;
    return function (...args) {
        if(timer){
        	timer = setTimeout(() => fn.apply(this, args), delay);
        } 
         clearTimeout(timer);
        
    };
}

function printHello (message) {
    console.log(message);
}

const debouncedFn = debounce(printHello, 1000);
debouncedFn('Hello');
debouncedFn('World');









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
    let timer = null; // 保存定时器引用
    return function (...args) {
        if (!timer) { // 只有当 timer 为 null 时，才允许执行函数
            func.apply(this, args); // 执行目标函数
            timer = setTimeout(() => {
                timer = null; // 在 delay 时间后清除定时器
            }, delay);
        }
    };
}
