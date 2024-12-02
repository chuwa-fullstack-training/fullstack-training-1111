// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    let res = {};
    for (let property in obj) {
        if (typeof obj[property] === 'object' && !Array.isArray(obj[property]) && obj[property] !== null) {
            res[property] = cloneDeepWithLoop(obj[property]);
        } else {
            res[property] = obj[property];
        }
    }
    return res;
}