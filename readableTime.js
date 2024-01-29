// function readableTime(sec) {
//   const hr = Math.floor(sec / 3600)
//     .toString()
//     .padStart(2, "0");
//   const min = Math.floor((sec % 3600) / 60)
//     .toString()
//     .padStart(2, "0");
//   const s = (sec % 60).toString().padStart(2, "0");

//   return `${hr}:${min}:${s}`;
// }

function readableTime(sec) {
  const hr = Math.floor(sec / 3600);
  const min = Math.floor((sec % 3600) / 60);
  const s = sec % 60;

  const formatted = (n) => {
    return n < 10 ? `0${n}` : `${n}`;
  };

  return `${formatted(hr)}:${formatted(min)}:${formatted(s)}`;
}

console.log(readableTime(359999));
console.log(readableTime(5400));
