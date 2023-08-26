//* 1672. Richest Customer Wealth

export function maximumWealthA(accounts: number[][]): number {
  let maxWealth = 0
  for (let i = 0; i < accounts.length; i++) {
    const wealth = accounts[i].reduce((a, b) => a + b, 0)
    if (wealth > maxWealth) maxWealth = wealth
  }
  return maxWealth
}

export function maximumWealthB(accounts: number[][]): number {
  let maxWealth = 0
  for (let i = 0; i < accounts.length; i++) {
    const wealth = accounts[i].reduce((a, b) => a + b, 0)
    maxWealth = Math.max(maxWealth, wealth)
  }
  return maxWealth
}
