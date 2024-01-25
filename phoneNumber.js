// function createPhoneNumber(numbers) {
//   let res = "";

//   for (let i = 0; i < numbers.length; i++) {
//     if (i == 0) {
//       res += "(" + numbers[i];
//     } else if (i == 2) {
//       res += numbers[i] + ")" + " ";
//     } else if (i == 5) {
//       res += numbers[i] + "-";
//     } else {
//       res += numbers[i];
//     }
//   }

//   return res;
// }

function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
