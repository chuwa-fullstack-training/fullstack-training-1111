// closure
function counter() {
    // implement here
    let sum = 0; // encapsulation, can not be accesed outside of this function
    return function(num){ // closure
        if (num !== undefined){
            sum += num;    
        }
        return sum;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8
/*
Closures work by capturing variables from their parent function's scope. 
When the parent function is called with arguments, those arguments are treated as local variables within the parent function's scope. 
The closure (inner function) can then access these arguments just like any other variable in the scope.
*/