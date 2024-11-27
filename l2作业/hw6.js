// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let nums=Array.form(list);
    let max=0;
    for(let i=0;i<nums.length;i++){
    	if(nums[i]>max){
    		max=nums[i];
    	}
    }
    return max;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let nums=Array.form(list);
   let start=0; let end=nums.length-1;
   	while(start<end){
   		[nums[start],nums[end]]=[nums[end],nums[start]];
   		start++;
   		end--;
   	}
   	return arraytoLinkedList(nums);
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    	let nums=Array.form(list);
    	let count=0;
    	for(let i=0;i<nums.length;i++){
    		if(nums[i]==element){
    			count++;
    		}
    	}
    	if(count>=2){return true;}
    	return false;
}