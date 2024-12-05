/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
function extend(o, p) {
  Object.entries(p).forEach(([key, value]) => {
    o[key] = value;
  });
}

function extend(o, p) {
  return Object.assign(o, p);
}

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
function union(o, p) {
  let res = {};
  Object.entries(p).forEach(([key, value]) => {
    res[key] = value;
  });
  Object.entries(o).forEach(([key, value]) => {
    res[key] = value;
  });

  return res;
}

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
  Object.keys(o).forEach((key) => {
    if (!(key in p)) delete o[key];
  });

  return o;
}

/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
function intersection(o, p) {
  let res = {};
  Object.keys(o).forEach((key) => {
    if (key in p) {
      res[key] = o[key];
    }
  });
  return res;
}
