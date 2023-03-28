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

//Example 8
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел,
// и рассчитывает общую сумму его элементов.Общая сумма элементов должна сохраняться в переменной total,
// которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     console.log(order[i]);
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//Example 9
// Напиши функцию findLongestWord(string) которая принимает произвольную строку
// состоящую только из слов разделённых пробелом(параметр string)
// и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   // Change code below this line
//   const findWord = string.split(' ');
//   let theLongWord = [0];

//   for (let i = 0; i < findWord.length; i += 1) {
//     // console.log(findWord[i]);
//     if (findWord[i].length > theLongWord.length) {
//       theLongWord = findWord[i];
//     }
//   }
//   // Change code above this line
//   return theLongWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

//Example 10 РЕШИТЬ!!!
// Напиши функцию findLongestWord(string) которая принимает произвольную строку
// состоящую только из слов разделённых пробелом(параметр string)
// и возвращает самое короткое(маленькое) слово в этой строке.

// function findShotWord(string) {
//   const shotWords = string.split(' ');
//   let theShotWords = [];

//   for (let i = 0; i < shotWords.length; i += 1) {
//     // console.log(shotWords[i]);
//     if (shotWords[i].length < theShotWords.length) {
//       theShotWords = shotWords[i];
//     }
//   }

//   return theShotWords;
// }
// // console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // console.log(findLongestWord('Google do a roll'));
// console.log(findShotWord('May the force be with you'));

//Example 11
//Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала
//массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// // console.log(createArrayOfNumbers(14, 17));
// // console.log(createArrayOfNumbers(29, 34));

//Example 12
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел
//(параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers,
//которые больше чем значение параметра value(число).

// function filterArray(numbers, value) {
//   // Change code below this line
//   let newFilter = [];

//   for (number of numbers) {
//     // console.log(number);
//     if (number > value) {
//       //   console.log(number);
//       newFilter.push(number);
//     }
//   }

//   return newFilter;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[ 4, 5 ]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //[ 5 ]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //[ 41, 76 ]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //[ 24, 41, 76 ]

//Example 13
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit),
// и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit);
// }

// console.log(checkFruit('plum'));
// console.log(checkFruit('mandarin'));
// console.log(checkFruit('pear'));
// console.log(checkFruit('Pear'));
// console.log(checkFruit('apple'));

//Example 14
//Напиши функцию getCommonElements(array1, array2) которая получает два массива
//произвольной длины в параметры array1 и array2, и возвращает новый массив,
//состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   let newArray = [];

//   for (const arrayEl1 of array1) {
//     //console.log('Це arrayEl1', arrayEl1); // 1, 2, 3
//     if (array2.includes(arrayEl1)) {
//       //onsole.log(array2); //2, 4
//       newArray.push(arrayEl1);
//     }
//   }
//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]

//Example 15
// Выполни рефакторинг кода функции calculateTotalPrice(order)
// заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   for (const element of order) {
//     console.log(element);
//     total += element;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503

//Example 16
//Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных
//чисел от start до end.Чётным считается число
//которое делится на 2 без остатка(10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   let findAllNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     //console.log(i); //2,3,4,5
//     if (i % 2 === 0) {
//       //console.log(i);

//       findAllNumbers.push(i);
//     }
//   }

//   return findAllNumbers;
// }

//console.log(getEvenNumbers(2, 5)); //[2, 4]
//console.log(getEvenNumbers(3, 11)); //[4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12));//[6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8));//[8]
// console.log(getEvenNumbers(7, 7));//[]

//Example 17
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     //console.log(i);
//     if (i % divisor === 0) {
//       //console.log(i); //5
//       //number = i; //не потрібно використовувати
//       return i; //5
//     }
//   }

//   return number;
//   // Change code above this line
// }

//console.log(findNumber(2, 6, 5)); // 5
//console.log(findNumber(8, 17, 3)); // 9
//console.log(findNumber(6, 9, 4)); // 8
//console.log(findNumber(16, 35, 7)); // 21

//Example 18
//Напиши функцию includes(array, value), которая делает тоже самое,
//что и метод массива массив.includes(значение) - проверяет,
//есть ли в массиве array значение value, возвращая
//true если есть и false в противном случае.
//При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   for (const arr of array) {
//     //console.log(arr); //1,2,3,4,5
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
// }

//console.log(includes([1, 2, 3, 4, 5], 3)); //true
//console.log(includes([1, 2, 3, 4, 5], 17)); //false
//console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')); //true
//console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum')); //true
//console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi')); //false