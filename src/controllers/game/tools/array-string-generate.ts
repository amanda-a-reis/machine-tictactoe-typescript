import { generateCombinations } from './generate-combinations'

export const generateArrayOfStringCombinations = (array: number[]): string[] => {
  const arrayCompetitor = []
  for (const element of array) {
    arrayCompetitor.push(`${element}`)
  }
  return generateCombinations(arrayCompetitor)
}
