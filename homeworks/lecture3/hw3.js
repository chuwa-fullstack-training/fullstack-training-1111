function counter() {
  let cnt = 0;
  return (num = 0) => {
    cnt += num;
    return cnt;
  };
}

let count = counter();
console.log(count(3)); // Output: 3
console.log(count(5)); // Output: 8 (3 + 5)
console.log(count()); // Output: 8
