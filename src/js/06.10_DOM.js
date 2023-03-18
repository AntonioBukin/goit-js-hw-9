//document.querySelector - для пошука єлементів

// const navOneEl = document.querySelector('.menu');
// console.log(navOneEl); //знайти один єлементи
//Якщо нічого незнайдено, поверне null

// const navEl = document.querySelectorAll('.menu-item');
// console.log(navEl); //знайти всі єлементи
//Якщо нічого незнайдено, поверне порожній массив
/*---------------------------------------------------------------*/
//Practice

//Example 1
//Створити картку продукта
//В класі продукта може бути product--on-sale i product--not-available

// const product = {
//   name: 'oranges',
//   description: 'Suppose I tell you I like apples better than oranges.',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// const productRef = document.createElement('article'); //зробили createElement через 'article'
// productRef.classList.add('product');

// const titleRef = document.createElement('h2');
// titleRef.textContent = product.name;
// titleRef.classList.add('product__name');

// const descryRef = document.createElement('p');
// descryRef.textContent = product.description;
// descryRef.classList.add('product__descry');

// const priceRef = document.createElement('p');
// priceRef.textContent = `Ціна: ${product.price} грн`;
// priceRef.classList.add('product__price');

// console.log(productRef);
// console.log(titleRef);
// console.log(descryRef);
// console.log(priceRef);

// productRef.append(titleRef, descryRef, priceRef); // все зібрали в одне ціле
// console.log(productRef);
/*---------------------------------------------------------------*/

//Example 2
//Пишемо ф-цію для картки продукта

//потрібно зробити за зразком такий шаблон
//<article class='product'
//<h2 class='product__name'>Назва</h2>
//<p class='product__descry'>Опис товару</p>
//<p product__price>Ціна: 2000 грн </p>
//</article>

// const products = [
//   {
//     name: 'Манго',
//     price: 83,
//     online: false,
//     description: 'Suppose I tell you I like apples.',
//   },
//   {
//     name: 'Полі',
//     price: 59,
//     online: true,
//     description: 'Suppose I tell you I like apples.',
//   },
//   {
//     name: 'Аякс',
//     price: 37,
//     online: false,
//     description: 'Suppose I tell you I like apples.',
//   },
//   {
//     name: 'Ківі',
//     price: 94,
//     online: true,
//     description: 'Suppose I tell you I like apples.',
//   },
// ];

//1) Зробили карточку товара

// const makeProductCard = ({ name, description, price }) => {
//   //деструктурізація
//   const productRef = document.createElement('article');
//   productRef.classList.add('product');

//   const titleRef = document.createElement('h2');
//   titleRef.textContent = name;
//   titleRef.classList.add('product__name');

//   const descryRef = document.createElement('p');
//   descryRef.textContent = description;
//   descryRef.classList.add('product__descry');

//   const priceRef = document.createElement('p');
//   priceRef.textContent = `Ціна: ${price} грн`;
//   priceRef.classList.add('product__price');

//   productRef.append(titleRef, descryRef, priceRef);

//   return productRef;
// };

// console.log(makeProductCard(products[0]));

//2) Зробити багато карток товарів

// const elements = products.map(makeProductCard);

// console.log(elements);

// const productsContainerEl = document.querySelector('.js-products');

// productsContainerEl.append(...elements);
/*---------------------------------------------------------------*/

//Example 3
//Стоворити список технологій що вивчаються на курсі Fullstack за допомогою js
//Зробити через метод **map** та **reduce**

//Шаблон як повинно виглядати
/*
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
  <li>React</li>
  <li>Node</li>
</ul>;
*/

//const technologies = ['HTML', 'CSS', 'JS', 'React', 'Node'];

// const listRef = document.createElement('ul'); //створюємо вузел ul

// for (const technology of technologies) {
//   //console.log('technology:', technology);
//   const liRef = document.createElement('li'); //створюємо li
//   //Варіант 1
//   //liRef.textContent = technology; // створили текстовый контент в середині элемента
//   //Варіант 2
//   const text = document.createTextNode(technology); //створюємо текстовий вузол
//   liRef.appendChild(text); //Додаємо текстовий вузов в DOM

//   listRef.appendChild(liRef); //створений текстовий контент додаємо до **listRef** (ul)
// }

// //тепер нам потрібно контейнер наш ul з li додати на сторінку
// document.body.appendChild(listRef);

// console.dir(listRef);
/*---------------------------------------------------------------*/

//Вирішення задачі методом ======map======//

// const markup = `<ul>${technologies
//   .map(technology => `<li>${technology}</li>`)
//   .join('')}</ul>`;

// document.body.insertAdjacentHTML('beforeend', markup);

// console.log(markup);
/*---------------------------------------------------------------*/

//Вирішення задачі методом ======reduce======//

// const markup = `<ul>${technologies.reduce(
//   (acc, technology) => acc + `<li>${technology}`
// )}</ul>`;

// console.log(markup);

// document.body.insertAdjacentHTML('beforeend', markup);
/*---------------------------------------------------------------*/

//Example 4
//Створити кілька кнопок на основі масива з об'єктами використовувача createElement

// const colors = [
//   {
//     label: 'red',
//     color: '#FF0000',
//   },
//   {
//     label: 'green',
//     color: '#00FF00',
//   },
//   {
//     label: 'blue',
//     color: '#0000FF',
//   },
//   {
//     label: 'yellow',
//     color: '#FFFF00',
//   },
// ];

//const fragment = document.createDocumentFragment(); //createDocumentFragment - це шматочок DOM, його ми використовуємо
// щоб постінно не звертатисть до дому. Наша завдання мінімізувати звертання до домую

// colors.forEach(({ label, color }) => {
//   const buttonRef = document.createElement('button');
//   buttonRef.textContent = label;
//   buttonRef.style.backgroundColor = color;
//   buttonRef.style.margin = '5px';
//   buttonRef.type = 'button';
//   buttonRef.className = 'button';

//   //console.dir(buttonRef);

//   fragment.appendChild(buttonRef);

//   document.body.appendChild(fragment);
// });
/*---------------------------------------------------------------*/

//Example 5
//Напиши скрипт который:
//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
//Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

//В результате, в консоли будут выведены такие сообщения.

//Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const liItem = document.querySelectorAll('.item');
// //console.log(liItem);
// liItem.forEach(el => {
//   //console.log(el); //отримали доступ до усіх наших елементів
//   console.log(el.firstElementChild.textContent); //отримали доступ до всіх h2 + вивели заголовки
//   console.log(el.lastElementChild.children.length); //вивели кількість категорій
// });
/*---------------------------------------------------------------*/

//Variant - 2
// const elItem = document.querySelectorAll('.item');
// console.log(`Number of categories: ${elItem.length}`);

// elItem.forEach(el => {
//   console.log(`Category: ${el.firstElementChild.textContent}`);
//   console.log(`Elements: ${el.lastElementChild.children.length}`);
// });
/*---------------------------------------------------------------*/

//Example 6
//В HTML есть пустой список ul#ingredients.
//<ul id="ingredients"></ul>
//В JavaScript есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const list = document.querySelector('#ingredients');
// //console.log('Це list', list);
// const newList = [];

// for (const ingredient of ingredients) {
//   //console.log('Це ingredient:', ingredient);

//   const firstItem = document.createElement('li');
//   firstItem.textContent = ingredient;
//   firstItem.classList.add('firstItem');
//   //console.log('firstItem', firstItem);

//   newList.push(firstItem);
//   //console.log(newList);
// }

// list.append(...newList);

// console.log(newList);

/*---------------------------------------------------------------*/
//Variant - 2

// const listItem = document.querySelector('#ingredients');
// //console.log(listItem); //отрмиали доступ до *ul*

// const ingredientsList = ingredients.map(ingredient => {
//   //console.log(ingredient); //перебрали весь масив

//   const itemEl = document.createElement('li');
//   //console.log(itemRef); //створили *li*

//   itemEl.classList.add('ingredient'); // додали клас ingredient до списку елементів *li*
//   itemEl.textContent = ingredient; // додали текст контент в середену ел.

//   return itemEl;
// });

// listItem.append(...ingredientsList);
/*---------------------------------------------------------------*/

//Example 7
//Напиши скрипт для создания галереи изображений по массиву данных.
//В HTML есть список ul.gallery.
//Используй массив объектов images для создания элементов <img>
//вложенных в < li >.
//Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
//Все элементы галереи должны добавляться в DOM за одну операцию вставки.

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl); //отримали доступ до *ul*

// const markup = images
//   .map(
//     image =>
//       `<li><img class = 'picture' src=${image.url} width = '300' alt = "${image.alt}"></img></li>`
//   )
//   .join('');

// galleryEl.insertAdjacentHTML('beforeend', markup);

// const pictureEl = document.querySelector('.picture');
// console.log(pictureEl);

// galleryEl.style.display = 'flex';
// galleryEl.style.gap = '10px';
// galleryEl.style.justifyContent = 'center';
// galleryEl.style.listStyle = 'none';
