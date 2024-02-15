function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    const regex = new RegExp(`${s[i]}`, "gi");

    const res = s.match(regex);

    if (res.length === 1) {
      return s[i];
    }
  }

  return "";
}

// function firstNonRepeatingLetter(s) {
//   const str = s.toLowerCase();

//   for (let i = 0; i < s.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       return s[i];
//     }
//   }

//   return "";
// }

console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("sTreSS"));
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"));
