/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var hash = {}
  // for (let i = 0; i < nums.length; i++) {
  //   var index = nums.indexOf(nums[i], i + 1)
  //   if (index !== -1 && index - i <= k) {
  //     return true
  //   }
  // }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] >= 0 && i - hash[nums[i]] <= k) return true
    hash[nums[i]] = i
  }
  return false
};
// @lc code=end

