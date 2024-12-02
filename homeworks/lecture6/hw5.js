// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let count = 1;
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  delay(0)
    .then(() => {
      console.log(count++);
      return delay(1000);
    })
    .then(() => {
      console.log(count++);
      return delay(1000);
    })
    .then(() => {
      console.log(count++);
    });
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => {
      console.log(num);
      return new Promise(resolve => setTimeout(resolve, 1000));
    });
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = [
    { color: 'red', delay: 1000 },
    { color: 'green', delay: 1500 },
    { color: 'yellow', delay: 500 },
  ];

  function loop(index) {
    const { color, delay } = lights[index];
    console.log(color);
    setTimeout(() => {
      loop((index + 1) % lights.length);
    }, delay);
  }

  loop(0);
}
