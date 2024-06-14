//1 element ruu handah
let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits[4]);
//2 Хэдэн ширхэг тэгш, сондгой тоо байгаа вэ?
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
let sum = 0;
let avarege = 0;
let tegsh_sum = 0;
let odd_mult = 1;
let max = arrayOfNumbers[0];
let min = arrayOfNumbers[0];
for (i = 0; i < arrayOfNumbers.length; i++) {
  sum = sum + arrayOfNumbers[i];
  avarege = sum / arrayOfNumbers.length;
  if (arrayOfNumbers[i] % 2 === 0) {
    tegsh_sum += arrayOfNumbers[i];
  } else {
    odd_mult = odd_mult * arrayOfNumbers[i];
  }
  if (arrayOfNumbers[i] > max) {
    max = arrayOfNumbers[i];
  } else if (arrayOfNumbers[i] < min) {
    min = arrayOfNumbers[i];
  }
}
console.log("3.1_length:", arrayOfNumbers.length);
console.log("3.2_sum:", sum);
console.log("3.3_avarege:", avarege);
console.log("3.4_tegsh niilber:", tegsh_sum);
console.log("3.5_sondgoi mult:", odd_mult);
console.log("3.6_max_value:", max);
console.log("3.7_min_value:", min);
// let ner = ["A", "m", "i", "n", "", "E", "r", "d", "e", "n", "e"];
// for (i = 0; i <= ner.length; i++) {

//   console.log("ner:", ner.length);
// }
