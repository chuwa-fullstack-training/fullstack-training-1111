// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let max = Number.NEGATIVE_INFINITY;
    let len = list.length;

    for (let i = 0; i < len; i++) {
        if (list[i] > max) {
            max = list[i]
        }
    }

    return max
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let ans = [];
    let len = list.length;

    for (let i = len - 1; i >= 0; i--) {
        ans.push(list[i])
    }

    return ans
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0;
    let len = list.length;

    for (i = 0; i < len; i++) {
        if (list[i] === element) {
            count++;
        }
    }

    if (count >= 2) {
        return true
    } else return false
}