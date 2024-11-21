// what is the output? and explain why?

// 1
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
// Output: 
// 1
// 2
// Promise first resolves to 1, so the first res has the value 1, then it returns a new Promise with the value
// of 2. .catch() is not called since there's no error, and the last .then() gets the value of 2 passed by the first .then() operation

// // 2
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err);
    return 3;
  })
  .then(res => {
    console.log(res);
  });
// Output:
// 1
// 3
// The first Promise has a rejected state, which skips the first .then() action, and is caught by .catch(), so 1 is logged.
// Then a new Promise with value 3 is returned by .catch(), which gets fulfilled so the last .then() gets executed

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
// Output: 
// Error 2
// Promise.all() would reject immediately with the error if any promises passed in rejects. Since runReject(2) runs 
// faster than runReject(4), 'Error: 2' gets printed out and runReject(4) never gets hit

