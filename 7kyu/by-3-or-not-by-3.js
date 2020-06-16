// https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript

function divisibleByThree(str) {
  let digits = str.split("");
  let sum = digits.reduce((acc, val) => {
    let curNum = parseInt(val);
    return acc + curNum;
  }, 0);
  return sum % 3 === 0;
}
