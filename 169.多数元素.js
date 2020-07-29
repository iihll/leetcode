/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let hash = {}
  let max = -1
  let maxKey = 0
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = 0
    } else {
      hash[nums[i]]++
    }
  }
  for (const key in hash) {
    if (hash.hasOwnProperty(key)) {
      const el = hash[key];
      if (el > max) {
        max = el
        maxKey = key
      }
    }
  }
  return maxKey
};
// @lc code=end

