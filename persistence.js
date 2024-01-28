// function persistence(num) {
//   if (num < 10) return 0;

//   const str = num.toString();
//   let arr = 1;
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     arr *= Number(str[i]);
//   }

//   count += 1;

//   if (arr >= 10) {
//     return count + persistence(arr);
//   } else {
//     return count;
//   }
// }

function persistence(num) {
  const res = num
    .toString()
    .split("")
    .map((n) => +n)
    .reduce((acc, curr) => acc * curr, 1);

  return num < 10 ? 0 : 1 + persistence(res);
}

console.log(persistence(25));
console.log(persistence(999));
console.log(persistence(4));
