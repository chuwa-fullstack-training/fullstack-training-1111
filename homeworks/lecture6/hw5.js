// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let cnt = 0;
  let res = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(console.log("1, 2, 3"))}, 1000);
  });
  while (cnt < 20) {
    res.then(value => {
      res = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(console.log("1, 2, 3")),
          1000
        });
      });
    })
    ++ cnt;
  }
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((accumulator, value, idx, array) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {resolve(console.log(value))}, 1000);
    });
  }, null);
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  let cnt = 0;
  while (cnt < 20) {
    if (cnt % 3 === 0) {
      console.log('red');
    } else if (cnt % 3 === 1) {
      console.log('green');
    } else {
      console.log('yellow');
    }
    ++ cnt;
  }
}
