// what is the output? and explain why?

// 1
// Promise.resolve(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .catch(err => {
//     return 3;
//   })
//   .then(res => {
//     console.log(res);
//   });
// output: 1, 2
// create a promise marked as resolved, schedule .then() callback, print out '1'
// .then() callback return a value 2 for next .then()
// since no error occured, skip catch
// 2nd .then() callback executed using value '2'

// 2
// Promise.reject(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .catch(err => {
//     console.log(err);
//     return 3;
//   })
//   .then(res => {
//     console.log(res);
//   });
// output: 1, 3
// create a promise marked as rejected, .then() is skipped scheule .catch(), print the reject reason err value '1', and return a resolved value 3 for next .then() callback
// 2nd .then() callback print out the resolved value '3'

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

// output: Error: 2
// in Promise.all, wait for all promises to return either resolve or reject
// the order is resolve 1, resolve 3, reject 2, reject 4
// when reject 2 occured, skipped .then() callback even some of the promises resolved
// Promise.all will wait for all Promises to executed even when rejected, so after print out 'Error 2', program would wait another 2000ms then quit
