// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  delay(1000)
    .then(() => {
      console.log(1);
      return delay(1000);
    })
    .then(() => {
      console.log(2);
      return delay(1000);
    })
    .then(() => {
      console.log(3);
    });
}
// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  nums.reduce((promise, num) => {
    return promise.then(() => {
      console.log(num);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    });
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  const lights = [
    { color: "red", delay: 4000 },
    { color: "green", delay: 1000 },
    { color: "yellow", delay: 1000 },
  ];

  let current = 0;

  function changeLight() {
    const light = lights[current];
    console.log(light.color);
    setTimeout(() => {
      current = (current + 1) % lights.length;
      changeLight();
    }, light.delay);
  }

  changeLight();
}
