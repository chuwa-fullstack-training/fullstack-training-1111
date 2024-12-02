// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let promise = () => new Promise((resolve, reject) => setTimeout(resolve, 1000));

  promise()
  .then(() => {
    console.log(1);
    return promise();
  })
  .then(() => {
    console.log(2);
    return promise();
  })
  .then(() => {
    console.log(3);
    return promise();
  })
}

//print()

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce(
    (promise, num) => {
      return promise.then(() => {
        console.log(num);
        return new Promise((resolve) => setTimeout(resolve, 1000));
      })
    }, Promise.resolve()
  )
}

//printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  let promise = () => new Promise((resolve) => setTimeout(resolve, 1000));

  function lights() {
    promise()
    .then(() => {
      console.log("red");
      return promise()
    })
    .then(() => {
      console.log("green");
      return promise()
    })
    .then(() => {
      console.log("yellow");
      return promise()
    })
    .then(lights)
  }

  lights();
}

//trafficLight();
