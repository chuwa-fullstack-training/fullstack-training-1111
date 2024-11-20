function counter() {
    // implement here
    let cnt = 0;

    function inc(n = 0) {
        cnt += n;
        return cnt;
    }

    return inc;
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8
