// function pigIt(str) {
//   const res = str
//     .split(" ")
//     .map((w) => {
//       if (/[a-z]/i.test(w)) {
//         const arr = w.split("");
//         const firstEl = arr.shift();

//         return arr.join("") + firstEl + "ay";
//       } else {
//         return w;
//       }
//     })
//     .join(" ");

//   return res;
// }

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

console.log(pigIt("Hello world !"));
console.log(pigIt("Hello !"));
