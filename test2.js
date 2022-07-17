// var myarray = [25, 1, 7, 41];
// myarray.sort(function (a, b) {
//   console.log("comparing " + a + ", " + b);
//   return a - b;
// });

function solution(strings, n) {
  strings.sort((x, y) => {
    let first = x[n];
    let second = y[n];
    console.log(x);
    console.log(y);

    return y - x;
  });
  return strings;
}

let string = ["sun", "bed", "car"];
let n = 1;
console.log(solution(string, n));

console.log(string.sort());
