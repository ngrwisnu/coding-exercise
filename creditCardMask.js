// function maskify(cc) {
//   let res = "";

//   for (let i = 0; i < cc.length; i++) {
//     if (i >= cc.length - 4) {
//       res += cc[i];
//     } else {
//       res += "#";
//     }
//   }

//   return res;
// }

// function maskify(cc) {
//   const last4 = cc.slice(-4);

//   const res = last4.padStart(cc.length, "#");

//   return res;
// }

// const maskify = (cc) => cc.slice(-4).padStart(cc.length, "#");

function maskify(cc) {
  function mask(i) {
    if (i >= cc.length) {
      return "";
    }

    return (i >= cc.length - 4 ? cc[i] : "#") + mask(i + 1);
  }

  return mask(0);
}

console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
