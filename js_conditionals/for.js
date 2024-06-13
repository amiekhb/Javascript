//1
for (let toonuud = 1; toonuud <= 10; toonuud++) {
  console.log("too:", toonuud);
}
//2
for (let numbers = 0; numbers <= 10; numbers++) {
  //   if(sondgoi = numbers % 2 === 1), console.log("sondgoi:", sondgoi);
  if (numbers % 2 === 1) {
    console.log("sondgoi:", numbers);
  }
}
//3
for (let numbers = 0; numbers <= 10; numbers++) {
  if (numbers % 2 === 0) {
    console.log("tegsh:", numbers);
  }
}
//4
let i = 0;
let sum = 0;
while (i <= 100) {
  sum = sum + i;
  i++;
}
console.log("niilber:", sum);
//5
let n = prompt("natural too oruul");
let niilber = 0;
for (let ugugdul = 0; ugugdul <= n; ugugdul++) {
  niilber += ugugdul;
  console.log("ugugdluud:", ugugdul);
}
console.log("natural toon niilber:", niilber);
//6
let natural = prompt("too oruul");
let urjver = 1;
for (let coefficient = 1; coefficient <= natural; coefficient++) {
  urjver *= coefficient;
}
console.log("n hurtelh toonuudiin urjver:", urjver);
//7
let number = 1234;
let digit = 0;
let summ = 0;

while (number !== 0) {
  digit = number % 10;
  // console.log("too:", number)
  number = number - digit;
  number = number / 10;
  summ = summ + digit;
  // console.log("цифр:", digit);
}
console.log("digit sum:", summ);
//8
let number1 = 1234;
let digit1 = 0;
let sum1 = 0;
mult = 1;
while (number1 !== 0) {
  digit1 = number1 % 10;
  number1 = number1 - digit1;
  number1 = number1 / 10;
  if (digit1 % 2 === 0) {
    sum1 = sum1 + digit1;
  } else if (digit1 % 2 === 1) {
    mult *= digit1;
  }
}
console.log("even digits:", sum1);
console.log("odd urjver:", mult);
//9
let n1 = 9;
let odd_sum = 0;
for (let data = 0; data <= n1; data++) {
  if (data % 2 === 1) {
    console.log("sondgoi:", data);
    odd_sum += data;
  }
}
console.log("sondgoin niilber:", odd_sum);
//10
let n2 = 6;
let even_sum = 0;
for (let data1 = 0; data1 <= n2; data1++) {
  if (data1 % 2 === 0) {
    console.log("tegsh:", data1);
    even_sum += data1;
  }
}
console.log("tegshiin niilber:", even_sum);
//11
let eyreg=1234
while (number1 !== 0) {
  let urvuu=
}