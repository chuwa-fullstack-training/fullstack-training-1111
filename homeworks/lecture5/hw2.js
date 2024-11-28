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
  str.reverse();
  for (let i = 0, j = 0; j <= str.length; ++j) {
    if (j === str.length || str[j] === ' ') {
      for (let l = i, r = j - 1; l < r; r--, l++) {
        [str[l], str[r]] = [str[r], str[l]];
      }
      i = j + 1;
    }
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join(''));
