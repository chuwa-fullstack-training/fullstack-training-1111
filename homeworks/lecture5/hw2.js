/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */

function reverseArr(arr){
  let i = 0, j = arr.length - 1
  while(i < j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j-- 
  }
  return arr
}


function reverseWords(str) {
  // your code here
  reversedStr = reverseArr(str).join('')
  let res = []
  for(word of reversedStr.split(" ")){
    word = reverseArr(word.split('')).join('')
    res.push(word)
  }

  return res.join(' ')
}



const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input))