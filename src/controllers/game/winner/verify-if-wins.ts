import { winnerMoviments } from '../../../constants/options'
import { generateCombinations } from '../tools/generate-combinations'

export const verifyIfWins = (competitor: number[]): boolean => {
  const arrayCompetitor = []
  for (const element of competitor) {
    arrayCompetitor.push(`${element}`)
  }
  const combinations = generateCombinations(arrayCompetitor)

  return combinations.filter(element => winnerMoviments.includes(element)).length > 0
}
