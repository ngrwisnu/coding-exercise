function bitCounter(num) {
  let bitOne = 0;

  if (num === 0) {
    return bitOne;
  }

  bitOne += num % 2;

  return bitOne + bitCounter(Math.floor(num / 2));
}

console.log(bitCounter(1234));
