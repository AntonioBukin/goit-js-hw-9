//const temps = [14, -4, 25, 8, 11];

//console.log(...temps); //14, -4, 25, 8, 11 набір окремих чисел
//console.log(Math.max(...temps)); //25 саме велике число

//const NewTemps = [...temps];
//console.log(NewTemps); [14, -4, 25, 8, 11] копія

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

//const third = { ...first, ...second };
//console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

//Операція rest(сбор)
//Якщо є завдання із об'екта витянути деяку кількість св-в в локальні змінні,
//а всі інші св-ва зібрати в іншу.

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Jamaica, Rios',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restUser } = user;
// console.log(name, tag, location); //змінні які нам потрібні
// console.log(restUser); // змінні які винисли окремо

//Патерн об'ект налаштування
//Він потрібен, коли у функції 3 і більше аргументів

//Варіант 1 - написання деструктурізації
// const showUserInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     location,
//     stats: { followers, views, likes },
//   } = userProfile;
//   //деструктруктуріровали в userprofile наші ключі з данними

//   console.log(name, tag, location, followers, views, likes);
// };

//Варіант 2 - написання деструктурізації
// const showUserInfo = function (userProfile) {
//   const { name, tag, location, ...restUsers } = userProfile;
//   console.log(restUsers);
//   console.log(name, tag, location);
// };

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Jamaica, Rios',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showUserInfo(user);

//Example 1
//Знайти автора з найбільшим рейтінгом

// const authors = {
//   kiwi: 5,
//   peter: 6,
//   gin: 8,
//   andrey: 3,
//   ayo: 7,
// };

//Варіант номер 1 самий простий
//const ratings = Object.values(authors);

//console.log(Math.max(...ratings)); //8

//Варіант номер 2 більш корисний
//const entries = Object.entries(authors);
//console.log(entries); //отримали доступ до ключа та інформації ключа

//for (const entrie of entries) {
//console.log(entrie); //перебрали всіх авторів з їх рейтингами
//const [name, rating] = entrie;
//   const name = entrie[0]; **цей запис пояснення 40 строки
//   const rating = entrie[1]; **цей запис пояснення 40 строки

//console.log(name, rating);
//}

//Example 2
/* Працюємо з колекцією товарів в корзині:
 * getItems()
 * add(product)
 * remove(productName)
 * clear()
 * countTotalPrice()
 * increaseQuantity(productName)
 * decreaseQuantity(productName)
 *
 * {name: 'apples', price: 50}
 * {name: 'grapes', price: 80}
 * {name: 'lemons', price: 70}
 * {name: 'oranges', price: 105}
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       console.log(item);

//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         console.log('Знайшли такой продукт', productName);
//         console.log('індекс:', i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;

//     let total = 0;

//     for (const { price, quantity } of this.items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.table(cart.getItems());

// cart.add({ name: 'apples', price: 50 });
// cart.add({ name: 'grapes', price: 80 });
// cart.add({ name: 'grapes', price: 80 });
// cart.add({ name: 'lemons', price: 70 });
// cart.add({ name: 'lemons', price: 70 });
// cart.add({ name: 'oranges', price: 105 });
// cart.add({ name: 'oranges', price: 105 });
// cart.add({ name: 'oranges', price: 105 });

// console.table(cart.getItems());

// cart.remove('apples');
// console.table(cart.getItems());

// console.log('Total:', cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());

//Example 3
//Функция calculateMeanTemperature(forecast) принимает один параметр
//forecast - объект температур на два дня следующего формата.
//Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh
//одной операцией деструктуризации свойств объекта forecast.

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );
// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   })
// );

//Example 4
//В переменной scores хранится массив результатов тестирования.
//Используя распыление и методы Math.max() и Math.min() дополни код так,
//чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore); //93
// console.log(worstScore); //17

//Example 5
//В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп.
//Используя распыление дополни код так, чтобы:
//В переменной allScores хранился массив всех результатов от первой до третьей группы.
//В переменной bestScore был самый высокий общий балл.
//В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores); // загальний масив з 3ьох масивів
// console.log(bestScore); //97
// console.log(worstScore); //14

//Example 6
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {
//   ...defaultSettings,
//   ...overrideSettings,
// };

// console.log(finalSettings); //'light'; "false"; "true"; 10; 30;

//Example 7
//Напиши функцию makeTask(data) которая принимает один параметр
//data - объект со следующими свойствами.
//text - текст задачи.
//category - категория задачи.
//priority - приоритет задачи.
//Функция должна составить и вернуть новый объект задачи,
//не изменяя напрямую параметр data.В новом объекте должно быть свойство completed,
//значение которого хранится в одноимённой локальной переменной.

//В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать.
//Тогда, в новом объекте задачи, в свойствах category и priority должны быть
//значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const makeMyTask = { category, priority, completed, ...data };
//   // Change code above this line
//   return makeMyTask;
// }

// //console.log(makeTask({}));
// console.log(
//   makeTask({
//     category: 'Homemade',
//     priority: 'Low',
//     text: 'Take out the trash',
//   })
// );
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// console.log(makeTask({ text: 'Buy bread' }));

//Example 8
//Используя операцию rest дополни код функции add() так,
//чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// function add(...args) {
//   //console.log(args);
//   let totalAdd = 0;

//   for (const arg of args) {
//     console.log(arg);

//     totalAdd += arg;
//   }

//   return totalAdd;
// }

//console.log(add(15, 27)); //42
//console.log(add(12, 4, 11, 48)); //75
// console.log(add(32, 6, 13, 19, 8)); //78
// console.log(add(74, 11, 62, 46, 12, 36)); //241

//Example 9
//Функция addOverNum() считает сумму всех аргументов.
//Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов,
//которые больше чем заданное число.
//Это число должно быть первым параметром функции.

// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     //console.log(arg);

//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   return total;
// }

//console.log(addOverNum(50, 15, 27)); //0
//console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
//console.log(addOverNum(15, 32, 6, 13, 19, 8)); //51
//console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218

//Example 10
//Функция findMatches() принимает произвольное количество аргументов.
//Первым аргументом всегда будет массив чисел,
//а остальные аргументы будут просто числами.
//Дополни код функции так, чтобы она возвращала новый массив matches,
//в котором будут только те аргументы, начиная со второго,
//которые есть в массиве первого аргумента.
//Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2],
//потому что только они есть в массиве первого аргумента.

// function findMatches(firstNumber, ...args) {
//   const matches = [];

//   for (const arg of args) {
//     //console.log(arg);

//     if (firstNumber.includes(arg)) {
//       //console.log(arg);
//       matches.push(arg);
//     }
//   }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //[1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //[17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); //[24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); //[]

//Example 11
//Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки
//по аналогии с getBooks() и addBook(bookName).
//Метод removeBook(bookName) будет удалять книгу по имени.
//Возвращает строку "Deleting book <имя книги>", где < имя книги > это значение параметра bookName.
//Метод updateBook(oldName, newName) будет обновлять название книги на новое.
//Возвращает строку "Updating book <старое имя> to <новое имя>", где < старое имя > и < новое имя >
//это значения параметров oldName и newName соотвественно.

// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.getBooks()); //"Returning all books"
// console.log(bookShelf.addBook('Haze')); //"Adding book Haze"
// console.log(bookShelf.removeBook('Red sunset')); //"Deleting book Red sunset"
// console.log(bookShelf.updateBook('Sands of dune', 'Dune')); //"Updating book Sands of dune to Dune"

//Example 12
//Дополни метод updateBook(oldName, newName) так, чтобы он изменял
//название книги с oldName на newName в свойстве books.
//Используй indexOf() для того, чтобы найти нужный элемент массива,
//и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     return this.books.splice(bookIndex, 1, newName);
//   },
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// console.log(bookShelf.books); //["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

//console.log(bookShelf.updateBook('The last kingdom', 'Dune')); //["Dune", "Haze", "The guardian of dreams"]
