// Powers of Two
// const powersOfTwo = (n) => {
//   let results = [];

//   for (let i = 0; i <= n; i++) {
//     results.push(2 ** i);
//   }

//   return results;
// };

// console.log(powersOfTwo(3));
// ================================================

// Counting Sheep
// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   //   let presentSheep = []

//   //     for(let i=0; i<=arrayOfSheep.length; i++) {
//   //         if(arrayOfSheep[i] === true) {
//   //             presentSheep.push(arrayOfSheep[i])
//   //         }
//   //     }

//   //   return presentSheep.length;

//   let newArr = arrayOfSheep.filter((sheep) => sheep === true);
//   return newArr.length
// }

// var array1 = [true, true, true, false];

// console.log(countSheeps(array1));
// ================================================

// Rock, Paper, Scissors
// const rps = (p1, p2) => {
//   //   if (p1 === p2) {
//   //     return "Draw!";
//   //   }

//   //   if (p1 === "rock" && p2 === "scissors") {
//   //     return "Player 1 won!";
//   //   }

//   //   if (p1 === "scissors" && p2 === "rock") {
//   //     return "Player 2 won!";
//   //   }

//   //   if (p1 === "rock" && p2 === "paper") {
//   //     return "Player 2 won!";
//   //   }

//   //   if (p1 === "paper" && p2 === "rock") {
//   //     return "Player 1 won!";
//   //   }

//   //   if (p1 === "paper" && p2 === "scissors") {
//   //     return "Player 2 won!";
//   //   }

//   //   if (p1 === "scissors" && p2 === "paper") {
//   //     return "Player 1 won!";
//   //   }

//   if (p1 === p2) return "Draw!";
//   var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
//   console.log(rules[p1]);
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };

// console.log(rps("rock", "scissors"));
// console.log(rps("scissors", "paper"));
// console.log(rps("scissors", "rock"));
// ================================================

// Merge Array
// function mergeArrays(arr1, arr2) {
//     // const newArr = arr1.concat(arr2).sort((a, b) => a - b)
//     // const result = newArr.filter((num, i) => newArr.indexOf(num) === i)

//     const result = [...new Set(arr1.concat(arr2))].sort((a, b) => a - b)
//     console.log(result);
// }

// // console.log(mergeArrays([1,2,3,4], [5,6,7,8]));
// // console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));
// console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));
// =================================================

// * Reverse
// reverse = function (array) {
//   // TODO: program me!
//   let revArr = new Array();
//   for (let i = array.length - 1; i >= 0; i--) {
//     revArr.push(array[i]);
//   }

//   return revArr;
// };

// console.log(reverse([1, 2, 3]));

// * Count the divisors of a number
// function getDivisorsCnt(n) {
//   // todo
//   let res = new Array();
//   for (let i = n; i > 0; i--) {
//     if (n % i == 0) {
//       res.push(i);
//     }
//   }

//   return [res.length, res];
// }

// console.log(getDivisorsCnt(10));

// * Are they square?
var isSquare = function (arr) {
  //Your code here
  // if(arr.length !== 0) {
  //   const squareArr = arr.filter(num => Math.sqrt(num) % 1 !== 0)

  //   return squareArr.length === 0 && true;
  // } else {
  //   return undefined;
  // }

  return arr.length !== 0
    ? arr.every((num) => Math.sqrt(num) % 1 === 0)
    : undefined;
};

console.log(isSquare([1, 4, 9, 16, 25, 36]));
console.log(isSquare([1, 2, 3, 4, 5, 6]));
console.log(isSquare([]));
console.log(isSquare([1, 2, 4, 15]));
