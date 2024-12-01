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
  let i = 0;
  let j = str.length-1;

  while(i<j){
    const temp = str[i];  
    str[i] = str[j];
    str[j] = temp;
    i++;
    j--;
  }
  return str;
}

const input = 'the sky is blue'.split(' '); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));