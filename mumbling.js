function accum(s) {
  const arr = s.split("");

  let res = [];
  for (const [i, el] of arr.entries()) {
    res.push(el.toUpperCase() + el.repeat(i).toLowerCase());
  }

  return res.join("-");
}

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
