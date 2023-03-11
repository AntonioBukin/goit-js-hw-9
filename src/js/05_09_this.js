// ! 1. Контекст (this) у функції визначається на момент
//виклику, а не на момент створення.
// ! 2. Контекстом ф-ції буде об'єкт який її викликав
/*---------------------------------------------------------------*/

//!Функція це об'ект і вона передається по ссилке
//Ф-ція це важкий тип, коли ви ф-цію кудись хочете передати, ви передаєте не копію а ссилку.

// const fnA = function () {
//   console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA', fnB === fnA); //true
/*---------------------------------------------------------------*/
// const bookShelf = {
//   authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]
// bookShelf.addAuthor('Ли Танит');
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]
/*---------------------------------------------------------------*/
//Контекст this
//Де і як була оголошена ф-ція немає ніякого значення на контекст.
//Контект можна виявити в момент виклику ф-ції, якщо він не прив'язан явно.

//1) Як метод об'єкта в контексті об'екта

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };

// user.showTag();

//2) Виклик без контексту
//В суворому режимі = underfined
//Не в суворому режимі = window

// const foo = function () {
//   console.log('foo -> this', this);
// };

// foo();
/*---------------------------------------------------------------*/
//this в callback-функциях

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.

// //Варіант 2
// const user = {
//   firstName: 'Oleg',
//   lastName: 'Dond',
// };
// makeMessage(customer.getFullName.bind(user)); //Обрабатываем заявку от Oleg Dond.

//методи call, apply - викликають ф-цію на місці
//метод bind - робить копію ф-ції

//! При передачі ф-ції в якості колбєку, її контекст не зберігається
//! Для прив'язки контексту використовується методи call, apply та bind
//! Методи call, apply - викликають ф-цію на місці і вказують їй контекст (1ий аргумент)
//! Метод bind - зв'язує, робить копію ф-ції і вказує контекст
//  (використовуйте при передечі ф-ції в якості колбєку)

/*---------------------------------------------------------------*/

//Example 1
// const fn = function () {
//   console.log('fn -> this', this);
// };

// fn(); //Який this?? - правило номер два (виклик без контексту), позначає
// або underfined або window
/*---------------------------------------------------------------*/

//Example 2
// const book = {
//   title: 'react for beginners',
//   showThis() {
//     console.log('showThis -> this', this);
//   },
//   showTitle() {
//     console.log('showTitle -> this', this.title);
//   },
// };

// book.showThis(); //Який this?? - перше правило, книжка викликала цю функцію,
//тобто this зсилається на об'ект book.
/*---------------------------------------------------------------*/

//Example 3
// const outerShowThis = book.showThis;
// outerShowThis(); //Який this?? - правило номер два (виклик без контексту), позначає
// або underfined або window
/*---------------------------------------------------------------*/

//Example 4
// const outerShowTitle = book.showTitle;
// outerShowTitle(); //Який this?? - помилка, томущо this не об'єкт а underfined

/*---------------------------------------------------------------*/

//Example 5
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//   };

//changeColor(); //Який this?? - правило номер два (виклик без контексту), позначає
// або underfined або window
//   const sweater = {
//     color: 'teal',
//   };

//sweater.updateColor = changeColor;

//sweater.updateColor('red'); //Який this?? - перше правило, this зсилається на об'єкт
//{color: 'teal', updateColor: ƒ}

//return sweater.updateColor;
//};

//const swapColor = makeChangeColor();

//swapColor('blue'); //Який this?? правило номер два makeChangeColor() виклик без контексту
/*---------------------------------------------------------------*/

//Example 6
//Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю
//і розраховує та повертає загальну вартість каменів з таким ім'ям,
//ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find(stone => stoneName === stone.name);
//     //console.log(currentStone);

//     return currentStone.price * currentStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
/*---------------------------------------------------------------*/

//Example 7
//Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     //! this в середені методу add буде phonebook
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//       this.contacts.push(newContact);

//     return this.contacts;
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );
/*---------------------------------------------------------------*/

//Example 8
//* Створіть об'єкт calculator з трьома методами:

//? read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
//? add() - повертає суму збережених значень.
//? mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   a: 0,
//   b: 0,
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(5, 10);
// console.log(calculator);

// console.log(calculator.add()); //15
// console.log(calculator.mult()); //50
/*---------------------------------------------------------------*/

//Example 9
//Выполни рефакторинг методов объекта pizzaPalace,
//расставив отсутствующие this в местах обращения к свойствам и методам объекта.

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order('Smoked'));
// console.log(pizzaPalace.order('Four meats'));
// console.log(pizzaPalace.order('Big Mike'));
// console.log(pizzaPalace.order('Viennese'));
/*---------------------------------------------------------------*/

//Example 10
//Перед увольнением разработчик сломал исходный код управления аккаунтами
//пользователей нашего сервиса доставки еды.
//Выполни рефакторинг методов объекта customer, расставив отсутствующие this
//при обращении к свойствам объекта.

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
