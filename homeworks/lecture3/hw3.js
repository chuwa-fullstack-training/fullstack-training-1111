function counter() {
    // implement here
    var count_result = 0;

    return function(num) {
        if (num) {
            count_result += num;
        }
        return count_result
    }

}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8