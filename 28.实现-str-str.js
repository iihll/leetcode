/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const needleLen = needle.length

  const arr = haystack.split('')

  let ans = -1

  if (!haystack.length && !needle.length) {
    ans = 0
    return ans
  }

  for(let i = 0; i < arr.length; i++) {
    if (haystack.substr(i, needleLen) === needle) {
      ans = i
      break
    }
  }

  return ans
}
// @lc code=end
