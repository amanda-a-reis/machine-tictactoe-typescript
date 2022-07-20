import { generateArrayOfStringCombinations } from '../../tools/array-string-generate'
import { options, winnerMoviments } from '../../../../constants/options'

export const calculateBetterOptions = (movementsDone: number[], competitor: number[]): number[] => {
  const validMovements = options.filter(element => !movementsDone.includes(element))
  const combination = generateArrayOfStringCombinations([...validMovements, ...competitor])
  const someWinnerMoviment = combination.filter(element => winnerMoviments.includes(element))

  let arrayOfOptions = []
  someWinnerMoviment.map(el => el.split('')).map(array => array.forEach(el => arrayOfOptions.push(+el)))
  arrayOfOptions = arrayOfOptions.filter((element: number) => !movementsDone.includes(+element))

  return arrayOfOptions
}
