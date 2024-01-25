function solution(str) {
  let res = new Array(str.length);

  for (i = 0; i < str.length; i++) {
    res.unshift(str[i]);
  }

  return res.join("");
}

console.log(solution(""));
