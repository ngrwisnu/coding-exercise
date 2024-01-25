const diff = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);

  const result = sortedArr[sortedArr.length - 1] - sortedArr[0];

  return result ? result : 0;
};

// console.log(diff([1, 2, 3, -4]));
console.log(diff([-0, 1, 2, -3, 4, 5, -6]));
console.log(diff([16]));
console.log(diff([]));
