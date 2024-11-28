// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

/**
 * will print:
 * 1
 * 2
 *
 * The chain starts with Promise.resolve(1), creating a resolved promise with the value 1.
 * The first .then() handler executes, logging 1 and returning 2.
 * The .catch() is skipped because there is no error in the chain.
 * The second .then() handler executes with the resolved value 2, logging 2.
 */

// // 2
Promise.reject(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    console.log(err);
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

/**
 * will print:
 * 1
 * 3
 *
 * - Step 1: `Promise.reject(1)` creates a rejected promise with the value `1`.
 * - Step 2: The first `.then()` is skipped because it doesn't handle rejections.
 * - Step 3: The `.catch()` handler logs `1` and returns `3`.
 * - Step 4: The second `.then()` receives the resolved value `3` and logs it.
 */

//3
function runAsync(x) {
  const p = new Promise((resolve) => setTimeout(() => resolve(x), 1000));
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/**
 * Error: 2
 *
 * Promise.all():
 *  - If all promises resolve, it returns an array of their results in the same order as the input.
 *  - If any promise rejects, it immediately rejects with the reason of the first promise that rejects (even if other promises are still pending).
 *
 * Time   Promise
 * 1      resolve(1)
 * 1      resolve(3)
 * 2      reject(2) --> stops Promise.all execution
 * 4      reject(4) -- ignored, terminate before execution --
 */
