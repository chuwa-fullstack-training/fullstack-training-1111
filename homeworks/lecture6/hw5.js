// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  const helper = () => new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000);
  })

  helper()
  .then(() => {
    console.log(1)
    return helper()
  })
  .then(
    () => {
      console.log(2)
      return helper()
    }
  )
  .then(() => {
    console.log(3)
  })
}

// print()

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  nums.reduce((promise, num) => {
    return promise.then(() => {
      console.log(num)
      return new Promise((resolve) => setTimeout(resolve, 1000))
    })

  }, Promise.resolve())
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here

  let helper = () => new Promise(resolve => setTimeout(resolve, 3000))

  let printLights = () => {
    helper()
    .then(() => {
      console.log('red')
      return helper()
    })
    .then(() => {
      console.log('green')
      return helper()
    })
    .then(() => {
      console.log('yellow')
      return helper()
    })
    .then(printLights)
  }

  printLights()

}
