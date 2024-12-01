/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
  // your code here
  reverse(str, 0, str.length - 1);

  let start = 0;  
  for (let i = 0; i <= str.length; i++) {   
    if (i === str.length || str[i] === ' ') {     
      reverse(str, start, i - 1);
      start = i + 1;  
    }
  }
}


function reverse(arr, left, right) {
  while (left < right) {
     [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}



const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input);