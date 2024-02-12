// function hashtag(str) {
//   let text = str.replace(/\s/g, "");

//   if (text.length > 140 || text === "") {
//     return false;
//   }

//   return (
//     "#" +
//     str.replace(/\b\w/g, (match) => match.toUpperCase()).replace(/\s/g, "")
//   );
// }

function hashtag(str) {
  const res = str
    .replace(/\b\w/g, (match) => match.toUpperCase())
    .replace(/\s/g, "");

  if (res.length >= 140 || res === "") {
    return false;
  }

  return "#" + res;
}

console.log(hashtag("    Hello     World   "));
console.log(
  hashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  )
);
