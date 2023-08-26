//* 876. Middle of the Linked List

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function middleNodeA(head: ListNode | null): ListNode | null {
  if (!head) return null

  let length = 1
  let pointer = head

  while (pointer.next) {
    pointer = pointer.next
    length++
  }

  let i = length & 1 ? (length + 1) / 2 : length / 2 + 1
  while (i > 1) {
    head = head!.next
    i--
  }

  return head
}

export function middleNodeB(head: ListNode | null): ListNode | null {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
  }
  return slow
}

// 1 -> 2 -> 3 -> null
// 1 -> 2 -> 3 -> 4 -> null
