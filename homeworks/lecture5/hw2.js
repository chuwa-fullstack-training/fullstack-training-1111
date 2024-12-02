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
  let j = str.length - 1;
  while (i < j) {
    let tmp = str[i];
    str[i] = str[j];
    str[j] = tmp;
    ++ i;
    -- j;
  }
  i = 0;
  j = 0;
  while (i < str.length) {
    while (i < str.length && str[i] !== ' ') ++ i;
    let tmp = i;
    -- i;
    while (j < i) {
      let tmp = str[i];
      str[i] = str[j];
      str[j] = tmp;
      -- i;
      ++ j;
    }
    i = tmp + 1;
    j = tmp + 1;
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);