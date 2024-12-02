// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  for(let i=1;i<4;i++){
  	setTimeout(()=>{console.log(i);},1000);
  }
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((prevPromise, num) => {
    return prevPromise.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(num); // 打印当前数字
          resolve(); // 延续链式调用
        }, 1000); // 延迟 1 秒
      });
    });
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = ["red", "green", "yellow"]; // 灯光顺序
  let currentIndex = 0; // 当前灯光索引

  function changeLight() {
    console.log(lights[currentIndex]); // 打印当前灯光
    currentIndex = (currentIndex + 1) % lights.length; // 切换到下一个灯光
    setTimeout(changeLight, getDelay(lights[currentIndex])); // 根据灯光设置延迟时间
  }

  function getDelay(color) {
    // 为每种灯光设置不同的延迟时间（单位：毫秒）
    switch (color) {
      case "red":
        return 2000; // 红灯 3 秒
      case "green":
        return 2000; // 绿灯 2 秒
      case "yellow":
        return 3000; // 黄灯 1 秒
      default:
        return 1000;
    }
  }

  changeLight(); // 启动灯光循环
}

trafficLight();
