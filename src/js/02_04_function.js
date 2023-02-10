//02-04 Function

// function myltiply(a, b, c) {
//   //   console.log(`Лог при виклику myltiply ${a * b * c}`);

//   return a + b + c;

//   console.log(`Цей код ніколи не виповниться ${a + b * c}`);
// }

// let result = myltiply(80, 4, 5);
// console.log('Це результат першої ф-ції:', result);

// let res2 = myltiply(122, 2, 4);
// console.log('Це результат другої ф-ції:', res2);

// function multiply() {
//   let total = 10;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(2, 2, 3, 6));

// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   console.log('Виконується ф-ція add');

//   return x + y;
// };

// const r1 = add(10, 3);
// console.log('r1:', r1);

// const r2 = add(24, 22);
// console.log('r2:', r2);
// Example 1
// Напиши ф-цію calculateTotalPrice(items)
// Яка пиймає масив цін (чисел) и повертає їх суму
// Вирішуємо через for
// const cart = [11, 22, 35, 43, 57];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total:', total);

// Вирішуємо через function + for of//

// const calculateTotalPrice = function (items) {
//   //   console.log('items в середені ф-ції:', items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// const priceResultOne = calculateTotalPrice([222, 2, 6]);
// console.log('Total першої покупки:', priceResultOne);

// const priceResultTwo = calculateTotalPrice([1000, 212, 21, 54, 87, 65]);
// console.log(`Total другої покупки: ${priceResultTwo}`);

// console.log(
//   'Total ще одної покупки:',
//   calculateTotalPrice([55, 21, 32, 5, 19])
// );
//Example 2
//Напиши ф-цію logItems(items) для того щоб перебрати і
//залогіровать масив

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems([1, 3, 14, 18, 4, 7, 29, 6, 34]);
// logItems(['apple', 'strawberry', 'cherry', 'cranberries']);

//Example 3
// Напиши функцію findLogin(allLogins, login) для пошука логіна
// - Якщо логіна немає, виводити сповіщення "Користувач (логін) незнайден"
// - Якщо знайшли логін, виводити сповіщення "Користувач (логін) знайден"

// const logins = ['Mango12f', 'Po23ly', 'Ajax77', 'RAbax77', 'lGor89ly'];

// const findLogin = function (allLogins, loginsTofind) {
//   //   console.log(allLogins);
//   //   console.log(loginsTofind);

//   for (const login of allLogins) {
//     if (login === loginsTofind) {
//       return `Користувач ${loginsTofind} знайден`;
//     }
//   }
//   return `Користувач ${loginsTofind} не знайден`;
// };

//**Вирішення задачі, через тренарнік**//
// const findLogin = function (allLogins, loginsTofind) {
//   return allLogins.includes(loginsTofind)
//     ? `Користувач ${loginsTofind} знайден`
//     : `Користувач ${loginsTofind} не знайден`;
// };

// console.log(findLogin(logins, 'Mango12f'));
// console.log(findLogin(logins, 'Ro23ly'));
// console.log(findLogin(logins, 'jax77'));
// console.log(findLogin(logins, 'Po23ly'));

//Example 4
// Напиши функцію findSmallNumber(numbers) для пошука самого маленького числа в масиві
// При умові, що числа унікальні (не повторюються)

// const findSmallNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// console.log(findSmallNumber([119, 552, 101, 12, 124]));
// console.log(findSmallNumber([552, 101, 1772]));
// console.log(findSmallNumber([33, 47, 46]));

//Example 5
//Напиши функцію changeCase(string) який замінює регистр кожного симовола в строці на протилежний
//Наприклад, якщо строка "JavaScript" то після скріпта повинна бути строка "jAVAsCRIPT".

// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// };

// console.log(changeCase('WERfghH'));
// console.log(changeCase('qRerTyfghA'));
// console.log(changeCase('AsCvBNhj'));

//Example 6
// Напиши функцію slugify(string) в url приклад (top-10-benefits-of-react-framework)
// Порядок дій: нормалізуємо строку, розбиваємо по словам, зшиваємо строку з розділювачем

//Вирішення завдання в 3 дії
//const slugify = function (string) {
//   const normalizedString = string.toLowerCase();
//   const words = normalizedString.split(' ');
//   const slug = words.join('-');

//   return slug;
// };

//Вирішення завдання в одну строку
// const slugify = function (string) {
//   return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify('JavaScript це цікаво'));
// console.log(slugify('Если разделитель это пустая строка, то получится массив'));
// console.log(slugify('В строке элементы будут разделены символом'));

//Псевдомасів arguments та array.from та новий підход '...назва парамету'

// const fn = function (...args) {
//   //В парамерт args складаються абсолютно всі аргументи і створюється новий масив
//   //дивись приклад. Теперь в змінній args масив чисел, які ми передали.
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 6);
// fn(1, 2, 3, 4, 8);

//Якщо потрібно щоб перше значення було в окремому параметрі (приклад: "hello, 1, 2 [3]" )
//a, b, c - hello, 1, 2, а 3 вже йде окремим масивом
// const fn = function (a, b, c, ...args) {
//   console.log(`${a}, ${b}, ${c}`);
//   console.log(args);
// };

// fn('hello', 1, 2, 3); // ['hello', 1, 2, 3]
// fn('hi', 1, 2, 3, 4, 6);
// fn('af', 1, 2, 3, 4, 8);

//Example 7
// Напиши функцію add для складання вільного кол-ва аргументів (чисел)
// операція ...rest (бере декілька єлементів і в масив)
// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log('Загальний тотал:', add(1, 2, 3));
// console.log(add(1, 2, 18, 22));

//Example 8
//Напиши функцію filterNumber(array [, number1, ...]) яка:
//1) першим аргументом приймає масив чисел
//2) після першого аргументу може бути будь-яка кількість інших аргументів, які будуть числами
//3) Ф-ція повинна повернути новий масив, в якому будуть тільки ті аргументи, починаючи з другого,
// для якого є аналог в оригінальном масиві.

// const filterNumber = function (array, ...args) {
//   console.log('args:', args); //зберемо 'args' в масив [10, 20, 2, 5]
//   console.log('array:', array); //зберемо 'array' в масив [1, 2, 3, 4, 5]
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//       console.log(`${element} є повсюду!`);
//     }
//   }
//   return uniqueElements;
// };

// console.log(filterNumber([1, 2, 3, 4, 5], 10, 20, 2, 5));
// console.log(filterNumber([10, 20, 3, 4, 50], 23, 20, 22, 50));
// console.log(filterNumber([12, 26, 38, 48, 51], 23, 26, 47, 51));
