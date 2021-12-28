/*
 * @lc app=leetcode.cn id=2089 lang=javascript
 *
 * [2089] 找出数组排序后的目标下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
  nums = nums.sort((a, b) => a - b)
  const result = []
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === target) {
      result.push(i)
    }
  }

  return result
};
// @lc code=end

