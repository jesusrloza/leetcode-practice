import { describe, it, expect } from 'vitest'
import { ListNode, middleNodeA, middleNodeB } from '../middleNode'

describe('middleNode A', () => {
  it('should return null for an empty list', () => {
    expect(middleNodeA(null)).toBe(null)
  })

  it('should return the middle node for a list with odd length', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
    expect(middleNodeA(head)).toEqual(new ListNode(3, new ListNode(4, new ListNode(5))))
  })

  it('should return the second middle node for a list with even length', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))
    )

    expect(middleNodeA(head)).toEqual(new ListNode(4, new ListNode(5, new ListNode(6))))
  })

  it('should return the only node for a list with length 1', () => {
    const head = new ListNode(1)
    expect(middleNodeA(head)).toEqual(new ListNode(1))
  })
})

describe('middleNode B', () => {
  it('should return null for an empty list', () => {
    expect(middleNodeB(null)).toBe(null)
  })

  it('should return the middle node for a list with odd length', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
    expect(middleNodeB(head)).toEqual(new ListNode(3, new ListNode(4, new ListNode(5))))
  })

  it('should return the second middle node for a list with even length', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))
    )

    expect(middleNodeB(head)).toEqual(new ListNode(4, new ListNode(5, new ListNode(6))))
  })

  it('should return the only node for a list with length 1', () => {
    const head = new ListNode(1)
    expect(middleNodeB(head)).toEqual(new ListNode(1))
  })
})
