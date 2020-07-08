// https://www.codewars.com/kata/526571aae218b8ee490006f4
var countBits = function (n) {
  // Program Me
  return [...n.toString(2)].filter((x) => x == 1).length;
};
