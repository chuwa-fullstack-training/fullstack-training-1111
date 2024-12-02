// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

  delay(1000)
    .then(() => {
      console.log(1);
      return delay(1000)
  })
    .then(() => {
      console.log(2);
      return delay(1000)
    })
    .then(() => {
      console.log(3);
    
    })
}
print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  nums.reduce((promise, num) => {
    return promise.then(() => 
      new Promise(resolve => {
        setTimeout(() => {
          console.log(num);
          resolve();
        }, 1000);
      })
    );
  }, Promise.resolve());
}

printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here

  const lights = [
    { color:'red', duration: 1000 },
    { color: 'green', duration: 1000 },
    { color: 'yellow', duration: 1000 },
  ];

  function changeLight(index = 0){
    const light = lights[index];
    console.log(`${light.color}`);
    setTimeout(() => {
      changeLight((index + 1) % 3);
    }, light.duration);
  }
  changeLight(); 
}
trafficLight();