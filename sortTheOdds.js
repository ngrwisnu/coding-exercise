// function sortArray(array) {
//   let oddsArr = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       oddsArr.push(array[i]);
//     }
//   }

//   for (let i = 0; i < oddsArr.length; i++) {
//     for (let j = 0; j < oddsArr.length - i; j++) {
//       if (oddsArr[j] > oddsArr[j + 1]) {
//         let temp = oddsArr[j];
//         oddsArr[j] = oddsArr[j + 1];
//         oddsArr[j + 1] = temp;
//       }
//     }
//   }

//   let currIdx = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       array[i] = oddsArr[currIdx];
//       currIdx++;
//     } else {
//       continue;
//     }
//   }

//   return array;
// }

function sortArray(array) {
  let oddsArr = array.filter((num) => num % 2).sort((a, b) => a - b);

  return array.map((num) => (num % 2 ? oddsArr.shift() : num));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
