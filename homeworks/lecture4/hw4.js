/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 *
 */
const intersection = (nums1, nums2) => {
  // Your solution here
  const len1 = nums1.length, len2 = nums2.length;
  let obj ={};

  for (let i = 0; i < len1; i++) {
    obj[nums1[i]] = 1
  }

  let ans = {}
  
  for (let i = 0; i < len2; i++) {
    if (nums2[i] in obj && !(nums2[i] in ans)) {
      ans[nums2[i]] = 1
    }
  }

  return Object.keys(ans).map((ch) => parseInt(ch))
};

let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersection(nums1, nums2))
