// function countDuplicate(text) {
//   const list = {};
//   const res = [];

//   for (const char of text.toLowerCase()) {
//     list[char] = (list[char] || 0) + 1;
//   }

//   for (const el in list) {
//     if (list[el] > 1) {
//       res.push(el);
//     }
//   }

//   return res.length;
// }

function countDuplicate(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/(.)\1+/g) || []
  ).length;
}

console.log(countDuplicate("abcde"));
console.log(countDuplicate("aabBcde"));
console.log(countDuplicate("aA11"));
console.log(countDuplicate("Indivisibilities"));
