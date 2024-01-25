function getMiddle(s) {
  //Code goes here!
  let res = [];

  for (let w of s) {
    res.push(w);
  }

  const half = Math.floor(res.length / 2);

  if (res.length % 2 !== 0) {
    return `${res[half]}`;
  } else {
    return `${res[half - 1]}${res[half]}`;
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("a"));
