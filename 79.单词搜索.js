/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const h = board.length, w = board[0].length
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const visited = new Array(h)
};
// @lc code=end

