import { verifyIfWins } from '../winner/verify-if-wins'

export const status = (user: number[], machine: number[]): string => {
  const numberOfMoviments = user.length + machine.length
  if (numberOfMoviments >= 9) return 'Draw'
  if (verifyIfWins(user)) return 'User is the winner!'
  if (verifyIfWins(machine)) return 'Machine is the winner!'
  return 'Game not finished'
}
