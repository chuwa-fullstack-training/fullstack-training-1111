// write a function to deep clone an object with circular reference
// 



 
const cloneDeepWithLoop = (obj, hash = new WeakMap()) => {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (hash.has(obj)) {
      return hash.get(obj);
    }
  
    const clone = Array.isArray(obj) ? [] : {};
  
    hash.set(obj, clone);
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = cloneDeepWithLoop(obj[key], hash);
      }
    }
  
    return clone;
  };


  
const data = {
    name: 'foo',
    child: null,
    location:{
        settle: 'yes',
        address: ['sc','sj']
    }

};
data.self = data;

const clonedData = cloneDeepWithLoop(data);
console.log(clonedData);
