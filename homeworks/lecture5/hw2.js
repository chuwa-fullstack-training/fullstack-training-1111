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
  let stack = [];
  let word = '';
  let len = str.length;
  
  for (let i = 0; i < len; i++) {
    if (str[i] !== ' ') {
      word = word + str[i]
    }else {
      stack.push(word)
      word = ''
    }
    if (i === len - 1) {
      stack.push(word)
    }
  }

  let ans = '';
  let lenStack = stack.length;
  for (let i = lenStack - 1; i >= 0; i--) {
    ans += stack[i];
    ans += " ";
    stack.pop();
  }

  return ans;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
const input2 = 'Dancing in the rain'.split(''); // ['D', 'a', 'n', 'c', 'i', 'n', 'g', ' ', 'i', 'n', ' ', 't', 'h', 'e', ' ', 'r', 'a', 'i', 'n']
console.log(reverseWords(input));
console.log(reverseWords(input2));