function casingStr(str) {
  const cased = str.split(" ").map((el) => {
    return el[0].toUpperCase() + el.slice(1);
  });

  return cased.join(" ");
}

console.log(casingStr("How can mirrors be real if our eyes aren't real"));
