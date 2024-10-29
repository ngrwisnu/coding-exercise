// function digPow(n, p) {
//   n = n.toString();

//   let sum = 0;

//   for (let i = 0; i < n.length; i++) {
//     sum += n[i] ** p;

//     p++;
//   }

//   const k = sum / n;

//   return k % 1 === 0 ? k : -1;
// }

// function digPow(n, p) {
//   const sum =
//     n
//       .toString()
//       .split("")
//       .map((num) => {
//         const res = num ** p;
//         p++;

//         return res;
//       }, 0)
//       .reduce((acc, curr) => acc + curr, 0) / n;

//   return sum % 1 === 0 ? sum : -1;
// }

function digPow(n, p) {
  n = n.toString();

  const recurSum = (i, pwr) => {
    if (i === n.length) {
      return 0;
    }

    return n[i] ** pwr + recurSum(i + 1, pwr + 1);
  };

  const k = recurSum(0, p) / n;

  return k % 1 === 0 ? k : -1;
}

console.log(digPow(46288, 3));
