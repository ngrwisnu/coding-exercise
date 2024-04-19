// function order(arr) {
//   const newArr = [];
//   let prev = "";

//   for (const el of arr) {
//     if (el !== prev) {
//       newArr.push(el);
//       prev = el;
//     }
//   }

//   return newArr;
// }

// ==================================
function order(arr) {
  return [...arr].filter((el, i) => el !== arr[i - 1]);
}

console.log(order("AAAABBBCCDAABBB"));
console.log(order("ABBCcAD"));
console.log(order([1, 2, 2, 3, 3]));
