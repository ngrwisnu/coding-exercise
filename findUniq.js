// function findUniq(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = (obj[arr[i]] || 1) + 1;
//   }

//   let minKey = null;
//   let minVal = Infinity;

//   for (let key in obj) {
//     if (obj[key] < minVal) {
//       minVal = obj[key];
//       minKey = key;
//     }
//   }

//   return Number(minKey);
// }

function findUniq(arr) {
  let obj = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;

    return acc;
  }, {});

  return +Object.keys(obj).find((key) => obj[key] === 1);
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 0]));
console.log(findUniq([1, 1, 0]));
