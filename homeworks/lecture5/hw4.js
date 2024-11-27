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
// The first 1 output is from the console.log. The second 2 output is the return value.
// 3 wouldn't be in the output because there's no error triggered in the execution. Also the '.then' method won't be triggered.

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
// Output:
// 1
// 3
// This time the first '.then' method wouldn't be triggered because it only rejects 1.
// The '.catch' method is triggered, outputing 1 and 3.
// The second '.then' is invoked but 'res' has no value therefore nothing is output.

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
// Error: 2
// Since here it's using Promise.all, only '.catch' method would be executed. All the resolved values wouldn't be output.
// Here '.catch' only catches the first returned value. Value 2 is returned earlier than value 4 so it outputs 'Error: 2'.
