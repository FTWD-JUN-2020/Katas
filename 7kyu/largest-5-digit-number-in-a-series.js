// https://www.codewars.com/kata/51675d17e0c1bed195000001

function solution(digits) {
  let res = 0;
  for (let i = 0; i < digits.length; i++) {
    let num = digits.substr(i, 5);
    if (Number(num) > res) {
      res = Number(num);
    }
  }
  return res;
  // return Math.max(...digits.split('').map((c,i) => digits.substring(i,i+5)))
}
