// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  const printNum = (num)=>new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(num);
      resolve();
    },1000)
  });
  printNum(1).then(()=>printNum(2)).then(()=>printNum(3));
}
print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  // your code here
  const printNum = (num)=>new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(num);
      resolve();
    },1000)
  });
  nums.reduce((promiseChain,num)=>{
    return promiseChain.then(()=>printNum(num))    
  },Promise.resolve())
}
printList(nums);

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights=[
    {color:'red', delay: 1000},
    {color:'green', delay: 1500},
    {color:'yellow', delay: 500}
  ];
  const showLight = ({color,delay})=>new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(color);
      resolve();
    },delay);
  });
  const cycLights = ()=>{
    lights.reduce((promiseChain,light)=>{
      return promiseChain.then(()=>showLight(light));
    },Promise.resolve()).then(cycLights);
  }

  cycLights();
}
trafficLight();