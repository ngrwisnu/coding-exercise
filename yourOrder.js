// function yourOrder(str) {
//   if (str === "") return "";

//   let arr = [];
//   let word = "";

//   for (const l of str) {
//     if (l !== " ") {
//       word += l;
//     } else {
//       arr.push(word);
//       word = "";
//     }

//     if (l === str[str.length - 1]) {
//       arr.push(word);
//     }
//   }

//   const obj = {};

//   arr.map((el) => {
//     const key = el.match(/\d/)[0];

//     obj[key] = el;
//   });

//   let res = "";

//   for (const w in obj) {
//     if (w != Object.keys(obj).length) {
//       res += obj[w] + " ";
//     } else {
//       res += obj[w];
//     }
//   }

//   return res;
// }

// =============================

function yourOrder(str) {
  return str
    .split(" ")
    .sort((a, b) => a.match(/\d/)[0] - b.match(/\d/)[0])
    .join(" ");
}

console.log(yourOrder("is2 Thi1s T4est 3a"));
