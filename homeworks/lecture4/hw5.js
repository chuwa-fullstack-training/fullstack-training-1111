// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const seen = new Map();

    function deepClone(obj) {
        // Handle non-object types (primitives, null, undefined)
        if (obj === null || typeof obj !== 'object') {
        return obj;
        }

        // If the object has already been cloned, return the reference
        if (seen.has(obj)) {
        return seen.get(obj);
        }

        // Create a new object or array
        const clonedObj = Array.isArray(obj) ? [] : {};

        // Track this object as seen
        seen.set(obj, clonedObj);

        // Recursively copy properties
        for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
        }

        return clonedObj;
    }

    return deepClone(obj);
}

const data = {
    name: 'foo',
    child: null,
};
data.child = data;

const clonedData = cloneDeepWithLoop(data);
console.log(clonedData); // { name: 'foo', child: [Circular] }
console.log(clonedData.child === clonedData); // true