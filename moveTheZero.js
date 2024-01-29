// function moveTheZeros(arr) {
//   const z = [];
//   const x = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       x.push(arr[i]);
//     } else {
//       z.push(arr[i]);
//     }
//   }

//   return x.concat(z);
// }

// function moveTheZeros(arr) {
//   const zeros = arr.filter((l) => l === 0);
//   const notZeros = arr.filter((l) => l !== 0);

//   return notZeros.concat(zeros);
// }

function moveTheZeros(arr) {
  return arr.sort((a, b) =>
    a === 0 && b !== 0 ? 1 : a !== 0 && b === 0 ? -1 : 0
  );
}

console.log(moveTheZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
