// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript

// one liner
function letterCount(s) {
  return s
    .split("")
    .reduce(
      (acc, value) => (acc[value] ? (acc[value] += 1) : (acc[value] = 1), acc),
      {}
    );
}
//  reduce solution
function letterCount(s) {
  return s.split("").reduce((acc, value) => {
    if (value in acc) {
      acc[value] += 1;
      return acc;
    } else {
      acc[value] = 1;
    }
    return acc;
  }, {});
}
//   for solution
function letterCount(s) {
  let result = {};
  for (const char of s) {
    if (!result.hasOwnProperty(char)) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }
  }
  return result;
}
