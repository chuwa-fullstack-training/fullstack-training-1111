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
//answer:1,2
Promise 链按顺序执行，第一个 `then` 打印 `1` 并返回 `2`，跳过 `catch`，第二个 `then` 打印 `2`。

//2
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
//ans:1,3
Promise.reject(1) 直接进入 catch，打印 1 并返回 3，第二个 then 接收 3 并打印。

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
  
  //answer: Error:2
  Promise.all 中 runReject(2) 最先 reject，Promise.all 遇到第一个错误时直接进入 catch，打印 Error: 2。
