/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let hash = {}
  for (let i = 0; i < numbers.length; i++) {
    if (hash[target - numbers[i]] === undefined) {
      hash[numbers[i]] = i
    } else {
      return [hash[target - numbers[i]] + 1, i + 1]
    }
  }
};
// @lc code=end

