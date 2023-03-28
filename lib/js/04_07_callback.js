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

//Example 4
//Дополни код так, чтобы в переменной result был результат выполнения функции makePizza,
//а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(makePizza());

// console.log(makePizza);

//Example 5
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback)
//колбэк - функцию и возвращала ее вызов.Функция deliverPizza или makePizza будет
//передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

//console.log(makeMessage('Royal Grand', makePizza)); //"Pizza Royal Grand is being prepared, please wait..."
//console.log(makeMessage('Ultracheese', deliverPizza)); //"Delivering Ultracheese pizza."

//Example 6
//Дополни второй вызов функции makePizza(pizzaName, callback),
//передав вторым аргументом инлайн колбэк - функцию eatPizza(pizzaName),
//которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

//Example 7
//Необходимо написать логику обработки заказа пиццы.
//Выполни рефакторинг метода order так,
//чтобы он принимал вторым и третим параметрами два колбэка
//onSuccess и onError.

//Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,
//метод order должен возвращать результат вызова колбэка onError,
//передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
//Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

//Example 8
//Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел,
//и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice
//и возвращается как результат работы функции.

//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   //   for (let i = 0; i < orderedItems.length; i += 1) {
//   //     totalPrice += orderedItems[i];
//   //}

//   orderedItems.forEach(function (orderedItem, index) {
//     //console.log(`Индекс ${index}, значение ${orderedItem}`);//перебрали і отримал масив
//     totalPrice += orderedItem;
//   });

//   // Change code above this line
//   return totalPrice;
// }

//console.log(calculateTotalPrice([12, 85, 37, 4])); //138
//console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

//Example 9
//Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
//в котором будут только те элементы оригинального массива,
//которые больше чем значение параметра value.

//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] > value) {
//   //       filteredNumbers.push(numbers[i]);
//   //     }
//   //   }

//   numbers.forEach(function (number) {
//     //console.log(`значение ${number}`);
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

//console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
//console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]

//Example 10
//Функция getCommonElements(firstArray, secondArray) принимает два массива
//произвольной длины в параметры firstArray и secondArray, и возвращает новый массив
//их общих элементов, то есть тех которые есть в обоих массивах.

//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   //   for (let i = 0; i < firstArray.length; i += 1) {
//   //     console.log(firstArray[i]);
//   //     if (secondArray.includes(firstArray[i])) {
//   //       commonElements.push(firstArray[i]);
//   //     }
//   //   }

//   firstArray.forEach(function (firstArray) {
//     //console.log(firstArray);

//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]

//Example 10
//Выполни рефакторинг функции calculateTotalPrice() так,
//чтобы она была объявлена как стрелочная.

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100)); //500
// console.log(calculateTotalPrice(8, 60)); //480
// console.log(calculateTotalPrice(3, 400)); //1200

//Example 11
//Выполни рефакторинг функции calculateTotalPrice(orderedItems)
//заменив её объявление на стрелочную функцию.
//Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

//Example 12
//Замени объявление функции filterArray() и коллбек
//для метода forEach() на стрелочные функции.

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     //console.log(number);
//     //console.log(value);
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]

//Example 13
//Замени объявление функции getCommonElements() и
//коллбек для метода forEach() на стрелочные функции.

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     // console.log(element);
//     // console.log(secondArray);

//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2];
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]