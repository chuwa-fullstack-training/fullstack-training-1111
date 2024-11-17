// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (list.length===0){
        return null;
    }
    let largest=list[0];
    for(let i=1;i<list.length;i++){
        if (list[i]>largeEle){
            largest=list[i];
        }
    }
    return largest;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let l=0, r=list.length-1;
    while (l<r){
        let temp=list[l];
        list[l]=list[r];
        list[r]=temp;
        l++;
        r--;
    } 
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count=0;
    for(let i=0;i<list.length;i++){
        if(list[i]===element){
            count++;
            if (count>=2){
                return true
            }
        }
    }
    return false
}

