// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++)
    if (arr[i + 1] - arr[i] != 1) return arr[i + 1];
  return null;

  //   for(let i = 0; i < arr.length; i++) {
  //     if(i !== 0) {
  //       if(arr[i] !== arr[i-1]+1) {
  //         return arr[i]
  //       }
  //     }
  //   }
  //   return null;

  //   let res = arr.filter((x,i)=>{
  //   let a = arr[i];
  //   let b = arr[i+1];
  //    if(b - a > 1 || b - a < -1) {
  //      return arr[i + 1]
  //    }
  //   })
  //   if(res.length > 0) {return arr[arr.indexOf(Number(res))+ 1]}
  //   else return null || 0
}
