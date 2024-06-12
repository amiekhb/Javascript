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
  console.log("natural toon niilber:", niilber);
}
