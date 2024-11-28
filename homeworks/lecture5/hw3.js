// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then((result) => console.log(result));
/**
 * will print:
 * a
 * c
 * e
 * d
 * b
 *
 * Step 1: Run all synchronous code first:
 *         - Print 'a' and 'c'.
 *         - Schedule the setTimeout callback (macrotask).
 *         - In the Promise constructor, 'e' is logged synchronously.
 * Step 2: Handle microtasks (Promise resolution):
 *         - The promise is resolved with 'd', so the `.then` handler runs, printing 'd'.
 *         - reject('f') is ignored because the promise is already resolved.
 * Step 3: Handle macrotasks (setTimeout):
 *         - The setTimeout callback runs last, printing 'b'.
 */

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then((res) => {
  console.log(res);
});

console.log('start');

/**
 * will print:
 * 1
 * start
 * success
 *
 * Step 1: Run all synchronous code first:
 *         - fn() is called immediately -> then the Promise constructor all call synchronously, print '1' -> resolve the promise and schedule the .then() handler as a microtask.
 *         - log 'start'
 * Step 2: Handle microtasks (Promise resolution):
 *         - The promise is resolved with 'success', so the `.then` handler runs, printing 'success'.
 */
