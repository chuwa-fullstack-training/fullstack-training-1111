// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  function printHelper() {
    return new Promise((res, rej) => setTimeout(res, 1000));
  }
  printHelper()
    .then(() => {
      console.log(1);
      return printHelper();
    })
    .then(() => {
      console.log(2);
      return printHelper();
    })
    .then(() => {
      console.log(3);
    })
}
// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  function printHelper() {
    return new Promise((res, rej) => setTimeout(res, 1000));
  }
  nums.reduce((promise, num) => {
    return promise.then(() => {
      console.log(num);
      return printHelper();
    })
  }, Promise.resolve())
}
// printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight() {
  const lights = ["red", "green", "yellow"];
  function delay() {
    return new Promise((res, rej) => setTimeout(res, 1000));
  }
  while (true) {
    for (const light of lights) {
      console.log(light);
      await delay();
    }
  }
}
trafficLight();
