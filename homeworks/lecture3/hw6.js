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
  let mapping = {}  // element as key, frequency as value
  let res = 0

  for (const num of nums) {
    if (mapping.hasOwnProperty(num)) {
      let freq = mapping[num]
      res += freq
      mapping[num] = freq + 1
    } else {
      mapping[num] = 1
    }
  }
  return res
}

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  let arr = s.toLowerCase().split('')
  let removedArr = arr.filter((ele) => ele !== 'a' && ele !== 'e' && ele !== 'i' && ele !== 'o' && ele !== 'u')
  return removedArr.join('')
}
