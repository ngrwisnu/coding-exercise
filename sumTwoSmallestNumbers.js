function sumTwoSmallestNumbers(numbers) {
  let first = numbers[0];
  let second = numbers[1];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < first) {
      second = first;

      first = numbers[i];
    } else if (numbers[i] < second) {
      second = numbers[i];
    }
  }

  return first + second;
}

// function sumTwoSmallestNumbers(numbers) {
//   const sorted = numbers.sort((a, b) => a - b);

//   return sorted[0] + sorted[1];
// }

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
