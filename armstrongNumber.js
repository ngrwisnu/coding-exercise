// function isNarcissitic(value) {
//   const str = value.toString();
//   let res = 0;

//   for (let i = 0; i < str.length; i++) {
//     res += Number(str[i]) ** str.length;
//   }

//   return res == value;
// }

function isNarcissitic(value) {
  return (
    value
      .toString()
      .split("")
      .map((n) => +n)
      .reduce((acc, curr, i, arr) => acc + curr ** arr.length, 0) == value
  );
}

console.log(isNarcissitic(153));
console.log(isNarcissitic(1652));
console.log(isNarcissitic(24678051));
