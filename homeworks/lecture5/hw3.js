// what is the output in order? and explain why?

// 1
console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");
new Promise((resolve, reject) => {
  resolve("d");
  console.log("e");
  reject("f");
}).then((result) => console.log(result));

// a    main process
// c    main process
// e    main process in micro task
// d    micro task resolve
// b    macro task

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res);
});

console.log("start");

// 1        runs synchronously
// start    runs synchronously
// success  micro task
