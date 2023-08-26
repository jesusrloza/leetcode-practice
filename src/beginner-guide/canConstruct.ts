//* 383. Ransom Note

export function canConstructA(ransomNote: string, magazine: string): boolean {
  let canConstruct = true
  ransomNote.split('').forEach((char) => {
    if (!magazine.includes(char)) canConstruct = false
    magazine = magazine.replace(char, '')
  })
  return canConstruct
}

export function canConstructB(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false

  let i = 0
  while (i < ransomNote.length) {
    const char = ransomNote.charAt(i)
    if (!magazine.includes(char)) return false
    magazine = magazine.replace(char, '')
    i++
  }
  return true
}
