import { describe, it, expect } from 'vitest'
import { numberOfStepsA, numberOfStepsB } from '../numberOfSteps'

describe('numberOfSteps A', () => {
  it('should return 0 for input 0', () => {
    expect(numberOfStepsA(0)).toBe(0)
  })

  it('should return 1 for input 1', () => {
    expect(numberOfStepsA(1)).toBe(1)
  })

  it('should return the correct number of steps for even numbers', () => {
    expect(numberOfStepsA(2)).toBe(2)
    expect(numberOfStepsA(4)).toBe(3)
    expect(numberOfStepsA(8)).toBe(4)
  })

  it('should return the correct number of steps for odd numbers', () => {
    expect(numberOfStepsA(3)).toBe(3)
    expect(numberOfStepsA(5)).toBe(4)
    expect(numberOfStepsA(7)).toBe(5)
  })

  it('should return 0 for input < 0', () => {
    expect(numberOfStepsA(-1)).toBe(0)
    expect(numberOfStepsA(-2)).toBe(0)
    expect(numberOfStepsA(-3)).toBe(0)
  })
})

describe('numberOfSteps B', () => {
  it('should return 0 for input 0', () => {
    expect(numberOfStepsB(0)).toBe(0)
  })

  it('should return 1 for input 1', () => {
    expect(numberOfStepsB(1)).toBe(1)
  })

  it('should return the correct number of steps for even numbers', () => {
    expect(numberOfStepsB(2)).toBe(2)
    expect(numberOfStepsB(4)).toBe(3)
    expect(numberOfStepsB(8)).toBe(4)
  })

  it('should return the correct number of steps for odd numbers', () => {
    expect(numberOfStepsB(3)).toBe(3)
    expect(numberOfStepsB(5)).toBe(4)
    expect(numberOfStepsB(7)).toBe(5)
  })

  it('should return 0 for input < 0', () => {
    expect(numberOfStepsB(-1)).toBe(0)
    expect(numberOfStepsB(-2)).toBe(0)
    expect(numberOfStepsB(-3)).toBe(0)
  })
})
