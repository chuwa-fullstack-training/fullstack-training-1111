// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  const nums = [1, 2, 3];
  nums.reduce((promise, num) => {
    return promise.then(() => {
      console.log(num);
      return new Promise(resolve => setTimeout(resolve, 1000));
    });
  }, Promise.resolve());
}
//print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  const nums = [3, 1, 6, 9, 2];
  nums.reduce((promise, num) => {
    return promise.then(() => {
      console.log(num);
      return new Promise(resolve => setTimeout(resolve, 1000));
    });
  }, Promise.resolve());
}
// printList()

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
const light = [
{light: 'red'},
{light: 'green'},
{light: 'yellow'},
];

function rec() {
light.reduce((promise, light) => {
  return promise.then(() => {
    console.log(light);
    return new Promise(resolve => setTimeout(resolve, 1000));
  });
}, Promise.resolve())
.then (()=> rec());
}
rec();

}
trafficLight();


