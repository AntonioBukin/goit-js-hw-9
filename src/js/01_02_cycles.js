// Example 1
// Напиши скрипт вибора вартості готеля по кол - ву зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 210$

// Якщо в змінній stars щось окрім чисел 1 - 5, виводь строку
// "Такої кількості зірок немає"

// Є декілька варіантів вирішування(if else та switch)
// Switch - більш доцільний, тому що ми порівнюємо одне значення
// в нашому випадку(stars) з різними крітеріями

// const stars = 4;
// let price;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//     case 3:
//     price = 50;
//     break;

//     case 4:
//     price = 70;
//     break;

//     case 5:
//     price = 210;
//     break;

//   default:
//     console.log("Такої кількості зірок немає");
// }

// console.log('Номер в готелі коштує:', price, "$");

// if else
// if (stars === 1) {
//     cost = 20;
// } else if (stars === 2) {
//     cost = 30;
// } else if (stars === 3) {
//     cost = 50;
// } else if (stars === 4) {
//     cost = 70;
// } else if (stars === 5) {
//     cost = 210;
// } else {
//   console.log("Такої кількості зірок немає");
// }

// console.log(cost);

// Example 2
// Напиши скрипт вибора вартості білетів на поїзд по рівню місць .
// 1-2 - 20$, 3-4 - 30$, 5 - 50$

//Реалізували за допомого switcha
// const tickets = 3;
// let cost;

// switch (tickets) {
//     case 1:
//     case 2:
//     price = 20;
//     break;

//     case 3:
//     case 4:
//     price = 30;
//     break;

//     case 5:
//     price = 50;
//     break;

//   default:
//     console.log("Таких білетів немає в переліку");
// }

// console.log('Білет коштує:', price, "$");

// Реалізували за допомого if else
// if (tickets === 1 || tickets === 2) {
//     cost = 20;
// } else if (tickets === 3 || tickets === 4) {
//     cost = 30;
// } else if (tickets === 5) {
//     cost = 50;
// } else {
//   console.log("Вибачте, таких білетів немає в переліку");
// }

// console.log('Загальна вартість:', cost, "$");

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
// const employees = 4;
// const minSalary = 1300;
// const maxSalary = 5000;
// let totalSalary = 0;

// //keep 1(перебрать работников в цикле)
// for (let i = 0; i < employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + maxSalary);
//     console.log(`ЗП работника ${i} - ${salary}`);

//     totalSalary += salary;

// }
// console.log('totalSalary: ', totalSalary);
//keep 2(сгенерировать случ. зп)

//keep 3(прибавить к таргету)

//keep4(прибавить к тоталу)

// console.log(sum);
