// https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript

function derive(coefficient, exponent) {
  let newCoef = coefficient * exponent;
  let reducedExp = exponent - 1;
  return newCoef + "x^" + reducedExp;
}
