function counter() {
  // implement here
  let countVal = 0;
  return (val) => {
    return val ? (countVal += val) : countVal;
  };
}

let count = counter();
console.log(count(3)); // Output: 3
console.log(count(5)); // Output: 8 (3 + 5)
console.log(count()); // Output: 8
