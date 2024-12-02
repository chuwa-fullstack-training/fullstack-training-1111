// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then(res => {
    console.log(res); // 1
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res); // 2
  });
// output: 1, 2
/**
 * This creates a Promise that immediately resolves with the value 1.
 * first .then(): first, log 1 passed as res, then resolves with value `2` pass to next callback.
 * second .then(): log 2 passed as res
 */

// 2
Promise.reject(1)
  .then(res => {
    console.log(res); 
    return 2;
  })
  .catch(err => {
    console.log(err); // 1
    return 3;
  })
  .then(res => {
    console.log(res); // 3
  });

// output: 1, 3
/**
 * rejection skips the first .then() and goes straight to the .catch() block.
 * .catch : log 1 and resolves with `3`
 * .then : log 3
 */

//3
function runAsync(x) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(x), 1000)
  );
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));

// output: "Error: 2"
/**
 * Promise.all returns a promise when all of the input's promises fulfill 
 * since runRject return a rejected promise, therefore it will go to .catch block that logs err
 * runReject(2) rejects after 2 seconds with reason "Error: 2". Therefore Promise.all immediately rejects by throwing a error
 * runReject(4) rejects after 4 seconds with reason "Error: 4". This was ignored
 */