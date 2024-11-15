/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
function extend(o, p) {
  for (let prop in p) {
    if (p.hasOwnProperty(prop)) {
      o[prop] = deepCopy(p[prop]);
    }
  }
  return o;
}

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
function union(o, p) {
  let unionRes = {};
  let allKeys = new Set([...Object.keys(p), ...Object.keys(o)]);
  for (let prop of allKeys) {
    unionRes[prop] = deepCopy(o.hasOwnProperty(prop) ? o[prop] : p[prop]);
  }
  return unionRes;
}

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
  for (let prop in o) {
    if (!p.hasOwnProperty(prop)) {
      delete o[prop];
    }
  }
  return o;
}

/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
function intersection(o, p) {
  let res = {};
  for (let prop in p) {
    if (p.hasOwnProperty(prop) && o.hasOwnProperty(prop)) {
      res[prop] = deepCopy(o[prop]);
    }
  }
  return res;
}

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) return obj;

  const cp = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (p.hasOwnProperty(prop)) {
      cp[key] = deepCopy(obj[key]);
    }
  }
  return cp;
}
