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
  const reverse = (arr, l , r) => {

    while (l < r){
      let temp = arr[l]
      arr[l] = arr[r]
      arr[r] = temp
      l++
      r--
    }
  }
  reverse(str, 0 , str.length - 1);
  
  let start = 0;
  for (let end = 0; end <= str.length; end++) {
    if (str[end] === ' ' || end === str.length){
      reverse(str, start, end - 1);
      start = end + 1;
    }
  }

}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join('')); 