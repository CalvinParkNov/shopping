let name = ["john", "calvin"];
let clicked = ["calvin"];
let total = 0;
for (let i = 0; i < name.length; i++) {
  for (let j = 0; j < total.length; j++) {
    if (total[j] === name[i]) {
      total++;
    }
  }
}
console.log(total);
