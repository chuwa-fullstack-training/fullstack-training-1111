/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]  Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
 *
 * Example 2:
 * Input: nums = [1,1,1,1]  Output: 6
 * Explanation: Each pair in the array are good.
 *
 * Example 3:
 * Input: nums = [1,2,3]    Output: 0
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */
function numIdenticalPairs(nums) {
  // implement here
  var count=0;
  for(let i=0;i<nums.length-1;i++){
  	for(let j=i+1;j<nums.length;j++){
  		if(nums[i]==nums[j]){
  			count++;
  		}
  	}
  }
  return count;
}

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  // 使用正则表达式匹配所有元音字母（不区分大小写），并替换为空字符串,g: 全局匹配，替换所有出现的元音。i: 不区分大小写
  return s.replace(/[aeiou]/gi, '');
}
