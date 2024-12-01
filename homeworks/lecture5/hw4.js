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
// Output: 1 2
// promise resolved and pass value 1 to the first .then, 1 printed
// the first .then pass value 2 to the next .then, 2 printed by the second .then

// 2
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
// Output: 1 3
// rejection skip .then and move to .catch block
// inside the .catch block console.log(err) print 1
// return 3 resolve the .catch block with calue 3 and pass 3 to the next .then
// .then print 3

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
// Output: Error: 2
// If any promise in Promise.al rejects, the entire Promise.all rejects with that error
// At 2 seconds, runReject(2) rejects with the message Error:2