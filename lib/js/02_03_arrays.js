//Масиви
// Example 1 Порахувати загальну суму покупок в корзині
// Через метод for
// const cart = [54, 28, 32, 56, 45, 21, 25, 180];
// //Keep 2 Зробити змінну total до цикла
// let total = 0;
// //Keep 1 Перебрати масив(отримали доступ до кожного елементу)
// for (let i = 0; i < cart.length; i += 1) {
//   //   console.log(cart[i]);
//   //Keep 3 Кожен елемент додати до total
//   total += cart[i];
// }

// console.log('Total:', total);

// Example 2 Порахувати загальну суму покупок в корзині
// Через метод for of
// const cart = [25, 81, 26, 93, 189, 56, 254];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total:', total);

// Example 3 Порахувати загальну суму покупок в корзині та додати + 10% налога
// Через метод for - так як, нам потрібно змінити cart[i]
// const cart = [25, 81, 26, 93, 189, 56, 254];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);

//   total += cart[i];
// }

// console.log('Total:', total);

//!!Запам'ятай, якщо тобі потрібно змінити [i], тобі потрібен метод for
//Якщо тобі потрібно просто перебрати і наприклад скласти, або помножити
//використовуй метод for of (у нього більш короткий синтаксис)

//Example 4
//Напиши скрипт, який підрахує суму усіх четних чисел в масиві
//Перший варіант (через for)
// const numbers = [1, 5, 10, 12, 14, 16, 18, 20, 42, 44, 46, 48, 50];
// //Keep 1 Змінна total;
// let total = 0;

// //Keep 2 Перебрати масив;
// for (let i = 0; i < numbers.length; i += 1) {
// const number = numbers[i] - можна записувати так, щоб легше читати код і тобі по коди
//вказувати number//
//   console.log(numbers[i]);
//   //Keep 3 На кожній ітерації перевірити елемент на четность;
//   if (numbers[i] % 2 === 0) {
//     console.log('Четное');
//     //Keep 4 Якщо четний плюсуем к total;
//     total += numbers[i];
//   }
// }

// console.log('Total:', total);

//Другий варіант (через for of)
// const numbers = [1, 5, 10, 12, 14, 16, 18, 20, 42, 44, 46, 48, 50];
// let total = 0;

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log('Четное');

//     total += number;
//   }
// }

// console.log('Total:', total);

//Example 5
//Напиши скрипт, який підрахує суму усіх нечетних чисел в масиві
//Варіант вирішення цієї задачі (через for of + continue)
// const numbers = [1, 5, 10, 12, 13, 15, 17, 21, 42, 44, 46, 48, 51];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log('Цю, операцію потрібно пропустити', number);
//     continue;
//   }
//   console.log(`${number} - Четное!!!`);
//   total += number;
// }
// console.log('Total:', total);

//Example 6
// Напиши скрипт пошука логіна
// - Якщо логіна немає, виводити сповіщення "Користувач (логін) незнайден"
// - Якщо знайшли логін, виводити сповіщення "Користувач (логін) знайден"
// 4 варіанта вирішення (через for, for .. of логіка break і метод includes() з тренарником)

// const logins = ['Mango', 'Ajax', 'Poly', 'Pango'];
// const loginsTofind = 'Mango';
// let message = `Користувач ${loginsTofind} не знайден`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log('login:', login);

//   console.log(`${login} === ${loginsTofind}:`, login === loginsTofind);

//   if (login === loginsTofind) {
//     console.log('Вітаю ми знайшли');
//     message = `Користувач ${loginsTofind} знайден`;
//     break;
//   }
// }

// console.log(message);

// Вирішення завдання через for of
// for (const login of logins) {
//   console.log('login:', login);

//   console.log(`${login} === ${loginsTofind}:`, login === loginsTofind);

//   if (login === loginsTofind) {
//     console.log('Вітаю ми знайшли');
//     message = `Користувач ${loginsTofind} знайден`;
//     break;
//   }
// }

// console.log(message);

// Вирішення завдання через метод includes + тренарник
// const message = logins.includes(loginsTofind)
//   ? `Користувач ${loginsTofind} знайден`
//   : `Користувач ${loginsTofind} незнайден`;
// console.log(logins.includes(loginsTofind));

// console.log(message);

//Example 7
// Напиши скрипт пошука самого маленького числа в масиві
// При умові, що числа унікальні (не повторюються)
// const numbers = [119, 552, 101, 12, 124, 33, 47, 46, 48, 19];
// //Алгоритм вірішення задачі:
// //1. Беремо першу будь-яку монетку і записумо, що вона найменьша
// //2. Всі інші які витаскуємо , порівнюємо з нашою найменьшою, якщо нова меньше перезаписуємо
// let smallestNumber = numbers[0];
// // console.log(smallestNumber);

// for (const number of numbers) {
//   //   console.log(number);
//   // Якщо поточна монетка меньше, ніж та яку ми записали раніше
//   if (number < smallestNumber) {
//     // Перезаписуємо нову найменьшу в smallestNumber
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber', smallestNumber);

//Example 8
// Напиши скрипт пошука самого !великого числа в масиві
// При умові, що числа унікальні (не повторюються)
// const numbers = [11, 552, 1001, 125, 124, 33, 47, 46, 48, 19];
// let theBiggerNumber = numbers[0];
// // console.log(theBiggerNumber);

// for (const number of numbers) {
//   //   console.log(number);
//   if (number > theBiggerNumber) {
//     theBiggerNumber = number;
//   }
// }

// console.log('theBiggerNumber', theBiggerNumber);

//Example 8
//Написати скрипт, який об'єднує всі єлементи масиву в одне строкове значення
//Єлементів може бути будь яка кількість
//Нехай єлементи будуть розділені комою
// 1 вирішення завдання через for
// 2 через метод join

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
//Повинно бути така строка 'Mango,Ajax,Poly,Kiwi'
// let string = '';
// // Нам потрібно перебрати масив і для кожного елемента масива в строці приплюсовать його
// for (const client of clients) {
//   string += client + ',';
// }

// string = string.slice(0, string.length - 1);

// console.log(string);

//!!Вирішення завдання через метод join
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
//Повинно бути така строка 'Mango,Ajax,Poly,Kiwi'
// const string = clients.join(', ');
// console.log(string);

//Example 9
//Напиши скрипт який замінює регистр кожного симовола в строці на протилежний
//Наприклад, якщо строка "JavaScript" то після скріпта повинна бути строка "jAVAsCRIPT".
//Вирішення двома методами ()
//Перший метод (for of + toLowerCase + toUpperCase)
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   if (letter === letter.toLowerCase()) {
//     console.log('Ця буква в нижньому регістрі - ', letter);

//     invertedString += letter.toUpperCase();
//   } else {
//     console.log('Ця буква в верхньому регістрі - ', letter);

//     invertedString += letter.toLowerCase();
//   }
// }

// console.log(invertedString);

//Другий метод (тренарник)
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }

// console.log('invertedString: ', invertedString);

//Example 10
// Зробити slug в url приклад (top-10-benefits-of-react-framework)
// Порядок дій: нормалізуємо строку, розбиваємо по словам, зшиваємо строку з розділювачем
// Перший метод (в 3 дії)
// const title = 'Top 10 benefits of react framework';

// const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// // console.log(words);

// const slug = words.join('-');
// // console.log(slug);

// // Другий метод (в одну дію)
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

//Example 11
// Напииши скрипт який рахує суму елементів двух масивів
// const number1 = [11, 22, 35, 43, 57];
// const number2 = [10, 24, 3, 4];
// let total = 0;

// //Використовуємо метод concat, який нам два масива зшиє в один
// const allNumbers = number1.concat(number2);
// // console.log(allNumbers);

// for (const allNumber of allNumbers) {
//   total += allNumber;
// }

// console.log(total);

//Example 12
//Працюємо з колекцією карток в Trello
//Використовуємо метод splice()
// - Видалити
// - Додати
// - Оновити

// const cardsOffTrello = [
//   'Картка - 1',
//   'Картка - 2',
//   'Картка - 3',
//   'Картка - 4',
//   'Картка - 5',
// ];

// console.table(cardsOffTrello);

//Видалити по індексу, завдяки методу indexOf та includes()
// const cardsOffTrelloToRemove = 'Картка - 3';
// const index = cardsOffTrello.indexOf(cardsOffTrelloToRemove);
// console.log(index);
// cardsOffTrello.splice(index, 1);

// console.table(cardsOffTrello);

//Додавання по індексу
// const cardsOffTrelloToAdd = 'Картка - 6';
// const index = 2;

// cardsOffTrello.splice(index, 0, cardsOffTrelloToAdd);
// console.table(cardsOffTrello);

//Оновлення по індексу
// const cardsOffTrelloToUpdate = 'Картка - 17';

// cardsOffTrello.splice(2, 1, cardsOffTrelloToUpdate);

// cardsOffTrello.splice(3, 1, 'Картка - 221');

// console.table(cardsOffTrello);

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);

// console.log(firstTwoEls);

// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);

// const lastThreeEls = fruits.slice(2);
// console.log(lastThreeEls);