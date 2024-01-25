function descOrder(n) {
  const sortedArr = n
    .toString()
    .split("")
    .sort((a, b) => b - a);

  return +sortedArr.join("");
}

console.log(descOrder(1021));
console.log(descOrder(42145));
console.log(descOrder(123456789));
