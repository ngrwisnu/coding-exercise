// function findEvenIndex(arr) {
//   let total = 0;
//   let sideTotal = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }

//   for (let i = 0; i < arr.length; i++) {
//     sideTotal += arr[i];

//     if (sideTotal == total) {
//       return i;
//     }

//     total -= arr[i];
//   }

//   return -1;
// }

function findEvenIndex(arr) {
  let total = arr.reduce((curr, acc) => curr + acc);
  let sideTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sideTotal < total) {
      sideTotal += arr[i];
    }

    if (sideTotal === total) {
      return i;
    }

    total -= arr[i];
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
