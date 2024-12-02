// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (visited.has(obj)) {
        return visited.get(obj);
    }
    const clone = Array.isArray(obj) ? [] : {};
    visited.set(obj, clone);
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = cloneDeepWithLoop(obj[key], visited);
        }
    }
    return clone;
}