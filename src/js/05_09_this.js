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
