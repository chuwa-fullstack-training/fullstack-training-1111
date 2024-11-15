// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let result=list[0];
    for(let i =0 ; i<list.length;i++){
        if (list[i] > result) {
            result = list[i];
        }
    }
    return result;
    }

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let left = 0;
    let right = list.length - 1;
    while (left < right) {
        let temp = list[left];
        list[left] = list[right];
        list[right] = temp;
        left++;
        right--;
    }
    return list;



}

// 3. Write a function that checks whether an element occurs at least twice in a list.

function checkTwice(list, element) {
    // implement your code here
    let cont=0;
    for(let i =0 ; i<list.length;i++){     
    if(list[i]===element){
        cont++;
        if (cont >= 2) {
            return true; 
        }
    }
}
return false;

}
