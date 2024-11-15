// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let max = Number.NEGATIVE_INFINITY
    for(let num of list){
        if(num > max){
            max = num
        }
    }

    return max
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let left = 0
    let right = list.length - 1

    while(left < right){
        temp = list[left]
        list[left] = list[right]
        list[right] = temp
        left++
        right--
    }

    return list
}

// console.log(reverseList([1,2,3,4,5,6,7,8,9]))

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0
    for(let num of list){
        if(num === element){
            count++
            if(count === 2){
                return true
            }
        }
    }

    return false
}

// console.log(checkTwice([1,1,2,2,2,3,4,5], 4))