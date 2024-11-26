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
    // can i use arror here? oh yes
    const reverse = (s, l ,r) => {
        while(l < r) {
            [s[l++], s[r--]] = [s[r], s[l]];  // must change at left after assigning
        }
    }

    reverse(str, 0, str.length - 1);

    let start = 0;
    for(let i = 0; i <= str.length; i++) {
        if(str[i] === ' ' || i === str.length) {
            reverse(str, start, i - 1);
            start = i + 1;
        }
    }

    return str;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input).join(''));

