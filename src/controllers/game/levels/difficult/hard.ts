import { calculateBetterOptions } from './calculate-b-op'
import { calculatePoints } from '../../tools/calculate-points'
import { firstWin } from './first-win'
import { verifyIfWins } from '../../winner/verify-if-wins'

export const hard = (movementsDone: number[], user: number[], machine: number[]): number => {
  const betterOptionsUser = calculateBetterOptions(movementsDone, user)
  const betterOptionsMachine = calculateBetterOptions(movementsDone, machine)

  const winning = firstWin(betterOptionsUser, betterOptionsMachine, user, machine)

  if (winning !== undefined) return winning

  const pointsMachine = betterOptionsMachine.flatMap(el => {
    return betterOptionsMachine.filter(win => verifyIfWins([...machine, +win, +el]))
  })
  const pointsUser = betterOptionsUser.flatMap(el => {
    return betterOptionsUser.filter(win => verifyIfWins([...user, +win, +el]))
  })

  if (pointsMachine.length > 0) return calculatePoints(pointsMachine)
  if (pointsUser.length > 0) return calculatePoints(pointsUser)
}
