import { bench, describe } from 'vitest'
import { fizzBuzz } from '../fizzBuzz'

describe('runningSum', () => {
  const reps = 1_000_000

  bench('fizzBuzz', () => {
    for (let i = 0; i < reps; i++) {
      fizzBuzz(15)
    }
  })
})
