function counter() {
    // implement here
    var count_result = 0;

    num = arguments;

    function count(num) {
        if (!num) {
            getResult();
        }else {
            count_result += num;
            getResult();
        }
    }

    function getResult() {
        console.log(count_result)
    }

    return count(num)
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8