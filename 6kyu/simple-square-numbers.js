// https://www.codewars.com/kata/5edc8c53d7cede0032eb6029
function solve(n) {
  //..
  let N = 1;

  while (Math.sqrt(N ** 2 + n) % 1 !== 0) {
    N++;
    if (N > n) return -1;
  }

  return N ** 2;

  //   let isAns = false
  //   let num = 1
  //   let i = 1
  //   while (isAns == false){
  //     let sum = n + num
  //     if (Math.sqrt(num) === 10000000){return -1}
  //     if (Math.sqrt(num) % 1 === 0 && Math.sqrt(sum) % 1 === 0){
  //       return num
  //     }
  //     else {
  //       num += 2*i + 1
  //       i++
  //     }
  // }
}
