function counter() {
    // implement here
    let value=0;
return function (plus){
    if (plus==undefined){
        return value;
    }
value=value+plus;
return value;
}



}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8