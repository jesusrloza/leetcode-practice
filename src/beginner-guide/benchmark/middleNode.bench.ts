import { bench, describe } from 'vitest'
import { middleNodeA, middleNodeB, ListNode } from '../middleNode'

describe('runningSum', () => {
  const reps = 1_000_000

  bench('middleNode A', () => {
    for (let i = 0; i < reps; i++) {
      let head: ListNode | null
      middleNodeA(null)

      head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
      middleNodeA(head)

      head = new ListNode(1)
      middleNodeB(head)
    }
  })

  bench('middleNode B', () => {
    for (let i = 0; i < reps; i++) {
      let head: ListNode | null
      middleNodeB(null)

      head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
      middleNodeB(head)

      head = new ListNode(1)
      middleNodeB(head)
    }
  })
})
