function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1);
    return arr;
  }, {});

  return str2.split("").every((character) => --occurences[character] >= 0);
}

console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("scriptjavx", "javascript"));
console.log(scramble("scriptingjava", "javascript"));
console.log(scramble("scriptsjava", "javascripts"));
console.log(scramble("javscripts", "javascript"));
console.log(scramble("jscripts", "javascript"));
console.log(scramble("aabbcamaomsccdd", "commas"));
console.log(scramble("commas", "commas"));
console.log(scramble("sammoc", "commas"));
