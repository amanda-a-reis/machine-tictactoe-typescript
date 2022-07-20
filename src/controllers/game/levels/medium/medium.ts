import easy from '../easy'
import { betterOption } from './better-option'

export const medium = (movementsDone: number[], user: number[], machine: number[]): number => {
  const machineWins = betterOption(movementsDone, machine)
  const userWins = betterOption(movementsDone, user)

  if (machineWins) return machineWins[0]
  if (userWins) return userWins[0]

  return easy(movementsDone)
}

export default medium
