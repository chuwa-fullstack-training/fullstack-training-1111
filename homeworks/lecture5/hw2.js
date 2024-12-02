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
  str.reverse();
  let start = 0;
  for(let i = 0; i <= str.length; i++){
    if (i === str.length || str[i] === ' '){
      let end = i - 1;
      while (start < end){
        [str[start], str[end]] = [str[end], str[start]];
        start++;
        end--;
      }
      start = i + 1
    }
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);