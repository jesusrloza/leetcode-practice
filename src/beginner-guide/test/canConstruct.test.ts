import { describe, it, expect } from 'vitest'
import { canConstructA, canConstructB } from '../canConstruct'

/* cSpell:disable */
describe('canConstruct A', () => {
  it('should return true if ransomNote can be constructed from magazine', () => {
    expect(canConstructA('a', 'a')).toBe(true)
    expect(canConstructA('aa', 'aab')).toBe(true)
    expect(canConstructA('abc', 'abdc')).toBe(true)
    expect(canConstructA('aaabbb', 'aababb')).toBe(true)
  })

  it('should return false if ransomNote cannot be constructed from magazine', () => {
    expect(canConstructA('a', 'b')).toBe(false)
    expect(canConstructA('aa', 'ab')).toBe(false)
    expect(canConstructA('abc', 'abd')).toBe(false)
    expect(canConstructA('aaabbb', 'aabbbb')).toBe(false)
  })

  it('should return true if ransomNote is an empty string', () => {
    expect(canConstructA('', 'abc')).toBe(true)
    expect(canConstructA('', '')).toBe(true)
  })

  it('should return false if magazine is an empty string and ransomNote is not', () => {
    expect(canConstructA('a', '')).toBe(false)
    expect(canConstructA('abc', '')).toBe(false)
  })
})
describe('canConstruct B', () => {
  it('should return true if ransomNote can be constructed from magazine', () => {
    expect(canConstructB('a', 'a')).toBe(true)
    expect(canConstructB('aa', 'aab')).toBe(true)
    expect(canConstructB('abc', 'abdc')).toBe(true)
    expect(canConstructB('aaabbb', 'aababb')).toBe(true)
  })

  it('should return false if ransomNote cannot be constructed from magazine', () => {
    expect(canConstructB('a', 'b')).toBe(false)
    expect(canConstructB('aa', 'ab')).toBe(false)
    expect(canConstructB('abc', 'abd')).toBe(false)
    expect(canConstructB('aaabbb', 'aabbbb')).toBe(false)
  })

  it('should return true if ransomNote is an empty string', () => {
    expect(canConstructB('', 'abc')).toBe(true)
    expect(canConstructB('', '')).toBe(true)
  })

  it('should return false if magazine is an empty string and ransomNote is not', () => {
    expect(canConstructB('a', '')).toBe(false)
    expect(canConstructB('abc', '')).toBe(false)
  })
})
