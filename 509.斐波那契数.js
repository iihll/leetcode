/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n < 2) {
    return n
  }
  let count = 2
  let x = 0, y = 1, z = x + y
  while(count < n) {
    x = y
    y = z
    z = x + y
    count++
  }
  return z
};
// @lc code=end

