function isIsogram(str) {
  //   let sorted = str.toLowerCase().split("").sort().join("");
  //   return str === "" ? true : /(\w)\1/.test(sorted);

  // return /(.).*\1/.test(s)

  return !/(\w).*\1/.test(str.toLowerCase());
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("ada"));
console.log(isIsogram("moOngose"));
console.log(isIsogram(""));
