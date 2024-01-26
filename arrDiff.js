// function arrayDiff(a, b) {
//   const res = [];

//   for (let i = 0; i < a.length; i++) {
//     let isFound = false;

//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) {
//         isFound = true;
//         break;
//       }
//     }

//     if (!isFound) {
//       res.push(a[i]);
//     }
//   }

//   return res;
// }

function arrayDiff(a, b) {
  const setter = new Set(b);

  return a.filter((num) => !setter.has(num));
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([], [1, 2]));
console.log(arrayDiff([1, 2, 3], [1, 2]));
