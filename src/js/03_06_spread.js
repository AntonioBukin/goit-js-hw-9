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
