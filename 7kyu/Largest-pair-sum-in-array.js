// https://www.codewars.com/kata/556196a6091a7e7f58000018
// Solution 1 using for loop
function largestPairSum(numbers) {
  //TODO: Write your Code here
  let largestNumber = -100;
  let secondLargest = -101;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      secondLargest = largestNumber;
      largestNumber = numbers[i];
    } else if (numbers[i] > secondLargest) {
      secondLargest = numbers[i];
    }
  }
  let sum = largestNumber + secondLargest;
  return sum;
}

// Solution 2 using sort method
function largestPairSum(numbers) {
  return numbers.sort((a, b) => b - a)[0] + numbers.sort((a, b) => b - a)[1];
}
