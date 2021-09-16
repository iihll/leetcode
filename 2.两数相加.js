/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1_str = String(l1.val)
  let l2_str = String(l2.val)

  while (l1.next) {
    l1_str += l1.next.val
    l1 = l1.next
  }

  while (l2.next) {
    l2_str += l2.next.val
    l2 = l2.next
  }

  let l1_num = Number(l1_str.split('').reverse().join(''))
  let l2_num = Number(l2_str.split('').reverse().join(''))

  let sum = String(l1_num + l2_num).split('')

  // 返回链表
  let result
  sum.forEach(num => {
    if(result) {
      result.next = new ListNode(num)
    } else {
      result = new ListNode(num, null)
    }
  })
  

  return 
}
// @lc code=end
