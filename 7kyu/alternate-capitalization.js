// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
function capitalize(s) {
  //   let i = 0;
  //   let split = s.split('');
  //   let evens = split.map(x => {
  //     if(i % 2 === 0) {
  //       i++;
  //       return x.toUpperCase();
  //     }
  //     i++
  //     return x;
  //   });
  //   i = 0;
  //   let odds = split.map(x => {
  //     if(i % 2 !== 0) {
  //       i++;
  //       return x.toUpperCase();
  //     }
  //     i++;
  //     return x;
  //   });
  //   return [evens.join(''), odds.join('')];

  let arr = s.split("").reduce(
    (acc, val, ind) => {
      //     if(ind % 2 === 1) { // this it the case our ind is odd
      //       acc[0] += val;
      //       acc[1] += val.toUpperCase();
      //     } else {
      //       acc[1] += val;
      //       acc[0] += val.toUpperCase();
      //     }
      ind % 2
        ? ((acc[0] += val), (acc[1] += val.toUpperCase()))
        : ((acc[1] += val), (acc[0] += val.toUpperCase()));
      return acc;
    },
    ["", ""]
  );
  return arr;
}
