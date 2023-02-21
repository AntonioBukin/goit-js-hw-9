//03-05 Object

// const playlist = {} - літерал об'єкта.
//Справа від равно {} - це літерал об'єкта

// const playlist = {
//   name: 'мій плейліст',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

//Додавання нового ключа, або перезапис
//playlist.qwe = 5;

//Перезапис старого ключа
// playlist.rating = 22;
// console.log(playlist);

//Доступ до свойства {}
//1 варінт через крапку ім'я об'єкта + ім'я ключа 'playlist.rating'
// console.log(playlist.rating); //5
// console.log(playlist.name); //мій плейліст

//Якщо ім'я ключа(строка) зберігається в змінній, достукатись до данного ключа потрібно через
//через назва об'єкта + квадратні дужки і назва змінної playlist['tracks']
// const propertyName = 'tracks';
// console.log(playlist.propertyName); //undefined
// console.log(playlist[propertyName]); //['трек-1', 'трек-2', 'трек-3']

//Коротший запис властивостей
// const username = 'Mango';
// const email = 'mango@gmail.com';

// const signUpDate = {
//   username,
//   email,
// };

// console.log(signUpDate);

//Вираховні властивості
//<input name='color' value='tomato'>
// const inputName = 'team';
// const inputValue = 'psg';

// const teamFootbalName = {
//   [inputName]: inputValue,
// };

// console.log(teamFootbalName); // team: psg

//Методи об'єкта та this при звретранні до св-ва у методах
//Методи об'єктів використовуються для того, щоб працювати зі свойствами
//Метод для зміни ім'я, рейтінгу ті інше. Методи працюють тільки зі св-вами об'єктів

// const playlist = {
//   name: 'мій плейліст',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,

//   //сінтаксіс об'яви метода
//   //   getName(a) {
//   //     console.log('Ага це getName', a);
//   //   },
// };

// // playlist.getName(15);

// console.log(playlist);

// Потренуємось додавати нові методи
// const playlist = {
//   name: 'мій плейліст',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
//   changeName(newName) {
//     this.name = newName;
//   },
//   changeRating(newRating) {
//     this.rating = newRating;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   }, //метод який рахує довжину нашого значення 'tracks' автоматично
// };

// playlist.changeName('Нове ім`я');

// playlist.changeRating(15);

// playlist.addTrack('Новий трек-4');

// playlist.addTrack('Новий трек-5');

// console.log(playlist.getTrackCount());

// console.log(playlist);

//Перебор об'єкта через Object.keys|value|entries

//Object.keys - повертає масив ключей;
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback); // отримуємо доступ до всіх ключей
// console.log(keys);

// for (const key of keys) {
//   console.log(key); // перебравши ключі, тепер ми можемо працювати з ними
//   console.log(feedback[key]); //отримуємо доступ до значень ключей

//   totalFeedback += feedback[key]; //склали всі значення наших ключів
// }

// console.log('totalFeedback:', totalFeedback);

//Object.values - повертає масив значень
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const values = Object.values(feedback);
// console.log(values); //отримали масив значень в ключах

// for (const value of values) {
//   console.log(value); //перебрали в масиві наші значення

//   totalFeedback += value; //склали всі значення наших ключей
// }

// console.log('totalFeedback:', totalFeedback);

//Робота з колекціями(масив обїектів)
// Example 1
//Знайти друга по імені

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kivi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Fill', online: false },
// ];

// console.table(friends);

// const findFriendByName = function (allfriends, friendName) {
//   for (const friend of allfriends) {
//     console.log(friend); //перебрали поєлементно
//     console.log(friend.name); //поєлементно перебираємо і отримуємо доступ до сво-ва

//     if (friend.name === friendName) {
//       return 'Знайшли!!!';
//     }
//   }

//   return 'Незнайшли';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Example 2
//Отримати імена всіх друзів

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kivi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Fill', online: false },
// ];

// console.table(friends);

// const getAllNames = function (allfriends) {
//   const names = []; // зробимо пустий масив в який будемо додавати імена

//   for (const friend of allfriends) {
//     console.log(friend.name); //Отримали доступ до кожного друга

//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

// Example 3
//Отримати імена друзів, які тільки on-line

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kivi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Fill', online: false },
// ];

// console.table(friends);

// const getOnlineFriends = function (allfriends) {
//   const onLineFriends = [];

//   for (const friend of allfriends) {
//     console.log(friend); //перебрали масив
//     console.log(friend.online); //перебрали, хто online

//     if (friend.online) {
//       onLineFriends.push(friend);
//     }
//   }

//   return onLineFriends;
// };

// console.log(getOnlineFriends(friends));

// Example 4
//Отримати імена друзів, які тільки offine

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kivi', online: false },
//   { name: 'Poly', online: true },
//   { name: 'Fill', online: false },
// ];

// console.table(friends);

// const getOfflineFriends = function (allfriends) {
//   const offLineFriends = [];

//   for (const friend of allfriends) {
//     console.log(friend); //перебрали масив
//     console.log(friend.online); //дізнались, хто online

//     if (!friend.online) {
//       offLineFriends.push(friend); //якщо друг не online додати в масив
//     }
//   }

//   return offLineFriends;
// };

// console.log(getOfflineFriends(friends));

// Example 5
//Зробити функцію яка отримує функцію і online та offline

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kivi', online: false },
//   { name: 'Poly', online: true },
//   { name: 'Fill', online: false },
// ];

// console.table(friends);

// const getFriendsByOnlineStatus = function (allfriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allfriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }

//     friendsByStatus.offline.push(friend);
//   }

//   return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

// Example 6
//Перебери объект apartment используя цикл for...in
//и запиши в массив keys все его ключи,
//а в массив values все значения его свойств.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = ['descr', 'rating', 'price'];
// const values = ['Spacious apartment in the city center', 4, 2153];

// for (const key in apartment) {
//   console.log(key);

//   console.log(apartment[key]);
// }

// Example 7
// Напиши функцию countProps(object), которая считает и возвращает количество
//собственных свойств объекта в параметре object.
//Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     //console.log(object);
//     if (object.hasOwnProperty(key)) {
//       //console.log(key);
//       //console.log(object[key]);

//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// console.log(countProps({})); //0
// console.log(countProps({ name: 'Mango', age: 2 })); //2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //3

// Example 8
//Перебери объект apartment используя метод Object.keys() и цикл for...of.
//Запиши в переменную keys массив ключей собственных свойств объекта apartment,
//и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);
// //console.log(keys);

// for (const key of keys) {
//   //console.log(key);
//   //console.log(apartment[key]);

//   values.push(apartment[key]);
// }

// console.log(values); //['Spacious apartment in the city center', 4, 2153];

// Example 9
//Выполни рефакторинг функции countProps(object) используя метод Object.keys() и,
//возможно, но необязательно, цикл for...of.

// function countProps(object) {
//   let propCount = 0;

//   const keys = Object.keys(object);
//   //console.log(keys);

//   for (const key of keys) {
//     console.log(key);
//     propCount += 1;
//   }

//   return propCount;
// }

// console.log(countProps({})); //0
// console.log(countProps({ name: 'Mango', age: 2 })); //2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //3

// Example 10
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
// где имя свойства это имя сотрудника, а значение свойства это зарплата.
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   const values = Object.values(salaries);
//   console.log(values); //отримали масив значень в ключах

//   for (const value of values) {
//     console.log(value); //отримали значень в ключах

//     totalSalary += value;
//     //console.log(totalSalary); //отримали загальну зп співробітників
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({})); //0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //400

// Example 11
// Перебери массив объектов colors используя цикл for...of.
//Добавь в массив hexColors значения свойств hex,
//а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   //console.log(color.hex);
//   //console.log(color.rgb);

//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors); //["#f44336", "#2196f3", "#4caf50", "#ffeb3b"];
// console.log(rgbColors); //["244,67,54", "33,150,243", "76,175,80", "255,235,59"];

// Example 11
//Напиши функцию getProductPrice(productName) которая принимает один параметр
//productName - название продукта. Функция ищет объект продукта с таким именем(свойство name)
//в массиве products и возвращает его цену(свойство price).
//Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (product of products) {
//     //console.log(product.name);
//     //console.log(product.price);
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice('Radar')); //1300
// console.log(getProductPrice('Grip')); //1200
// console.log(getProductPrice('Scanner')); //2700
// console.log(getProductPrice('Droid')); //400
// console.log(getProductPrice('Engine')); //null

// Example 12
//Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
//Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта
//в массиве products.Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const values = [];

//   for (const product of products) {
//     //console.log(product.name);
//     //console.log(product.price);
//     //console.log(Object.keys(product));

//     // if (Object.keys(product).includes(propName)) {
//     //   values.push(product[propName]);
//     // }

//     if (product.hasOwnProperty(propName)) {
//       //console.log(propName);
//       console.log(product[propName]); //отримали всю інфо в ключах
//       values.push(product[propName]); //в новий масив додали інфу з ключей
//     }
//   }

//   return values;
// }

// console.log(getAllPropValues('name')); //["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); //[4, 3, 7, 9]
// console.log(getAllPropValues('price')); //[1300, 2700, 400, 1200]
// console.log(getAllPropValues('category')); //[]

// Example 13
//Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
//Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice('Blaster')); //0
//console.log(calculateTotalPrice('Radar')); //5200
//console.log(calculateTotalPrice('Droid')); //2800
// console.log(calculateTotalPrice('Grip')); //10800
// console.log(calculateTotalPrice('Scanner')); //8100
