// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let largestElem = Number.MIN_VALUE;
    for (let element of list) {
        largestElem = Math.max(largestElem, element);
    }
    return largestElem;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let i = 0;
    let j = list.length - 1;
    while (i < j) {
        let tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
        ++ i;
        -- j;
    }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let occurs = 0;
    for (elem of list) {
        if (elem === element) {
            ++ occurs;
        }
    }
    return occurs >= 2;
}