/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // for (let i = 0; i < nums.length + 1; i++) {
  //   if (nums.indexOf(i) === -1) {
  //     return i
  //   }
  // }
  let len = nums.length
  let sum = (len * (len + 1)) / 2
  let sum1 = nums.reduce((a, b) => a + b)
  return sum - sum1
};
// @lc code=end

