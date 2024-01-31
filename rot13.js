// function rot13(text) {
//   let res = "";

//   for (let i = 0; i < text.length; i++) {
//     const code = text[i].charCodeAt(0);

//     if ((code >= 65 && code < 78) || (code >= 97 && code < 110)) {
//       res += String.fromCharCode(code + 13);
//     } else if (code < 65 || code > 123 || (code > 90 && code < 97)) {
//       res += text[i];
//     } else {
//       res += String.fromCharCode(code - 13);
//     }
//   }

//   return res;
// }

function rot13(text) {
  return text.replace(/[a-z]/gi, (l) =>
    String.fromCharCode(l.charCodeAt(0) + (l.toLowerCase() <= "m" ? 13 : -13))
  );
}

console.log(rot13("test"));
console.log(rot13("TeSt"));
console.log(rot13("TEST"));
console.log(rot13("T{z12}Am"));
