// write a function to deep clone an object with circular reference
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  let map = new Map();

  function helper(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (map.has(obj)) return map.get(obj);
    const result = Array.isArray(obj) ? [] : {};
    map.set(obj, result);

    for (let key in obj) {
      result[key] = helper(obj[key]);
    }
    return result;
  }

  return helper(obj);
};
