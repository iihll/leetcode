class ListNode {
  constructor(val, next) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

let node1 = new ListNode(1, null)

let head = new ListNode(0, node1)

console.log(head)

while(head.next) {
  head = head.next
}

console.log(head)


