/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    for (let key of Object.keys(p)){
        o[key] = p[key]
    }

    return o
}

// extend({a: 1, b:2, c:3}, {a: 3, b:2, c:1, d:9})

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    let newObj = {}
    
    for (let key of Object.keys(o)){
        newObj[key] = o[key]
    }

    for (let key of Object.keys(p)){
        if(!key in newObj){
            newObj[key] = p[key]
        }
    }

    return newObj

}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    for (let key of Object.keys(o)){
        if(!key in p){
            delete o[key]
        }
    }

    return o

}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let newObj = {}
    for (let key of Object.keys(o)){
        if(key in p){
            newObj[key] = o[key]
        }
    }

    return newObj
}