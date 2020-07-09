// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// function findOutlier(integers){
//  let even = integers.filter(x => x % 2 !== 0 )
//  let odd =  integers.filter(x => x % 2 === 0)
//  if(even.length === 1) return even[0];
//   else return odd[0]
//   }

function findOutlier(integers) {
  //   let odd = 0
  //   let even = 0
  //   for (let i =0; i< 3; i++){
  //     if(integers[i]%2==0){
  //       even+=1
  //     }
  //     else{
  //       odd+=1
  //     }
  //   }
  //   for (const int of integers){
  //     if (odd > even){
  //       if(int %2 == 0){
  //         return int
  //       }
  //     }
  //     else{
  //       if(int%2!=0){
  //         return int
  //       }
  //     }
  //   }
  let evenOrOdd = integers.slice(-3).filter((i) => i % 2).length >= 2 ? 0 : 1;
  return integers.find((i) => Math.abs(i % 2) === evenOrOdd);
}

/* function findOutlier(integers){
      let evens = []
      let odds = []
      for(let i = 0; i <integers.length; i++){
        if((integers[i] % 2) ==0){
          evens.push(integers[i])
          } else {
            odds.push(integers[i])
            }
        //your code here
    }
      if(evens.length < odds.length){
        return evens[0]
      } else {
        return odds[0]
      }
      } */
