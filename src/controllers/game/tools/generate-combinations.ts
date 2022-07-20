export const generateCombinations = (array: string[]): string[] => {
  return array.flatMap((x) => array.filter(el => el !== x).flatMap((y) => array.filter(el => el !== y && el !== x).flatMap((z) => `${x}${y}${z}`)))
}
