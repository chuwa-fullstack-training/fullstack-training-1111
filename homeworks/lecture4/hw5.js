// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, seen = new WeakSet()) => {
  if (typeof obj !== 'object' || obj === null || seen.has(obj)) return obj;

  seen.add(obj);

  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    clone[key] = cloneDeepWithLoop(obj[key], seen);
  }

  return clone;
};
