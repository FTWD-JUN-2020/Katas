// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
// function findShort(s){
//   let s2 = s.split(' ');
//   let len = s2[0];
//   s2.filter(x =>{
//     if(x.length < len.length) return len = x;
//   })
//   return len.length;
// }
// function findShort(str) {
//     var split = str.split(' ');
//     var shortest = split.reduce((shortestWord, currentWord) => {
//         return currentWord.length < shortestWord.length ? currentWord : shortestWord;
//     });
//     return shortest.length;
// }
// function findShort(s) {
//   const stringArray = s.split(" ");
//   const orderedArray = stringArray.sort((a, b) => {
//     return a.length - b.length;
//   })
//   return orderedArray[0].length;
// }
function findShort(s) {
  let wdArr = s.split(" ");
  let lengthArr = [];
  let i = 0;
  for (i; i < wdArr.length; i++) {
    lengthArr[i] = wdArr[i].length;
  }
  let lowestArr = lengthArr[0];
  let j = 0;
  for (j; j < lengthArr.length; j++) {
    if (lengthArr[j] < lowestArr) {
      lowestArr = lengthArr[j];
    }
  }
  return lowestArr;
}
