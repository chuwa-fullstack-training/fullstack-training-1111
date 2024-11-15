/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
{
function extend(o, p) {
  
    for(prop in p){
        if(p.hasOwnProperty(prop)){
        o[prop] = p[prop];
        }
    }
    return o;

    }
    var p = {id: '1'}
    var o = {id:'2' }

    console.log(extend(o,p));
    console.log(o);
    console.log(p);

    // implement your code here
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
{
function union(o, p) {
    // implement your code here
   
    let obj ={};
    for (prop in p) {
        if (p.hasOwnProperty(prop)) {
            obj[prop] = p[prop];
        }
    }

    for (prop in o) {
        if (o.hasOwnProperty(prop)) {
            obj[prop] = o[prop];
        }
    }
    return obj;

}
var p = {id: '1', ad:'ad'}
var o = {id:'2' }
console.log(union(o,p));
console.log(o);
console.log(p);
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
{
function restrict(o, p) {
    // implement your code here
    for (var prop in o) {
        if (o.hasOwnProperty(prop) && !p.hasOwnProperty(prop)) {
                delete o[prop];
            }
        }
        return o;
}
var p = {id: '1', ad:'ad'}
var o = {id:'2' , qqq:'acd'}
console.log(restrict(o,p));
console.log(o);
console.log(p);

}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
{
function intersection(o, p) {
    // implement your code here
    var obj = {};
    for (var prop in o) {
        if (o.hasOwnProperty(prop) && p.hasOwnProperty(prop)) {
                obj[prop]= o[prop];
            }
        }
        return obj;
}
var p = {id: '1', ad:'ad'}
var o = {id:'2' , qqq:'acd'}
console.log(intersection(o,p));
console.log(o);
console.log(p);

}