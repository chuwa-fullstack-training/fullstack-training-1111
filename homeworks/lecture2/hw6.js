// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    return Math.max(...list)
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    list.reverse()
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    let numOccur = list.reduce((acc, ele) => {
      return ele === element ? acc + 1 : acc
    }, 0)
    return numOccur >= 2
}