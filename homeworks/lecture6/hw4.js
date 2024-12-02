/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
/**
 * / and /g : demote start and end of regular expression， The g flag stands for "global," meaning the regex will be applied to all matches in the input string, not just the first.
 * \B: Matches a position that is not a word boundary, ensures that the match happens inside a number and not at its start or end
 * (?= ): positive lookahead that checks if a certain pattern follows, without including it in the match.
 * (\d{3})+: Matches one or more groups of exactly 3 digits
 * (?!\d): negative lookahead that ensures no additional digits follow
*/

// example usage
num1 = 12345678
num2 = 1234.56


console.log(format(num1)); // Output: 12,345,678
console.log(format(num2)); // Output: 1,234.56
