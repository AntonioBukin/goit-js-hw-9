// Колбэк-функции

// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// Вызываем функцию greet и выводим результат в консоль
//console.log(greet('Манго')); // Добро пожаловать Манго.

// Выводим функцию greet в консоль не вызывая её
// console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }

// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// Передаём инлайн функцию greet как колбэк
// registerGuest('Манго', function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// Передаём инлайн функцию notify как колбэк
// registerGuest('Поли', function notify(name) {
//   console.log(`Добро пожаловать ${name}.`);
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

//Несколько колбэков
// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall('Манго');

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.2;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log('Logging value: ', value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// Передаем printValue как callback-функцию
//repeat(3, printValue);
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
//repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

//Example 1
//Функція doMath(a, b, callback)

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };
//Більш короткий сінтаксис(інлайн-функція)://
// doMath(18, 3, function (x, y) {
//   return x + y;
// });

// const edd = function (x, y) {
//   return x - y;
// };
//Більш короткий сінтаксис(інлайн-функція)://
// doMath(21, 4, function (x, y) {
//   return x - y;
// });

//doMath(2, 3, add);
//doMath(10, 3, edd);

//Example 2
//Функція фільтр для фільтрування масиву

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el); //перебрали масив
//     console.log(test(el)); //отрималі данні по нашій умові (строка 495-497)

//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el); //пушим в масив єлементи value >= 3 (строка 502)
//     }
//   }

//   return filteredArray;
// };

// 1. Потрібно передати ф-цію;
// 2. Ф-ція отримує елемент масива;
// 3. Якщо елемент масива задовільняє умови, то функція поверне true;
// 4. Якщо елемент масива не задовільняє умові, то функція поверне false;

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (value) {
//   return value >= 4; //більш короткий синтаксис
// });
// console.log(r2);

//Example 3
//Функція фільтр для фільтрування масиву
//У нас є масив фруктів і нам необхідно
//повернути в новий масив усі фрукти у яких вартість більше 150

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     //console.log(el); //перебрали масив
//     //console.log(test(el)); //отрималі данні по нашій умові (строка 495-497)

//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el); //пушим в масив єлементи value >= 3 (строка 502)
//     }
//   }

//   return filteredArray;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'banana', quantity: 100, isFresh: false },
//   { name: 'chery', quantity: 180, isFresh: true },
// ];

// const getFriutsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFriutsWithQuantity);
// console.log(r3);

/*------------------------------------------------- */

//Метод forEach
//const numbers = [5, 10, 15, 20, 25];

// Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

/*------------------------------------------------- */

//Неявный возврат
// const arrowAdd = (a, b, c) => a + b + c;
// console.log(arrowAdd(5, 15, 5)); //25

//Псевдомассив arguments
// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]

/*------------------------------------------------- */
//Стрілкові ф-ції

//Звичайна ф-ція
// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

//Стрілкова ф-ція
// const addArrow = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

//Скорочений синтаксис стрілкової ф-ції
//const addArrow2 = (a, b, c) => a + b + c;

//console.log(add(5, 15, 25));
//console.log(addArrow(7, 13, 21));
//console.log(addArrow2(27, 11, 3));

//Стрелочные функции как коллбеки
//const numbers = [5, 10, 15, 20, 25];

// Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   //console.log(i);
//   //console.log(numbers[i]);
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); //[4, 5];
