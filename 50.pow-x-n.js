/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 分治
var myPow = function(x, n) {
  // n === 0 直接返回 1
  if(n === 0) return 1
  // n < 0 x 的 n 次方等于 1 除以 x 的 -n 次方
  if(n < 0) {
    return 1 / myPow(x, -n)
  }
  // n 是奇数时 x 的 n 次方等于 x * x 的 n - 1 次方
  if(n % 2) {
    return x * myPow(x, n - 1)
  }
  // n 是偶数，使用分治，一分为二，等于 x * x 的 n / 2 次方
  return myPow(x * x, n / 2)
};
// @lc code=end

