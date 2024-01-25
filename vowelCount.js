function getCount(str) {
  let vowel = new Array();

  for (let v of str) {
    vowel.push(
      v === "a" || v === "i" || v === "u" || v === "e" || v === "o" ? v : null
    );
  }

  return vowel.filter((v) => v !== null).length;
}

console.log(getCount("abracadabra"));
