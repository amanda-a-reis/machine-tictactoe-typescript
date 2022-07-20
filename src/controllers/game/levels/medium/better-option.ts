import { options } from '../../../../constants/options'
import { verifyIfWins } from '../../winner/verify-if-wins'

export const betterOption = (movementsDone: number[], competitor: number[]): number => {
  return options.filter(element => !movementsDone.includes(element)).filter(element => verifyIfWins([...competitor, element]))[0]
}
