import { bench, describe } from 'vitest'
import { maximumWealthA, maximumWealthB } from '../maximumWealth'

describe('runningSum', () => {
  const reps = 1_000_000

  bench('maximumWealth A', () => {
    for (let i = 0; i < reps; i++) {
      maximumWealthA([
        [1, 5],
        [7, 3],
        [3, 5],
      ])
    }
  })

  bench('maximumWealth B', () => {
    for (let i = 0; i < reps; i++) {
      maximumWealthB([
        [1, 5],
        [7, 3],
        [3, 5],
      ])
    }
  })
})
