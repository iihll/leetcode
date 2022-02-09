/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if(x === 0) return 0
  let ans = Math.exp(0.5 * Math.log(x))
  return (ans + 1) * (ans + 1) <= x ? ans + 1 : ans
}
// @lc code=end
