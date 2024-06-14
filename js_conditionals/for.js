//1 10 хүртэлх натурал тоог хэвлэх программ бич
for (let toonuud = 1; toonuud <= 10; toonuud++) {
  console.log("too:", toonuud);
}
//2 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
for (let numbers = 0; numbers <= 10; numbers++) {
  //   if(sondgoi = numbers % 2 === 1), console.log("sondgoi:", sondgoi);
  if (numbers % 2 === 1) {
    console.log("sondgoi:", numbers);
  }
}
//3 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
for (let numbers = 0; numbers <= 10; numbers++) {
  if (numbers % 2 === 0) {
    console.log("tegsh:", numbers);
  }
}
//4 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
let i = 0;
let sum = 0;
while (i <= 100) {
  sum = sum + i;
  i++;
}
console.log("niilber:", sum);
//5  N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич
let n = prompt("natural too oruul");
let niilber = 0;
for (let ugugdul = 0; ugugdul <= n; ugugdul++) {
  niilber += ugugdul;
  console.log("ugugdluud:", ugugdul);
}
console.log("natural toon niilber:", niilber);
//6 N тооны факториал олох программ бич
let natural = prompt("too oruul");
let urjver = 1;
for (let coefficient = 1; coefficient <= natural; coefficient++) {
  urjver *= coefficient;
}
console.log("n hurtelh toonuudiin urjver:", urjver);
//7 Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич
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
//8 Өгөгдсөн тоон дахь тэгш цифрүүдийн нийлбэрийг ол
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
//9 N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич
let n1 = 9;
let odd_sum = 0;
for (let data = 0; data <= n1; data++) {
  if (data % 2 === 1) {
    console.log("sondgoi:", data);
    odd_sum += data;
  }
}
console.log("sondgoin niilber:", odd_sum);
//10 N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич
let n2 = 6;
let even_sum = 0;
for (let data1 = 0; data1 <= n2; data1++) {
  if (data1 % 2 === 0) {
    console.log("tegsh:", data1);
    even_sum += data1;
  }
}
console.log("tegshiin niilber:", even_sum);
//11 Өгөгдсөн эерэг тооны урвууг хэвлэх программ бич jishee ni: input: 123 output: 321
let num = 2613;
let str = num.toString();
let rev_num = "";
for (let i = 0; i < str.length; i++) {
  rev_num = str[i] + rev_num;
}
console.log("urvuu:", rev_num);
