// function replace(str) {
//   const alph = [];
//   let res = "";

//   const start = "a".charCodeAt(0);
//   const end = "z".charCodeAt(0);

//   for (let i = start; i <= end; i++) {
//     alph.push(String.fromCharCode(i));
//   }

//   const formatted = str.toLowerCase().replace(/[\W | \d | \_]/g, "");

//   for (let i = 0; i < formatted.length; i++) {
//     if (i == formatted.length - 1) {
//       res += alph.indexOf(formatted[i]) + 1;
//     } else {
//       res += alph.indexOf(formatted[i]) + 1 + " ";
//     }
//   }

//   return res;
// }

function replace(str) {
  let res = "";

  const formatted = str.toUpperCase().replace(/[^A-Z]/g, "");

  for (let i = 0; i < formatted.length; i++) {
    res += formatted[i].charCodeAt(0) - 64 + (i != formatted.length - 1 && " ");
  }

  return res;
}

// function replace(str) {
//   return str
//     .toUpperCase()
//     .replace(/[^A-Z]/g, "")
//     .split("")
//     .map((l) => l.charCodeAt(0) - 64)
//     .join(" ");
// }

console.log(replace("8=dv^(o>"));
console.log(replace("The sunset sets at twelve o' clock."));
