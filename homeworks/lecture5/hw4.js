// what is the output? and explain why?

// 1 
// output: 1, 2
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });

  // 2
  // output: 1, 3
Promise.reject(1)
  .then(res => { // ignored because Promise is rejected
    console.log(res);
    return 2;
  }) 
  .catch(err => {
    console.log(err);
    return 3; // returns a promise with a resolve value of 3
  })
  .then(res => {
    console.log(res); // logs 3 to the console
  });

// 3
// output: 2
// Promise.all resolves only when all promises resolve.
// It rejects as soon as the first rejection occurs, with the rejection reason of that promise.
// Promises that resolve or reject after the first rejection are ignored.

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
