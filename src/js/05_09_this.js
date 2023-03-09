//!Функція це об'ект і вона передається по ссилке
//Ф-ція це важкий тип, коли ви ф-цію кудись хочете передати, ви передаєте не копію а ссилку.

// const fnA = function () {
//   console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA', fnB === fnA); //true
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
