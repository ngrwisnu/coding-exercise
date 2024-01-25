function solution(number) {
  let arr = new Array();

  if (number < 0) {
    return 0;
  }

  for (i = 1; i < number; i++) {
    if (i * 5 < number) {
      arr.push(i * 5);
    }

    if (i * 3 < number && (i * 3) % 5 !== 0) {
      arr.push(i * 3);
    }
  }

  console.log(arr);
  console.log(arr.reduce((a, b) => a + b));
  return arr.length !== 0 && arr.reduce((a, b) => a + b);
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(10));
console.log(solution(20));
