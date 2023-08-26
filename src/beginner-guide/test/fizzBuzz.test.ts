import { describe, it, expect } from 'vitest'
import { fizzBuzz } from '../fizzBuzz'

describe('fizzBuzz', () => {
  it('should return an empty array for n = 0', () => {
    expect(fizzBuzz(0)).toEqual([])
  })

  it('should return an array of strings with length n for n > 0', () => {
    expect(fizzBuzz(1)).toHaveLength(1)
    expect(fizzBuzz(5)).toHaveLength(5)
    expect(fizzBuzz(15)).toHaveLength(15)
  })

  it('should return the correct values for multiples of 3', () => {
    const res = fizzBuzz(9)
    expect(res[2]).toBe('Fizz')
    expect(res[5]).toBe('Fizz')
    expect(res[8]).toBe('Fizz')
  })

  it('should return the correct values for multiples of 5', () => {
    const res = fizzBuzz(10)
    expect(res[4]).toBe('Buzz')
    expect(res[9]).toBe('Buzz')
  })

  it('should return the correct values for multiples of 3 and 5', () => {
    const res = fizzBuzz(15)
    expect(res[14]).toBe('FizzBuzz')
  })

  it('should return the correct values for non-multiples of 3 or 5', () => {
    const res = fizzBuzz(7)
    expect(res[0]).toBe('1')
    expect(res[1]).toBe('2')
    expect(res[3]).toBe('4')
    expect(res[6]).toBe('7')
  })
})
