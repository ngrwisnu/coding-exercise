function likesIt(names) {
  if (!names.length) {
    return "no one likes this";
  }

  if (names.length < 3) {
    const rest = names.slice();

    return rest.length === 1
      ? `${rest} likes this`
      : `${rest.join(" and ")} like this`;
  }

  return names.length === 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : `${names[0]}, ${names[1]} and ${names.slice(2).length} others like this`;
}

console.log(likesIt([]));
console.log(likesIt(["Peter"]));
console.log(likesIt(["Jacob", "Alex"]));
console.log(likesIt(["Max", "John", "Mark"]));
console.log(likesIt(["Alex", "Jacob", "Mark", "Max"]));
