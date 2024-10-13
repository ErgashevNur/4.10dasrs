// function num() {
//   const birliklar = [
//     "nol",
//     "bir",
//     "ikki",
//     "uch",
//     "to'rt",
//     "besh",
//     "olti",
//     "yetti",
//     "sakkiz",
//     "toqqiz",
//   ];

//   const onliklar = [
//     "",
//     "O'ng",
//     "Yigirma",
//     "O'ttiz",
//     "Qiriq",
//     "Ellik",
//     "Oltmish",
//     "Yetmish",
//     "Sakson",
//     "To'qson",
//   ];

//   let numer = prompt("Son kiriting");

//   let onligi = Math.floor(numer / 10);
//   let birligi = numer % 10;

//   if (birligi == 0) {
//     return onliklar[onligi];
//   } else {
//     return onliklar[onligi] + " " + birliklar[birligi];
//   }
// }
// console.log(num());

//2
// function soz() {
//   let a = prompt("Soz Kirirting");
//   let b = {};

//   for (let i = 0; i < a.length; i++) {
//     let char = a[i];
//     b[char] = (b[char] || 0) + 1;
//   }

//   for (let str in b) {
//     console.log(`${str}: ${b[str]} ta`);
//   }
// }

// soz();
