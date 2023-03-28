// Example 1 -Виведіть на екран загальну кількість яблук і винограду. Різницю яблук та винограда.
// const apples = 47;
// const grapes = 135;

// const fruitsBox = (apples + grapes);
// console.log('Total:', fruitsBox);

// Example 2 - Заміни вираз перевизначення комбінованим оператором +=.
// let students = 100;
// students = students + 50;
// students += 50
// console.log(students);

// Example 3 - Розбери пріоритет операторів в інструкції надання
// значення змінної result.
// const result = ((108 + 223) - (2 * 5));
//                 //    331    -   10
// console.log(result);

// Example 4 - Напиши скрипт, який виводить у консоль заокруглені
// вгору/вниз і т.д. Значення змінної value.
// Використовуй методи Math.floor(), Math.ceil()
// та Math.round(). Перевірте, що буде в консолі при
// значеннях 27.3 і 27.9.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
// console.log(Math.floor(27.3)); //27
// console.log(Math.ceil(27.3)); //28
// console.log(Math.round(27.3)); //27
// console.log(Math.floor(27.9)); //27
// console.log(Math.ceil(27.9)); //28
// console.log(Math.round(27.9)); //27

// const x = Math.floor(27.3);
// console.log(x); //27

// Example 5 - Склади речення за допомогою шаблонних рядків A has B , де A, B - змінні вставлені в рядок.
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;

// const shopBots = `${companyName}, has ${repairBots + defenceBots} bots in stock`
// console.log(shopBots);

// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.
// Вага та висота зберігаються в змінних weight і height, але не як числа,
// а у вигляді рядків (спеціально для завдання).
// Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
// тобто як роздільник дробової частини може бути кома.
// Індекс масії тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';

// const bmi = Number.parseFloat('88,3');
// const bmv = Number.parseFloat('1.75');

// const indexMt = (bmi / bmv);
// console.log(bmi);
// console.log(bmv);
// console.log(indexMt.toFixed(1));

// Example 7 -Яким буде результат виразів?
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
// https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0_%E2%80%94_A

// console.log(10 >= '7'); //true

// console.log('2' > '12'); // true

// console.log('2' < '12'); //false

// console.log('4' == 4); //true

// console.log('6' === 6);//false

// console.log('false' === false); // false

// console.log(1 == true); // true

// console.log(1 === true);//false

// console.log('0' == false);//true

// console.log('0' === false);//false

// console.log('Papaya' < 'papaya');//true

// console.log('Papaya' === 'papaya'); // false

// console.log(undefined == null);//true

// console.log(undefined === null);//false

// let type;
// const age = 21;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type);

// const age = 17;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "child"