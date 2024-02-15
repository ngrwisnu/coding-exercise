// function productFib(prod) {
//   let fib = [0, 1];

//   for (let i = 1; i < prod; i++) {
//     const newVal = fib[fib.length - 1] + fib[fib.length - 2];
//     fib.push(newVal);

//     const multiplyVal = fib[fib.length - 1] * fib[fib.length - 2];

//     if (multiplyVal === prod) {
//       return [fib[fib.length - 2], fib[fib.length - 1], true];
//     } else if (multiplyVal > prod) {
//       return [fib[fib.length - 2], fib[fib.length - 1], false];
//     }
//   }
// }

function productFib(prod) {
  let [x, y] = [0, 1];

  while (x * y < prod) {
    [x, y] = [y, x + y];
  }

  return [x, y, x * y === prod];
}

console.log(productFib(8));
console.log(productFib(15));
console.log(productFib(58));
