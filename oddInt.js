function oddInt(A) {
  //   let count = {};

  //   A.forEach((l) => {
  //     count[l] = (count[l] || 0) + 1;
  //   });

  //   for (const key in count) {
  //     if (count[key] % 2 !== 0) {
  //       return +key;
  //     }
  //   }

  //   return null;

  return A.reduce((a, b) => a ^ b);
}

console.log(oddInt([7]));
console.log(oddInt([0, 1, 0, 1, 0]));
console.log(oddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
