function disemvowel(str) {
  return str.replace(/[aiueo]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));
