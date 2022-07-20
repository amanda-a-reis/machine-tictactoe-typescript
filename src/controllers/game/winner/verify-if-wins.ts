import { winnerMoviments } from '../../../constants/options'
import { generateArrayOfStringCombinations } from '../tools/array-string-generate'

export const verifyIfWins = (competitor: number[]): boolean => {
  const combinations = generateArrayOfStringCombinations(competitor)
  return combinations.filter(element => winnerMoviments.includes(element)).length > 0
}
