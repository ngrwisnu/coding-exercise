// function solution(str) {
//   const res = [];

//   for (let i = 0; i < str.length; i += 2) {
//     const piece = str[i] + (str[i + 1] || "_");
//     res.push(piece);
//   }

//   return res;
// }

const solution = (str) => (str + "_").match(/.{2}/g) || [];

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution(""));
