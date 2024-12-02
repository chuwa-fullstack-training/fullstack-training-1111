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

 // 1 2 when create a promise it will immidiately reolve in 1 and it will print out in the first then, and it will ignore the catch to the second then, which will print out 2


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

// 1 3 when create a promise it will immidiately reject, and it will dive into the catch and print 1 and in the second then it will print out the 3  

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

// Error： 2 
// for runAsync(1) will return a promise that resolves with 1 after 1 second
// for runReject(4) will return a promise that reject with Error: 4 after 4 seconds
// for runAsync(1) will return a promise that resolves with 3 after 1 second
// for runReject(2) will return a promise that reject with Error: 2 after 2 seconds
// since this is promise all and it will catch the error when there is one reject occurs, which will be the Error: 2

