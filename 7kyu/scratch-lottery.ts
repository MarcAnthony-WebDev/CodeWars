// [task] -> (https://www.codewars.com/kata/594a1822a2db9e93bd0001d4)
//
//
function scratch(lottery: string[]): number {
  return lottery
    .map((e: string) => e.split(' '))
    .filter((array: string[]) => array[0] === array[1] && array[1] === array[2])
    .map((s: string[]) => parseInt(s[3], 10))
    .reduce((a: number, b: number) => a + b, 0)
}



