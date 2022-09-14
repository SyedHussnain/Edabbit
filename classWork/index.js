// let arr = [10, 15, 20, 45, 30, 95, 40, 50, 60, 70];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arr.splice(i, 1);
//     i--;
//   }
// }

// console.log(arr);

// function operate(a, b, c) {
//   return eval(a, c, b);
// }

// console.log(operate(14, 15, "-"));
console.log("HelloWorld");
let count = 0;

let arr = [15, 10, 20, 45, 30, 95, 40, 50, 60, 70];
for (let i = 0; i < arr.length + 1; i++) {
  if (arr[i] % 2 === 0) {
    arr[i] = arr[i + 1];
    count = count + 1;
  }
}

console.log(count);
console.log(arr);
