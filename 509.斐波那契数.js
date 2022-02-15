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
  // if(n < 2) {
  //   return n
  // }
  // let count = 2
  // let x = 0, y = 1, z = x + y
  // while(count < n) {
  //   x = y
  //   y = z
  //   z = x + y
  //   count++
  // }
  // return z
  const sqrt5 = Math.sqrt(5)
  const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n)
  return Math.round(fibN / sqrt5)
};
// @lc code=end

