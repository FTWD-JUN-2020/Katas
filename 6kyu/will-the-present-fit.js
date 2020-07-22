// https://www.codewars.com/kata/52b23340c65ea422b1000045
function willFit(present, box) {
  let p2 = present.sort((a, b) => a - b);
  let b2 = box.sort((a, b) => a - b);
  return p2.filter((x, i) => x >= b2[i] - 1).length > 0 ? false : true;
}
