// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let max = list[0]
    for (let i in list) {
        if (a > max){
            max = a
        }
    }
    return max
}


// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let l = 0
    let r = list.length - 1
    while (l < r){
        temp = list[l]
        list[l] = list[r]
        list[r] = temp
    }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0
    for (let num in list){
        if (num === element){
            count ++
        }
    }

    return count >= 2
}