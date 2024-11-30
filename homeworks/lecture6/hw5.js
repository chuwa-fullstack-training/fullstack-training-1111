// 1. use `promise` to print 1, 2, 3 in every 1 second
const delay = (value, time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    }, time);
  });

function print() {
  delay(1, 1000)
    .then(() => delay(2, 1000))
    .then(() => delay(3, 1000));
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  nums.reduce(async (acc, val) => {
    return acc.then(() => delay(val, 1000));
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  const cycle = () => {
    delay('red', 1000)
      .then(() => delay('green', 1000))
      .then(() => delay('yellow', 1000))
      .then(() => cycle());
  };

  cycle();
}
