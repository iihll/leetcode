/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0]

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const current = nums.slice(j, j + i).reduce((pre, cur) => pre + cur)
      if (current > max) {
        max = current
      }
    }
  }

  return max
}
// @lc code=end
