import { describe, it, expect } from 'vitest'
import { maximumWealthA, maximumWealthB } from '../maximumWealth'

describe('maximumWealth', () => {
  it('should return 0 for empty accounts', () => {
    expect(maximumWealthA([])).toBe(0)
  })

  it('should return the maximum wealth for a single customer', () => {
    expect(maximumWealthA([[1, 2, 3]])).toBe(6)
    expect(maximumWealthA([[10]])).toBe(10)
  })

  it('should return the maximum wealth for multiple customers', () => {
    expect(
      maximumWealthA([
        [1, 5],
        [7, 3],
        [3, 5],
      ]),
    ).toBe(10)
  })

  it('should handle negative wealth values', () => {
    expect(
      maximumWealthA([
        [-1, -5],
        [7, -3],
        [3, 5],
      ]),
    ).toBe(8)
  })
})

describe('maximumWealth B', () => {
  it('should return 0 for empty accounts', () => {
    expect(maximumWealthB([])).toBe(0)
  })

  it('should return the maximum wealth for a single customer', () => {
    expect(maximumWealthB([[1, 2, 3]])).toBe(6)
    expect(maximumWealthB([[10]])).toBe(10)
  })

  it('should return the maximum wealth for multiple customers', () => {
    expect(
      maximumWealthB([
        [1, 5],
        [7, 3],
        [3, 5],
      ]),
    ).toBe(10)
  })

  it('should handle negative wealth values', () => {
    expect(
      maximumWealthB([
        [-1, -5],
        [7, -3],
        [3, 5],
      ]),
    ).toBe(8)
  })
})
