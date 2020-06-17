// https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript
function modifiedSum(a, n) {
  //    let arrPower = a.map(num => {
  //      let total =  Math.pow(num,n)
  //      return total
  //     })
  //      let arrPowerSum = arrPower.reduce((accumulator,currentValue) =>
  //   {
  //     return accumulator + currentValue
  //   })
  //      let sum = a.reduce((accumulator,currentValue) =>
  //   {
  //     return accumulator + currentValue
  //   })
  //     return arrPowerSum - sum

  // 1, 2, 3
  return a.reduce((acc, value) => acc + Math.pow(value, n) - value, 0);
}
