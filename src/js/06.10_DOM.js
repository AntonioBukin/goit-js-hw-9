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

const technologies = ['HTML', 'CSS', 'JS', 'React', 'Node'];

const listRef = document.createElement('ul'); //створюємо вузел ul

for (const technology of technologies) {
  //console.log('technology:', technology);
  const liRef = document.createElement('li'); //створюємо li
  //Варіант 1
  //liRef.textContent = technology; // створили текстовый контент в середині элемента
  //Варіант 2
  const text = document.createTextNode(technology); //створюємо текстовий вузол
  liRef.appendChild(text); //Додаємо текстовий вузов в DOM

  listRef.appendChild(liRef); //створений текстовий контент додаємо до **listRef** (ul)
}

//тепер нам потрібно контейнер наш ul з li додати на сторінку
document.body.appendChild(listRef);

console.dir(listRef);
