import { bench, describe } from 'vitest'
import { canConstructA, canConstructB } from '../canConstruct'

describe('runningSum', () => {
  const reps = 100_000

  bench('canConstruct A', () => {
    for (let i = 0; i < reps; i++) {
      canConstructA(
        `we have your dog`,
        `we have your dog's best interest in mind, call now for a discount on your dog's health insurance`
      )
    }
  })

  bench('canConstruct B', () => {
    for (let i = 0; i < reps; i++) {
      canConstructB(
        `we have your dog`,
        `we have your dog's best interest in mind, call now for a discount on your dog's health insurance`
      )
    }
  })
})
