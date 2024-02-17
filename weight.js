function weight(str) {
  if (str === "") return "";

  let arr = str
    .split(" ")
    .sort((a, b) => a - b)
    .map((num) => +num);
  let res = arr.map((num) => ({
    num,
    val: num
      .toString()
      .split("")
      .reduce((a, b) => +a + +b),
  }));

  const sorted = res.sort((a, b) => a.val - b.val);

  return sorted.map((obj) => obj.num).join(" ");
}

console.log(weight("2000 10003 1234000 44444444 9999 11 11 22 123"));
console.log(weight(""));
