// function findShort(s) {
//   let wdArr = s.split(" ");
//   let lengthArr = [];
//   let i = 0;
//   for (i; i < wdArr.length; i++) {
//     lengthArr[i] = wdArr[i].length;
//   }
//   let lowestArr = lengthArr[0];
//   let j = 0;
//   for (j; j < lengthArr.length; j++) {
//     if (lengthArr[j] < lowestArr) {
//       lowestArr = lengthArr[j];
//     }
//   }
//   return lowestArr;
// }
function christmasTree(height) {
  height = [...Array(height).keys()];
  return height
    .map(
      (x, i) =>
        " ".repeat(height.length - i - 1) +
        "*".repeat(x + i + 1) +
        " ".repeat(height.length - i - 1)
    )
    .join("\n");
}
