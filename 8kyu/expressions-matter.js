// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
function expressionMatter(a, b, c) {
  let exp1 = a * (b + c);
  let exp2 = a * b * c;
  let exp3 = a + b * c;
  let exp4 = a + b + c;
  let exp5 = (a + b) * c;
  let result = Math.max(exp1, exp2, exp3, exp4, exp5);
  return result; // highest achievable result
}
