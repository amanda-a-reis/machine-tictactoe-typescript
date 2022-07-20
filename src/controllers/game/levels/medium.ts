import { options } from '../../../constants/options'
import { verifyIfWins } from '../winner/verify-if-wins'
import easy from './easy'

export const medium = (movementsDone: number[], user: number[], machine: number[]): number => {
  const userWins = options.filter(element => !movementsDone.includes(element)).filter(element => verifyIfWins([...user, element]))
  const machineWins = options.filter(element => !movementsDone.includes(element)).filter(element => verifyIfWins([...machine, element]))

  if (machineWins) return machineWins[0]
  if (userWins) return userWins[0]

  return easy(movementsDone)
}

export default medium
