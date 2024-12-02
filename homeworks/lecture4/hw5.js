// write a function to deep clone an object with circular reference
// 

const data = {
    name: 'foo',
    child: null
}
data.child = data;

const cloneDeepWithLoop = (obj, visited = []) => {
    // Implement the function here

    if (obj === null) return obj;

    const exist = visited.find(item => item.original === obj);
    if (exist) {
        return exist.clone;
    }

    let clone = {};

    visited.push({original: obj, clone});

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = cloneDeepWithLoop(obj[key], visited)
        }
    }

    return clone
}

let newObj = cloneDeepWithLoop(data);
console.log(newObj.child === data)