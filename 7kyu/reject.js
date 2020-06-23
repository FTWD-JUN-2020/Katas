// https://www.codewars.com/kata/52988f3f7edba9839c00037d
function reject(array, predicate) {
  //   return array.reduce((acc, val) => {
  //   if (!predicate(val)) {
  //     acc.push(val)
  //   }
  //   return acc
  // }, [])
  //   return array.filter(c => !predicate(c))
  let result = array.filter((a) => {
    return !predicate(a);
  });
  return result;
}
