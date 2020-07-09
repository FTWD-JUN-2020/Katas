// https://www.codewars.com/kata/514b92a657cdc65150000006
// function solution(number) {
//     let sum = 0
//     for (let i = 0; i < number; i++) {
//         if (i % 3 == 0 || i % 5 == 0) {
//             sum += i
//         }
//     }
//     return sum
// }
// function solution(number){
//    return [...Array(number).keys()].filter(x => x % 3 == 0 || x % 5 == 0).reduce((a, b) => a + b, 0)
// }

function solution(number) {
  if (number < 3) {
    return 0;
  }
  number = [...Array(number).keys()];
  return number.reduce((acc, value) => {
    if (value % 3 == 0 || value % 5 == 0) {
      return value + acc;
    }
    return acc;
  }, 0);
}
