// function cakes(recipe, available) {
//   let isReady = true;

//   for (let ing in recipe) {
//     const stats = available.hasOwnProperty(ing);

//     if (!stats) {
//       isReady = false;
//       break;
//     }
//   }

//   if (!isReady) return 0;

//   let count = [];

//   for (let ing in recipe) {
//     const res = available[ing] / recipe[ing];

//     count.push(Math.floor(res));
//   }

//   return count.sort((a, b) => a - b)[0];
// }

// ===============================

// function cakes(recipe, available) {
//   let count = [];

//   for (let ing in recipe) {
//     const stats = available.hasOwnProperty(ing);

//     if (!stats) {
//       return 0;
//     }

//     count.push(Math.floor(available[ing] / recipe[ing]));
//   }

//   return Math.min(...count);
// }

// ===============================

function cakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).map(
      (ing) => Math.floor(available[ing] / recipe[ing]) || 0
    )
  );
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);

console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
