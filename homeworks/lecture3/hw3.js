function counter() {
    // implement here
    let totle=0;
    return function(value){
        if(value!==undefined){
            totle+=value;
            return totle
        }
    };
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8