// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr) {
  //your code here
  //   ['apple','orange','pear','pineapple']
  // 1 0
  // 2 1
  const filterFunc = (x, i) => {
    if (i % 2 === 0) {
      return x;
    }
  };
  return arr.filter(filterFunc);
}
