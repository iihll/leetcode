class ListNode {
  constructor(val, next) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

const l1 = {
  val: 1,
  next: {
    val: 3,
    next: null
  }
}

const l2 = {
  val: 4,
  next: {
    val: 2,
    next: null
  }
}

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

  console.log(l1_num, l2_num)

  return l1_num + l2_num
}

console.log(addTwoNumbers(l1, l2))
