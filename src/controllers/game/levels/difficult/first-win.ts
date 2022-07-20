import { verifyIfWins } from '../../winner/verify-if-wins'

export const firstWin = (betterOptionsUser: number[], betterOptionsMachine: number[], user: number[], machine: number[]): number => {
  const firstWinsUser = betterOptionsUser.filter(element => verifyIfWins([...user, element]))
  const firstWinsMachine = betterOptionsMachine.filter(element => verifyIfWins([...machine, element]))

  if (firstWinsUser) return firstWinsUser[0]
  if (firstWinsMachine) return firstWinsMachine[0]
  return null
}
