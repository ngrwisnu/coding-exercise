// function getSum(a, b) {
//   if (a === b) {
//     return a;
//   }

//   if (a < b) {
//     let res = 0;

//     for (let i = a; i <= b; i++) {
//       res += i;
//     }

//     return res;
//   }

//   if (b < a) {
//     let res = 0;

//     for (let i = b; i <= a; i++) {
//       res += i;
//     }

//     return res;
//   }
// }

// function getSum(a, b) {
//   if (a === b) {
//     return a;
//   }

//   const start = a < b ? a : b;
//   const end = a < b ? b : a;

//   let res = 0;

//   for (let i = start; i <= end; i++) {
//     res += i;
//   }

//   return res;
// }

function getSum(a, b) {
  if (a === b) {
    return a;
  }

  if (a < b) {
    return a + getSum(a + 1, b);
  } else {
    return b + getSum(a, b + 1);
  }
}

console.log(getSum(0, 5));
console.log(getSum(3, 1));
console.log(getSum(3, 3));
