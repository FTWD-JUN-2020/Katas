// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d
function halvingSum(n) {
  if (n == 1) return n;
  return halvingSum(Math.floor(n / 2)) + n;
}
