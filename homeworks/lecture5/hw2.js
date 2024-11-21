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
  let reversedArr = []
  let lastWord = str.reduce((acc, ch) => {
    if (ch !== ' ')   return acc.concat(ch)
    else {
      reversedArr.push(acc)
      return ''
    }   
  }, '')

  if (lastWord !== ' ') {
    reversedArr.push(lastWord);
  }

  return reversedArr.reverse().join(' ')
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);