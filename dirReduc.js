function dirReduc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] == "NORTH" && arr[i + 1] == "SOUTH") ||
      (arr[i] == "SOUTH" && arr[i + 1] == "NORTH") ||
      (arr[i] == "WEST" && arr[i + 1] == "EAST") ||
      (arr[i] == "EAST" && arr[i + 1] == "WEST")
    ) {
      arr.splice(i, 2);

      dirReduc(arr);
    } else {
      continue;
    }
  }

  return arr;
}

// function dirReduc(arr) {
//   let opposite = {
//     NORTH: "SOUTH",
//     EAST: "WEST",
//     SOUTH: "NORTH",
//     WEST: "EAST",
//   };

//   return arr.reduce(function (dirs, dir) {
//     console.log(dirs);
//     if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
//     else dirs.push(dir);
//     return dirs;
//   }, []);
// }

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
