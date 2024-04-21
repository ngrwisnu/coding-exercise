const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "...---...": "SOS",
  "-.-.--": "!",
};

// function decodeMorse(morseCode) {
//   const arr = [];
//   let code = "";

//   for (let i = 0; i <= morseCode.length - 1; i++) {
//     if (morseCode[i] !== " ") {
//       code += morseCode[i];
//     } else {
//       arr.push(code);
//       code = "";
//     }

//     if (i === morseCode.length - 1) {
//       arr.push(code);
//       code = "";
//     }
//   }

//   let count = 0;
//   for (let c of arr) {
//     if (c != "") {
//       if (count > 0) {
//         code += " " + MORSE_CODE[c];
//         count = 0;
//       } else {
//         code += MORSE_CODE[c];
//       }
//     } else {
//       count++;
//     }
//   }

//   return code.replace(/^\s+(?=\b)|(?<=\w)\s+$/g, "");
// }

// ========================================

// function decodeMorse(morseCode) {
//   return morseCode
//     .split(" ")
//     .map((code) => MORSE_CODE[code])
//     .join(" ")
//     .replace(/(?<=\w)\s{1}/g, "")
//     .replace(/\s{2,}/g, " ")
//     .trim();
// }

// ========================================

function decodeMorse(morseCode) {
  return morseCode
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || " ")
    .join("")
    .trim();
}

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
console.log(
  decodeMorse(
    "      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  "
  )
);
