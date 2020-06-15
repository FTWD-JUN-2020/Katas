// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

// function arrayPlusArray(arr1, arr2) {
//   return arr1 + arr2; //something went wrong
// }

// function arrayPlusArray(arr1, arr2) {
// //  let newArr = []
// //  newArr = arr1.reduce ((a, b) => a+b, 0)
// //  console.log(newArr)
// // let newArr2= []
// //  newArr2= arr2.reduce ((a, b) => a+b, 0)
// //  console.log(newArr2)
// //  return newArr + newArr2

//  }

//  function arrayPlusArray(arr1, arr2) {
//   return arr1.map((x, i) => x + arr2[i]).reduce((a,b)=>a+b, 0)
// }

// function arrayPlusArray (firstArray, secondArray) {
// let sumOfFirstArray = 0
// for (i=0; i<firstArray.length; i++) {
//   sumOfFirstArray += firstArray[i]
// }
// let sumOfSecondArray = 0
// for (j=0; j<secondArray.length; j++) {
//   sumOfSecondArray += secondArray[j]
// }
//   let totalSum = sumOfFirstArray + sumOfSecondArray
//   return totalSum;
// }

function arrayPlusArray(arr1, arr2) {
  let sumArr = arr1.concat(arr2);
  let sum = sumArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sum;
  //   return arr1.concat(arr2).reduce((a,v) => (a+=v,a))
}
