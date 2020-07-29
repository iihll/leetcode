/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // nums.forEach((item, index) => {
    //     var tmp = nums.indexOf(target - item)
    //     if (tmp !== -1 && index !== tmp) {
    //         console.log([index, tmp])
    //         return [index, tmp]
    //     }
    // })
    for (var i = 0; i < nums.length; i++) {
        var tmp = nums.indexOf(target - nums[i])
        if (tmp !== -1 && tmp !== i) {
            return [i, tmp]
        }
    }
};
// @lc code=end

