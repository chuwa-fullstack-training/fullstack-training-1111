// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  return Math.max(...list);
}

function largestElement(list) {
  let element = list[0];
  for (let item of list) {
    element = Math.max(item, element);
  }
  return element;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  return [...list].reverse();
}

function reverseList(list) {
  let left = 0,
    right = list.length - 1;
  while (left < right) {
    const temp = list[left];
    list[left] = list[right];
    list[right] = temp;

    left++;
    right--;
  }
  return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  const map = new Map();
  for (let item of list) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  return map.get(element) > 1;
}

function checkTwic(list, element) {
  let count = 0;
  for (let item of list) {
    if (item === element) count++;
    if (count > 1) return true;
  }
  return false;
}
