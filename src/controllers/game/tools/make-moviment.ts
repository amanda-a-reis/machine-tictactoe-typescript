import { status } from '../status/game-status'
import { IStatusGame } from '../protocols/status-game'
import medium from '../levels/medium/medium'
import easy from '../levels/easy'
import { hard } from '../levels/difficult/hard'

export const makeMoviment = (mode: string, user: number[], machine: number[]): IStatusGame => {
  let gameStatus = status(user, machine)
  let moviment = 0
  if (gameStatus.includes('winner')) return { moviment, gameStatus }

  if (mode === 'easy') moviment = easy([...user, ...machine])
  if (mode === 'medium') moviment = medium([...user, ...machine], user, machine)
  if (mode === 'hard') moviment = hard([...user, ...machine], user, machine)

  gameStatus = status(user, [...machine, moviment])

  return { moviment, gameStatus }
}
