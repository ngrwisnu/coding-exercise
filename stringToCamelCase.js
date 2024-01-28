// function stringToCC(str) {
//   const arr = [];
//   let temp = "";
//   let res = "";

//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] == " " || str[i] == "_" || str[i] == "-" || i == str.length) {
//       arr.push(temp);
//       temp = "";
//     } else {
//       temp += str[i];
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//       res += arr[i];
//     } else {
//       const cap = String.fromCharCode(
//         arr[i][0].charCodeAt(0) - (arr[i][0].charCodeAt(0) >= 97 ? 32 : 0)
//       );

//       res += cap + arr[i].substring(1);
//     }
//   }

//   return res;
// }

function stringToCC(str) {
  return str.replace(/[\W | \_]\w/g, (match) => match[1].toUpperCase());
}

console.log(stringToCC(""));
console.log(stringToCC("the-stealth-warrior"));
console.log(stringToCC("The_Stealth_Warrior"));
console.log(stringToCC("The_Stealth-Warrior"));
