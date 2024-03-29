function positiveSum(arr) {
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, -3, 4, 5]));
console.log(positiveSum([]));
