import { bench, describe } from 'vitest'
import { numberOfStepsA, numberOfStepsB } from '../numberOfSteps'

describe('runningSum', () => {
  const reps = 1_000_000

  bench('numberOfSteps A', () => {
    for (let i = 0; i < reps; i++) {
      numberOfStepsA(7)
    }
  })
  bench('numberOfSteps B', () => {
    for (let i = 0; i < reps; i++) {
      numberOfStepsB(7)
    }
  })
})
