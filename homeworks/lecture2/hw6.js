// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  let num = 0;
  list.forEach((element) => {
    if (element > num) {
      num = element;
    }
  });
  return num;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  let newList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    const element = list[i];
    newList.push(element);
  }
  return newList;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  // implement your code here
  let num = 0;
  list.forEach((x) => {
    if (x === element) {
      num += 1;
    }
  });
  return num >= 2;
}
