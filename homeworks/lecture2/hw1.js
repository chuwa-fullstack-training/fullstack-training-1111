const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 3, d: 4 };
/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for(let key in p){
        o[key] = p[key];
    }
    return o;
}

const res = extend(obj1, obj2);
console.log(res);
/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    const newObj = {};
    for(let key in p){
        newObj[key] = p[key];
    }
    for(let key in o){
        newObj[key] = o[key];
    }
    return newObj;
}
const res2 = union(obj1, obj2);
console.log(res2);

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for(let key in o){
        if(!p.hasOwnProperty(key)){
            delete o[key];
        }
    }
    return o;
}
const res3 = restrict(obj1, obj2);
console.log(res3);

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    const newObj = {};
    for(let key in o){
        if(p.hasOwnProperty(key)){
            newObj[key] = o[key];
        }
    }
    return newObj;
}

