function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let [x, y] = [0, 0];

  for (const dir of walk) {
    if (dir === "n") {
      y += 1;
    } else if (dir === "s") {
      y -= 1;
    } else if (dir === "e") {
      x += 1;
    } else {
      x -= 1;
    }
  }

  return x === 0 && y === 0;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
