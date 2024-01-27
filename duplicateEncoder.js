// function duplicateEncoder(word) {
//   const list = {};
//   let res = "";

//   for (const el of word.toLowerCase()) {
//     list[el] = (list[el] || 0) + 1;
//   }

//   for (const l of word.toLowerCase()) {
//     if (list[l] > 1) {
//       res += ")";
//     } else {
//       res += "(";
//     }
//   }

//   return res;
// }

function duplicateEncoder(word) {
  return word
    .toLowerCase()
    .split("")
    .map((val, idx, arr) => {
      return arr.indexOf(val) == arr.lastIndexOf(val) ? "(" : ")";
    })
    .join("");
}

console.log(duplicateEncoder("din"));
console.log(duplicateEncoder("Success"));
console.log(duplicateEncoder("(( @"));
