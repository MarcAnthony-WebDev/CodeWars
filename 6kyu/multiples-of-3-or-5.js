// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.
// My solution
export class Challenge {
    static solution(number) {
        if (number < 0)
            return 0;
        let multiplesArr = [];
        for (let i = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                multiplesArr.push(i);
            }
        }
        return multiplesArr.reduce((acc, curr) => curr + acc, 0);
    }
}
//Clever Solution
// export class Challenge {
//   static solution(num: number): number {
//     let total: number = 0;
//     for (let i: number = 0; i < num; i++) {
//       total += i % 5 == 0 || i % 3 == 0 ? i : 0;
//     }
//     return total;
//   }
// }
