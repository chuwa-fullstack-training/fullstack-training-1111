// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  const cached = new Map(); 

  const clone = (value) => {
    if (cached.has(value)) {
      return cached.get(value);
    }

    if (Array.isArray(value)) {
      const arrCopy = [];
      cached.set(value, arrCopy);

      value.forEach((item) => {
        arrCopy.push(clone(item)); 
      });
      return arrCopy;
    } else if (typeof x === 'object' && x !== null) {
      const objCopy = {};
      cached.set(value, objCopy); 

      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          objCopy[key] = clone(value[key]); 
        }
      }
      return objCopy;
    } else {
      return value;
    }
  };

  return clone(obj);
}