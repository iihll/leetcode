/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for (let i = 0 ; i < k; i++) {
    let last = nums.pop()
    nums.unshift(last)
  }
  // const tmp = nums.slice(-k)
  // nums.splice(-k)
  // nums.unshift(...tmp)
};
// @lc code=end

