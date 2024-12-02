// 1. use `promise` to print 1, 2, 3 in every 1 second

function print() {
  Promise.resolve()
    .then(() => {
      console.log(1);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    })
    .then(() => {
      console.log(2);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    })
    .then(() => {
      console.log(3);
    });
}

print();
// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];


function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => {
      console.log(num);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    });
  }, Promise.resolve());
}

printList();
// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct

function trafficLight() {
  // your code here
  const lights = [
    { color: "red", delay: 3000 },
    { color: "green", delay: 2000 },
    { color: "yellow", delay: 1000 },
  ];

  function changeLight(index = 0) {
    const light = lights[index];
    console.log(light.color);
    setTimeout(() => {
      changeLight((index + 1) % lights.length);
    }, light.delay);
  }

  changeLight();
}

trafficLight();