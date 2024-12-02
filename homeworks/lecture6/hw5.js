// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
    let count = 1;

    function waitAsec() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(count);
                resolve();
            }, 1000);
        })
    }

    waitAsec()
        .then(() => {
            count++;
            return waitAsec();
        })
        .then(() => {
            count++;
            return waitAsec();
        })
}

print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
    nums.reduce((prePromise, n) => {
        return prePromise.then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(n);
                    resolve();
                }, 1000);
            });
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
        {color : 'red', delay: 1000},
        {color : 'green', delay: 1000},
        {color : 'yellow', delay: 1000}
    ];

    function printLights() {
        lights.reduce((prePromise, light) => {
            return prePromise.then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        console.log(light.color);
                        resolve();
                    }, light.delay);
                });
            });
        }, Promise.resolve())
            .then(() => {
                printLights();
            });
    }

    printLights();
}

trafficLight();
