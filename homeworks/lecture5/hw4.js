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
/* 1 2
return 2; resolves the promise with the value 2.
*/

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
/*  1 3
If a Promise is rejected, the .catch block will execute and can “handle” the error.
After handling the error, the .catch block returns a new resolved Promise, unless it explicitly throws another error.
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
/* Error: 2
runAsync(1) → Resolves after 1 second with 1.
runReject(4) → Rejects after 4 seconds with "Error: 4".
runAsync(3) → Resolves after 1 second with 3.
runReject(2) → Rejects after 2 seconds with "Error: 2".
Promise.all  if an error throwed, then quit
*/