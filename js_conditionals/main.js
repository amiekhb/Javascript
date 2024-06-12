// let x = 0;
// console.log("Garaas avsan utga:", x);
// console.log("Ugugdliin turul:", typeof x);

// let week_number = Number(prompt("Та 1-7 хооронд тоо оруулна уу !!!"));
// let garagiin_ner;
// if (week_number === 1) {
//   //   console.log("Даваа");
//   garagiin_ner = "Даваа";
// } else if (week_number === 2) {
//   //   console.log("Мягмар");
//   garagiin_ner = "Мягмар";
// } else if (week_number === 3) {
//   //   console.log("Лхагва");
//   garagiin_ner = "Лхагва";
// } else if (week_number === 4) {
//   //   console.log("Пүрэв");
//   garagiin_ner = "Пүрэв";
// } else if (week_number === 5) {
//   //   console.log("Баасан");
//   garagiin_ner = "Баасан";
// } else if (week_number === 6) {
//   //   console.log("Бямба");
//   garagiin_ner = "Бямба";
// } else if (week_number === 7) {
//   //   console.log("Ням");
//   garagiin_ner = "Ням";
// } else {
//   console.log("oldsongui");
// }
// console.log("tanii oruulsan too:", week_number);
// console.log("Tanii oruulsan toond tohiroh utga:", garagiin_ner);

// let age = 16;
// let gender = "er";
// if (age >= 18 && gender === "er") {
//   console.log("Ta nasandhursen eregtei baina:");
// } else {
//   console.log(" ta nasand hureegui esvel emegtei baina:");
// }

// if (age >= 18 || gender === "er") {
//   console.log("Ta nasandhursen esvel eregtei baina:");
// } else {
//   console.log(" ta nasand hureegui bolon emegtei baina:");
// }
// switch (week_number) {
//   case 1: {
//     garagiin_ner = "Даваа";
//     break;
//   }
//   case 2: {
//     garagiin_ner = "Мягмар";
//     break;
//   }
//   case 3: {
//     garagiin_ner = "Лхагва";
//     break;
//   }
//   case 4: {
//     garagiin_ner = "Пүрэв";
//     break;
//   }
//   default: {
//     garagiin_ner = "oldsongui";
//   }
// }
// console.log("tanii oruulsan too:", week_number);
// console.log("Tanii oruulsan toond tohiroh utga:", garagiin_ner);

// //1
// let myAge = Number(prompt("Та тоо оруулна уу!"));
// if (myAge <= 25) {
//   console.log("tanii nas:", "below 25");
// } else if (myAge >= 25) {
//   console.log("tanii nas:", "above 25");
// }

// //2
// let n = Number(prompt("Та тоо оруулна уу!!"));
// // let n;
// // console.log(typeof n);
// // console.log(n % 2);
// if (n % 2 === 0) {
//   console.log("toonii turul:", "it is even");
// } else {
//   console.log("odd");

// 3
// let too1 = 12,
//   too2 = 45,
//   too3 = 30;
// if (too1 > too2 && too1 > too3) {
//   console.log("hamgiin ih utga:", too1);
// } else if (too2 > too1 && too2 > too3) {
//   console.log("hamgiin ih utga:", too2);
// } else if (too3 > too1 && too3 > too2) {
//   console.log("hamgiin ih utga:", too3);
// }
// //4
// let too_1 = 12,
//   too_2 = 45,
//   too_3 = 30;
// if (too_1 < too_2 && too_1 < too_3) {
//   console.log("hamgiin baga utga:", too_1);
// } else if (too_2 < too_1 && too_2 < too_3) {
//   console.log("hamgiin baga utga:", too_2);
// } else if (too_3 < too_1 && too_3 < too_2) {
//   console.log("hamgiin baga utga:", too_3);
// }
//5
let months = prompt("Sar oruul !");
if (months === "2" || months === "3" || months === "4") {
  console.log("sar:", "spring");
} else if (months === "5" || months === "6" || months === "7") {
  console.log("sar:", "summer");
} else if (months === "8" || months === "9" || months === "10") {
  console.log("sar:", "autmn");
} else if (months === "11" || months === "12" || months === "1") {
  console.log("sar:", "winter");
} else {
  console.log("sar:", "oldsongui");
}
//6

const n1 = 85;
const n2 = 75;
const n3 = 96;
const n4 = 69;
let n = 0;

if (n1 > 80) {
  n = n + n1;
}
if (n2 > 80) {
  n = n + n2;
}

if (n3 > 80) {
  n = n + n3;
}
if (n4 > 80) {
  n = n + n4;
}
console.log("80aas ih toonuudiin niilber:", n);

//7
const x = 3;
const y = 7;
const z = 2;
const w = 4;
let u = 1;
if (x < 5) {
  u = u * x;
}
if (y < 5) {
  u = u * y;
}
if (z < 5) {
  u = u * z;
}
if (w < 5) {
  u = u * w;
}
console.log("5s baga toonuudiin urjver:", u);
//8
const bat = 67;
const ochir = 59;
if (bat < 60) {
  console.log("mash muu.");
} else if (bat >= 60 && bat < 70) {
  console.log("hangalttai.");
} else if (bat >= 70 && bat < 80) {
  console.log("dund.");
} else if (bat >= 80 && bat < 90) {
  console.log("sain.");
} else if (bat >= 90 && bat < 100) {
  console.log("mash sain.");
} else {
  console.log("100 hurtel onoo ugnu uu.");
}
if (ochir < 60) {
  console.log("mash muu.");
} else if (ochir >= 60 && ochir < 70) {
  console.log("hangalttai.");
} else if (ochir >= 70 && ochir < 80) {
  console.log("dund.");
} else if (ochir >= 80 && ochir < 90) {
  console.log("sain.");
} else if (ochir >= 90 && ochir < 100) {
  console.log("mash sain.");
} else {
  console.log("100 hurtel onoo ugnu uu.");
}
