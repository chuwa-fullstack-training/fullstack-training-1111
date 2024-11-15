/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let key in p) {
        if (key in o){
            o[key] = p[key];
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
    let q = {}
    for (key in o){
        q[key] = o[key];
    }
    for (key in p){
        if (!(key in q)){
            q[key] = p[key];
        }
    }
    return q;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let key in o){
        if (!(key in p)){
            delete o[key];
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
    let q = {}
    for (key in o){
        if (key in p){
            q[key] = o[key];
        }
    }
    return q;
}