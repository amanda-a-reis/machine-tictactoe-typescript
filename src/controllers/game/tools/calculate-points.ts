export const calculatePoints = (array: number[]): number => {
  const arrayOfPoints = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (const element of array) {
    arrayOfPoints[+element - 1] += 1
  }
  const max = Math.max(...arrayOfPoints)
  return arrayOfPoints.indexOf(max) + 1
}
