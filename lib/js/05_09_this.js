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
/*---------------------------------------------------------------*/

//Example 11
//Тестировщики нашли баги в коде сервиса хранения истории заказов еды.
//Тебе необходимо исправить их, правильно расставив this в методах объекта historyService,
//чтобы методы начали работать правильно.

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersByEmail('solomon@topmail.net')); //[{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// console.log(historyService.getOrdersByEmail('artemis@coldmail.net')); //[{ email: "artemis@coldmail.net", dish: "Pizza" }]
/*---------------------------------------------------------------*/

//Example 12
//Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.hasOwnProperty('surname')); //true;
// console.log(parent.hasOwnProperty('heritage')); //true;
// console.log(child.hasOwnProperty('name')); //true
// console.log(child.hasOwnProperty('age')); //true
// console.log(child.hasOwnProperty('heritage')); //false
// console.log(parent.isPrototypeOf(child)); //true
/*---------------------------------------------------------------*/

//Example 13
//Измени код, построив цепочку прототипов так,
// чтобы объект ancestor был прототипом для parent,
// а тот в свою очередь был прототипом для child.

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(ancestor.isPrototypeOf(parent)); //true
// console.log(parent.isPrototypeOf(child)); //true
// console.log(ancestor.hasOwnProperty('surname')); //true
// console.log(ancestor.surname); //"Dawson"
// console.log(parent.surname); //"Moore"
// console.log(parent.heritage); //"Irish"
// console.log(child.age); //"Irish"
// console.log(parent.hasOwnProperty('surname')); //true
// console.log(child.hasOwnProperty('surname')); //false
// console.log(ancestor.hasOwnProperty('heritage')); //true
// console.log(parent.hasOwnProperty('heritage')); //false
// console.log(child.hasOwnProperty('heritage')); //false
/*---------------------------------------------------------------*/

//Example 14
//Используя ключевое слово class объяви класс Car с пустым телом.
// Объявлен класс Car
// Результат вызова new Car() это пустой объект

// class Car {}

// const auto = new Car();
// console.log(auto);
/*---------------------------------------------------------------*/

//Example 15
//Добавь классу Car метод constructor который принимает три параметра:
// !brand - марка автомобиля.
// !model - модель автомобиля.
// !price - цена автомобиля.
// !Класс Car должен создавать объект с одноимёнными свойствами brand, model и price,
// значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const auto = new Car('brand', 'model', 'price');

// console.log(new Car('Audi', 'Q3', 36000)); //{ brand: "Audi", model: "Q3", price: 36000 }
// console.log(new Car('BMW', 'X5', 58900)); //{ brand: "BMW", model: "X5", price: 58900 }
// console.log(new Car('Nissan', 'Murano', 31700)); //{ brand: "Nissan", model: "Murano", price: 31700 }
/*---------------------------------------------------------------*/

//Example 16
//Выполни рефакторинг класса Car так, чтобы он принимал один параметр
//- объект со свойсвами brand, model и price.
//Деструктуризируй объект в сигнатуре(подписи) конструктора.

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// const auto = new Car({
//   brand: 'brand',
//   model: 'model',
//   price: 'price',
// });

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 })); //{ brand: "Audi", model: "Q3", price: 36000 }
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 })); //{ brand: "BMW", model: "X5", price: 58900 }
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })); //{ brand: "Nissan", model: "Murano", price: 31700 }

/*---------------------------------------------------------------*/

//Example 17
//Добавь классу Car два метода.
//getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
//changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

/*---------------------------------------------------------------*/

//Example 18
//Напиши класс Storage, который будет создавать объекты для управления складом товаров.
//Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.
//!Объяви следующие методы класса:
// !getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.

// !addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве
//items объекта который вызывает этот метод.

// !removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве
//items объекта который вызывает этот метод.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     return this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     const index = this.items.findIndex(item => item.itemToRemove === item);
//     this.items.splice(1, 1);
//   }
// }

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
/*---------------------------------------------------------------*/

//Example 19
//Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку,
//которая записывается на создаваемый объект в свойство value.

//Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.

// padEnd(str) - получает параметр str (строку) и добавляет её в конец значения свойства value
//объекта который вызывает этот метод.

// padStart(str) - получает параметр str (строку) и добавляет её в начало значения свойства value
//объекта который вызывает этот метод.

// padBoth(str) - получает параметр str (строку) и добавляет её в начало и в конец значения свойства value
//объекта который вызывает этот метод.

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="
/*---------------------------------------------------------------*/

//Example 20
//Выполни рефакторинг класса Car так, чтобы свойство brand было приватным
//!и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

// class Car {
//   #brand;
//   model;
//   price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 })); //{ model: "Q3", price: 36000 }
// console.log(new Car({ brand: 'bmw', model: 'X5', price: 58900 })); //{ model: "X5", price: 58900 }
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })); //{ model: "Murano", price: 31700 }

/*---------------------------------------------------------------*/

//Example 21
//Выполни рефакторинг класса Storage, сделав свойство items приватным.

// class Storage {
//   // Change code below this line
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
/*---------------------------------------------------------------*/

//Example 21
//Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.

// class StringBuilder {
//   #value;
//   // Change code below this line

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="
/*---------------------------------------------------------------*/

//Example 22
//Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand.
//Стандартизируй публичный интерфейс класса заменив уже объявленные методы
//на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }
/*---------------------------------------------------------------*/

//Example 23
//Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000
//- максимально допустимая цена автомобиля.

//Добавь сеттеру price проверку передаваемого значения параметра newPrice.
//Если оно больше чем MAX_PRICE, сеттер ничего не делает,
//а если меньше или равно, то перезаписывает цену автомобиля.

// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
/*---------------------------------------------------------------*/

//Example 24
//Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля.
//Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

//Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
//В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".

// class Car {
//   static #MAX_PRICE = 50000;
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Error! Price exceeds the maximum';
//     }
//     return 'Success! Price is within acceptable limits';
//   }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
/*---------------------------------------------------------------*/

//Example 25
//В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.
//Объяви класс Admin, который наследует от класса User
//Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа),
//значение которого это объект { BASIC: "basic", SUPERUSER: "superuser" }

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// console.log(Admin.AccessLevel.BASIC); //"basic"
// console.log(Admin.AccessLevel.SUPERUSER); //"superuser"
/*---------------------------------------------------------------*/

//Example 26
//Добавь классу Admin метод constructor, который принимает один параметр -
//объект настроек с двумя свойствами email и accessLevel.

//Добавь классу Admin публичное свойство accessLevel,
//значение которого будет передаваться при вызове конструктора.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
/*---------------------------------------------------------------*/

//Example 27
//Добавь классу Admin следующие свойства и методы.

//Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей.
//Значение по умолчанию это пустой массив.
//Публичный метод blacklist(email) для добавления почты в чёрный список.
//Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
//Публичный метод isBlacklisted(email) для проверки почты в чёрном списке.
//Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true