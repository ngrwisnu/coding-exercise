function highAndLow(str) {
  const sortedArr = str.split(" ").sort((a, b) => b - a);

  return [sortedArr[0], sortedArr[sortedArr.length - 1]].join(" ");
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
