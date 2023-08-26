import { describe, expect, it } from 'vitest'
import { runningSumA, runningSumB } from '../runningSum'

describe('runningSum', () => {
  it('should return the running sum of the array', () => {
    expect(runningSumA([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
    expect(runningSumA([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5])
    expect(runningSumA([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17])
  })

  it('should return the running sum of the array for alternative implementation', () => {
    expect(runningSumB([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
    expect(runningSumB([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5])
    expect(runningSumB([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17])
  })
})
