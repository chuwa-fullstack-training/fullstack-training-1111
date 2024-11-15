// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  if (list.length === 0) throw new Error("list is empty.");

  let largest = list[0];
  for (let item of list) {
    if (item > largest) largest = item;
  }
  return largest;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  for (let i = 0, j = list.length - 1; i < j; ++i, --j) {
    let tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
  }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  let cnt = 0;
  for (let item of list) {
    if (item === element) cnt++;
    if (cnt === 2) return true;
  }
  return false;
}
