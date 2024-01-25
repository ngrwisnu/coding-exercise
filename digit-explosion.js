const explosion = (digits) => {
  let result = "";

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < +digits[i]; j++) {
      result += digits[i];
    }
  }

  return result;
};

console.log(explosion("123"));
console.log(explosion("102269"));
