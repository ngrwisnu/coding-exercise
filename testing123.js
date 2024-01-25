const number = (array) => {
  //your awesome code here
  let newArr = [];

  for (const x in array) {
    newArr.push(`${+x + 1}: ${array[x]}`);
  }

  return newArr;
};

console.log(number([]));
console.log(number(["a", "b", "c"]));
