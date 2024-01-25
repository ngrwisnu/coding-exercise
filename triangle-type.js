function triangleType(a, b, c) {
  let ans;

  let res = (c * c - a * a - b * b) / (2 * a * b);
  res = Math.acos(res) * 180 / Math.PI

  if (res > 90 && res < 180) {
    ans = 3;
  } else if (res == 90) {
    ans = 2;
  } else if (res < 90 && res > 0) {
    ans = 1;
  } else {
    ans = 0;
  }

  return res;
}

console.log(triangleType(7, 3, 2));
console.log(triangleType(2, 4, 6));
console.log(triangleType(8, 5, 7));
console.log(triangleType(3, 4, 5));
console.log(triangleType(7, 12, 8));
