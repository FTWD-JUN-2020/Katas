//www.codewars.com/kata/525c65e51bf619685c000059

https: function cakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).reduce(
      (a, v) => (a.push(~~(available[v] / recipe[v] || 0)), a),
      []
    )
  );
}

// function cakes(recipe, available) {
//     let ing = Object.getOwnPropertyNames(recipe)
//     let availIng = Object.getOwnPropertyNames(available)
//     let hasAllIngreds = true
//     let ingredQuotes = []
//     ing.forEach((elem, ind) => {
//         if (!availIng.includes(elem)) {
//             hasAllIngreds = false
//         }
//         if (hasAllIngreds) {
//             ingredQuotes.push(Math.floor(available[elem] / recipe[elem]))
//         }
//     })
//     return hasAllIngreds ? Math.min(...ingredQuotes) : 0
// }

// function cakes(recipe, available) {
//    let obj2 = [];
//   Object.keys(recipe).forEach((prop)=>{
//        if (available.hasOwnProperty(prop)) {
//          if(Math.floor(available[prop] / recipe[prop]) >= 1) obj2.push(Math.floor(available[prop] / recipe[prop]));
//   }
//   });
//   let len = Object.getOwnPropertyNames(recipe).length;
//   let res = (len == obj2.length) ?  obj2.sort((a, b) => a - b)[0] :  0
//   return res;

// }

// function cakes(recipe, available) {
//   let cakeCount = []
//   for (const ingridient in recipe){
//     if(!available.hasOwnProperty(ingridient))
//       return 0
//     cakeCount.push(Math.floor(available[ingridient]/recipe[ingridient] || 0))
//   }
//   return Math.min(...cakeCount)
// }
