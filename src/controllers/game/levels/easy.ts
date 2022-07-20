import { options } from '../../../constants/options'
import { randomicNumber } from '../tools/randomic-number'

export function easy (movementsDone: number[]): number {
  const validMovements = options.filter(element => !movementsDone.includes(element))
  return validMovements[randomicNumber(0, validMovements.length)]
}

export default easy
