function digitalRoot(num) {
  const res = num
    .toString()
    .split("")
    .map((num) => +num)
    .reduce((acc, curr) => acc + curr, 0);

  if (res >= 10) {
    return digitalRoot(res);
  } else {
    return res;
  }
}

console.log(digitalRoot(942));
console.log(digitalRoot(132189));
