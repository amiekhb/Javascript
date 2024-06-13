//1
let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits[4]);
//2
let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let sondgoi = 0;
let tegsh = 0;
for (let number = 0; number <= array.length; number++) {
  //   console.log("number:", array.length);
  if (array[number] % 2 === 1) {
    sondgoi++;
  }
  if (array[number] % 2 === 0) {
    tegsh++;
  }
}
console.log("shirheg_sondgoi:", sondgoi);
console.log("shirheg_tegsh:", tegsh);
//3
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log("length:", arrayOfNumbers.length);
let sum = 0;
for (i = 0; i <= arrayOfNumbers.length; i++) {
  sum += arrayOfNumbers[i];
  console.log("sum:", sum);
}
