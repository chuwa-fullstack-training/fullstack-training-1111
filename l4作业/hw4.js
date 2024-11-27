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
const intersection = (n1, n2) => {
  // Your solution here
    let n1=[1,2,3];
    let n2=[3,4];
    let set=new Set();
    let set2=new Set();
    for(var i=0;i<n1.length;i++){
        set.add(n1[i]);
    }
    for(var i=0;i<n2.length;i++){
        if(set.has(n2[i])){
             set2.add(n2[i]);
        }
       
    }
    var res=[...set2];
    for(var i=0;i<res.length;i++){
    console.log(res[i]);
    }
    return res;
};

