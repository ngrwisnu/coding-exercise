function spinWords(s) {
  //   const parts = [];
  //   let currentWord = "";

  //   for (const l of s) {
  //     if (l !== " ") {
  //       currentWord += l;
  //     } else {
  //       parts.push(currentWord);
  //       currentWord = "";
  //     }
  //   }

  //   if (currentWord !== "") parts.push(currentWord);

  //   let arr = [];

  //   for (const el of parts) {
  //     if (el.length < 5) {
  //       arr.push(el);
  //     } else {
  //       let splittedWord = "";

  //       for (let i = el.length - 1; i >= 0; i--) {
  //         splittedWord += el[i];
  //       }

  //       arr.push(splittedWord);
  //     }
  //   }

  //   let res = "";

  //   for (const [i, l] of arr.entries()) {
  //     if (i !== arr.length - 1) {
  //       res += l + " ";
  //     } else {
  //       res += l;
  //     }
  //   }

  const arr = s.split(" ");

  let res = [];
  for (const w of arr) {
    if (w.length < 5) {
      res.push(w);
    } else {
      res.push(w.split("").reverse().join(""));
    }
  }

  return res.join(" ");
}

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("Seriously this is the last one"));
