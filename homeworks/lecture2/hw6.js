// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if(list.length == 0) {
        throw new Error('Empty list');
    }
    var max = list[0];
    for(let n of list) {
        if(n > max) max = n;
    }
    return max;
}

// console.log(largestElement([1, -3, 5, -7, 9, 0]));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    for(let i = 0, j = list.length - 1; i < j; i++, j--) {
        list[i] = list[i] ^ list[j];
        list[j] = list[i] ^ list[j];
        list[i] = list[i] ^ list[j];
    }
    return list;
}

function reverseList2(list) {
    for(let i = 0, j = list.length - 1; i < j; i++, j--) {
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}
// console.log(reverseList2([1, 3, 5, 7, 9, 11]));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    var accur = 0;
    for(let i = 0; i < list.length; i++) {
        if(list[i] == element) {
            accur++;
        }
        if(accur == 2) {
            return true;
        }
    }
    return false;
}

function checkTwice2(list, element){
    var accur = 0;
    list.forEach(item => {
        if(item == element) {
            accur++;
        }
    })
    return accur >= 2;
}

function checkTwice3(list, element) {
    return list.filter(item => item == element).length >= 2;
}

console.log(checkTwice3([1,3,5,7,9,3], 2));
console.log(checkTwice3([1,3,5,7,9,3], 3));
