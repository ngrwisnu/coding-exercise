// function tribonacci(sig, n) {
//   if (n < sig.length) {
//     let res = [];

//     for (let i = 0; i < n; i++) {
//       if (n === 0) {
//         break;
//       }

//       res.push(sig[i]);
//     }

//     return res;
//   }

//   for (let i = 0; i < sig.length - 1; i++) {
//     if (sig.length === n) {
//       break;
//     }

//     const newNum = sig[i] + sig[i + 1] + sig[i + 2];
//     sig.push(newNum);
//   }

//   return sig;
// }

// function tribonacci(sig, n) {
//   if (n <= sig.length) {
//     return sig.slice(0, n);
//   }

//   for (let i = 0; i < sig.length - 1; i++) {
//     if (sig.length === n) return sig;

//     const newNum = sig.slice(i, i + 3).reduce((curr, acc) => curr + acc);
//     sig.push(newNum);
//   }
// }

function tribonacci(sig, n) {
  for (let i = 0; i < n - 3; i++) {
    const newNum = sig.slice(i, i + 3).reduce((curr, acc) => curr + acc);

    sig.push(newNum);
  }

  return sig.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 0));
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([0, 1, 1], 2));
console.log(tribonacci([1, 1, 1], 3));
