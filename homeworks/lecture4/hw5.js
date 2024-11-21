// write a function to deep clone an object with circular reference
// 
const data = {
    name: 'foo',
    child: null
}
data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const map = new Map();

    const cloneHelper = (value) => {
        if(value === null || typeof value !== 'object'){
            return value;
        }

        if(map.has(value)) {
            return map.get(value);
        }

        const newObj = Array.isArray(value) ? [] : {};
        map.set(value, newObj);

        for(let k in value) {
            if(value.hasOwnProperty(k)) {
                newObj[k] = cloneHelper(value[k]);
            }
        } 

        return newObj;
    }

    return cloneHelper(obj);

}

const clone = cloneDeepWithLoop(data);
console.log(clone === data);
console.log(clone.child === clone);
