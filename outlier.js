// function findOutlier(integers) {
//   let odd = 0;
//   let even = 0;

//   for (let i = 0; i < integers.length; i++) {
//     if (integers[i] % 2 == 1) {
//       odd++;
//     } else {
//       even++;
//     }
//   }

//   if (odd == 1) {
//     for (let i = 0; i < integers.length; i++) {
//       if (integers[i] % 2 == 1) {
//         return integers[i];
//       }
//     }
//   } else {
//     for (let i = 0; i < integers.length; i++) {
//       if (integers[i] % 2 == 0) {
//         return integers[i];
//       }
//     }
//   }

//   return state;
// }

function findOutlier(integers) {
  const state = integers.filter((n) => n % 2 == 1 || n % 2 == -1);

  return state.length == 1 ? state[0] : integers.filter((n) => n % 2 == 0)[0];
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([0, -1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
