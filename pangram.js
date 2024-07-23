// function isPangram(string) {
//   string = string.toLowerCase();

//   let isFound = true;

//   for (let i = 97; i <= 122; i++) {
//     for (let j = 0; j < string.length; j++) {
//       if (j === string.length - 1 && i !== string[j].charCodeAt()) {
//         isFound = false;
//         break;
//       }

//       if (i === string[j].charCodeAt()) {
//         break;
//       }
//     }

//     if (!isFound) {
//       break;
//     }
//   }

//   return isFound;
// }

function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((el) => string.toLowerCase().includes(el));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
