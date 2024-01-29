// function rgbToHex(r, g, b) {
//   r = r < 0 ? 0 : r > 255 ? 255 : r;
//   g = g < 0 ? 0 : g > 255 ? 255 : g;
//   b = b < 0 ? 0 : b > 255 ? 255 : b;

//   const formatted = (val) => {
//     const hexVal = "0123456789ABCDEF";

//     let temp = "";
//     let res = "";

//     if (val == 0) return "00";

//     while (val > 0) {
//       const res = val % 16;
//       temp += hexVal[res];
//       val = Math.floor(val / 16);
//     }

//     for (let i = temp.length - 1; i >= 0; i--) {
//       res += temp[i];
//     }

//     return res;
//   };

//   return `${formatted(r)}${formatted(g)}${formatted(b)}`;
// }

// function rgbToHex(r, g, b) {
//   r = r < 0 ? 0 : r > 255 ? 255 : r;
//   g = g < 0 ? 0 : g > 255 ? 255 : g;
//   b = b < 0 ? 0 : b > 255 ? 255 : b;

//   const formatted = (num) => {
//     const res = num.toString(16).toUpperCase();
//     return res.length === 1 ? `0${res}` : res;
//   };

//   return `${formatted(r)}${formatted(g)}${formatted(b)}`;
// }

function rgbToHex(r, g, b) {
  return [r, g, b]
    .map((n) =>
      Math.min(255, Math.max(n, 0)).toString(16).toUpperCase().padStart(2, "0")
    )
    .join("");
}

console.log(rgbToHex(0, 0, 0));
console.log(rgbToHex(0, 0, -20));
console.log(rgbToHex(300, 255, 255));
console.log(rgbToHex(173, 255, 47));
