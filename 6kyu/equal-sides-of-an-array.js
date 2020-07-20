// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
// function findEvenIndex(arr){
//   for(let i = 0; i<arr.length; i++){
//     if(arr.slice(0,i).reduce((acc,value)=>acc+value,0) == arr.slice(i+1).reduce((acc,value)=>acc+value,0))
//       return i
//   }
//   return -1
// }

// function findEvenIndex(arr){
//     let sum1 = 0
//     let sum2 = 0
//     let evenInd = -1
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < i; j++) {
//         sum1 += arr[j]
//       }
//       for (let k = i+1; k < arr.length; k++) {
//         sum2 += arr[k]
//       }
//       if (sum1 == sum2) evenInd = i
//       sum1 = 0
//       sum2 = 0
//     }
//     return evenInd
//   }

function findEvenIndex(arr) {
  return arr.reduce(
    (a, v, i) =>
      arr.slice(0, i).reduce((acc, value) => acc + value, 0) ==
      arr.slice(i + 1).reduce((acc, value) => acc + value, 0)
        ? i
        : a,
    -1
  );
}
