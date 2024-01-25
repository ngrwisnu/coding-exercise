function squareDigits(num) {
  let res = [];
  let str = "" + num;
  for (let n of str) {
    res.push(n * n);
  }

  return +res.join("");
}

console.log(squareDigits(3212));
