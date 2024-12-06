// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  return Promise.resolve()
    .then(() => {
      console.log(1);
      return new Promise((resolve, reject) => setTimeout(resolve, 1000));
    })
    .then(() => {
      console.log(2);
      return new Promise((resolve, reject) => setTimeout(resolve, 1000));
    })
    .then(() => {
      console.log(3);
      return new Promise((resolve, reject) => setTimeout(resolve, 1000));
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
    { color: "red", delay: 100 },
    { color: "green", delay: 200 },
    { color: "yellow", delay: 300 },
  ];
  async function changeLight() {
    for (const light of lights) {
      await new Promise((resolve) => setTimeout(resolve, light.delay));
    }
    changeLight();
  }

  changeLight();
}
