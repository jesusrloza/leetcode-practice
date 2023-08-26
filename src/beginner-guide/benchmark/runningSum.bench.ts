import { bench, describe } from 'vitest'
import { runningSumA, runningSumB } from '../runningSum'

describe('runningSum', () => {
  const reps = 1_000_000

  bench('runningSum A', () => {
    for (let i = 0; i < reps; i++) {
      runningSumA([1, 2, 3, 4])
    }
  })

  bench('runningSum B', () => {
    for (let i = 0; i < reps; i++) {
      runningSumB([1, 2, 3, 4])
    }
  })
})
