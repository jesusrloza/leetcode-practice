//* 1480. Running Sum of 1d Array

export function runningSumA(nums: number[]): number[] {
  let sum = 0
  return nums.map((n) => (sum += n))
}

//! this approach mutates nums
export function runningSumB(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
}
