//* 1342. Number of Steps to Reduce a Number to Zero

export function numberOfStepsA(num: number): number {
  let steps = 0
  while (num > 0) {
    if (num % 2 === 0) num /= 2
    else num -= 1
    steps++
  }
  return steps
}

// bitwise operations approach
export function numberOfStepsB(num: number): number {
  let steps = 0
  while (num > 0) {
    steps += num & 1 ? 2 : 1 // odd adds 2 steps, even adds 1
    num >>= 1 // dividing by 2 and discarding the remainder
  }
  // last step (num === 1) adds two steps, so subtract 1
  return Math.max(steps - 1, 0)
}
