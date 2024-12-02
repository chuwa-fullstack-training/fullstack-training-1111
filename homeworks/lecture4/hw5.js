// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  // Implement the function here
  hash = new WeakMap();
  if (Object(obj) !== obj || obj instanceof Function) return obj;
  if (hash.has(obj)) return hash.get(obj);
  try {
    var result = new obj.constructor();
  } catch (e) {
    result = Object.create(Object.getPrototypeOf(obj));
  }
  if (obj instanceof Map)
    Array.from(obj, ([key, val]) =>
      result.set(deepClone(key, hash), deepClone(val, hash))
    );
  else if (obj instanceof Set)
    Array.from(obj, (key) => result.add(deepClone(key, hash)));
  hash.set(obj, result);
  return Object.assign(
    result,
    ...Object.keys(obj).map((key) => ({ [key]: deepClone(obj[key], hash) }))
  );
};
