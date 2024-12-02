/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
* @param {obj, obj}
* @return {obj}
*/
function extend(o, p) {
    // implement your code here
    for(let k in p) {
        if(p.hasOwnProperty(k)) {
            o[k] = p[k];
        }
    }
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    return Object.assign({}, p, o);
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    const set = new Set();
    for(let k in p) set.add(k);
    for(let k in o) {
        if(!set.has(k)) {
            delete o[k];
        }
    }
    return o;
}

function restrict2(o, p) {
    for(let k in o) {
        if(o.hasOwnProperty(k) && !p.hasOwnProperty(k)) {
            delete o[k];
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
    // implement your code here
    const res = new Object();
    for(let k in o) {
        if(o.hasOwnProperty(k) && p.hasOwnProperty(k)) {
            res[k] = o[k];
        }
    }
    return res;
}

const dog = {
    name: 'Barky',
    age: '2',
    breed: 'Terrier',
    bark: function() {
        console.log('Woof Woof!');
    }
}

const cat = {
    name: 'Streaky',
    age: '1',
    breed: 'Shorthair',
    meow:function() {
        console.log('Meow Meow~');
    }
}

let hybrid = intersection(dog, cat)
console.log(hybrid)

